(() => {
  'use strict';

  let currentSection = 'home';
  let currentUnidadId = null;
  let history = [];
  let examState = null;
  let timelineActiveIndex = 0;

  const PROGRESS_KEY = 'greciaeso_progress';
  const TIMELINE_EVENTS = [
    {
      year: '3000 - 1250 a.C.',
      title: 'Civilización minoica',
      detail: 'Florece en Creta con palacios, comercio marítimo y una cultura material muy desarrollada.'
    },
    {
      year: '1600 - 1150 a.C.',
      title: 'Civilización micénica',
      detail: 'Se consolidan centros fortificados en la Grecia continental y una élite guerrera aristocrática.'
    },
    {
      year: 'Siglos VIII - VI a.C.',
      title: 'Colonización griega',
      detail: 'Las polis fundan colonias por el Mediterráneo y el mar Negro para ampliar comercio y recursos.'
    },
    {
      year: 'Siglo V a.C.',
      title: 'Democracia ateniense clásica',
      detail: 'Atenas desarrolla instituciones participativas como Boule, Ecclesia, magistrados y Heliea.'
    },
    {
      year: '336 - 323 a.C.',
      title: 'Alejandro Magno',
      detail: 'Macedonia expande su dominio y abre la etapa helenística con gran difusión cultural.'
    }
  ];
  const GLOSSARY = {
    helade: 'Conjunto de territorios del mundo griego antiguo: península, islas y enclaves costeros.',
    polis: 'Ciudad-estado griega con instituciones, leyes y territorio propios.',
    acropolis: 'Zona elevada y fortificada de la ciudad, con edificios simbólicos y religiosos.',
    agora: 'Plaza pública de la polis dedicada al comercio, encuentro social y debate político.',
    dracmas: 'Monedas de plata utilizadas en intercambios económicos del mundo griego.',
    metropoli: 'Ciudad de origen respecto a una colonia fundada en otro territorio.',
    colonizacion: 'Proceso de fundación de colonias griegas fuera de la metrópoli.',
    talasocracia: 'Dominio comercial y naval basado en el control del mar.',
    tholos: 'Tumba circular monumental usada por elites micenicas.',
    boule: 'Consejo ateniense que preparaba asuntos y propuestas para la Asamblea.',
    ecclesia: 'Asamblea de ciudadanos en Atenas con capacidad de deliberar y votar.',
    magistrados: 'Cargos públicos anuales con funciones de gobierno, justicia y administración.',
    arcontes: 'Magistrados atenienses con funciones políticas y religiosas.',
    estrategos: 'Magistrados atenienses vinculados al mando militar.',
    heliea: 'Tribunal popular de la democracia ateniense.',
    metecos: 'Extranjeros residentes en Atenas sin derechos políticos plenos.',
    helenistico: 'Etapa histórica de fusión cultural entre lo griego y lo oriental tras Alejandro.',
    adintelados: 'Sistemas constructivos de líneas rectas, con dintel horizontal sobre columnas.',
    policromos: 'Elementos artísticos decorados con varios colores.'
  };

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const content = $('#app-content');
  const title = $('#header-title');
  const backBtn = $('#btn-back');

  function saveProgress(prog) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(prog));
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    } catch {
      return {};
    }
  }

  function markProgress(exId, ok) {
    const p = loadProgress();
    p[exId] = { ok, ts: Date.now() };
    saveProgress(p);
  }

  function getStats() {
    const totalUnits = UNIDADES.length;
    const totalEx = UNIDADES.reduce((acc, u) => acc + u.ejercicios.length, 0);
    const p = loadProgress();
    const done = Object.keys(p).length;
    const ok = Object.values(p).filter(v => v.ok).length;
    return { totalUnits, totalEx, done, ok };
  }

  function nav(section, unidadId, push = true) {
    if (push && currentSection) {
      history.push({ section: currentSection, unidadId: currentUnidadId, examState });
    }
    currentSection = section;
    currentUnidadId = unidadId || null;
    render();
  }

  function back() {
    if (!history.length) {
      nav('home', null, false);
      return;
    }
    const prev = history.pop();
    currentSection = prev.section;
    currentUnidadId = prev.unidadId;
    examState = prev.examState || null;
    render();
  }

  function setActiveNav() {
    $$('.nav-btn').forEach(btn => {
      const sec = btn.dataset.section;
      const active = sec === currentSection ||
        (sec === 'unidades' && currentSection === 'unidad-detail') ||
        (sec === 'ejercicios' && currentSection === 'ejercicios-unidad') ||
        (sec === 'examenes' && (currentSection === 'examen-start' || currentSection === 'examen-live' || currentSection === 'examen-result'));
      btn.classList.toggle('active', active);
    });
  }

  function getUnidad(id) {
    return UNIDADES.find(u => u.id === id);
  }

  function normalize(s) {
    return (s || '')
      .toString()
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function wrapGlossaryTerms(root) {
    const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
    if (!terms.length) return;
    const regex = new RegExp(`\\b(${terms.map(escapeRegExp).join('|')})\\b`, 'gi');

    root.querySelectorAll('p, li').forEach(el => {
      if (el.closest('.glossary-box')) return;
      el.innerHTML = el.innerHTML.replace(regex, (m) => `<button type="button" class="gloss-term" data-term="${normalize(m)}">${m}</button>`);
    });
  }

  function wireGlossaryContext(root) {
    wrapGlossaryTerms(root);
    root.querySelectorAll('.gloss-term').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.term;
        const def = GLOSSARY[key] || 'Término histórico relevante en el tema.';
        const panel = document.createElement('div');
        panel.className = 'glossary-pop';
        panel.innerHTML = `
          <div class="glossary-pop-card">
            <h4>${btn.textContent}</h4>
            <p>${def}</p>
            <button class="btn btn-primary" id="close-glossary-pop" type="button">Cerrar</button>
          </div>
        `;
        document.body.appendChild(panel);
        panel.querySelector('#close-glossary-pop').addEventListener('click', () => panel.remove());
        panel.addEventListener('click', (e) => {
          if (e.target === panel) panel.remove();
        });
      });
    });
  }

  function renderUnitCard(u, badgeText) {
    return `
      <article class="unit-card" data-id="${u.id}">
        <img class="unit-thumb" src="${u.imagen}" alt="Ilustracion de la unidad ${u.id}" loading="lazy">
        <div class="unit-meta">
          <span class="badge">${badgeText}</span>
          <h3>${u.icono} ${u.titulo}</h3>
          <p>${u.subtitulo}</p>
        </div>
      </article>
    `;
  }

  function renderTimelineSection() {
    const active = TIMELINE_EVENTS[timelineActiveIndex];
    return `
      <section class="timeline-box">
        <div class="timeline-head">
          <h3>Línea del tiempo interactiva</h3>
          <button class="btn btn-muted" id="timeline-next" type="button">Siguiente hito</button>
        </div>
        <div class="timeline-rail">
          ${TIMELINE_EVENTS.map((evt, idx) => `
            <button type="button" class="timeline-dot ${idx === timelineActiveIndex ? 'active' : ''}" data-tl="${idx}">
              <span>${evt.year}</span>
            </button>
          `).join('')}
        </div>
        <article class="timeline-detail">
          <h4>${active.title}</h4>
          <p><b>${active.year}</b></p>
          <p>${active.detail}</p>
        </article>
      </section>
    `;
  }

  function render() {
    setActiveNav();
    backBtn.classList.toggle('hidden', ['home', 'unidades', 'ejercicios', 'examenes', 'ayuda'].includes(currentSection));
    title.textContent = currentSection.startsWith('examen') ? 'GreciaESO · Examen' : 'GreciaESO';

    switch (currentSection) {
      case 'home':
        renderHome();
        break;
      case 'unidades':
        renderUnidades();
        break;
      case 'unidad-detail':
        renderUnidadDetail();
        break;
      case 'ejercicios':
        renderEjerciciosList();
        break;
      case 'ejercicios-unidad':
        renderEjerciciosUnidad();
        break;
      case 'examenes':
      case 'examen-start':
        renderExamConfig();
        break;
      case 'examen-live':
        renderExamLive();
        break;
      case 'examen-result':
        renderExamResult();
        break;
      case 'ayuda':
        renderAyuda();
        break;
      default:
        renderHome();
    }

    window.scrollTo(0, 0);
  }

  function renderHome() {
    const st = getStats();
    content.innerHTML = `
      <section class="hero">
        <h2>Antigua Grecia · 1 ESO</h2>
        <p>Estudia por unidades didácticas, practica ejercicios y genera exámenes personalizados para repasar mejor Geografía e Historia.</p>
        <div class="kpi-grid">
          <div class="kpi"><strong>${st.totalUnits}</strong>unidades</div>
          <div class="kpi"><strong>${st.totalEx}</strong>ejercicios</div>
          <div class="kpi"><strong>${st.done}</strong>respondidos</div>
          <div class="kpi"><strong>${st.ok}</strong>aciertos</div>
        </div>
      </section>
      ${renderTimelineSection()}
      <section class="card-grid">
        ${UNIDADES.map(u => renderUnitCard(u, `Unidad ${u.id}`)).join('')}
      </section>
    `;

    $('#timeline-next').addEventListener('click', () => {
      timelineActiveIndex = (timelineActiveIndex + 1) % TIMELINE_EVENTS.length;
      renderHome();
    });

    $$('.timeline-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        timelineActiveIndex = Number(dot.dataset.tl);
        renderHome();
      });
    });

    $$('.unit-card').forEach(card => {
      card.addEventListener('click', () => nav('unidad-detail', Number(card.dataset.id)));
    });
  }

  function renderUnidades() {
    content.innerHTML = `
      <section class="card-grid">
        ${UNIDADES.map(u => renderUnitCard(u, `Unidad ${u.id}`)).join('')}
      </section>
    `;

    $$('.unit-card').forEach(card => {
      card.addEventListener('click', () => nav('unidad-detail', Number(card.dataset.id)));
    });
  }

  function renderUnidadDetail() {
    const u = getUnidad(currentUnidadId);
    if (!u) {
      nav('unidades', null, false);
      return;
    }

    content.innerHTML = `
      <section class="chapter">
        <div class="row" style="justify-content: space-between; align-items: center;">
          <span class="badge">Unidad ${u.id}</span>
          <button class="btn btn-muted" id="go-practice">Ir a ejercicios</button>
        </div>
        <aside class="glossary-box">Tip: pulsa en términos subrayados para abrir el glosario contextual.</aside>
        ${u.teoria}
      </section>
    `;

    wireGlossaryContext(content);

    $('#go-practice').addEventListener('click', () => nav('ejercicios-unidad', u.id));
  }

  function renderEjerciciosList() {
    content.innerHTML = `
      <section class="hero">
        <h2>Propuestas de ejercicios</h2>
        <p class="muted">Selecciona una unidad para practicar con actividades tipo test, verdadero/falso, respuesta corta y orden cronológico.</p>
      </section>
      <section class="card-grid">
        ${UNIDADES.map(u => renderUnitCard(u, `${u.ejercicios.length} ejercicios`)).join('')}
      </section>
    `;

    $$('.unit-card').forEach(card => {
      card.addEventListener('click', () => nav('ejercicios-unidad', Number(card.dataset.id)));
    });
  }

  function renderEjerciciosUnidad() {
    const u = getUnidad(currentUnidadId);
    if (!u) {
      nav('ejercicios', null, false);
      return;
    }

    content.innerHTML = `
      <section class="chapter">
        <h2>${u.icono} ${u.titulo}</h2>
        <p class="muted">${u.subtitulo}</p>
        ${u.ejercicios.map((ex, i) => renderExercise(ex, i + 1)).join('')}
      </section>
    `;

    wireExerciseEvents(u.ejercicios);
  }

  function renderExercise(ex, n) {
    if (ex.tipo === 'test') {
      return `
        <article class="exercise" data-id="${ex.id}" data-tipo="test">
          <h4>${n}. ${ex.enunciado}</h4>
          <div class="choice-list">
            ${ex.opciones.map((op, idx) => `<button type="button" data-choice="${idx}">${op}</button>`).join('')}
          </div>
          <div class="feedback hidden"></div>
        </article>
      `;
    }

    if (ex.tipo === 'verdadero_falso') {
      return `
        <article class="exercise" data-id="${ex.id}" data-tipo="verdadero_falso">
          <h4>${n}. ${ex.enunciado}</h4>
          <div class="row">
            <button class="btn btn-muted" type="button" data-vf="true">Verdadero</button>
            <button class="btn btn-muted" type="button" data-vf="false">Falso</button>
          </div>
          <div class="feedback hidden"></div>
        </article>
      `;
    }

    if (ex.tipo === 'ordenar') {
      return `
        <article class="exercise" data-id="${ex.id}" data-tipo="ordenar">
          <h4>${n}. ${ex.enunciado}</h4>
          <p class="muted">Escribe los elementos separados por coma.</p>
          <input type="text" placeholder="Ejemplo: elemento A, elemento B">
          <div class="row" style="margin-top: 8px;">
            <button class="btn btn-primary" type="button" data-check="ordenar">Comprobar</button>
          </div>
          <div class="feedback hidden"></div>
        </article>
      `;
    }

    return `
      <article class="exercise" data-id="${ex.id}" data-tipo="input">
        <h4>${n}. ${ex.enunciado}</h4>
        <input type="text" placeholder="Escribe tu respuesta">
        <div class="row" style="margin-top: 8px;">
          <button class="btn btn-primary" type="button" data-check="input">Comprobar</button>
        </div>
        <div class="feedback hidden"></div>
      </article>
    `;
  }

  function getCorrectAnswerText(ex) {
    if (ex.tipo === 'test') {
      return ex.opciones[ex.respuesta] || '';
    }
    if (ex.tipo === 'verdadero_falso') {
      return ex.respuestaVF ? 'Verdadero' : 'Falso';
    }
    if (ex.tipo === 'ordenar') {
      return (ex.correcto || []).join(', ');
    }
    return ex.respuestaTexto || '';
  }

  function getUserAnswerText(question, userAnswer) {
    if (question.tipo === 'test') {
      if (typeof userAnswer !== 'number' || userAnswer < 0) return 'Sin respuesta';
      return question.opciones[userAnswer] || 'Sin respuesta';
    }
    if (question.tipo === 'verdadero_falso') {
      if (typeof userAnswer !== 'boolean') return 'Sin respuesta';
      return userAnswer ? 'Verdadero' : 'Falso';
    }
    if (typeof userAnswer !== 'string' || !userAnswer.trim()) return 'Sin respuesta';
    return userAnswer;
  }

  function setFeedback(box, ok, text, correctAnswerText) {
    box.classList.remove('hidden', 'ok', 'bad');
    box.classList.add(ok ? 'ok' : 'bad');
    box.innerHTML = `${text}<br><b>Respuesta correcta:</b> ${correctAnswerText}`;
  }

  function wireExerciseEvents(exercises) {
    exercises.forEach(ex => {
      const root = document.querySelector(`.exercise[data-id="${ex.id}"]`);
      if (!root) return;
      const fb = root.querySelector('.feedback');

      if (ex.tipo === 'test') {
        root.querySelectorAll('[data-choice]').forEach(btn => {
          btn.addEventListener('click', () => {
            const sel = Number(btn.dataset.choice);
            const ok = sel === ex.respuesta;
            markProgress(ex.id, ok);
            setFeedback(fb, ok, `${ok ? 'Correcto' : 'No es correcto'}. ${ex.explicacion}`, getCorrectAnswerText(ex));
          });
        });
      }

      if (ex.tipo === 'verdadero_falso') {
        root.querySelectorAll('[data-vf]').forEach(btn => {
          btn.addEventListener('click', () => {
            const sel = btn.dataset.vf === 'true';
            const ok = sel === ex.respuestaVF;
            markProgress(ex.id, ok);
            setFeedback(fb, ok, `${ok ? 'Correcto' : 'No es correcto'}. ${ex.explicacion}`, getCorrectAnswerText(ex));
          });
        });
      }

      if (ex.tipo === 'input') {
        root.querySelector('[data-check="input"]').addEventListener('click', () => {
          const value = normalize(root.querySelector('input').value);
          const ok = value === normalize(ex.respuestaTexto);
          markProgress(ex.id, ok);
          setFeedback(fb, ok, `${ok ? 'Correcto' : 'No es correcto'}. ${ex.explicacion}`, getCorrectAnswerText(ex));
        });
      }

      if (ex.tipo === 'ordenar') {
        root.querySelector('[data-check="ordenar"]').addEventListener('click', () => {
          const value = normalize(root.querySelector('input').value)
            .split(',')
            .map(x => x.trim())
            .filter(Boolean);
          const correct = ex.correcto.map(normalize);
          const ok = value.length === correct.length && value.every((v, i) => v === correct[i]);
          markProgress(ex.id, ok);
          setFeedback(fb, ok, `${ok ? 'Correcto' : 'No es correcto'}. ${ex.explicacion}`, getCorrectAnswerText(ex));
        });
      }
    });
  }

  function renderExamConfig() {
    const total = UNIDADES.reduce((acc, u) => acc + u.ejercicios.length, 0);
    content.innerHTML = `
      <section class="exam-box">
        <h2>Generador de examenes</h2>
        <p class="muted">Configura un examen automático con preguntas mezcladas de varias unidades.</p>

        <label for="exam-count">Número de preguntas</label>
        <input type="number" id="exam-count" min="5" max="20" value="10">

        <label for="exam-units" style="margin-top:10px;">Unidad</label>
        <select id="exam-units">
          <option value="all">Todas las unidades</option>
          ${UNIDADES.map(u => `<option value="${u.id}">Unidad ${u.id} - ${u.titulo}</option>`).join('')}
        </select>

        <p class="muted" style="margin-top: 8px;">Preguntas disponibles: ${total}</p>

        <div class="row" style="margin-top: 10px;">
          <button class="btn btn-primary" id="start-exam">Iniciar examen</button>
        </div>
      </section>
      <section class="exam-box" style="margin-top: 12px;">
        <h3>Mini-exámenes por tema</h3>
        <p class="muted">Lanza un mini-examen de 5 preguntas directamente en la unidad elegida.</p>
        <div class="mini-exam-grid">
          ${UNIDADES.map(u => `
            <button class="btn btn-muted mini-exam-btn" type="button" data-mini-unit="${u.id}">
              Tema ${u.id} · ${u.titulo}
            </button>
          `).join('')}
        </div>
      </section>
    `;

    $('#start-exam').addEventListener('click', () => {
      const n = Math.max(5, Math.min(20, Number($('#exam-count').value) || 10));
      const unitValue = $('#exam-units').value;
      startExamWithOptions({
        count: n,
        unitValue,
        modeLabel: unitValue === 'all' ? 'Examen personalizado (todas las unidades)' : `Examen personalizado · Unidad ${unitValue}`
      });
    });

    $$('.mini-exam-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const unitId = Number(btn.dataset.miniUnit);
        const questions = buildMiniExamQuestions(unitId);
        startExamWithOptions({
          count: 5,
          unitValue: String(unitId),
          modeLabel: `Mini-examen Tema ${unitId} · 3 test + 1 V/F + 1 corta`,
          questions
        });
      });
    });
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function takeByType(source, type, count, usedIds) {
    const picked = [];
    for (const q of shuffle(source)) {
      if (picked.length >= count) break;
      if (q.tipo !== type) continue;
      if (usedIds.has(q.id)) continue;
      usedIds.add(q.id);
      picked.push(q);
    }
    return picked;
  }

  function buildMiniExamQuestions(unitId) {
    const pool = getQuestionPool(String(unitId));
    const usedIds = new Set();
    const selected = [];

    // Estructura objetivo: 3 test + 1 V/F + 1 corta (input u ordenar)
    selected.push(...takeByType(pool, 'test', 3, usedIds));
    selected.push(...takeByType(pool, 'verdadero_falso', 1, usedIds));

    const shortInput = takeByType(pool, 'input', 1, usedIds);
    if (shortInput.length) {
      selected.push(...shortInput);
    } else {
      selected.push(...takeByType(pool, 'ordenar', 1, usedIds));
    }

    // Completar hasta 5 si un tema tiene menos variedad disponible.
    for (const q of shuffle(pool)) {
      if (selected.length >= 5) break;
      if (usedIds.has(q.id)) continue;
      usedIds.add(q.id);
      selected.push(q);
    }

    return shuffle(selected).slice(0, 5);
  }

  function getQuestionPool(unitValue) {
    if (unitValue === 'all') {
      return UNIDADES.flatMap(u => u.ejercicios.map(e => ({ ...e, unidad: u.id })));
    }
    const u = getUnidad(Number(unitValue));
    return u ? u.ejercicios.map(e => ({ ...e, unidad: u.id })) : [];
  }

  function startExamWithOptions({ count, unitValue, modeLabel, questions }) {
    const pool = shuffle(getQuestionPool(unitValue));
    const selected = questions && questions.length
      ? questions
      : pool.slice(0, Math.min(count, pool.length));

    examState = {
      questions: selected,
      index: 0,
      answers: [],
      startedAt: Date.now(),
      modeLabel: modeLabel || 'Examen'
    };

    nav('examen-live', null);
  }

  function renderExamLive() {
    if (!examState || !examState.questions.length) {
      nav('examenes', null, false);
      return;
    }

    const q = examState.questions[examState.index];
    const pos = examState.index + 1;
    const total = examState.questions.length;

    content.innerHTML = `
      <section class="exam-box">
        <h2>Examen ${pos}/${total}</h2>
        <p class="muted">${examState.modeLabel || 'Examen'}</p>
        <p class="muted">Unidad ${q.unidad} · Tipo: ${q.tipo.replace('_', ' ')}</p>
        <article class="exercise" data-id="exam-item">
          <h4>${q.enunciado}</h4>
          ${renderExamInput(q)}
        </article>
      </section>
    `;

    wireExamQuestion(q);
  }

  function renderExamInput(q) {
    if (q.tipo === 'test') {
      return `<div class="choice-list">${q.opciones.map((op, i) => `<button type="button" data-ex-choice="${i}">${op}</button>`).join('')}</div>`;
    }

    if (q.tipo === 'verdadero_falso') {
      return `
        <div class="row">
          <button class="btn btn-muted" data-ex-vf="true" type="button">Verdadero</button>
          <button class="btn btn-muted" data-ex-vf="false" type="button">Falso</button>
        </div>
      `;
    }

    if (q.tipo === 'ordenar') {
      return `
        <p class="muted">Escribe el orden correcto separado por comas.</p>
        <input type="text" id="exam-text" placeholder="Elemento A, Elemento B">
        <div class="row" style="margin-top: 8px;"><button class="btn btn-primary" id="exam-send">Responder</button></div>
      `;
    }

    return `
      <input type="text" id="exam-text" placeholder="Tu respuesta">
      <div class="row" style="margin-top: 8px;"><button class="btn btn-primary" id="exam-send">Responder</button></div>
    `;
  }

  function pushExamAnswer(ok, userAnswer) {
    const currentQuestion = examState.questions[examState.index];
    if (currentQuestion && currentQuestion.id) {
      markProgress(currentQuestion.id, ok);
    }

    examState.answers.push({ ok, userAnswer });
    if (examState.index < examState.questions.length - 1) {
      examState.index += 1;
      renderExamLive();
      return;
    }
    nav('examen-result', null);
  }

  function wireExamQuestion(q) {
    if (q.tipo === 'test') {
      $$('[data-ex-choice]').forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = Number(btn.dataset.exChoice);
          const ok = selected === q.respuesta;
          pushExamAnswer(ok, selected);
        });
      });
      return;
    }

    if (q.tipo === 'verdadero_falso') {
      $$('[data-ex-vf]').forEach(btn => {
        btn.addEventListener('click', () => {
          const selected = btn.dataset.exVf === 'true';
          const ok = selected === q.respuestaVF;
          pushExamAnswer(ok, selected);
        });
      });
      return;
    }

    const submit = $('#exam-send');
    if (submit) {
      submit.addEventListener('click', () => {
        const value = normalize($('#exam-text').value);
        let ok = false;

        if (q.tipo === 'ordenar') {
          const arr = value.split(',').map(x => x.trim()).filter(Boolean);
          const correct = q.correcto.map(normalize);
          ok = arr.length === correct.length && arr.every((v, i) => v === correct[i]);
        } else {
          ok = value === normalize(q.respuestaTexto);
        }

        pushExamAnswer(ok, $('#exam-text').value.trim());
      });
    }
  }

  function renderExamResult() {
    const total = examState.answers.length;
    const ok = examState.answers.filter(a => a.ok).length;
    const pct = total ? Math.round((ok / total) * 100) : 0;
    const elapsed = Math.max(1, Math.round((Date.now() - examState.startedAt) / 60000));
    const wrongQuestions = examState.questions.filter((_, idx) => !examState.answers[idx].ok);

    const byType = { test: { ok: 0, total: 0 }, verdadero_falso: { ok: 0, total: 0 }, input: { ok: 0, total: 0 }, ordenar: { ok: 0, total: 0 } };
    examState.questions.forEach((q, idx) => {
      if (!byType[q.tipo]) byType[q.tipo] = { ok: 0, total: 0 };
      byType[q.tipo].total += 1;
      if (examState.answers[idx].ok) byType[q.tipo].ok += 1;
    });

    content.innerHTML = `
      <section class="exam-box">
        <h2>Resultado del examen</h2>
        <p class="muted">${examState.modeLabel || 'Examen'}</p>
        <p><b>${ok}</b> aciertos de <b>${total}</b> preguntas.</p>
        <p>Nota estimada: <b>${pct}%</b></p>
        <p class="muted">Tiempo empleado: ${elapsed} min.</p>
        <div class="type-breakdown">
          <span class="badge">Test: ${byType.test.ok}/${byType.test.total}</span>
          <span class="badge">V/F: ${byType.verdadero_falso.ok}/${byType.verdadero_falso.total}</span>
          <span class="badge">Corta: ${(byType.input.ok + byType.ordenar.ok)}/${(byType.input.total + byType.ordenar.total)}</span>
        </div>
        <div class="review-list">
          ${examState.questions.map((q, idx) => `
            <article class="review-item ${examState.answers[idx].ok ? 'ok' : 'bad'}">
              <h4>${idx + 1}. ${q.enunciado}</h4>
              <p><b>Tu respuesta:</b> ${getUserAnswerText(q, examState.answers[idx].userAnswer)}</p>
              <p><b>Respuesta correcta:</b> ${getCorrectAnswerText(q)}</p>
            </article>
          `).join('')}
        </div>
        <div class="row" style="margin-top: 10px;">
          <button class="btn btn-primary" id="repeat-exam">Nuevo examen</button>
          ${wrongQuestions.length ? '<button class="btn btn-muted" id="retry-wrong">Reintentar falladas</button>' : ''}
          <button class="btn btn-muted" id="go-home">Inicio</button>
        </div>
      </section>
    `;

    $('#repeat-exam').addEventListener('click', () => nav('examenes', null, false));
    if (wrongQuestions.length) {
      $('#retry-wrong').addEventListener('click', () => {
        startExamWithOptions({
          count: wrongQuestions.length,
          unitValue: 'all',
          modeLabel: `${examState.modeLabel || 'Examen'} · Recuperación de fallos`,
          questions: shuffle(wrongQuestions)
        });
      });
    }
    $('#go-home').addEventListener('click', () => nav('home', null, false));
  }

  function renderAyuda() {
    content.innerHTML = `
      <section class="chapter">
        <h2>Cómo usar GreciaESO</h2>
        <ul>
          <li>Lee cada unidad didáctica y apoya el estudio con las imágenes incluidas.</li>
          <li>Practica en "Ejercicios" con distintos tipos de actividad.</li>
          <li>Genera exámenes para preparar pruebas reales.</li>
          <li>Tu progreso se guarda automáticamente en este dispositivo.</li>
        </ul>
        <div class="nota-box">Consejo: combina sesiones cortas de teoría y test para mejorar retención.</div>
      </section>
    `;
  }

  backBtn.addEventListener('click', back);

  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      history = [];
      examState = null;
      nav(btn.dataset.section, null, false);
    });
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  render();
})();
