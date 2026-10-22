#!/usr/bin/env python3
"""Record every line in audio/manifest.json with Google Cloud Text-to-Speech.

    node tools/voices.js > audio/manifest.json
    python3 tools/tts.py

Only files that do not exist yet are recorded, so re-running after adding
content records just the new lines. The key is read from GOOGLE_TTS_KEY or
source/google-text-to-speach-api-key.txt — never commit it; source/ is
gitignored. Voices are Chirp 3 HD, da-DK.
"""
import base64, json, os, pathlib, sys, time, urllib.error, urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = pathlib.Path(__file__).resolve().parent.parent
AUDIO = ROOT / "audio"
KEYFILE = ROOT / "source" / "google-text-to-speach-api-key.txt"
KEY = os.environ.get("GOOGLE_TTS_KEY") or (KEYFILE.read_text().strip() if KEYFILE.exists() else "")
URL = "https://texttospeech.googleapis.com/v1/text:synthesize?key="

def record(k, t, v):
    err = "no attempt made"
    body = {"input": {"text": t},
            "voice": {"languageCode": "da-DK", "name": "da-DK-Chirp3-HD-" + v},
            "audioConfig": {"audioEncoding": "MP3"}}
    for attempt in range(8):
        req = urllib.request.Request(URL + KEY, data=json.dumps(body).encode(),
                                     headers={"Content-Type": "application/json"})
        try:
            r = json.load(urllib.request.urlopen(req, timeout=60))
            (AUDIO / f"{k}.mp3").write_bytes(base64.b64decode(r["audioContent"]))
            return None
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 503):
                err = f"HTTP {e.code}"   # quota or a server blip: back off and retry
                time.sleep(2 ** attempt); continue
            return f"{k} {e.code} {e.read()[:200].decode(errors='replace')}"
        except Exception as e:  # network hiccup
            time.sleep(2 ** attempt); err = str(e)
    return f"{k} gave up: {err}"

def main():
    if not KEY: sys.exit("no key: set GOOGLE_TTS_KEY or create " + str(KEYFILE))
    m = json.loads((AUDIO / "manifest.json").read_text())
    todo = [(k, x["t"], x["v"]) for k, x in m.items() if not (AUDIO / f"{k}.mp3").exists()]
    print(f"{len(m)} lines, {len(todo)} to record", flush=True)
    done, errors = 0, []
    with ThreadPoolExecutor(8) as ex:
        for f in as_completed([ex.submit(record, *x) for x in todo]):
            done += 1
            if f.result(): errors.append(f.result())
            if done % 100 == 0 or done == len(todo):
                print(f"{done}/{len(todo)} recorded, {len(errors)} errors", flush=True)
    for e in errors: print("ERROR", e)
    stale = [p for p in AUDIO.glob("*.mp3") if p.stem not in m]
    if stale: print(f"{len(stale)} mp3 files no longer in the manifest (left in place): " + " ".join(p.name for p in stale[:10]))
    sys.exit(1 if errors else 0)

if __name__ == "__main__":
    main()
