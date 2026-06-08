// ============================================
// EXERCIȚII - Lecția 4: Mihai hat ein Restaurant
// Claudia Toth · A1.1 · 5 exerciții (toate text inputs)
// Sursă DF: fișele 33-Z1, 33-Z2, 33-Z3, 33-Z4
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EXERCIȚIUL 1: Conjugare haben
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Mihai ____ ein Restaurant in Berlin.', translation: 'Mihai are un restaurant la Berlin.', correct: 'hat', accept: ['hat'] },
    { id: 'b', sentence: 'Ich ____ keine Zeit heute.', translation: 'Nu am timp astăzi.', correct: 'habe', accept: ['habe'] },
    { id: 'c', sentence: '____ du Hunger?', translation: 'Ți-e foame?', correct: 'Hast', accept: ['hast'] },
    { id: 'd', sentence: 'Wir ____ ein Problem.', translation: 'Noi avem o problemă.', correct: 'haben', accept: ['haben'] },
    { id: 'e', sentence: '____ ihr Lust auf Pizza?', translation: 'Aveți chef de pizza?', correct: 'Habt', accept: ['habt'] },
    { id: 'f', sentence: 'Florian und Carolina ____ zwei Kinder.', translation: 'Florian și Carolina au doi copii.', correct: 'haben', accept: ['haben'] },
    { id: 'g', sentence: 'Andreea ____ eine Schwester in Rumänien.', translation: 'Andreea are o soră în România.', correct: 'hat', accept: ['hat'] },
    { id: 'h', sentence: '____ Sie eine Idee, Frau Hullmann?', translation: 'Aveți o idee, doamnă Hullmann?', correct: 'Haben', accept: ['haben'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎯 Completează cu forma corectă a verbului „haben".</strong><br>
            Formele neregulate: ich habe · du hast · er/sie/es hat · wir haben · ihr habt · sie/Sie haben.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex1-${item.id}" placeholder="forma haben...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Identifică funcția lui haben
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Mihai hat ein Restaurant.', translation: 'Mihai are un restaurant.', correct: 'Besitz', accept: ['besitz', 'posesie'] },
    { id: 'b', sentence: 'Andreea hat eine Schwester.', translation: 'Andreea are o soră.', correct: 'Zugehörigkeit', accept: ['zugehörigkeit', 'zugehoerigkeit', 'apartenenta'] },
    { id: 'c', sentence: 'Ich habe Hunger.', translation: 'Mi-e foame.', correct: '+ Nomen', accept: ['+ nomen', 'nomen', 'stare', 'sentiment'] },
    { id: 'd', sentence: 'Florian hat zwei Kinder.', translation: 'Florian are doi copii.', correct: 'Zugehörigkeit', accept: ['zugehörigkeit', 'zugehoerigkeit', 'apartenenta'] },
    { id: 'e', sentence: 'Wir haben ein Auto.', translation: 'Noi avem o mașină.', correct: 'Besitz', accept: ['besitz', 'posesie'] },
    { id: 'f', sentence: 'Habt ihr Durst?', translation: 'Aveți sete?', correct: '+ Nomen', accept: ['+ nomen', 'nomen', 'stare', 'sentiment'] },
    { id: 'g', sentence: 'Carolina hat eine gute Kamera.', translation: 'Carolina are o cameră bună.', correct: 'Besitz', accept: ['besitz', 'posesie'] },
    { id: 'h', sentence: 'Mihai hat Kopfschmerzen.', translation: 'Mihai are dureri de cap.', correct: '+ Nomen', accept: ['+ nomen', 'nomen', 'stare', 'sentiment'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📋 Identifică funcția lui „haben" în fiecare propoziție.</strong><br>
            Scrie una din: <strong>Besitz</strong> (posesie cu articol) · <strong>Zugehörigkeit</strong> (apartenență / familie) · <strong>+ Nomen</strong> (stare / sentiment, fără articol).<br>
            <em>💡 Tip:</em> dacă apare „ein/eine" → Besitz sau Zugehörigkeit · dacă NU apare articol → + Nomen.
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex2-${item.id}" placeholder="Besitz / Zugehörigkeit / + Nomen">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Mihais Restaurant — Lückentext
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Mihai ____ 25 Jahre alt. (sein!)', translation: 'Mihai are 25 de ani. (Atenție: în germană vârsta cere SEIN!)', correct: 'ist', accept: ['ist'] },
    { id: 'b', sentence: 'Er ____ ein kleines Restaurant in Berlin. (haben)', translation: 'El are un restaurant mic la Berlin.', correct: 'hat', accept: ['hat'] },
    { id: 'c', sentence: 'Das Restaurant ____ russisch. (sein)', translation: 'Restaurantul este rusesc.', correct: 'ist', accept: ['ist'] },
    { id: 'd', sentence: 'Mihai ____ viele Stammkunden. (haben — Stammkunden = clienți fideli)', translation: 'Mihai are mulți clienți fideli.', correct: 'hat', accept: ['hat'] },
    { id: 'e', sentence: 'Heute ____ er Kopfschmerzen. (haben)', translation: 'Astăzi are dureri de cap.', correct: 'hat', accept: ['hat'] },
    { id: 'f', sentence: 'Er ____ auch keine Lust auf Arbeit. (haben)', translation: 'Nu are nici chef de muncă.', correct: 'hat', accept: ['hat'] },
    { id: 'g', sentence: 'Mihai ruft Florian an: „____ du Zeit?" (haben — du-form)', translation: 'Mihai îl sună pe Florian: „Ai timp?"', correct: 'Hast', accept: ['hast'] },
    { id: 'h', sentence: 'Florian sagt: „Du ____ vielleicht Grippe!" (haben — du-form)', translation: 'Florian zice: „Poate ai gripă!"', correct: 'hast', accept: ['hast'] },
    { id: 'i', sentence: 'Am Abend ____ Mihai immer Hunger. (haben)', translation: 'Seara, Mihai mereu e flămând.', correct: 'hat', accept: ['hat'] },
    { id: 'j', sentence: 'Aber heute ____ er nur Lust auf Tee mit Honig. (haben)', translation: 'Dar astăzi are chef doar de ceai cu miere.', correct: 'hat', accept: ['hat'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📖 Povestea unei zile dificile pentru Mihai — completează verbele.</strong><br>
            Atenție: în germană <strong>vârsta</strong> cere <em>sein</em> (Mihai <strong>ist</strong> 25), nu <em>haben</em>! Restul propozițiilor folosesc <em>haben</em>.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="forma verbului...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: sein oder haben?
// (din fișele 33-Z3 + 33-Z4 — adaptate cu personajele noastre)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Annette ____ Lehrerin. (profesie)', translation: 'Annette e profesoară.', correct: 'ist', accept: ['ist'] },
    { id: 'b', sentence: 'Wir ____ ein neues Auto. (posesie)', translation: 'Avem o mașină nouă.', correct: 'haben', accept: ['haben'] },
    { id: 'c', sentence: '____ du Geschwister? (frați/surori)', translation: 'Ai frați și surori?', correct: 'Hast', accept: ['hast'] },
    { id: 'd', sentence: 'Andreea ____ heute müde. (adjectiv)', translation: 'Andreea e obosită astăzi.', correct: 'ist', accept: ['ist'] },
    { id: 'e', sentence: 'Mihai ____ Hunger. (substantiv)', translation: 'Mihai e flămând.', correct: 'hat', accept: ['hat'] },
    { id: 'f', sentence: 'Die Kinder ____ ängstlich. (adjectiv)', translation: 'Copiii sunt speriați.', correct: 'sind', accept: ['sind'] },
    { id: 'g', sentence: 'Acar ____ aus Marokko. (origine)', translation: 'Acar e din Maroc.', correct: 'ist', accept: ['ist'] },
    { id: 'h', sentence: 'Carolina ____ eine gute Kamera. (posesie)', translation: 'Carolina are o cameră bună.', correct: 'hat', accept: ['hat'] },
    { id: 'i', sentence: 'Wer ____ eine Idee? (substantiv abstract)', translation: 'Cine are o idee?', correct: 'hat', accept: ['hat'] },
    { id: 'j', sentence: 'Florian ____ Arzt von Beruf. (profesie)', translation: 'Florian e doctor de profesie.', correct: 'ist', accept: ['ist'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎯 sein sau haben?</strong> Alege verbul potrivit + conjugă-l la persoana corectă.<br>
            <em>Tip:</em> sein = identitate, vârstă, profesie, + adjectiv · haben = posesie, apartenență, + substantiv (Hunger, Zeit).
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="forma sein sau haben...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Capcana adjectiv vs. substantiv
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Andreea ____ hungrig. (adjectiv → sein)', translation: 'Andreea e flămândă.', correct: 'ist', accept: ['ist'] },
    { id: 'b', sentence: 'Andreea ____ Hunger. (substantiv → haben)', translation: 'Andreei i-e foame.', correct: 'hat', accept: ['hat'] },
    { id: 'c', sentence: 'Mihai ____ durstig. (adjectiv)', translation: 'Mihai e însetat.', correct: 'ist', accept: ['ist'] },
    { id: 'd', sentence: 'Mihai ____ Durst. (substantiv)', translation: 'Mihai are sete.', correct: 'hat', accept: ['hat'] },
    { id: 'e', sentence: 'Das Kind ____ ängstlich. (adjectiv)', translation: 'Copilul e speriat.', correct: 'ist', accept: ['ist'] },
    { id: 'f', sentence: 'Das Kind ____ Angst. (substantiv)', translation: 'Copilul are frică.', correct: 'hat', accept: ['hat'] },
    { id: 'g', sentence: 'Wir ____ müde. (adjectiv)', translation: 'Noi suntem obosiți.', correct: 'sind', accept: ['sind'] },
    { id: 'h', sentence: 'Wir ____ keine Energie. (substantiv)', translation: 'Nu avem energie.', correct: 'haben', accept: ['haben'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🚨 Capcana adjectiv vs. substantiv — alege sein sau haben!</strong><br>
            Aceleași sensuri, dar forme diferite. <strong>Regulă fermă:</strong> adjectiv (hungrig, müde, ängstlich) → sein · substantiv (Hunger, Müdigkeit, Angst) → haben.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="forma sein sau haben...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
