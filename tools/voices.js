/* Lists every line the page can speak, and picks a voice for it.

     node tools/voices.js > audio/manifest.json

   The page speaks text in exactly these places, so this mirrors them: a text
   the page asks for that is not listed here falls back to the browser voice.
   Keys are fnv1a() of the normalised text — the page computes the same key to
   find the file, so the two must stay identical (see hub.html, SPEECH).

   Six Chirp 3 HD voices, chosen by context rather than at random:
   - the examiner (oral questions, picture intros) is one voice per topic,
     alternating man / woman, so a conversation sounds like one person;
   - a sentence that gives away the speaker — "min kone", "min mand" — gets a
     voice that fits it;
   - everything else is spread evenly over all six by the hash, so the same
     text always gets the same voice. */
const fs = require('fs'), path = require('path');
const SRC = path.join(__dirname, '..', 'src');
for (const f of ['words1','words2','words3','words4','words5','words6','rules','verbs','listen','practice','modultest'])
  eval(fs.readFileSync(path.join(SRC, f + '.js'), 'utf8').replace(/^const /gm, 'var '));

const FEMALE = ['Kore', 'Aoede', 'Leda'], MALE = ['Charon', 'Puck', 'Orus'];
const ALL = [...FEMALE, ...MALE];
const EXAMINERS = ['Charon', 'Kore', 'Puck', 'Aoede', 'Orus', 'Leda'];

const norm = t => String(t).replace(/\s+/g, ' ').trim();
function fnv1a(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36);
}
/* the same as sayText() in hub.html */
const sayText = t => String(t).replace(/<[^>]+>/g, '').split(' — ')[0]
  .replace(/___/g, ' … ').replace(/\s*[·→\/]\s*/g, ', ').replace(/[()]/g, '')
  .replace(/\s+/g, ' ').trim();

function byContent(t, pool) {
  if (/\bmin kone\b|\bmin svigerinde\b.*\bmin bror\b/i.test(t)) return MALE[parseInt(fnv1a(t), 36) % 3];
  if (/\bmin mand\b/i.test(t)) return FEMALE[parseInt(fnv1a(t), 36) % 3];
  return pool[parseInt(fnv1a(t), 36) % pool.length];
}

const out = {};
function add(text, voice) {
  const t = norm(text); if (!t) return;
  const k = fnv1a(t);
  if (!out[k]) out[k] = { t, v: voice || byContent(t, ALL) };
}

/* examiners first, so a question that also appears elsewhere keeps its examiner */
ORAL_T.topics.forEach((tp, i) => tp.follow.forEach(q => add(q, EXAMINERS[i % EXAMINERS.length])));
ORAL_T.pics.forEach((p, i) => { const v = EXAMINERS[(i + 3) % EXAMINERS.length]; add(p.intro, v); p.qs.forEach(q => add(q, v)); });
ORAL.forEach((o, i) => add(o.q, EXAMINERS[i % EXAMINERS.length]));

/* what the learner says */
ORAL.forEach(o => o.use.forEach(u => add(u)));
ORAL_T.topics.forEach(tp => tp.starters.forEach(s => add(s)));
Object.values(ORAL_T.kit.pref).flat().forEach(p => add(p));

/* the notebook */
[WORDS, WORDS_CH2, WORDS_CH3, WORDS_CH4, WORDS_CH5, WORDS_CH6].flat().forEach(w => add(w.da));
VERBS.forEach(v => { add(v.i); add(v.i + ', ' + v.n + ', ' + v.d + ', ' + v.f); });
RULES.forEach(r => (r.ex || []).forEach(e => add(sayText(e))));
SETS.forEach(s => s.items.forEach(it => add(sayText(it.a))));

/* the celebrations: Dagens ord done, a perfect round, a badge, a mock passed */
['Godt gået!', 'Flot!', 'Godkendt!'].forEach(t => add(t));

process.stdout.write(JSON.stringify(out, null, 0).replace(/\},"/g, '},\n"') + '\n');
