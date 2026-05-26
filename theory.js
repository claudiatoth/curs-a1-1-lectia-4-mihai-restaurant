// ============================================
// TEORIE - Lecția 4: Mihai hat ein Restaurant
// Claudia Toth · A1.1 — Annettes Deutschkurs · Lecția 4 din 10
// Sursă DF: fișele 33, 33-Z1, 33-Z2, 33-Z3, 33-Z4
// REGULĂ FERMĂ: tabele cu traducere RO la fiecare formă!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Astăzi: verbul haben și restaurantul lui Mihai</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>O zi în restaurantul lui Mihai</h4>
                <p>Mihai e rus, are 25 de ani și e <strong>bucătar</strong>. De 2 ani <strong>are propriul lui restaurant</strong> în Berlin — un loc mic, dar plin de viață. Bucătărie rusească autentică, prețuri prietenoase, clienți fideli.</p>
                <p>Astăzi povestim o zi normală în restaurantul lui Mihai. Și învățăm prin asta cel mai important verb din germană după <strong>sein</strong>: verbul <strong>haben</strong> (a avea).</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Mihai, du hast jetzt ein Restaurant, oder?
                            <span class="translation">Mihai, ai acum un restaurant, nu-i așa?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">Ja, ich habe ein Restaurant in Berlin. Aber heute habe ich Kopfschmerzen!
                            <span class="translation">Da, am un restaurant la Berlin. Dar azi am dureri de cap!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Du hast viel Stress. Hast du Zeit für eine Pause?
                            <span class="translation">Ai mult stres. Ai timp pentru o pauză?</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să conjugi verbul <strong>haben</strong> la toate cele <strong>3 persoane × 2 numere</strong> (= 6 forme)</li>
                    <li>Să recunoști <strong>cele 3 funcții</strong> ale lui haben (Besitz / Zugehörigkeit / + Nomen)</li>
                    <li>Să folosești expresii fixe: <em>Hunger / Durst / Lust auf / Schmerzen / Fieber</em></li>
                    <li>Să eviți capcana <strong>adjectiv vs. substantiv</strong> (hungrig sein ≠ Hunger haben)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Conjugarea haben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎯 2. Conjugarea verbului haben (a avea)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-conjugare-haben.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>De ce e haben atât de important?</h4>
                <p>Verbul <strong>haben</strong> (a avea) e, alături de <strong>sein</strong> (a fi), unul din cele <strong>2 verbe-cheie</strong> ale germanei. Le folosești în fiecare propoziție din zi.</p>
                <p>⚠️ Ca și <strong>sein</strong>, e un <strong>verb neregulat</strong>. Formele NU urmează regula obișnuită. Trebuie învățate pe dinafară.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📊 Conjugarea haben</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Formă</th><th>Traducere</th><th>Exemplu (DE + RO)</th></tr>
                    <tr><td><strong>ich</strong></td><td><strong>habe</strong></td><td>eu am</td><td>Ich <strong>habe</strong> ein Restaurant.<br><em style="color:#6b7280;">Eu am un restaurant.</em></td></tr>
                    <tr><td><strong>du</strong></td><td><strong>hast</strong></td><td>tu ai</td><td>Du <strong>hast</strong> Hunger.<br><em style="color:#6b7280;">Tu ești flămând (lit. ai foame).</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td><strong>hat</strong></td><td>el/ea are</td><td>Mihai <strong>hat</strong> Kopfschmerzen.<br><em style="color:#6b7280;">Mihai are dureri de cap.</em></td></tr>
                    <tr><td><strong>wir</strong></td><td><strong>haben</strong></td><td>noi avem</td><td>Wir <strong>haben</strong> ein Problem.<br><em style="color:#6b7280;">Noi avem o problemă.</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td><strong>habt</strong></td><td>voi aveți</td><td>Ihr <strong>habt</strong> keine Zeit.<br><em style="color:#6b7280;">Voi nu aveți timp.</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td><strong>haben</strong></td><td>ei au / dvs. aveți</td><td><strong>Haben</strong> Sie eine Idee?<br><em style="color:#6b7280;">Aveți (dvs.) o idee?</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-left: 4px solid #f59e0b;">
                <h4>⚠️ Capcanele lui haben</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>du hast</strong> — NU <s>du habst</s>! Se pierde <em>be</em> din radical.</li>
                    <li><strong>er/sie/es hat</strong> — NU <s>er habt</s>! Doar <em>hat</em> scurt.</li>
                    <li><strong>ihr habt</strong> — formă unică, doar la persoana a II-a pl.</li>
                    <li><strong>wir haben = sie/Sie haben</strong> — la fel ca infinitivul.</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Truc de memorat: <strong>du HAST, er HAT</strong> — fără <em>be</em>. <strong>Ihr HABT</strong> — cu <em>b</em> și <em>t</em>. Restul (ich, wir, sie/Sie) au <em>habe</em> sau <em>haben</em> — cu <em>b</em> intact. Eu am exersat asta cu un ritm: <em>habe-hast-hat-haben-habt-haben</em>. După 10 repetări, se lipește. 🎵"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Cele 3 funcții ale lui haben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📋 3. Cele 3 funcții ale lui haben</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-trei-functii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Haben are 3 funcții distincte</h4>
                <p>Înainte să folosești <strong>haben</strong>, gândește-te: <em>despre ce vorbesc?</em> Există 3 categorii:</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🏠 Funcția 1: Besitz (POSESIE) — ce DEȚII</h4>
                <p>Folosit pentru obiecte, locuri, animale, lucruri pe care le ai. <strong>Cu articol</strong> (ein/eine).</p>
                <table class="grammar-table">
                    <tr><th>Propoziție DE</th><th>Traducere RO</th><th>Substantiv Sg · Pl</th></tr>
                    <tr><td>Mihai <strong>hat ein Restaurant</strong>.</td><td><em style="color:#6b7280;">Mihai are un restaurant.</em></td><td><strong>das Restaurant · die Restaurants</strong><br><span class="ro-translation">restaurantul · restaurantele</span></td></tr>
                    <tr><td>Andreea <strong>hat ein Buch</strong>.</td><td><em style="color:#6b7280;">Andreea are o carte.</em></td><td><strong>das Buch · die Bücher</strong><br><span class="ro-translation">cartea · cărțile</span></td></tr>
                    <tr><td>Wir <strong>haben ein Auto</strong>.</td><td><em style="color:#6b7280;">Noi avem o mașină.</em></td><td><strong>das Auto · die Autos</strong><br><span class="ro-translation">mașina · mașinile</span></td></tr>
                    <tr><td>Carolina <strong>hat eine gute Kamera</strong>.</td><td><em style="color:#6b7280;">Carolina are o cameră bună.</em></td><td><strong>die Kamera · die Kameras</strong><br><span class="ro-translation">camera · camerele</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #e0f2fe;">
                <h4>👨‍👩‍👧 Funcția 2: Zugehörigkeit (APARTENENȚĂ) — relații</h4>
                <p>Folosit pentru familie, prieteni, colegi. <strong>Cu articol</strong> (eine/einen).</p>
                <table class="grammar-table">
                    <tr><th>Propoziție DE</th><th>Traducere RO</th><th>Substantiv Sg · Pl</th></tr>
                    <tr><td>Mihai <strong>hat eine Schwester</strong> in Russland.</td><td><em style="color:#6b7280;">Mihai are o soră în Rusia.</em></td><td><strong>die Schwester · die Schwestern</strong><br><span class="ro-translation">sora · surorile</span></td></tr>
                    <tr><td>Annette <strong>hat einen Freund</strong>.</td><td><em style="color:#6b7280;">Annette are un prieten.</em></td><td><strong>der Freund · die Freunde</strong><br><span class="ro-translation">prietenul · prietenii</span></td></tr>
                    <tr><td>Florian <strong>hat zwei Kinder</strong>.</td><td><em style="color:#6b7280;">Florian are doi copii.</em></td><td><strong>das Kind · die Kinder</strong><br><span class="ro-translation">copilul · copiii</span></td></tr>
                    <tr><td>Acar <strong>hat drei Brüder</strong>.</td><td><em style="color:#6b7280;">Acar are trei frați.</em></td><td><strong>der Bruder · die Brüder</strong><br><span class="ro-translation">fratele · frații</span></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fce7f3;">
                <h4>💭 Funcția 3: haben + Nomen FĂRĂ articol — stări, sentimente</h4>
                <p>Folosit pentru senzații fizice (foame, sete), sentimente (frică, plictiseală), stări (timp, chef). <strong>FĂRĂ articol</strong>!</p>
                <table class="grammar-table">
                    <tr><th>Propoziție DE</th><th>Traducere RO</th></tr>
                    <tr><td>Mihai <strong>hat Hunger</strong>.</td><td><em style="color:#6b7280;">Mihai e flămând. (lit. are foame)</em></td></tr>
                    <tr><td>Andreea <strong>hat Durst</strong>.</td><td><em style="color:#6b7280;">Andreea e însetată.</em></td></tr>
                    <tr><td>Wir <strong>haben keine Zeit</strong>.</td><td><em style="color:#6b7280;">Noi nu avem timp.</em></td></tr>
                    <tr><td>Sie <strong>hat Angst</strong>.</td><td><em style="color:#6b7280;">Ea are frică / Ei e frică.</em></td></tr>
                </table>
                <p style="margin-top: 8px; color: #6b7280;"><em>💡 Atenție: aici NU folosim <strong>ein/eine</strong>! Spunem <em>„Ich habe Hunger"</em>, NU <em>„Ich habe einen Hunger"</em>.</em></p>
            </div>
        </div>
    </div>

    <!-- 3: haben + Nomen (expresii fixe + Schmerzen + Krankheiten) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>💭 4. Expresii fixe cu haben (Hunger, Schmerzen, Krankheiten)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-expresii-fixe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🥗 1. Stări fizice & sentimente — vocabular esențial</h4>
                <table class="grammar-table">
                    <tr><th>Expresie DE</th><th>Traducere RO</th><th>Exemplu</th></tr>
                    <tr><td><strong>Hunger haben</strong></td><td>a-i fi foame</td><td><em style="color:#6b7280;">Mihai hat Hunger.</em></td></tr>
                    <tr><td><strong>Durst haben</strong></td><td>a-i fi sete</td><td><em style="color:#6b7280;">Andreea hat Durst.</em></td></tr>
                    <tr><td><strong>Lust auf + Nomen</strong></td><td>a avea chef de ceva</td><td><em style="color:#6b7280;">Ich habe Lust auf Pizza.</em></td></tr>
                    <tr><td><strong>Appetit auf + Nomen</strong></td><td>a avea poftă de ceva</td><td><em style="color:#6b7280;">Sie hat Appetit auf Schokolade.</em></td></tr>
                    <tr><td><strong>Zeit haben</strong></td><td>a avea timp</td><td><em style="color:#6b7280;">Hast du Zeit?</em></td></tr>
                    <tr><td><strong>Angst haben</strong></td><td>a-i fi frică</td><td><em style="color:#6b7280;">Das Kind hat Angst.</em></td></tr>
                    <tr><td><strong>Geduld haben</strong></td><td>a avea răbdare</td><td><em style="color:#6b7280;">Annette hat Geduld.</em></td></tr>
                    <tr><td><strong>recht haben</strong></td><td>a avea dreptate</td><td><em style="color:#6b7280;">Du hast recht!</em></td></tr>
                </table>
                <p style="margin-top: 10px; color: #6b7280;"><em>💡 La <strong>Lust / Appetit / Hunger / Durst</strong> + ceva → folosești prepoziția <strong>auf</strong>: „Ich habe Lust AUF Tennis."</em></p>
            </div>

            <div class="theory-box" style="background: #fee2e2;">
                <h4>🤕 2. Dureri (die Schmerzen) — la doctor</h4>
                <p>Cuvântul <strong>Schmerz</strong> (durere) se folosește mereu la <strong>plural</strong> cu părți ale corpului:</p>
                <table class="grammar-table">
                    <tr><th>Expresie DE</th><th>Traducere RO</th></tr>
                    <tr><td><strong>Kopfschmerzen haben</strong></td><td>a avea dureri de cap</td></tr>
                    <tr><td><strong>Bauchschmerzen haben</strong></td><td>a avea dureri de burtă</td></tr>
                    <tr><td><strong>Zahnschmerzen haben</strong></td><td>a avea dureri de dinți</td></tr>
                    <tr><td><strong>Halsschmerzen haben</strong></td><td>a avea dureri de gât</td></tr>
                    <tr><td><strong>Rückenschmerzen haben</strong></td><td>a avea dureri de spate</td></tr>
                </table>
                <p style="margin-top: 8px; color: #6b7280;"><em>💡 Construcție: <strong>parte a corpului</strong> + <strong>Schmerzen</strong> (lipit, un singur cuvânt).</em></p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🤒 3. Boli (die Krankheiten)</h4>
                <table class="grammar-table">
                    <tr><th>Boală DE</th><th>Traducere RO</th></tr>
                    <tr><td><strong>Fieber haben</strong></td><td>a avea febră</td></tr>
                    <tr><td><strong>Schnupfen haben</strong></td><td>a avea guturai</td></tr>
                    <tr><td><strong>Durchfall haben</strong></td><td>a avea diaree</td></tr>
                    <tr><td><strong>Migräne haben</strong></td><td>a avea migrenă</td></tr>
                    <tr><td><strong>Grippe haben</strong></td><td>a avea gripă</td></tr>
                </table>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">Florian, ich habe Kopfschmerzen und Fieber!
                            <span class="translation">Florian, am dureri de cap și febră!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Hast du auch Halsschmerzen?
                            <span class="translation">Ai și dureri de gât?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">Ja, und keine Lust auf Arbeit!
                            <span class="translation">Da, și niciun chef de muncă!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Du hast Grippe. Du brauchst Ruhe und Tee mit Honig.
                            <span class="translation">Ai gripă. Ai nevoie de odihnă și ceai cu miere.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: sein vs. haben — Capcana adjectiv vs. substantiv -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🚨 5. Capcana CRITICĂ: sein vs. haben (adjectiv vs. substantiv)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-sein-vs-haben.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🚨 REGULA DE AUR — Cum decid: sein sau haben?</h4>
                <p>Întreabă-te: <strong>cuvântul care urmează e ADJECTIV sau SUBSTANTIV?</strong></p>
                <ul style="margin-left: 18px; margin-top: 8px;">
                    <li><strong>Adjectiv</strong> (hungrig, müde, durstig, ängstlich) &nbsp;→&nbsp; folosești <strong>sein</strong> (a fi)</li>
                    <li><strong>Substantiv</strong> (Hunger, Müdigkeit, Durst, Angst) &nbsp;→&nbsp; folosești <strong>haben</strong> (a avea)</li>
                </ul>
                <p style="margin-top: 10px;">Cu alte cuvinte: în germană NU exprimi totul ca românește! <em>„Mi-e foame"</em> = <em>„Eu am foame"</em> (Hunger e <strong>substantiv</strong>) SAU <em>„Eu sunt flămând"</em> (hungrig e <strong>adjectiv</strong>).</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📊 Tabelul perechilor critice</h4>
                <table class="grammar-table">
                    <tr><th>Adjectiv + sein</th><th>Substantiv + haben</th><th>Traducere RO comună</th></tr>
                    <tr><td>Ich <strong>bin hungrig</strong>.</td><td>Ich <strong>habe Hunger</strong>.</td><td><em style="color:#6b7280;">Mi-e foame / Sunt flămând.</em></td></tr>
                    <tr><td>Du <strong>bist durstig</strong>.</td><td>Du <strong>hast Durst</strong>.</td><td><em style="color:#6b7280;">Ți-e sete.</em></td></tr>
                    <tr><td>Sie <strong>ist ängstlich</strong>.</td><td>Sie <strong>hat Angst</strong>.</td><td><em style="color:#6b7280;">Îi e frică.</em></td></tr>
                    <tr><td>Wir <strong>sind müde</strong>.</td><td>Wir <strong>haben keine Energie</strong>.</td><td><em style="color:#6b7280;">Suntem obosiți / nu avem energie.</em></td></tr>
                    <tr><td>Er <strong>ist krank</strong>.</td><td>Er <strong>hat Fieber</strong>.</td><td><em style="color:#6b7280;">El e bolnav / are febră.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>📋 Cele 4 funcții ale lui sein vs. cele 3 funcții ale lui haben</h4>
                <table class="grammar-table">
                    <tr><th>sein (a fi) — 4 funcții</th><th>haben (a avea) — 3 funcții</th></tr>
                    <tr><td><strong>1. Vorstellung</strong> (prezentare)<br><em>Ich bin Andreea.</em><br><em style="color:#6b7280;">Eu sunt Andreea.</em></td><td><strong>1. Besitz</strong> (posesie)<br><em>Ich habe ein Haus.</em><br><em style="color:#6b7280;">Eu am o casă.</em></td></tr>
                    <tr><td><strong>2. Alter/Beruf</strong> (vârstă/profesie)<br><em>Sie ist Lehrerin.</em><br><em style="color:#6b7280;">Ea este profesoară.</em></td><td><strong>2. Zugehörigkeit</strong> (apartenență)<br><em>Ich habe eine Schwester.</em><br><em style="color:#6b7280;">Eu am o soră.</em></td></tr>
                    <tr><td><strong>3. + Adjektiv</strong><br><em>Ich bin hungrig.</em><br><em style="color:#6b7280;">Sunt flămând.</em></td><td><strong>3. + Nomen FĂRĂ articol</strong><br><em>Ich habe Hunger.</em><br><em style="color:#6b7280;">Mi-e foame.</em></td></tr>
                    <tr><td><strong>4. + Nomen CU articol</strong><br><em>Sie ist meine Freundin.</em><br><em style="color:#6b7280;">Ea este prietena mea.</em></td><td>&nbsp;</td></tr>
                </table>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (din experiență):</div>
                    <div class="text">„Am greșit asta luni de zile. <strong>NU se spune <em>„Ich bin Hunger"</em></strong> (s-ar traduce „Eu sunt foame" 😅). Și nici <em>„Ich habe hungrig"</em> nu există. Trucul meu: dacă pot să zic <em>„foame, sete, frică, gripă"</em> ca SUBSTANTIVE, atunci e <strong>haben</strong>. Dacă pot să zic <em>„flămând, însetat, speriat, bolnav"</em> ca ADJECTIVE, atunci e <strong>sein</strong>. 🎯"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 5: Sumar -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🎯 6. Sumar: cele 5 reguli de aur</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-sumar.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Cele 5 reguli de aur</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>haben e neregulat</strong>: ich habe, du hast, er hat, wir haben, ihr habt, sie/Sie haben.</li>
                    <li><strong>haben are 3 funcții</strong>: Besitz (un Restaurant), Zugehörigkeit (eine Schwester), + Nomen fără articol (Hunger).</li>
                    <li><strong>haben + Nomen FĂRĂ articol</strong> pentru stări/sentimente: Hunger, Durst, Lust, Zeit, Angst, Schmerzen.</li>
                    <li><strong>Lust / Appetit / Hunger / Durst</strong> + ceva → folosești prepoziția <strong>auf</strong>: „Lust auf Pizza".</li>
                    <li><strong>sein vs. haben</strong>: adjectiv (hungrig) → sein · substantiv (Hunger) → haben. NICIODATĂ invers!</li>
                </ol>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💬 Ce poți spune acum despre tine</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>Ich habe ein Auto / ein Haus / einen Hund.</strong> <em style="color:#6b7280;">Am o mașină / o casă / un câine.</em></li>
                    <li><strong>Ich habe eine Schwester / einen Bruder / zwei Kinder.</strong> <em style="color:#6b7280;">Am o soră / un frate / doi copii.</em></li>
                    <li><strong>Ich habe Hunger / Durst / Zeit / keine Zeit.</strong> <em style="color:#6b7280;">Mi-e foame / sete / am timp / nu am timp.</em></li>
                    <li><strong>Ich habe Lust auf Kaffee / Tennis / einen Spaziergang.</strong> <em style="color:#6b7280;">Am chef de cafea / tenis / o plimbare.</em></li>
                    <li><strong>Ich habe Kopfschmerzen / Fieber / Grippe.</strong> <em style="color:#6b7280;">Am dureri de cap / febră / gripă.</em></li>
                </ul>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Cu sein (Lecția 2) + haben (acum), ai bazele oricărei conversații în germană. 🎉</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
