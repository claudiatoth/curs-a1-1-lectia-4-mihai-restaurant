// ============================================
// VERB-KONJUGATION - Lecția 4 A1.1: Mihai hat ein Restaurant
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// haben + sein (tema L4: haben + sein vs haben) + kochen/kaufen (regulate din L3,
// neconjugate acolo — tipar model). Präteritum → RO imperfect.
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'haben', ro: 'a avea', typ: 'auxiliar / neregulat', aux: 'haben', part: 'gehabt',
        praes: [['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au']],
        praet: [['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],['wir','hatten','aveam'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']],
        perf: [['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']],
        note: 'Tema L4. E și verb propriu („a avea ceva": Mihai hat ein Restaurant), și auxiliarul cel mai folosit la Perfekt.'
    },
    {
        inf: 'sein', ro: 'a fi', typ: 'auxiliar / neregulat', aux: 'sein', part: 'gewesen',
        praes: [['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt']],
        praet: [['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],['wir','waren','eram'],['ihr','wart','erați'],['sie/Sie','waren','erau']],
        perf: [['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']],
        note: 'ATENȚIE: Perfekt cu SEIN (er ist gewesen, NU „hat gewesen")! Capcană clasică pentru români. L4 compară sein vs. haben.'
    },
    {
        inf: 'kochen', ro: 'a găti', typ: 'slab / regulat', aux: 'haben', part: 'gekocht',
        praes: [['ich','koche','gătesc'],['du','kochst','gătești'],['er/sie/es','kocht','gătește'],['wir','kochen','gătim'],['ihr','kocht','gătiți'],['sie/Sie','kochen','gătesc']],
        praet: [['ich','kochte','găteam'],['du','kochtest','găteai'],['er/sie/es','kochte','gătea'],['wir','kochten','găteam'],['ihr','kochtet','găteați'],['sie/Sie','kochten','găteau']],
        perf: [['ich','habe gekocht','am gătit'],['du','hast gekocht','ai gătit'],['er/sie/es','hat gekocht','a gătit'],['wir','haben gekocht','am gătit'],['ihr','habt gekocht','ați gătit'],['sie/Sie','haben gekocht','au gătit']],
        note: 'Verb-model slab/regulat (tiparul standard — ca spielen, lernen, machen din L3). Mihai e Koch: er kocht im Restaurant.'
    },
    {
        inf: 'kaufen', ro: 'a cumpăra', typ: 'slab / regulat', aux: 'haben', part: 'gekauft',
        praes: [['ich','kaufe','cumpăr'],['du','kaufst','cumperi'],['er/sie/es','kauft','cumpără'],['wir','kaufen','cumpărăm'],['ihr','kauft','cumpărați'],['sie/Sie','kaufen','cumpără']],
        praet: [['ich','kaufte','cumpăram'],['du','kauftest','cumpărai'],['er/sie/es','kaufte','cumpăra'],['wir','kauften','cumpăram'],['ihr','kauftet','cumpărați'],['sie/Sie','kauften','cumpărau']],
        perf: [['ich','habe gekauft','am cumpărat'],['du','hast gekauft','ai cumpărat'],['er/sie/es','hat gekauft','a cumpărat'],['wir','haben gekauft','am cumpărat'],['ihr','habt gekauft','ați cumpărat'],['sie/Sie','haben gekauft','au cumpărat']],
        note: 'Verb-model slab/regulat. Mihai kauft Gemüse für das Restaurant.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = v.impersonal
        ? '<small style="color:#5A5147;">Verb IMPERSONAL — doar forma „es": <strong>es ' + v.perf[0][1] + '</strong>. NU se conjugă cu ich/du/wir...</small>'
        : '<small style="color:#5A5147;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#5A5147;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt: auxiliar + participiu).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong> (caută orice formă).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Acesta e un INSTRUMENT DE CĂUTARE. La A1 înveți complet doar Präsens — Präteritum și Perfekt vin mai târziu (Lecțiile 11+ / 17). Tema L4 e haben + comparația sein vs. haben. Am adăugat și kochen/kaufen — verbe regulate model (din L3), ca să vezi tiparul standard conjugat complet. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
