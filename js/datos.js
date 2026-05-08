/* Datos de GreciaESO - 1 ESO - Antigua Grecia */
// eslint-disable-next-line no-unused-vars
const UNIDADES = [
  {
    id: 1,
    titulo: "Los origenes de la civilizacion griega",
    subtitulo: "Territorio de la Helade, minoicos y micenicos",
    icono: "🌍",
    imagen: "images/u1-helade.svg",
    teoria: `
      <h2>1. Los origenes de la civilizacion griega</h2>
      <h3>1.1 El territorio de la Helade</h3>
      <p>La civilizacion griega surgio en el extremo oriental del mar Mediterraneo, entre los mares Jonico y Egeo. Su territorio, de dimensiones semejantes al de la actual Grecia, se extendia por la peninsula Balcanica, las costas de Asia Menor y una gran cantidad de islas y archipielagos.</p>
      <p>El territorio griego era irregular y accidentado, con profundos valles entre montanas que dificultaban la agricultura y las comunicaciones. Por ello, la antigua Grecia nunca constituyo un Estado unificado y se organizo en diferentes ciudades-estado autonomas e independientes: la polis griega.</p>
      <p>A pesar de estar divididos en diferentes polis, los antiguos griegos se sentian miembros de una misma civilizacion. Denominaban a su territorio Helade, el pais de los helenos, porque compartian una misma lengua, religion y cultura.</p>
      <ul>
        <li><b>Relieve accidentado:</b> favorecio ciudades politicamente separadas.</li>
        <li><b>Gran contacto con el mar:</b> impulso comercio, navegacion y fundacion de colonias.</li>
        <li><b>Clima mediterraneo:</b> base de la trilogia agraria (olivo, vid y cereal).</li>
      </ul>
      <figure class="img-figure">
        <img src="images/u1-helade.svg" alt="Mapa conceptual del territorio de la Helade">
        <figcaption>Representacion didactica del espacio geografico de la Helade.</figcaption>
      </figure>
      <h3>1.2 Nacimiento de la civilizacion griega</h3>
      <p>La historia de Grecia puede dividirse en varias etapas desde sus inicios hasta la dominacion romana. En la Edad de los Metales se desarrollaron dos civilizaciones prehelenicas que constituyen los origenes de la civilizacion griega: la cultura minoica o cretense y la cultura micenica.</p>
      <p><b>Civilizacion minoica o cretense (3000 - 1250 a.C.)</b></p>
      <ul>
        <li><b>Localizacion:</b> se desarrollo en la isla de Creta desde el III milenio a.C.</li>
        <li><b>Situacion geografica:</b> permitio convertirse en el centro comercial y cultural mas importante de la epoca (talasocracia).</li>
        <li><b>Principales construcciones:</b> palacios donde residian los reyes y desde donde se dirigia el comercio maritimo, como Cnosos.</li>
        <li><b>Religion:</b> destaco el culto a la fecundidad (Diosa Madre) y al toro como simbolo de fortaleza.</li>
      </ul>
      <p><b>Civilizacion micenica (1600 - 1150 a.C.)</b></p>
      <ul>
        <li><b>Contexto:</b> convivio con la cultura minoica y se desarrollo en la peninsula del Peloponeso.</li>
        <li><b>Organizacion:</b> ciudades amuralladas como Micenas y Argos, orientadas al comercio y gobernadas por reyes en palacios lujosos.</li>
        <li><b>Rituales funerarios:</b> enterramientos en tumbas circulares (tholos) con ricos ajuares, joyas y armas.</li>
        <li><b>Aportacion historica:</b> sento bases politicas y culturales del posterior mundo griego.</li>
      </ul>
      <p>Tras la crisis del mundo micenico se abre una etapa de transicion, y con el tiempo surgira la Grecia arcaica de las polis.</p>
    `,
    ejercicios: [
      {
        id: "u1e1",
        tipo: "test",
        enunciado: "La Helade se caracterizaba por...",
        opciones: ["Grandes llanuras continuas", "Relieve montañoso y costa recortada", "Desiertos extensos", "Clima polar"],
        respuesta: 1,
        explicacion: "El relieve montañoso y el mar explican la dispersión en polis."
      },
      {
        id: "u1e2",
        tipo: "test",
        enunciado: "La civilización minoica se desarrolló principalmente en...",
        opciones: ["Esparta", "Atenas", "Creta", "Macedonia"],
        respuesta: 2,
        explicacion: "La civilización minoica se desarrolló en la isla de Creta."
      },
      {
        id: "u1e3",
        tipo: "ordenar",
        enunciado: "Ordena cronológicamente estas civilizaciones (de más antigua a más reciente):",
        elementos: ["Civilización micénica", "Civilización minoica"],
        correcto: ["Civilización minoica", "Civilización micénica"],
        explicacion: "Primero minoica, después micénica."
      },
      {
        id: "u1e4",
        tipo: "input",
        enunciado: "Escribe el nombre del palacio minoico más famoso:",
        respuestaTexto: "cnosos",
        explicacion: "Cnosos es el palacio más conocido de Creta."
      }
    ]
  },
  {
    id: 2,
    titulo: "La polis griega",
    subtitulo: "Ciudades independientes y formas de gobierno",
    icono: "🏛️",
    imagen: "images/u2-polis.svg",
    teoria: `
      <h2>2. La polis griega</h2>
      <p>Hacia el 1150 a.C., Grecia vivio una etapa de crisis conocida como <b>epoca oscura (1150-800 a.C.)</b>. Durante la epoca arcaica se consolido una nueva forma de organizacion: la <b>polis griega</b>, ciudad-estado autonoma.</p>
      <h3>Las polis griegas eran ciudades independientes</h3>
      <p>Eran ciudades-estado autonomas e independientes, cada una con sus propias leyes, moneda, ejercito y gobierno. Solian situarse en lugares elevados y amurallados para facilitar la defensa.</p>
      <ul>
        <li><b>Agora:</b> plaza publica en el centro, lugar de mercado, reuniones y vida civica.</li>
        <li><b>Acropolis:</b> recinto amurallado en la zona alta con templos y edificios religiosos.</li>
        <li><b>Territorio de la polis:</b> nucleo urbano y tierras de cultivo del entorno.</li>
      </ul>
      <h3>Con formas de vida similares</h3>
      <p>Los griegos compartian actividades economicas semejantes:</p>
      <ul>
        <li><b>Ganaderia:</b> ovejas, cabras y cerdos.</li>
        <li><b>Agricultura:</b> trigo, cebada, vid y olivo.</li>
        <li><b>Artesania:</b> tejidos, ceramica, joyas y armas.</li>
      </ul>
      <p>El comercio fue la actividad principal. Hubo comercio interior en el agora y comercio exterior por el Mediterraneo. Se usaban dracmas de plata; se exportaban vinos, aceites y ceramicas, y se importaban cereales, madera y metales preciosos.</p>
      <h3>Pero con diferentes tipos de gobierno</h3>
      <ul>
        <li><b>Monarquia:</b> poder en manos de un monarca con autoridad politica y militar.</li>
        <li><b>Oligarquia:</b> gobierno de una minoria aristocratica.</li>
        <li><b>Tirania:</b> poder personal por la fuerza o apoyo popular coyuntural.</li>
        <li><b>Democracia:</b> participacion de ciudadanos en asambleas y votaciones.</li>
      </ul>
      <h3>La colonizacion griega</h3>
      <p>En epoca arcaica se produjo una gran expansion y colonizacion griega. El crecimiento demografico y la escasez de tierras cultivables impulsaron la emigracion y la fundacion de nuevas colonias independientes por el Mediterraneo y el mar Negro.</p>
      <ul>
        <li><b>Efecto economico:</b> gran crecimiento economico y comercial.</li>
        <li><b>Red comercial:</b> los griegos tejieron una amplia red por todo el Mediterraneo.</li>
        <li><b>Colonias destacadas:</b> Ampurias, Massalia y Siracusa.</li>
      </ul>
      <figure class="img-figure">
        <img src="images/u2-polis.svg" alt="Ilustracion de una polis griega">
        <figcaption>La polis combinaba ciudad, territorio y comunidad politica.</figcaption>
      </figure>
    `,
    ejercicios: [
      {
        id: "u2e1",
        tipo: "test",
        enunciado: "La llamada época oscura griega se sitúa aproximadamente entre...",
        opciones: ["3000-1250 a.C.", "1600-1150 a.C.", "1150-800 a.C.", "490-334 a.C."],
        respuesta: 2,
        explicacion: "La época oscura se ubica entre 1150 y 800 a.C."
      },
      {
        id: "u2e2",
        tipo: "test",
        enunciado: "El ágora en una polis era...",
        opciones: ["La fortaleza militar", "La plaza pública para mercado y reuniones", "El templo principal", "El puerto comercial"],
        respuesta: 1,
        explicacion: "El ágora era la plaza pública central de la vida económica y cívica."
      },
      {
        id: "u2e3",
        tipo: "verdadero_falso",
        enunciado: "En el comercio exterior griego se usaban dracmas de plata.",
        respuestaVF: true,
        explicacion: "La dracma fue una moneda usada en los intercambios comerciales."
      },
      {
        id: "u2e4",
        tipo: "input",
        enunciado: "Escribe el nombre de una colonia griega destacada en la península ibérica:",
        respuestaTexto: "ampurias",
        explicacion: "Ampurias (Emporion) fue una colonia griega destacada en la costa ibérica."
      },
      {
        id: "u2e5",
        tipo: "test",
        enunciado: "Una causa importante de la colonización griega fue...",
        opciones: ["La ausencia de comercio", "La escasez de tierras cultivables", "La conquista romana", "El fin de la agricultura"],
        respuesta: 1,
        explicacion: "El aumento de población y la falta de tierras impulsaron la fundación de colonias."
      }
    ]
  },
  {
    id: 3,
    titulo: "Como era la democracia ateniense",
    subtitulo: "Instituciones y sociedad de Atenas",
    icono: "⚖️",
    imagen: "images/u3-democracia.svg",
    teoria: `
      <h2>3. Como era la democracia ateniense</h2>
      <p>El mayor esplendor de la antigua Grecia se alcanzo en la <b>epoca clasica (490-334 a.C.)</b>, etapa de gran madurez politica, artistica y cultural. Entre las polis destacaron Atenas y Esparta.</p>
      <p>En el siglo V a.C. se consolido en Atenas la democracia como sistema de gobierno, basada en instituciones que permitian la participacion de los ciudadanos en la toma de decisiones de la polis.</p>
      <h3>ATENAS: instituciones</h3>
      <ul>
        <li><b>Boule o Consejo:</b> 500 ciudadanos encargados de preparar leyes y asuntos politicos.</li>
        <li><b>Ecclesia o Asamblea:</b> ciudadanos que trataban los asuntos principales, elegian cargos y votaban leyes.</li>
        <li><b>Los magistrados:</b> funcionarios del gobierno de la polis; destacaban arcontes (funciones politicas y religiosas) y estrategos (funciones militares).</li>
        <li><b>Tribunales de justicia (Heliea):</b> instituciones populares para la administracion de justicia.</li>
      </ul>
      <h3>Sociedad ateniense</h3>
      <p>La sociedad ateniense no era igualitaria. Solo algunos hombres eran ciudadanos y podian participar en la vida politica: varones adultos nacidos de padre y madre atenienses.</p>
      <ul>
        <li><b>Ciudadanos:</b> participaban en la Asamblea, formaban parte del ejercito y podian ocupar cargos publicos.</li>
        <li><b>Mujeres:</b> sin derechos politicos, con vida orientada al ambito domestico.</li>
        <li><b>Metecos:</b> extranjeros residentes, artesanos o comerciantes; pagaban impuestos y podian servir en el ejercito, sin derechos politicos plenos.</li>
        <li><b>Esclavos y esclavas:</b> considerados propiedad, sin libertad juridica ni derechos politicos.</li>
      </ul>
      <div class="nota-box">
        La democracia ateniense fue un gran avance historico, aunque excluia a una gran parte de la poblacion.
      </div>
      <figure class="img-figure">
        <img src="images/u3-democracia.svg" alt="Esquema de instituciones democraticas atenienses">
        <figcaption>Principales instituciones politicas de la democracia ateniense.</figcaption>
      </figure>
    `,
    ejercicios: [
      {
        id: "u3e1",
        tipo: "test",
        enunciado: "La época clásica griega se sitúa aproximadamente entre...",
        opciones: ["1150-800 a.C.", "490-334 a.C.", "356-323 a.C.", "30-1 a.C."],
        respuesta: 1,
        explicacion: "La época clásica se ubica entre 490 y 334 a.C."
      },
      {
        id: "u3e2",
        tipo: "test",
        enunciado: "¿Cuántos ciudadanos formaban la Boule o Consejo?",
        opciones: ["100", "300", "500", "1000"],
        respuesta: 2,
        explicacion: "La Boule estaba compuesta por 500 ciudadanos."
      },
      {
        id: "u3e3",
        tipo: "verdadero_falso",
        enunciado: "Los estrategos eran magistrados con funciones militares.",
        respuestaVF: true,
        explicacion: "En Atenas, los estrategos destacaban por sus funciones militares."
      },
      {
        id: "u3e4",
        tipo: "verdadero_falso",
        enunciado: "Los metecos tenían los mismos derechos políticos que los ciudadanos.",
        respuestaVF: false,
        explicacion: "Los metecos eran residentes extranjeros sin ciudadanía política plena."
      },
      {
        id: "u3e5",
        tipo: "input",
        enunciado: "Nombre griego de la Asamblea ateniense de ciudadanos:",
        respuestaTexto: "ecclesia",
        explicacion: "La Asamblea se llamaba Ecclesia."
      }
    ]
  },
  {
    id: 4,
    titulo: "Alejandro Magno y la epoca helenistica",
    subtitulo: "Expansion macedonica y fusion cultural",
    icono: "🛡️",
    imagen: "images/u4-helenismo.svg",
    teoria: `
      <h2>4. Alejandro Magno y la epoca helenistica</h2>
      <p>Tras las guerras del siglo V a.C. y la rivalidad entre polis, Macedonia se convirtio en una potencia decisiva en el mundo griego.</p>
      <p><b>Alejandro (356-323 a.C.)</b>, hijo de Filipo de Macedonia, fue educado por Aristoteles. Al suceder a su padre concentro el poder y puso en marcha una expansion militar sin precedentes.</p>
      <ul>
        <li><b>Conquistas en una decada:</b> derroto al Imperio persa y creo un gran imperio desde el mar Egeo hasta la India.</li>
        <li><b>Hegemonia territorial:</b> su imperio fue el mayor de la Antiguedad en su momento.</li>
        <li><b>Helenismo:</b> su expansion favorecio la difusion de la cultura y civilizacion griega.</li>
        <li><b>Prestigio personal:</b> su capacidad militar le valio el sobrenombre de "el Grande".</li>
      </ul>
      <p>Alejandro murio en Babilonia en 323 a.C. Sus sucesores no mantuvieron la unidad del imperio, que se fragmento en varios reinos helenisticos. Finalmente Grecia paso a ser provincia romana en 30 a.C.</p>
      <figure class="img-figure">
        <img src="images/u4-helenismo.svg" alt="Ilustracion sobre expansion helenistica">
        <figcaption>Expansion y difusion del mundo helenistico tras Alejandro.</figcaption>
      </figure>
    `,
    ejercicios: [
      {
        id: "u4e1",
        tipo: "test",
        enunciado: "Alejandro Magno fue hijo de...",
        opciones: ["Pericles", "Filipo de Macedonia", "Leonidas", "Dario III"],
        respuesta: 1,
        explicacion: "Alejandro era hijo del rey macedonio Filipo."
      },
      {
        id: "u4e2",
        tipo: "test",
        enunciado: "¿En aproximadamente cuántos años conquistó Alejandro su gran imperio?",
        opciones: ["2", "5", "10", "30"],
        respuesta: 2,
        explicacion: "La expansión principal de Alejandro se realizó en torno a diez años."
      },
      {
        id: "u4e3",
        tipo: "test",
        enunciado: "¿Qué significa el término helenismo en este contexto?",
        opciones: ["Retorno a la monarquía micénica", "Difusión de la cultura griega por amplios territorios", "Prohibición del comercio", "Un tipo de templo"],
        respuesta: 1,
        explicacion: "El helenismo identifica la difusión cultural griega tras las conquistas de Alejandro."
      },
      {
        id: "u4e4",
        tipo: "input",
        enunciado: "Ciudad donde murió Alejandro Magno en 323 a.C.:",
        respuestaTexto: "babilonia",
        explicacion: "Alejandro murió en Babilonia en el año 323 a.C."
      }
    ]
  },
  {
    id: 5,
    titulo: "Arte en la Antigua Grecia",
    subtitulo: "Arquitectura, templos y ordenes clasicos",
    icono: "🎨",
    imagen: "images/u5-arte.svg",
    teoria: `
      <h2>5. Arte en la Antigua Grecia</h2>
      <h3>Caracteristicas de la arquitectura griega</h3>
      <ul>
        <li>Busqueda de belleza y perfeccion a traves de la proporcion, el equilibrio y la medida correcta.</li>
        <li>Arquitectura a medida humana, no colosal como en Egipto.</li>
        <li>Construcciones urbanas realizadas principalmente en piedra y marmol.</li>
        <li>Edificios adintelados: no usaban arco ni boveda, sino cubiertas planas y columnas.</li>
        <li>Funcion sobre todo religiosa, con ejemplos como templos y teatros.</li>
      </ul>
      <h3>Templos y ordenes clasicos</h3>
      <p>El templo era el edificio mas importante de la arquitectura griega, considerado residencia de los dioses. Se levantaba en piedra (marmol y caliza), era policromo y presentaba fachada con fronton triangular rodeada de columnas.</p>
      <p>Para decorar el exterior se desarrollaron tres ordenes arquitectonicos, combinaciones de columnas y entablamentos que se consideraban modelos de belleza:</p>
      <ul>
        <li><b>Dorico:</b> sobrio y corpulento.</li>
        <li><b>Jonico:</b> mas ligero y esbelto, con volutas.</li>
        <li><b>Corintio:</b> inspirado en el jonico, con hojas de acanto.</li>
      </ul>
      <figure class="img-figure">
        <img src="images/u5-arte.svg" alt="Ilustracion de templo griego clasico">
        <figcaption>Modelo didactico de templo con columnas y fronton.</figcaption>
      </figure>
    `,
    ejercicios: [
      {
        id: "u5e1",
        tipo: "test",
        enunciado: "La arquitectura griega buscaba sobre todo...",
        opciones: ["Monumentalidad colosal", "Proporción, equilibrio y medida", "Decoración barroca", "Altura extrema"],
        respuesta: 1,
        explicacion: "El ideal griego se basaba en proporción, equilibrio y medida correcta."
      },
      {
        id: "u5e2",
        tipo: "test",
        enunciado: "Los edificios griegos eran principalmente...",
        opciones: ["Abovedados", "De madera", "Adintelados", "Subterráneos"],
        respuesta: 2,
        explicacion: "Usaban sistema adintelado con columnas y cubiertas horizontales."
      },
      {
        id: "u5e3",
        tipo: "test",
        enunciado: "¿Qué orden clásico se reconoce por las volutas en el capitel?",
        opciones: ["Dórico", "Jónico", "Corintio", "Toscano"],
        respuesta: 1,
        explicacion: "El orden jónico se distingue por sus volutas."
      },
      {
        id: "u5e4",
        tipo: "verdadero_falso",
        enunciado: "El templo era el edificio más importante de la arquitectura griega.",
        respuestaVF: true,
        explicacion: "Se consideraba la residencia de los dioses y eje de la arquitectura religiosa."
      }
    ]
  },
  {
    id: 6,
    titulo: "Religion y cultura en la Antigua Grecia",
    subtitulo: "Mitologia griega y legado cultural",
    icono: "⚡",
    imagen: "images/u6-mitologia.svg",
    teoria: `
      <h2>6. Religion y cultura en la Antigua Grecia</h2>
      <h3>Mitologia griega</h3>
      <p>La religion griega era politeista: creian en muchos dioses representados con aspecto humano (antropomorfos). Los dioses eran inmortales, tenian poderes sobrehumanos y eran responsables de mantener el orden del mundo.</p>
      <p>Los mitos surgieron como relatos para explicar el origen del mundo, del ser humano y de los fenomenos de la naturaleza.</p>
      <ul>
        <li><b>Dioses olimpicos:</b> Zeus, Hera, Poseidon, Afrodita, Atenea, Hades, Ares, entre otros.</li>
        <li><b>Heroes y criaturas:</b> Hercules, Teseo, Perseo, ciclopos, centauros y gorgonas.</li>
        <li><b>Culto religioso:</b> cada polis estaba protegida por una divinidad y construia templos para su culto.</li>
        <li><b>Fiestas comunes:</b> Juegos Olimpicos periodicos en honor de los dioses.</li>
      </ul>
      <h3>La cultura griega</h3>
      <p>La filosofia nacio en Grecia: los pensadores sustituyeron explicaciones miticas por la razon. Destacaron Socrates, Platon y Aristoteles.</p>
      <p>En literatura se desarrollo la poesia epica sobre heroes y mitos; obras fundamentales fueron <i>La Iliada</i> y <i>La Odisea</i>, atribuidas a Homero.</p>
      <p>El teatro fue otra gran aportacion: espectaculo publico con mascaras, tragedias y comedias.</p>
      <p>Las ciencias avanzaron gracias al pensamiento racional: Pitagoras y Euclides (matematicas), Arquimedes (fisica), Eratostenes (astronomia), Hipocrates y Galeno (medicina), Herodoto y Tucidides (historia).</p>
      <figure class="img-figure">
        <img src="images/u6-mitologia.svg" alt="Ilustracion simbolica de mitologia griega">
        <figcaption>Religion, mitologia y cultura como ejes del legado griego.</figcaption>
      </figure>
    `,
    ejercicios: [
      {
        id: "u6e1",
        tipo: "test",
        enunciado: "La religión griega era...",
        opciones: ["Monoteísta", "Politeísta", "Atea", "Sin dioses antropomorfos"],
        respuesta: 1,
        explicacion: "Los griegos adoraban numerosos dioses."
      },
      {
        id: "u6e2",
        tipo: "test",
        enunciado: "¿Qué obra épica se atribuye a Homero?",
        opciones: ["La Eneida", "La Ilíada", "Metamorfosis", "La República"],
        respuesta: 1,
        explicacion: "La Ilíada (junto con La Odisea) se atribuye tradicionalmente a Homero."
      },
      {
        id: "u6e3",
        tipo: "test",
        enunciado: "¿Quién destacó en matemáticas dentro de la cultura griega?",
        opciones: ["Pitágoras", "Pericles", "Alejandro", "Leónidas"],
        respuesta: 0,
        explicacion: "Pitágoras y Euclides son referencias matemáticas de la Grecia antigua."
      },
      {
        id: "u6e4",
        tipo: "input",
        enunciado: "Dios principal del Olimpo en la mitología griega:",
        respuestaTexto: "zeus",
        explicacion: "Zeus presidía el monte Olimpo."
      },
      {
        id: "u6e5",
        tipo: "verdadero_falso",
        enunciado: "En el teatro griego se representaban tragedias y comedias.",
        respuestaVF: true,
        explicacion: "El teatro griego distinguió especialmente tragedias y comedias."
      },
      {
        id: "u6e6",
        tipo: "verdadero_falso",
        enunciado: "La cultura griega no tuvo influencia en Roma.",
        respuestaVF: false,
        explicacion: "Roma heredará y adaptará gran parte de la cultura griega."
      }
    ]
  }
];
