    /* ============================================================
       5. CONTROLLER STATE & SPEECH SYNTHESIS & THEME TOGGLE
       ============================================================ */
    const appState = {
      currentTab: 'verbs',
      currentCardIndex: 0,
      cardDeckType: 'verbs',
      currentDeck: [],
      masteredCount: 0,
      quizAnswers: {}
    };

    function initTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
      } else if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
        }
      }
    }

    function toggleTheme() {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        showToast("Switched to Light theme");
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        showToast("Switched to Dark theme");
      }
    }

    function speakText(text) {
      if (!('speechSynthesis' in window)) {
        showToast("Speech synthesis is not supported on this browser.");
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
      showToast(`Speaking: "${text.slice(0, 32)}..."`);
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      const text = document.getElementById('toast-message');
      if (!toast || !text) return;
      text.textContent = msg;
      toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      }, 2400);
    }

    function switchNavTab(tabId) {
      appState.currentTab = tabId;
      document.querySelectorAll('.tab-section').forEach(el => el.classList.add('hidden'));
      const active = document.getElementById(`tab-${tabId}`);
      if (active) active.classList.remove('hidden');

      // Update Desktop Nav styles
      document.querySelectorAll('#desktop-nav .tab-btn').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
          btn.className = "tab-btn px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-200 text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 shadow-sm";
        } else {
          btn.className = "tab-btn px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
        }
      });

      // Update Mobile Nav styles
      document.querySelectorAll('.tab-btn-m').forEach(btn => {
        if (btn.getAttribute('data-tab-m') === tabId) {
          btn.className = "tab-btn-m px-3 py-1.5 rounded-lg whitespace-nowrap bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold";
        } else {
          btn.className = "tab-btn-m px-3 py-1.5 rounded-lg whitespace-nowrap bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400";
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ============================================================
       6. RENDERERS: 124 VERBS (WITH UNIFORM MONOCHROME BADGES)
       ============================================================ */
    function renderVerbs(verbs) {
      const container = document.getElementById('verbs-container');
      if (!container) return;
      container.innerHTML = '';

      if (verbs.length === 0) {
        container.innerHTML = `
          <div class="col-span-full text-center py-16 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p class="text-slate-500 dark:text-slate-400">No irregular verbs found matching your search query.</p>
          </div>
        `;
        document.getElementById('verbs-count-status').textContent = 'Showing 0 verbs';
        return;
      }

      verbs.forEach(v => {
        const groupBadge = `<span class="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-950 border border-slate-700 dark:border-slate-200">${v.pattern}</span>`;

        const card = document.createElement('div');
        card.className = "p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition duration-200 flex flex-col justify-between space-y-4 shadow-sm";

        card.innerHTML = `
          <div class="space-y-4">
            <div class="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="text-3xl">${v.icon}</span>
                <div>
                  <h3 class="font-heading text-2xl font-bold text-slate-900 dark:text-white capitalize">${v.inf}</h3>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">${v.pronInf}</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                ${groupBadge}
                <button onclick="speakText('${v.inf}, past: ${v.past}, past participle: ${v.pp}')" class="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition" title="Listen to all 3 forms">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M12 6v12l-4-4H4V10h4l4-4z"/></svg>
                </button>
              </div>
            </div>

            <!-- The 3 Forms Grid -->
            <div class="grid grid-cols-3 gap-2 text-center">
              <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 transition" onclick="speakText('${v.inf}')">
                <span class="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Infinitive</span>
                <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">${v.inf}</span>
                <span class="text-[10px] font-mono text-slate-400 block">${v.pronInf}</span>
              </div>
              <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 transition" onclick="speakText('${v.past}')">
                <span class="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Past Simple</span>
                <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">${v.past}</span>
                <span class="text-[10px] font-mono text-slate-400 block">${v.pronPast}</span>
              </div>
              <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 transition" onclick="speakText('${v.pp}')">
                <span class="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Participle</span>
                <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">${v.pp}</span>
                <span class="text-[10px] font-mono text-slate-400 block">${v.pronPP}</span>
              </div>
            </div>

            <!-- Meaning & Collocations -->
            <div class="space-y-1.5 text-xs">
              <div class="text-slate-700 dark:text-slate-300 leading-relaxed"><strong class="text-slate-900 dark:text-slate-100">Meaning:</strong> ${v.meaning}</div>
              <div class="text-slate-600 dark:text-slate-400"><strong class="text-slate-900 dark:text-slate-200">Collocations:</strong> ${v.collocations}</div>
            </div>

            <!-- Multi-Tense Context Sentences -->
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1 text-xs">
              <div class="flex items-start gap-1.5"><span class="font-mono text-slate-400 text-[10px] w-6 shrink-0">BASE:</span> <span class="text-slate-700 dark:text-slate-300">"${v.exBase}"</span></div>
              <div class="flex items-start gap-1.5"><span class="font-mono text-slate-400 text-[10px] w-6 shrink-0">PAST:</span> <span class="text-slate-900 dark:text-slate-200">"${v.exPast}"</span></div>
              <div class="flex items-start gap-1.5"><span class="font-mono text-slate-400 text-[10px] w-6 shrink-0">PP:</span> <span class="text-slate-700 dark:text-slate-300">"${v.exPP}"</span></div>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
            <span class="font-mono">Verb Collection</span>
            <button onclick="speakText('${v.exPast}')" class="text-slate-900 dark:text-slate-100 hover:underline font-semibold">Listen Example</button>
          </div>
        `;
        container.appendChild(card);
      });

      document.getElementById('verbs-count-status').textContent = `Showing ${verbs.length} verbs`;
    }

    function applyVerbFilters() {
      const q = document.getElementById('verb-search-input').value.toLowerCase().trim();
      const group = document.getElementById('verb-group-filter').value;

      const filtered = verbsData.filter(v => {
        const matchesQuery = v.inf.toLowerCase().includes(q) || v.past.toLowerCase().includes(q) || v.pp.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q) || v.pattern.toLowerCase().includes(q);
        const matchesGroup = group === 'all' || v.group === group;
        return matchesQuery && matchesGroup;
      });

      renderVerbs(filtered);
    }

    /* ============================================================
       7. RENDERERS: 12 TENSES
       ============================================================ */
    function renderTenses() {
      const container = document.getElementById('tenses-container');
      if (!container) return;
      container.innerHTML = '';

      tensesData.forEach((t) => {
        const card = document.createElement('div');
        card.className = "p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition duration-200 flex flex-col justify-between space-y-4 shadow-sm";

        card.innerHTML = `
          <div class="space-y-4">
            <div class="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3 gap-2">
              <div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white tracking-tight">${t.name}</h3>
                <div class="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold mt-0.5">
                  "${t.example}"
                </div>
              </div>
              <button onclick="speakText('${t.name}. ${t.positive}. ${t.examples[0]}')" class="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition" title="Listen to Forms">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M12 6v12l-4-4H4V10h4l4-4z"/></svg>
              </button>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-1.5">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">🔹 Form</span>
              <div class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                <div class="flex items-center gap-2"><strong class="text-slate-900 dark:text-slate-100 w-16 shrink-0">Positive:</strong> <span>${t.positive}</span></div>
                <div class="flex items-center gap-2"><strong class="text-slate-900 dark:text-slate-100 w-16 shrink-0">Negative:</strong> <span>${t.negative}</span></div>
                <div class="flex items-center gap-2"><strong class="text-slate-900 dark:text-slate-100 w-16 shrink-0">Question:</strong> <span>${t.question}</span></div>
              </div>
            </div>

            <div class="space-y-1 text-xs">
              <strong class="text-slate-500 dark:text-slate-400 font-semibold uppercase text-[10px] tracking-wider block">Use:</strong>
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">${t.usage}</p>
            </div>

            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
              <strong class="text-slate-900 dark:text-slate-200 font-bold uppercase text-[10px] tracking-wider block">Examples:</strong>
              <ul class="space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                ${t.examples.map(ex => `<li class="flex items-start gap-1.5"><span class="text-slate-400 font-bold">•</span><span>${ex}</span></li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between">
            <span class="font-mono">12 Tenses Reference</span>
            <button onclick="speakText('${t.examples.join('. ')}')" class="text-slate-900 dark:text-slate-100 hover:underline font-semibold">
              Listen Examples
            </button>
          </div>
        `;
        container.appendChild(card);
      });

      const quizContainer = document.getElementById('tenses-quiz-container');
      if (!quizContainer) return;
      quizContainer.innerHTML = '';

      tensesQuizQuestions.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = "p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2";
        item.innerHTML = `
          <p class="text-sm font-semibold text-slate-900 dark:text-white">${q.text}</p>
          <div class="flex flex-wrap gap-4 text-xs text-slate-700 dark:text-slate-300">
            ${q.options.map((opt, optIdx) => `
              <label class="flex items-center gap-2 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                <input type="radio" name="tq_${idx}" value="${optIdx}" class="accent-slate-900 dark:accent-slate-100">
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        `;
        quizContainer.appendChild(item);
      });
    }

    function gradeTensesQuiz() {
      let score = 0;
      tensesQuizQuestions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="tq_${idx}"]:checked`);
        if (selected && parseInt(selected.value, 10) === q.correct) {
          score++;
        }
      });
      const res = document.getElementById('tenses-quiz-result');
      if (res) {
        res.innerHTML = `${score >= 4 ? '✅' : '❌'} You got ${score} of ${tensesQuizQuestions.length} correct. ${score === tensesQuizQuestions.length ? 'Perfect! 🎉' : 'Review the tenses cards and try again.'}`;
      }
    }

    /* ============================================================
       8. RENDERERS: 25 PREPOSITIONS
       ============================================================ */
    function renderPrepositions(list) {
      const container = document.getElementById('prepositions-container');
      if (!container) return;
      container.innerHTML = '';

      const countStatus = document.getElementById('preps-count-status');
      if (countStatus) {
        countStatus.textContent = `Showing ${list.length} preposition${list.length === 1 ? '' : 's'}`;
      }

      if (list.length === 0) {
        container.innerHTML = `
          <div class="col-span-full text-center py-16 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p class="text-slate-500 dark:text-slate-400">No prepositions found matching your search or category filter.</p>
          </div>
        `;
        return;
      }

      list.forEach(p => {
        const card = document.createElement('div');
        card.className = "p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition duration-200 flex flex-col justify-between space-y-4 shadow-sm";

        card.innerHTML = `
          <div class="space-y-4">
            <div class="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center text-sm font-mono border border-slate-200 dark:border-slate-700">${p.id}</span>
                <div>
                  <h3 class="font-heading text-2xl font-bold text-slate-900 dark:text-white tracking-tight">${p.name}</h3>
                  <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">${p.badge}</span>
                </div>
              </div>
            </div>

            <!-- Embedded Vector Illustration -->
            <div class="w-full h-36 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800/80 flex items-center justify-center p-3 overflow-hidden">
              ${p.svg}
            </div>

            <!-- Core Rules & Bullets -->
            <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <p class="font-medium leading-relaxed">${p.rule}</p>
              <ul class="space-y-1.5 text-slate-600 dark:text-slate-400">
                ${p.bullets.map(b => `<li class="flex items-start gap-2"><span class="text-slate-400 font-bold">•</span><span>${b}</span></li>`).join('')}
              </ul>
            </div>

            <!-- Tip / Contrast Callout -->
            <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 font-medium">
              💡 <strong>Key Rule:</strong> ${p.tip}
            </div>
          </div>

          <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
            <span>ChetChat Reference</span>
            <button onclick="speakText('${p.name}. Rule: ${p.tip}')" class="text-slate-900 dark:text-slate-100 hover:underline font-semibold">Listen Rule</button>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function applyPrepFilters() {
      const q = (document.getElementById('prep-search-input')?.value || '').toLowerCase().trim();
      const cat = document.getElementById('prep-category-filter')?.value || 'all';

      const filtered = prepositionsData.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(q) || p.badge.toLowerCase().includes(q) || p.rule.toLowerCase().includes(q) || p.tip.toLowerCase().includes(q);
        const matchesCat = cat === 'all' || p.category === cat;
        return matchesQuery && matchesCat;
      });
      renderPrepositions(filtered);
    }

    /* ============================================================
       9. FLASHCARD ENGINE
       ============================================================ */
    function initializeDeck() {
      if (appState.cardDeckType === 'verbs') {
        appState.currentDeck = verbsData.map(v => ({
          type: "verb",
          label: "Infinitive Base Form",
          title: v.inf,
          phonetic: `${v.pronInf} • ${v.pattern}`,
          icon: v.icon,
          hint: `Meaning: ${v.meaning}`,
          pastLabel: "Past Simple",
          past: `${v.past} (${v.pronPast})`,
          ppLabel: "Past Participle",
          pp: `${v.pp} (${v.pronPP})`,
          sentenceLabel: "Collocation & Context",
          sentence: `"${v.exPast}" • Collocations: ${v.collocations}`,
          spoken: `${v.inf}, past: ${v.past}, past participle: ${v.pp}`
        }));
      } else {
        appState.currentDeck = prepositionsData.map(p => ({
          type: "prep",
          label: "Preposition Concept",
          title: p.name,
          phonetic: p.badge,
          icon: "📍",
          hint: p.rule,
          pastLabel: "Category",
          past: p.badge,
          ppLabel: "Core Rule",
          pp: p.tip,
          sentenceLabel: "Key Example / Usage",
          sentence: p.bullets[0],
          spoken: `${p.name}. Rule: ${p.tip}`
        }));
      }
      appState.currentCardIndex = 0;
      updateFlashcardView();
    }

    function updateFlashcardView() {
      const inner = document.getElementById('flashcard-inner');
      if (!inner || appState.currentDeck.length === 0) return;
      inner.classList.remove('rotate-y-180');

      const card = appState.currentDeck[appState.currentCardIndex];
      const deckName = document.getElementById('card-deck-name');
      const counter = document.getElementById('card-counter');
      const promptLabel = document.getElementById('card-prompt-label');
      const icon = document.getElementById('card-front-icon');
      const title = document.getElementById('card-front-title');
      const phonetic = document.getElementById('card-front-phonetic');
      const hint = document.getElementById('card-front-hint');
      const pastLabel = document.getElementById('card-back-past-label');
      const past = document.getElementById('card-back-past');
      const ppLabel = document.getElementById('card-back-participle-label');
      const pp = document.getElementById('card-back-participle');
      const sentenceLabel = document.getElementById('card-back-sentence-label');
      const sentence = document.getElementById('card-back-sentence');

      if (deckName) deckName.textContent = appState.cardDeckType === 'verbs' ? 'Verbs Deck' : 'Prepositions Deck';
      if (counter) counter.textContent = `Card ${appState.currentCardIndex + 1} / ${appState.currentDeck.length}`;
      if (promptLabel) promptLabel.textContent = card.label;
      if (icon) icon.textContent = card.icon;
      if (title) title.textContent = card.title;
      if (phonetic) phonetic.textContent = card.phonetic;
      if (hint) hint.textContent = card.hint;
      if (pastLabel) pastLabel.textContent = card.pastLabel;
      if (past) past.textContent = card.past;
      if (ppLabel) ppLabel.textContent = card.ppLabel;
      if (pp) pp.textContent = card.pp;
      if (sentenceLabel) sentenceLabel.textContent = card.sentenceLabel;
      if (sentence) sentence.textContent = card.sentence;
    }

    function toggleCardFlip() {
      const inner = document.getElementById('flashcard-inner');
      if (inner) inner.classList.toggle('rotate-y-180');
    }

    function nextCard() {
      if (appState.currentCardIndex < appState.currentDeck.length - 1) {
        appState.currentCardIndex++;
      } else {
        appState.currentCardIndex = 0;
      }
      updateFlashcardView();
    }

    function prevCard() {
      if (appState.currentCardIndex > 0) {
        appState.currentCardIndex--;
      } else {
        appState.currentCardIndex = appState.currentDeck.length - 1;
      }
      updateFlashcardView();
    }

    function markCardMastered() {
      appState.masteredCount++;
      const el = document.getElementById('mastered-count');
      if (el) el.textContent = appState.masteredCount;
      showToast("Card mastered! Moving to next.");
      nextCard();
    }

    function shuffleDeck() {
      for (let i = appState.currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [appState.currentDeck[i], appState.currentDeck[j]] = [appState.currentDeck[j], appState.currentDeck[i]];
      }
      appState.currentCardIndex = 0;
      updateFlashcardView();
      showToast("Deck shuffled!");
    }

    function setCardDeck(type) {
      appState.cardDeckType = type;
      const vBtn = document.getElementById('deck-verbs-btn');
      const pBtn = document.getElementById('deck-prep-btn');
      if (vBtn && pBtn) {
        if (type === 'verbs') {
          vBtn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm transition";
          pBtn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition";
        } else {
          vBtn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition";
          pBtn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm transition";
        }
      }
      initializeDeck();
    }

    function playCurrentCardSpeech() {
      const card = appState.currentDeck[appState.currentCardIndex];
      if (card) speakText(card.spoken);
    }

    /* ============================================================
       10. UNIFIED QUIZ HUB CONTROLLER
       ============================================================ */
    function renderQuizHub() {
      const container = document.getElementById('quiz-question-list');
      if (!container) return;
      container.innerHTML = '';

      unifiedQuizData.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = "p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 transition";

        let optionsHtml = '';
        item.options.forEach((opt, optIdx) => {
          optionsHtml += `
            <button 
              onclick="handleQuizAnswer(${idx}, ${optIdx})"
              id="opt-btn-${idx}-${optIdx}"
              class="w-full text-left px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 transition flex items-center justify-between"
            >
              <span>${opt}</span>
              <span class="quiz-badge w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-[10px] text-white"></span>
            </button>
          `;
        });

        card.innerHTML = `
          <h4 class="font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-3">${item.q}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
            ${optionsHtml}
          </div>
          <div id="q-feedback-${idx}" class="hidden p-3 rounded-xl text-xs font-medium leading-relaxed"></div>
        `;
        container.appendChild(card);
      });
      updateQuizScore();
    }

    function handleQuizAnswer(qIdx, selectedOptIdx) {
      if (appState.quizAnswers[qIdx] !== undefined) return;
      appState.quizAnswers[qIdx] = selectedOptIdx;

      const q = unifiedQuizData[qIdx];
      const feedback = document.getElementById(`q-feedback-${qIdx}`);
      if (feedback) feedback.classList.remove('hidden');

      q.options.forEach((_, optIdx) => {
        const btn = document.getElementById(`opt-btn-${qIdx}-${optIdx}`);
        if (!btn) return;
        btn.disabled = true;

        if (optIdx === q.ans) {
          btn.classList.add('bg-emerald-100', 'dark:bg-emerald-950', 'border-emerald-500', 'text-emerald-900', 'dark:text-emerald-200');
          const badge = btn.querySelector('.quiz-badge');
          if (badge) {
            badge.classList.add('bg-emerald-600', 'border-emerald-600');
            badge.textContent = '✓';
          }
        } else if (optIdx === selectedOptIdx) {
          btn.classList.add('bg-rose-100', 'dark:bg-rose-950', 'border-rose-400', 'text-rose-900', 'dark:text-rose-200');
          const badge = btn.querySelector('.quiz-badge');
          if (badge) {
            badge.classList.add('bg-rose-500', 'border-rose-500');
            badge.textContent = '✕';
          }
        }
      });

      if (feedback) {
        if (selectedOptIdx === q.ans) {
          feedback.className = "p-3 rounded-xl text-xs font-medium leading-relaxed bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 block";
          feedback.innerHTML = `<strong>Correct!</strong> ${q.exp}`;
        } else {
          feedback.className = "p-3 rounded-xl text-xs font-medium leading-relaxed bg-rose-100 dark:bg-rose-950 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 block";
          feedback.innerHTML = `<strong>Incorrect.</strong> ${q.exp}`;
        }
      }

      updateQuizScore();
    }

    function updateQuizScore() {
      let score = 0;
      Object.keys(appState.quizAnswers).forEach(idx => {
        if (appState.quizAnswers[idx] === unifiedQuizData[idx].ans) score++;
      });
      const el = document.getElementById('quiz-score-display');
      if (el) el.textContent = `${score} / ${unifiedQuizData.length}`;
    }

    function resetUnifiedQuiz() {
      appState.quizAnswers = {};
      renderQuizHub();
      showToast("Quiz reset successfully.");
    }

    // Keyboard navigation listener
    window.addEventListener('keydown', function(e) {
      if (appState.currentTab === 'flashcards') {
        if (e.code === 'Space') {
          e.preventDefault();
          toggleCardFlip();
        } else if (e.code === 'ArrowRight') {
          nextCard();
        } else if (e.code === 'ArrowLeft') {
          prevCard();
        }
      }
    });

    // Initialize all modules on load
    window.onload = function() {
      initTheme();
      renderVerbs(verbsData);
      initializeDeck();
      renderTenses();
      renderPrepositions(prepositionsData);
      renderQuizHub();
    };
