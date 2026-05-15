// ============================================
// FLASHCARDS - Lecția 4: Mihai hat ein Restaurant
// Claudia Toth · A1.1 · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 6 forme haben conjugate (6) ===
    { de: "ich habe", ro: "eu am · Ich habe ein Restaurant · Ich habe Hunger", audio: "audio/letters/ich-habe.wav" },
    { de: "du hast", ro: "tu ai · Du hast Zeit · Hast du Hunger? · ⚠️ NU du habst!", audio: "audio/letters/du-hast.wav" },
    { de: "er/sie/es hat", ro: "el/ea are · Mihai hat ein Restaurant · ⚠️ doar HAT, fără terminație -t suplimentară", audio: "audio/letters/er-hat.wav" },
    { de: "wir haben", ro: "noi avem · Wir haben ein Problem · = forma infinitivului", audio: "audio/letters/wir-haben.wav" },
    { de: "ihr habt", ro: "voi aveți · Ihr habt keine Zeit · formă unică pentru ihr", audio: "audio/letters/ihr-habt.wav" },
    { de: "sie/Sie haben", ro: "ei au / dvs. aveți · Haben Sie eine Idee?", audio: "audio/letters/sie-haben.wav" },

    // === 3 funcții haben (3) ===
    { de: "Besitz (posesie)", ro: "FUNCȚIA 1 · ce DEȚII · cu articol · Mihai hat EIN Restaurant", audio: "audio/letters/besitz.wav" },
    { de: "Zugehörigkeit (apartenență)", ro: "FUNCȚIA 2 · familie, relații · cu articol · Mihai hat EINE Schwester", audio: "audio/letters/zugehoerigkeit.wav" },
    { de: "haben + Nomen", ro: "FUNCȚIA 3 · stări/sentimente · FĂRĂ articol · Mihai hat Hunger (NU einen Hunger)", audio: "audio/letters/haben-nomen.wav" },

    // === 7 expresii fixe (7) ===
    { de: "Hunger haben", ro: "a-i fi foame · Mihai hat Hunger · Hast du Hunger?", audio: "audio/letters/hunger.wav" },
    { de: "Durst haben", ro: "a-i fi sete · Wir haben Durst · Habt ihr Durst?", audio: "audio/letters/durst.wav" },
    { de: "Lust auf + Nomen", ro: "a avea chef de ceva · prepoziția AUF · Ich habe Lust AUF Pizza", audio: "audio/letters/lust-auf.wav" },
    { de: "Appetit auf + Nomen", ro: "a avea poftă de ceva · Sie hat Appetit AUF Schokolade", audio: "audio/letters/appetit-auf.wav" },
    { de: "Zeit haben", ro: "a avea timp · Hast du Zeit? · Ich habe keine Zeit (negație)", audio: "audio/letters/zeit.wav" },
    { de: "Angst haben", ro: "a-i fi frică · Das Kind hat Angst · vor + cineva (prepoziție diferită!)", audio: "audio/letters/angst.wav" },
    { de: "Geduld / recht haben", ro: "a avea răbdare / a avea dreptate · Annette hat Geduld · Du hast recht!", audio: "audio/letters/geduld-recht.wav" },

    // === 5 Schmerzen (5) ===
    { de: "Kopfschmerzen", ro: "dureri de cap · Kopf (cap) + Schmerzen (dureri) · Mihai hat Kopfschmerzen", audio: "audio/letters/kopfschmerzen.wav" },
    { de: "Bauchschmerzen", ro: "dureri de burtă · Bauch (burtă) + Schmerzen", audio: "audio/letters/bauchschmerzen.wav" },
    { de: "Zahnschmerzen", ro: "dureri de dinți · Zahn (dinte) + Schmerzen · La dentist!", audio: "audio/letters/zahnschmerzen.wav" },
    { de: "Halsschmerzen", ro: "dureri de gât · Hals (gât) + Schmerzen", audio: "audio/letters/halsschmerzen.wav" },
    { de: "Rückenschmerzen", ro: "dureri de spate · Rücken (spate) + Schmerzen · Acar hat oft Rückenschmerzen von der Baustelle", audio: "audio/letters/rueckenschmerzen.wav" },

    // === 4 Krankheiten (4) ===
    { de: "Fieber haben", ro: "a avea febră · cea mai frecventă boală minoră", audio: "audio/letters/fieber.wav" },
    { de: "Schnupfen haben", ro: "a avea guturai / nas înfundat · iarna clasică", audio: "audio/letters/schnupfen.wav" },
    { de: "Grippe haben", ro: "a avea gripă · Du hast Grippe! Tee mit Honig!", audio: "audio/letters/grippe.wav" },
    { de: "Migräne / Durchfall", ro: "migrenă / diaree · 2 boli des întâlnite", audio: "audio/letters/migraene-durchfall.wav" },

    // === 4 perechi adj vs subst (4) ===
    { de: "hungrig sein ↔ Hunger haben", ro: "ADJECTIV → sein · SUBSTANTIV → haben · Ich bin hungrig = Ich habe Hunger", audio: "audio/letters/hungrig-hunger.wav" },
    { de: "durstig sein ↔ Durst haben", ro: "Du bist durstig = Du hast Durst · Aceeași idee, forme diferite!", audio: "audio/letters/durstig-durst.wav" },
    { de: "ängstlich sein ↔ Angst haben", ro: "Sie ist ängstlich = Sie hat Angst · NICIODATĂ MIX: Ich BIN Hunger e GREȘIT!", audio: "audio/letters/aengstlich-angst.wav" },
    { de: "müde sein ↔ keine Energie haben", ro: "Wir sind müde = Wir haben keine Energie · adjectivul are sens cu sein", audio: "audio/letters/muede.wav" },

    // === 3 propoziții personaje (3) — total 32 ===
    { de: "Mihai hat ein Restaurant.", ro: "Funcția BESITZ · cu articol ein · Mihai e bucătar și are propriul lui restaurant", audio: "audio/letters/mihai-restaurant.wav" },
    { de: "Florian hat zwei Kinder.", ro: "Funcția ZUGEHÖRIGKEIT · cu articol zwei (numeral) · familie", audio: "audio/letters/florian-kinder.wav" },
    { de: "Annette hat Geduld mit den Schülern.", ro: "Funcția HABEN + NOMEN · fără articol la Geduld · profesoara bună are răbdare", audio: "audio/letters/annette-geduld.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (6 forme haben · 3 funcții · 7 expresii fixe · 5 dureri · 4 boli · 4 capcane adj/subst · 3 propoziții).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
