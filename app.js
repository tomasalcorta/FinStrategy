const estrategias = [
  { id: 1, nombre: "Horizonte Largo", autor: "Martina López", categoria_riesgo: "Conservador", horizonte: "Largo plazo", precio: 29.99, rentabilidad_historica: 8.4, descripcion: "Estrategia basada en ETFs diversificados a nivel global con rebalanceo anual. Ideal para inversores conservadores que buscan crecimiento sostenido a largo plazo sin exposición a activos volátiles. Incluye posiciones en renta variable global, bonos de mercados desarrollados y una pequeña exposición a commodities.", tags: ["ETFs", "Global", "Largo plazo"], rating: 4.7, reviews_count: 38, historico: [5.1, 6.2, 7.8, 6.9, 8.4, 7.6, 8.4], reviews: [{autor:"Federico R.", stars:5, fecha:"May 2025", texto:"Excelente para empezar. Sin sorpresas, flujo constante."},{autor:"Valentina S.", stars:5, fecha:"Abr 2025", texto:"La uso como base de mi cartera. Simple y efectiva."},{autor:"Gonzalo M.", stars:4, fecha:"Mar 2025", texto:"Buena rentabilidad para el nivel de riesgo. Recomendada."}] },
  { id: 2, nombre: "Momentum 360", autor: "Carlos Vega", categoria_riesgo: "Agresivo", horizonte: "Corto plazo", precio: 89.99, rentabilidad_historica: 34.2, descripcion: "Estrategia de trading activo basada en análisis técnico y momentum de mercado. Opera en ventanas cortas aprovechando tendencias de alta volatilidad en acciones tech y cripto. Requiere monitoreo frecuente y tolerancia alta al riesgo.", tags: ["Trading", "Tech", "Cripto"], rating: 4.3, reviews_count: 61, historico: [12.1, 28.4, 15.2, 41.3, 22.8, 38.1, 34.2], reviews: [{autor:"Rodrigo P.", stars:5, fecha:"Jun 2025", texto:"Resultados increíbles cuando el mercado acompaña."},{autor:"Luciana B.", stars:3, fecha:"May 2025", texto:"Alta rentabilidad pero hay que aguantar los drawdowns."},{autor:"Esteban C.", stars:5, fecha:"Abr 2025", texto:"La mejor estrategia activa del marketplace."}] },
  { id: 3, nombre: "Dividendos Plus", autor: "Ana Rodríguez", categoria_riesgo: "Conservador", horizonte: "Largo plazo", precio: 49.99, rentabilidad_historica: 11.7, descripcion: "Cartera de acciones con historial sólido de pago de dividendos crecientes año a año. Foco en empresas maduras de sectores defensivos: utilities, salud y consumo básico. Genera flujo de caja estable con apreciación de capital moderada.", tags: ["Dividendos", "Renta", "Defensivo"], rating: 4.9, reviews_count: 92, historico: [8.2, 9.1, 10.4, 10.8, 11.2, 11.5, 11.7], reviews: [{autor:"Sofía M.", stars:5, fecha:"Jun 2025", texto:"La mejor estrategia pasiva que probé. Dividendos puntual."},{autor:"Hernán T.", stars:5, fecha:"May 2025", texto:"Muy buena para quien quiere ingresos mensuales."},{autor:"Camila V.", stars:5, fecha:"Abr 2025", texto:"Superó mis expectativas. La recomiendo sin dudar."}] },
  { id: 4, nombre: "LatAm Growth", autor: "Diego Herrera", categoria_riesgo: "Moderado", horizonte: "Mediano plazo", precio: 64.99, rentabilidad_historica: 22.1, descripcion: "Estrategia enfocada en acciones de mercados emergentes latinoamericanos con alto potencial de crecimiento. Diversificada entre Brasil, México y Argentina con exposición selectiva a Chile y Colombia.", tags: ["LatAm", "Emergentes", "Acciones"], rating: 4.1, reviews_count: 29, historico: [8.4, 14.2, 18.6, 20.1, 19.3, 21.8, 22.1], reviews: [{autor:"Nicolás F.", stars:4, fecha:"Jun 2025", texto:"Muy buena exposición a la región. Algo volátil en Argentina."},{autor:"Agustina R.", stars:4, fecha:"May 2025", texto:"Buen potencial. Diego explica bien cada movimiento."},{autor:"Matías L.", stars:5, fecha:"Mar 2025", texto:"La mejor forma de invertir en LatAm que encontré."}] },
  { id: 5, nombre: "Cripto Core", autor: "Sofía Méndez", categoria_riesgo: "Agresivo", horizonte: "Mediano plazo", precio: 99.99, rentabilidad_historica: 51.3, descripcion: "Cartera activa de criptoactivos con rebalanceo mensual entre BTC, ETH y altcoins seleccionadas por fundamentales. Alta rentabilidad histórica acompañada de volatilidad significativa.", tags: ["BTC", "ETH", "Altcoins"], rating: 4.5, reviews_count: 74, historico: [18.2, 32.1, 24.8, 67.4, 38.2, 58.9, 51.3], reviews: [{autor:"Bruno K.", stars:5, fecha:"Jun 2025", texto:"51% histórico habla solo. Sofía sabe lo que hace."},{autor:"Pía C.", stars:4, fecha:"May 2025", texto:"Hay que bancarse la volatilidad pero los resultados son reales."},{autor:"Tomás A.", stars:5, fecha:"Abr 2025", texto:"La mejor estrategia cripto del sitio, sin dudas."}] },
  { id: 6, nombre: "Bonos Seguros", autor: "Lucas Fernández", categoria_riesgo: "Conservador", horizonte: "Corto plazo", precio: 19.99, rentabilidad_historica: 6.2, descripcion: "Estrategia 100% en renta fija. Incluye bonos soberanos y corporativos de alta calificación crediticia. Mínimo riesgo, rendimiento estable y predecible. Ideal como núcleo defensivo de una cartera.", tags: ["Renta fija", "Bonos", "Capital preservación"], rating: 4.6, reviews_count: 45, historico: [5.8, 5.9, 6.0, 6.1, 6.1, 6.2, 6.2], reviews: [{autor:"Elena F.", stars:5, fecha:"Jun 2025", texto:"Justo lo que buscaba. Seguro y predecible."},{autor:"Pablo G.", stars:4, fecha:"May 2025", texto:"Perfecto para la parte defensiva de mi cartera."},{autor:"Natalia S.", stars:5, fecha:"Mar 2025", texto:"Lucas explica todo de forma muy clara. Muy recomendable."}] },
  { id: 7, nombre: "Tech Leaders", autor: "Ignacio Ruiz", categoria_riesgo: "Moderado", horizonte: "Mediano plazo", precio: 74.99, rentabilidad_historica: 28.6, descripcion: "Cartera concentrada en las 15 empresas tecnológicas más innovadoras del mercado: IA, cloud computing y semiconductores. Rebalanceo trimestral basado en análisis de fundamentales y posicionamiento competitivo.", tags: ["Tecnología", "IA", "Cloud"], rating: 4.8, reviews_count: 83, historico: [10.2, 16.8, 22.4, 25.1, 27.3, 28.0, 28.6], reviews: [{autor:"Mariana T.", stars:5, fecha:"Jun 2025", texto:"Ignacio entiende el sector tech como pocos. Excelente."},{autor:"Julián P.", stars:5, fecha:"May 2025", texto:"Mis mejores rendimientos del año vinieron de acá."},{autor:"Rocío N.", stars:4, fecha:"Abr 2025", texto:"Muy buena selección. Algo concentrada pero vale la pena."}] },
  { id: 8, nombre: "Real Assets", autor: "Paula Sánchez", categoria_riesgo: "Moderado", horizonte: "Largo plazo", precio: 59.99, rentabilidad_historica: 15.3, descripcion: "Exposición diversificada a activos reales: REITs, infraestructura, commodities agrícolas y energía renovable. Protección inflacionaria con rendimiento estable. Ideal para diversificar carteras financieras convencionales.", tags: ["REITs", "Commodities", "Infraestructura"], rating: 4.4, reviews_count: 37, historico: [9.4, 11.2, 12.8, 13.9, 14.5, 15.0, 15.3], reviews: [{autor:"Gabriel M.", stars:4, fecha:"Jun 2025", texto:"Muy buen complemento para una cartera financiera."},{autor:"Valeria C.", stars:5, fecha:"May 2025", texto:"La inflación no me preocupa más gracias a esta estrategia."},{autor:"Sergio A.", stars:4, fecha:"Mar 2025", texto:"Buena diversificación. Paula es muy prolija."}] },
  { id: 9, nombre: "Small Caps AR", autor: "Tomás Giménez", categoria_riesgo: "Agresivo", horizonte: "Mediano plazo", precio: 79.99, rentabilidad_historica: 42.7, descripcion: "Estrategia enfocada en acciones de pequeña capitalización argentinas con alto potencial de revalorización. Selección basada en análisis bottom-up de balances y perspectivas sectoriales. Para inversores con horizonte mínimo de 2 años.", tags: ["Small cap", "Argentina", "Acciones"], rating: 4.0, reviews_count: 22, historico: [15.4, 28.9, 18.2, 52.1, 36.4, 44.8, 42.7], reviews: [{autor:"Leandro V.", stars:4, fecha:"Jun 2025", texto:"Alta volatilidad pero el potencial es real."},{autor:"Cecilia R.", stars:4, fecha:"Abr 2025", texto:"Tomás conoce muy bien el mercado local."},{autor:"Andrés M.", stars:4, fecha:"Mar 2025", texto:"Buen trabajo de análisis. Me convenció con los balances."}] },
  { id: 10, nombre: "ESG Portfolio", autor: "Valentina Cruz", categoria_riesgo: "Conservador", horizonte: "Largo plazo", precio: 44.99, rentabilidad_historica: 13.1, descripcion: "Cartera de inversión responsable con criterios ambientales, sociales y de gobernanza. Empresas líderes en energías renovables, movilidad eléctrica y economía circular. Rentabilidad competitiva sin comprometer valores.", tags: ["ESG", "Sustentable", "Renovables"], rating: 4.7, reviews_count: 56, historico: [7.2, 9.1, 10.8, 11.4, 12.2, 12.8, 13.1], reviews: [{autor:"Milagros P.", stars:5, fecha:"Jun 2025", texto:"Finalmente una estrategia que combina ética y rendimiento."},{autor:"Ezequiel B.", stars:5, fecha:"May 2025", texto:"Muy bien curada. Valentina tiene visión a largo plazo."},{autor:"Florencia C.", stars:4, fecha:"Abr 2025", texto:"La recomiendo si querés invertir responsablemente."}] },
  { id: 11, nombre: "Global Macro", autor: "Sebastián Mora", categoria_riesgo: "Agresivo", horizonte: "Corto plazo", precio: 94.99, rentabilidad_historica: 38.5, descripcion: "Estrategia macroeconómica global que posiciona la cartera según ciclos económicos, política monetaria y tensiones geopolíticas. Opera en divisas, tasas, commodities y equity. Máxima flexibilidad táctica.", tags: ["Macro", "Divisas", "Global"], rating: 4.6, reviews_count: 48, historico: [14.2, 22.8, 31.4, 28.9, 41.2, 36.8, 38.5], reviews: [{autor:"Maximiliano T.", stars:5, fecha:"Jun 2025", texto:"Sebastián tiene una visión macro impresionante."},{autor:"Jimena R.", stars:4, fecha:"May 2025", texto:"Compleja pero muy bien explicada. Resultados sólidos."},{autor:"Claudio F.", stars:5, fecha:"Mar 2025", texto:"La mejor estrategia táctica del sitio."}] },
  { id: 12, nombre: "Crypto DeFi", autor: "Ramiro Blanco", categoria_riesgo: "Agresivo", horizonte: "Corto plazo", precio: 109.99, rentabilidad_historica: 67.8, descripcion: "Exposición a protocolos de finanzas descentralizadas: liquidity mining, staking y yield farming optimizado. Gestión activa de riesgos de smart contracts. Solo para inversores con conocimiento previo del ecosistema cripto.", tags: ["DeFi", "Staking", "Web3"], rating: 4.2, reviews_count: 31, historico: [22.4, 45.8, 38.2, 89.4, 52.1, 71.3, 67.8], reviews: [{autor:"Kevin S.", stars:5, fecha:"Jun 2025", texto:"El yield farming nunca fue tan accesible. Excelente."},{autor:"Ailén M.", stars:4, fecha:"May 2025", texto:"Hay que entender DeFi para aprovecharlo al máximo."},{autor:"Damián P.", stars:4, fecha:"Abr 2025", texto:"Ramiro gestiona muy bien los riesgos de protocolo."}] },
  { id: 13, nombre: "Income Builder", autor: "Carolina Ríos", categoria_riesgo: "Conservador", horizonte: "Mediano plazo", precio: 39.99, rentabilidad_historica: 9.8, descripcion: "Estrategia de construcción de ingresos pasivos combinando dividendos, REITs residenciales e inversiones en bonos corporativos. Orientada a inversores que buscan flujo de efectivo mensual predecible.", tags: ["Ingresos pasivos", "REITs", "Dividendos"], rating: 4.8, reviews_count: 67, historico: [7.4, 8.1, 8.8, 9.2, 9.5, 9.7, 9.8], reviews: [{autor:"Nora B.", stars:5, fecha:"Jun 2025", texto:"Perfecta para complementar ingresos. Muy recomendable."},{autor:"Alberto C.", stars:5, fecha:"May 2025", texto:"Carolina explica todo de forma muy clara y honesta."},{autor:"Verónica M.", stars:5, fecha:"Abr 2025", texto:"La uso para generar ingresos sin tocar el capital."}] },
  { id: 14, nombre: "Asia Pacific", autor: "Florencia Paz", categoria_riesgo: "Moderado", horizonte: "Largo plazo", precio: 69.99, rentabilidad_historica: 19.4, descripcion: "Exposición estratégica a los mercados de mayor crecimiento de Asia Pacífico: Japón, Corea del Sur, India y ASEAN. Foco en consumo, tecnología y manufactura de precisión. Diversificación geográfica real fuera del eje occidental.", tags: ["Asia", "Emergentes", "Internacional"], rating: 4.3, reviews_count: 34, historico: [8.9, 12.4, 15.8, 17.2, 18.4, 19.1, 19.4], reviews: [{autor:"Santiago H.", stars:4, fecha:"Jun 2025", texto:"Muy buena para diversificar fuera de USA y Europa."},{autor:"Micaela T.", stars:5, fecha:"May 2025", texto:"India y Corea del Sur son el futuro. Florencia lo vio antes."},{autor:"Ignacio B.", stars:4, fecha:"Mar 2025", texto:"Exposición interesante aunque hay que entender los riesgos."}] },
  { id: 15, nombre: "Value Hunting", autor: "Martín Acosta", categoria_riesgo: "Moderado", horizonte: "Largo plazo", precio: 54.99, rentabilidad_historica: 24.8, descripcion: "Estrategia de inversión en valor al estilo Buffett. Identifica empresas subvaloradas con ventajas competitivas duraderas, sólidos flujos de caja y gestión de calidad. Horizonte de inversión de 3 a 5 años.", tags: ["Value", "Largo plazo", "Fundamentals"], rating: 4.9, reviews_count: 88, historico: [9.8, 14.2, 18.6, 21.4, 23.1, 24.2, 24.8], reviews: [{autor:"Hernán V.", stars:5, fecha:"Jun 2025", texto:"El mejor análisis fundamental que encontré en el marketplace."},{autor:"Laura A.", stars:5, fecha:"May 2025", texto:"Martín piensa como Buffett. Los resultados lo prueban."},{autor:"Ricardo P.", stars:5, fecha:"Abr 2025", texto:"Estrategia brillante. La uso como núcleo de mi cartera."}] },
  { id: 16, nombre: "Volatility Arb", autor: "Fernando Lagos", categoria_riesgo: "Agresivo", horizonte: "Corto plazo", precio: 119.99, rentabilidad_historica: 29.1, descripcion: "Estrategia de arbitraje de volatilidad usando opciones y derivados. Captura primas de volatilidad implícita vs realizada. Rendimientos positivos tanto en mercados alcistas como bajistas. Requiere comprensión de instrumentos derivados.", tags: ["Opciones", "Derivados", "Arbitraje"], rating: 4.1, reviews_count: 19, historico: [11.2, 18.4, 14.8, 32.6, 24.1, 28.8, 29.1], reviews: [{autor:"Oscar M.", stars:4, fecha:"Jun 2025", texto:"Muy sofisticada pero Fernando la explica bien."},{autor:"Renata S.", stars:4, fecha:"May 2025", texto:"Rinde bien en contextos de alta volatilidad."},{autor:"Pablo V.", stars:5, fecha:"Mar 2025", texto:"El arbitraje de vol es subestimado. Esta estrategia lo demuestra."}] },
  { id: 17, nombre: "Pension Pro", autor: "Silvia Torres", categoria_riesgo: "Conservador", horizonte: "Largo plazo", precio: 34.99, rentabilidad_historica: 10.2, descripcion: "Diseñada para inversores a 10+ años de su jubilación. Combina crecimiento en etapas tempranas con protección de capital en las tardías mediante glide path automático. Gestión pasiva de bajo costo.", tags: ["Jubilación", "Largo plazo", "Glide path"], rating: 4.5, reviews_count: 42, historico: [6.8, 7.9, 8.8, 9.4, 9.8, 10.0, 10.2], reviews: [{autor:"Mirta R.", stars:5, fecha:"Jun 2025", texto:"Exactamente lo que necesitaba para planificar mi retiro."},{autor:"Jorge B.", stars:4, fecha:"May 2025", texto:"Silvia entiende la planificación de largo plazo."},{autor:"Cristina A.", stars:5, fecha:"Abr 2025", texto:"La más apropiada para armar un fondo de retiro propio."}] },
  { id: 18, nombre: "Quant Alpha", autor: "Nicolás Castro", categoria_riesgo: "Agresivo", horizonte: "Mediano plazo", precio: 134.99, rentabilidad_historica: 44.6, descripcion: "Estrategia cuantitativa basada en modelos de machine learning y análisis de datos alternativos. Detección de señales estadísticas en precios, volúmenes y sentimiento de mercado. Opera en múltiples activos simultáneamente.", tags: ["Quant", "Machine Learning", "Algoritmos"], rating: 4.7, reviews_count: 53, historico: [16.8, 28.4, 34.2, 48.9, 38.4, 42.1, 44.6], reviews: [{autor:"Emanuel R.", stars:5, fecha:"Jun 2025", texto:"El futuro de la inversión. Nicolás sabe de ML de verdad."},{autor:"Antonella P.", stars:5, fecha:"May 2025", texto:"Datos alternativos como edge. Muy innovador."},{autor:"Gustavo C.", stars:4, fecha:"Abr 2025", texto:"Excelentes resultados. La documentación podría ser mejor."}] }
];

let filtroActivo = 'Todos';
let filtroHorizonte = 'Todos';
let searchQuery = '';
let carrito = [];
let detailActiveTab = 'overview';

function initials(n) { return n.split(' ').slice(0,2).map(x=>x[0]).join('').toUpperCase(); }
function badgeClass(r) { return r==='Conservador'?'badge-bajo':r==='Moderado'?'badge-medio':'badge-alto'; }
function starsHtml(r) { const full=Math.round(r); return '★'.repeat(full)+'☆'.repeat(5-full); }
function inCart(id) { return carrito.some(c=>c.id===id); }

function renderCards(data) {
  const grid = document.getElementById('cardGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultsCount');
  count.textContent = `${data.length} resultado${data.length!==1?'s':''}`;
  if (!data.length) { grid.innerHTML=''; empty.style.display='flex'; return; }
  empty.style.display='none';
  grid.innerHTML = data.map(e => `
    <article class="strat-card" tabindex="0" role="button" aria-label="Ver ${e.nombre}">
      <div class="card-head">
        <span class="card-name">${e.nombre}</span>
        <span class="badge ${badgeClass(e.categoria_riesgo)}">${e.categoria_riesgo}</span>
      </div>
      <div class="card-author"><div class="avatar">${initials(e.autor)}</div>${e.autor}<span style="margin-left:auto;font-size:11px;background:var(--blue-light);color:var(--blue);padding:2px 8px;border-radius:10px;font-weight:500">⏱ ${e.horizonte}</span></div>
      <div class="card-stars">
        <span class="stars">${starsHtml(e.rating)}</span>
        <span class="rating-num">${e.rating.toFixed(1)} (${e.reviews_count})</span>
      </div>
      <p class="card-desc">${e.descripcion}</p>
      <div class="card-foot">
        <span class="card-price">USD ${e.precio.toFixed(2)}</span>
        <span class="card-rent">
          <svg width="13" height="13" viewBox="0 0 22 22" fill="none" aria-hidden="true"><polyline points="2,16 8,9 13,13 20,5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          ${e.rentabilidad_historica.toFixed(1)}%
        </span>
        <button class="add-cart-btn ${inCart(e.id)?'in-cart':''}" data-id="${e.id}" onclick="event.stopPropagation(); toggleCart_item(${e.id})">
          ${inCart(e.id)?'✓ En carrito':'+ Carrito'}
        </button>
      </div>
    </article>
  `).join('');
  grid.querySelectorAll('.strat-card').forEach(card => {
    card.onclick = (e) => { if (!e.target.classList.contains('add-cart-btn')) openDetail(parseInt(card.querySelector('.add-cart-btn').dataset.id)); };
    card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') card.click(); });
  });
}

function applyFilters() {
  let data = [...estrategias];
  if (filtroActivo!=='Todos') data = data.filter(e=>e.categoria_riesgo===filtroActivo);
  if (filtroHorizonte!=='Todos') data = data.filter(e=>e.horizonte===filtroHorizonte);
  if (searchQuery) { const q=searchQuery.toLowerCase(); data=data.filter(e=>e.nombre.toLowerCase().includes(q)||e.autor.toLowerCase().includes(q)||e.descripcion.toLowerCase().includes(q)); }
  renderCards(data);
}

function openDetail(id) {
  const e = estrategias.find(x=>x.id===id);
  detailActiveTab = 'overview';
  const box = document.getElementById('detailBox');
  box.innerHTML = `
    <div class="modal-header">
      <div></div>
      <button class="close-btn" onclick="closeModal('detail')" aria-label="Cerrar">&times;</button>
    </div>
    <div class="detail-hero">
      <div class="detail-top">
        <h2 class="detail-title">${e.nombre}</h2>
        <span class="badge ${badgeClass(e.categoria_riesgo)}">${e.categoria_riesgo}</span>
      </div>
      <div class="detail-author-row">
        <div class="avatar" style="width:24px;height:24px;font-size:11px">${initials(e.autor)}</div>
        <span style="font-size:14px;color:var(--text-secondary)">${e.autor}</span>
        <span style="color:#94A3B8;font-size:13px">·</span>
        <span class="stars" style="font-size:13px">${starsHtml(e.rating)}</span>
        <span style="font-size:13px;color:var(--text-muted)">${e.rating.toFixed(1)} (${e.reviews_count} reseñas)</span>
      </div>
    </div>
    <div class="detail-tabs">
      <button class="tab-btn active" id="tab-overview" onclick="switchTab('overview')">Descripción</button>
      <button class="tab-btn" id="tab-chart" onclick="switchTab('chart')">Rentabilidad</button>
      <button class="tab-btn" id="tab-reviews" onclick="switchTab('reviews')">Reseñas</button>
    </div>
    <div class="tab-content active" id="content-overview">
      <div class="detail-metrics" style="grid-template-columns:repeat(4,1fr)">
        <div class="metric"><div class="metric-label">Precio</div><div class="metric-val">USD ${e.precio.toFixed(2)}</div></div>
        <div class="metric"><div class="metric-label">Rentabilidad histórica</div><div class="metric-val green">${e.rentabilidad_historica.toFixed(1)}%</div></div>
        <div class="metric"><div class="metric-label">Perfil de inversión</div><div class="metric-val" style="font-size:15px">${e.categoria_riesgo}</div></div>
        <div class="metric"><div class="metric-label">Horizonte</div><div class="metric-val" style="font-size:15px">${e.horizonte}</div></div>
      </div>
      <p class="detail-section-title">Acerca de esta estrategia</p>
      <p class="detail-desc-text">${e.descripcion}</p>
      <p class="detail-section-title">Etiquetas</p>
      <div class="detail-tags">${e.tags.map(t=>`<span class="detail-tag-pill">${t}</span>`).join('')}</div>
    </div>
    <div class="tab-content" id="content-chart">
      <div class="chart-wrap">
        <p class="chart-title">Rentabilidad histórica — últimos 7 períodos (%)</p>
        ${buildChart(e.historico, e.nombre)}
        <div class="chart-labels"><span>-6P</span><span>-5P</span><span>-4P</span><span>-3P</span><span>-2P</span><span>-1P</span><span>Actual</span></div>
      </div>
      <div class="detail-metrics">
        <div class="metric"><div class="metric-label">Máximo histórico</div><div class="metric-val green">${Math.max(...e.historico).toFixed(1)}%</div></div>
        <div class="metric"><div class="metric-label">Mínimo histórico</div><div class="metric-val">${Math.min(...e.historico).toFixed(1)}%</div></div>
        <div class="metric"><div class="metric-label">Tendencia</div><div class="metric-val" style="font-size:15px">${e.historico[e.historico.length-1]>e.historico[0]?'📈 Alcista':'📉 Bajista'}</div></div>
      </div>
    </div>
    <div class="tab-content" id="content-reviews">
      <div class="reviews-summary">
        <div>
          <div class="reviews-big-num">${e.rating.toFixed(1)}</div>
          <div class="reviews-stars-big">${starsHtml(e.rating)}</div>
          <div class="reviews-count-text">${e.reviews_count} reseñas</div>
        </div>
        <div style="flex:1;padding-left:16px">
          ${[5,4,3,2,1].map(s=>`
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span style="font-size:12px;color:var(--text-muted);width:8px">${s}</span>
              <div style="flex:1;height:6px;background:var(--bg-secondary);border-radius:3px;overflow:hidden">
                <div style="height:100%;background:#F59E0B;border-radius:3px;width:${s===5?72:s===4?18:s===3?7:2}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="reviews-list">
        ${e.reviews.map(r=>`
          <div class="review-card">
            <div class="review-header">
              <span class="review-author"><div class="avatar" style="width:22px;height:22px;font-size:9px">${initials(r.autor)}</div>${r.autor}</span>
              <span class="review-date">${r.fecha}</span>
            </div>
            <div class="review-stars">${starsHtml(r.stars)}</div>
            <p class="review-text" style="margin-top:6px">${r.texto}</p>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="detail-footer">
      <span class="detail-price-big">USD ${e.precio.toFixed(2)}</span>
      <div class="detail-actions">
        <button class="btn-secondary" onclick="closeModal('detail')">Cerrar</button>
        <button class="btn-primary" onclick="addToCartFromDetail(${e.id})" id="detailCartBtn">
          ${inCart(e.id)?'✓ En carrito':'+ Agregar al carrito'}
        </button>
      </div>
    </div>
  `;
  document.getElementById('detailModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildChart(data, nombre) {
  const w=580, h=130, pad=20;
  const min=Math.min(...data), max=Math.max(...data);
  const range=max-min||1;
  const pts = data.map((v,i)=>{
    const x = pad + (i/(data.length-1))*(w-pad*2);
    const y = h - pad - ((v-min)/range)*(h-pad*2);
    return `${x},${y}`;
  });
  const area = `M${pts[0]} ` + pts.slice(1).map(p=>`L${p}`).join(' ') + ` L${pad+(w-pad*2)},${h-pad} L${pad},${h-pad} Z`;
  const line = `M${pts[0]} ` + pts.slice(1).map(p=>`L${p}`).join(' ');
  return `<svg class="chart-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Gráfico de rentabilidad de ${nombre}">
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#3B82F6" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    <path d="${area}" fill="url(#chartGrad)"/>
    <path d="${line}" fill="none" stroke="#3B82F6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    ${data.map((v,i)=>{
      const x=pad+(i/(data.length-1))*(w-pad*2);
      const y=h-pad-((v-min)/range)*(h-pad*2);
      return `<circle cx="${x}" cy="${y}" r="4" fill="#3B82F6" stroke="white" stroke-width="2"/>`;
    }).join('')}
    ${data.map((v,i)=>{
      const x=pad+(i/(data.length-1))*(w-pad*2);
      const y=h-pad-((v-min)/range)*(h-pad*2);
      return `<text x="${x}" y="${y-10}" text-anchor="middle" font-size="10" fill="#64748B">${v.toFixed(1)}%</text>`;
    }).join('')}
  </svg>`;
}

function switchTab(tab) {
  ['overview','chart','reviews'].forEach(t=>{
    document.getElementById(`tab-${t}`).classList.toggle('active', t===tab);
    document.getElementById(`content-${t}`).classList.toggle('active', t===tab);
  });
}

function toggleCart_item(id) {
  if (inCart(id)) {
    carrito = carrito.filter(c=>c.id!==id);
    showToast('Estrategia eliminada del carrito');
  } else {
    const e = estrategias.find(x=>x.id===id);
    carrito.push({id:e.id, nombre:e.nombre, autor:e.autor, precio:e.precio});
    showToast(`"${e.nombre}" agregada al carrito`);
  }
  updateCartUI();
  applyFilters();
}

function addToCartFromDetail(id) {
  toggleCart_item(id);
  const btn = document.getElementById('detailCartBtn');
  if (btn) btn.textContent = inCart(id) ? '✓ En carrito' : '+ Agregar al carrito';
}

function updateCartUI() {
  const count = carrito.length;
  const countEl = document.getElementById('cartCount');
  countEl.style.display = count>0?'flex':'none';
  countEl.textContent = count;
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!carrito.length) {
    container.innerHTML = `<div class="cart-empty">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      <p style="font-size:14px">Tu carrito está vacío</p>
      <p style="font-size:13px">Agregá estrategias para comprarlas</p>
    </div>`;
    footer.innerHTML = '';
    return;
  }
  container.innerHTML = carrito.map(item=>`
    <div class="cart-item">
      <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">${initials(item.autor)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-author">${item.autor}</div>
        <div class="cart-item-price">USD ${item.precio.toFixed(2)}</div>
      </div>
      <button class="cart-item-remove" onclick="toggleCart_item(${item.id})" aria-label="Eliminar">&times;</button>
    </div>
  `).join('');
  const total = carrito.reduce((s,i)=>s+i.precio, 0);
  footer.innerHTML = `
    <div class="cart-total-row">
      <span class="cart-total-label">Total (${carrito.length} estrategia${carrito.length!==1?'s':''})</span>
      <span class="cart-total-val">USD ${total.toFixed(2)}</span>
    </div>
    <button class="btn-primary cart-checkout-btn" onclick="openCheckout()">Finalizar compra →</button>
  `;
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const open = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', open);
  if (open) document.body.style.overflow='hidden';
  else document.body.style.overflow='';
}

function openCheckout() {
  toggleCart();
  const total = carrito.reduce((s,i)=>s+i.precio,0);
  const content = document.getElementById('checkoutContent');
  content.innerHTML = `
    <div class="checkout-content">
      <div class="checkout-items-summary">
        ${carrito.map(i=>`<div class="checkout-item-row"><span>${i.nombre}</span><span>USD ${i.precio.toFixed(2)}</span></div>`).join('')}
        <div class="checkout-total-row"><span>Total</span><span>USD ${total.toFixed(2)}</span></div>
      </div>
      <div class="checkout-step active" id="step-payment">
        <p class="step-title">Datos de pago</p>
        <div class="payment-icons">
          <span class="payment-icon">VISA</span>
          <span class="payment-icon">MC</span>
          <span class="payment-icon">AMEX</span>
        </div>
        <div class="form-group"><label>Nombre en la tarjeta</label><input type="text" placeholder="Juan Pérez" id="ckNombre"/></div>
        <div class="form-group"><label>Número de tarjeta</label><input type="text" placeholder="1234 5678 9012 3456" id="ckNumero" maxlength="19" oninput="formatCard(this)"/></div>
        <div class="form-row">
          <div class="form-group"><label>Vencimiento</label><input type="text" placeholder="MM/AA" id="ckVenc" maxlength="5" oninput="formatDate(this)"/></div>
          <div class="form-group"><label>CVV</label><input type="text" placeholder="123" id="ckCvv" maxlength="4"/></div>
        </div>
        <div class="checkout-actions">
          <button class="btn-secondary" onclick="closeModal('checkout')">Cancelar</button>
          <button class="btn-primary" onclick="processPayment()">Pagar USD ${total.toFixed(2)}</button>
        </div>
      </div>
      <div class="checkout-step" id="step-success">
        <div class="success-box">
          <div class="success-icon">🎉</div>
          <div class="success-title">¡Compra exitosa!</div>
          <p class="success-sub">Accediste a ${carrito.length} estrategia${carrito.length!==1?'s':''}. Te enviamos los detalles por email.</p>
          <div style="margin-top:20px">
            <button class="btn-primary" onclick="finishCheckout()">Ver mis estrategias</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow='hidden';
}

function formatCard(el) {
  let v = el.value.replace(/\D/g,'').substring(0,16);
  el.value = v.replace(/(.{4})/g,'$1 ').trim();
}
function formatDate(el) {
  let v = el.value.replace(/\D/g,'');
  if (v.length>=2) v = v.substring(0,2)+'/'+v.substring(2,4);
  el.value = v;
}

function processPayment() {
  const nombre = document.getElementById('ckNombre').value.trim();
  const numero = document.getElementById('ckNumero').value.replace(/\s/g,'');
  const venc = document.getElementById('ckVenc').value;
  const cvv = document.getElementById('ckCvv').value;
  if (!nombre || numero.length<16 || venc.length<5 || cvv.length<3) { showToast('⚠ Completá todos los campos'); return; }
  document.getElementById('step-payment').classList.remove('active');
  document.getElementById('step-success').classList.add('active');
}

function finishCheckout() {
  carrito = [];
  updateCartUI();
  closeModal('checkout');
  applyFilters();
  showToast('¡Bienvenido a tus nuevas estrategias!');
}

function openModal(type) {
  document.getElementById(`${type}Modal`).classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(type) {
  document.getElementById(`${type}Modal`).classList.remove('open');
  document.body.style.overflow='';
}

function publishStrategy() {
  const nombre=document.getElementById('pubNombre').value.trim();
  const autor=document.getElementById('pubAutor').value.trim();
  const riesgo=document.getElementById('pubRiesgo').value;
  const horizonte=document.getElementById('pubHorizonte').value;
  const precio=parseFloat(document.getElementById('pubPrecio').value);
  const rent=parseFloat(document.getElementById('pubRent').value);
  const desc=document.getElementById('pubDesc').value.trim();
  if(!nombre||!autor||!desc||isNaN(precio)||isNaN(rent)){showToast('⚠ Completá todos los campos');return;}
  const nueva={id:estrategias.length+1,nombre,autor,categoria_riesgo:riesgo,horizonte,precio:parseFloat(precio.toFixed(2)),rentabilidad_historica:parseFloat(rent.toFixed(1)),descripcion:desc,tags:['Nueva'],rating:5.0,reviews_count:0,historico:[rent],reviews:[]};
  estrategias.unshift(nueva);
  closeModal('publish');
  ['pubNombre','pubAutor','pubPrecio','pubRent','pubDesc'].forEach(id=>document.getElementById(id).value='');
  filtroActivo='Todos';
  document.querySelectorAll('#chips .chip').forEach(c=>c.classList.toggle('active',c.dataset.filter==='Todos'));
  document.querySelectorAll('#chipsHorizonte .chip').forEach(c=>c.classList.toggle('active',c.dataset.horizonte==='Todos'));
  filtroHorizonte='Todos';
  searchQuery=''; document.getElementById('searchInput').value='';
  applyFilters();
  document.getElementById('statTotal').textContent=estrategias.length;
  showToast(`✓ "${nombre}" publicada exitosamente`);
}

function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2800);
}

document.getElementById('searchInput').addEventListener('input',e=>{searchQuery=e.target.value;applyFilters();});
document.getElementById('chips').addEventListener('click',e=>{
  const chip=e.target.closest('.chip'); if(!chip)return;
  filtroActivo=chip.dataset.filter;
  document.querySelectorAll('#chips .chip').forEach(c=>c.classList.toggle('active',c===chip));
  applyFilters();
});
document.getElementById('chipsHorizonte').addEventListener('click',e=>{
  const chip=e.target.closest('.chip'); if(!chip)return;
  filtroHorizonte=chip.dataset.horizonte;
  document.querySelectorAll('#chipsHorizonte .chip').forEach(c=>c.classList.toggle('active',c===chip));
  applyFilters();
});
document.getElementById('detailModal').addEventListener('click',e=>{if(e.target===document.getElementById('detailModal'))closeModal('detail');});
document.getElementById('publishModal').addEventListener('click',e=>{if(e.target===document.getElementById('publishModal'))closeModal('publish');});
document.getElementById('checkoutModal').addEventListener('click',e=>{if(e.target===document.getElementById('checkoutModal'))closeModal('checkout');});
document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal('detail');closeModal('publish');closeModal('checkout');if(document.getElementById('cartSidebar').classList.contains('open'))toggleCart();}});

applyFilters();
