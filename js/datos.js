/* Datos de GreciaESO - 1 ESO - Antigua Grecia */
// eslint-disable-next-line no-unused-vars
const UNIDADES = [
  {
    id: 1,
    titulo: "Los orígenes de la civilización griega",
    subtitulo: "Territorio de la Hélade, minoicos y micénicos",
    icono: "🌍",
    imagen: "images/u1-helade.svg",
    teoria: `
      <h2>1. Los orígenes de la civilización griega</h2>
      <h3>1.1 El territorio de la Hélade</h3>
      <p>La civilización griega surgió en el extremo oriental del mar Mediterráneo, entre los mares Jónico y Egeo. Su territorio, de dimensiones semejantes al de la actual Grecia, se extendía por la península Balcánica, las costas de Asia Menor y una gran cantidad de islas y archipiélagos.</p>
      <p>El territorio griego era irregular y accidentado, con profundos valles entre montañas que dificultaban la agricultura y las comunicaciones. Por ello, la antigua Grecia nunca constituyó un Estado unificado y se organizó en diferentes ciudades-estado autónomas e independientes: la polis griega.</p>
      <p>A pesar de estar divididos en diferentes polis, los antiguos griegos se sentían miembros de una misma civilización. Denominaban a su territorio Hélade, el país de los helenos, porque compartían una misma lengua, religión y cultura.</p>
      <ul>
        <li><b>Relieve accidentado:</b> favoreció ciudades políticamente separadas.</li>
        <li><b>Gran contacto con el mar:</b> impulsó comercio, navegación y fundación de colonias.</li>
        <li><b>Clima mediterraneo:</b> base de la trilogia agraria (olivo, vid y cereal).</li>
      </ul>
      <figure class="img-figure">
        <img src="images/u1-helade.svg" alt="Mapa conceptual del territorio de la Helade">
        <figcaption>Representación didáctica del espacio geográfico de la Hélade.</figcaption>
      </figure>
      <h3>1.2 Nacimiento de la civilización griega</h3>
      <p>La historia de Grecia puede dividirse en varias etapas desde sus inicios hasta la dominación romana. En la Edad de los Metales se desarrollaron dos civilizaciones prehelénicas que constituyen los orígenes de la civilización griega: la cultura minoica o cretense y la cultura micénica.</p>
      <p><b>Civilización minoica o cretense (3000 - 1250 a.C.)</b></p>
      <ul>
        <li><b>Localización:</b> se desarrolló en la isla de Creta desde el III milenio a.C.</li>
        <li><b>Situación geográfica:</b> permitió convertirse en el centro comercial y cultural más importante de la época (talasocracia).</li>
        <li><b>Principales construcciones:</b> palacios donde residían los reyes y desde donde se dirigía el comercio marítimo, como Cnosos.</li>
        <li><b>Religión:</b> destacó el culto a la fecundidad (Diosa Madre) y al toro como símbolo de fortaleza.</li>
      </ul>
      <p><b>Civilización micénica (1600 - 1150 a.C.)</b></p>
      <ul>
        <li><b>Contexto:</b> convivió con la cultura minoica y se desarrolló en la península del Peloponeso.</li>
        <li><b>Organización:</b> ciudades amuralladas como Micenas y Argos, orientadas al comercio y gobernadas por reyes en palacios lujosos.</li>
        <li><b>Rituales funerarios:</b> enterramientos en tumbas circulares (tholos) con ricos ajuares, joyas y armas.</li>
        <li><b>Aportación histórica:</b> sentó bases políticas y culturales del posterior mundo griego.</li>
      </ul>
      <p>Tras la crisis del mundo micénico se abre una etapa de transición, y con el tiempo surgirá la Grecia arcaica de las polis.</p>
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
      <p>Hacia el 1150 a.C., Grecia vivió una etapa de crisis conocida como <b>época oscura (1150-800 a.C.)</b>. Durante la época arcaica se consolidó una nueva forma de organización: la <b>polis griega</b>, ciudad-estado autónoma.</p>
      <h3>Las polis griegas eran ciudades independientes</h3>
      <p>Eran ciudades-estado autónomas e independientes, cada una con sus propias leyes, moneda, ejército y gobierno. Solían situarse en lugares elevados y amurallados para facilitar la defensa.</p>
      <ul>
        <li><b>Ágora:</b> plaza pública en el centro, lugar de mercado, reuniones y vida cívica.</li>
        <li><b>Acrópolis:</b> recinto amurallado en la zona alta con templos y edificios religiosos.</li>
        <li><b>Territorio de la polis:</b> núcleo urbano y tierras de cultivo del entorno.</li>
      </ul>
      <h3>Con formas de vida similares</h3>
      <p>Los griegos compartían actividades económicas semejantes:</p>
      <ul>
        <li><b>Ganadería:</b> ovejas, cabras y cerdos.</li>
        <li><b>Agricultura:</b> trigo, cebada, vid y olivo.</li>
        <li><b>Artesanía:</b> tejidos, cerámica, joyas y armas.</li>
      </ul>
      <p>El comercio fue la actividad principal. Hubo comercio interior en el ágora y comercio exterior por el Mediterráneo. Se usaban dracmas de plata; se exportaban vinos, aceites y cerámicas, y se importaban cereales, madera y metales preciosos.</p>
      <h3>Pero con diferentes tipos de gobierno</h3>
      <ul>
        <li><b>Monarquía:</b> poder en manos de un monarca con autoridad política y militar.</li>
        <li><b>Oligarquía:</b> gobierno de una minoría aristocrática.</li>
        <li><b>Tiranía:</b> poder personal por la fuerza o apoyo popular coyuntural.</li>
        <li><b>Democracia:</b> participación de ciudadanos en asambleas y votaciones.</li>
      </ul>
      <h3>La colonización griega</h3>
      <p>En época arcaica se produjo una gran expansión y colonización griega. El crecimiento demográfico y la escasez de tierras cultivables impulsaron la emigración y la fundación de nuevas colonias independientes por el Mediterráneo y el mar Negro.</p>
      <ul>
        <li><b>Efecto económico:</b> gran crecimiento económico y comercial.</li>
        <li><b>Red comercial:</b> los griegos tejieron una amplia red por todo el Mediterraneo.</li>
        <li><b>Colonias destacadas:</b> Ampurias, Massalia y Siracusa.</li>
      </ul>
      <figure class="img-figure">
        <img src="images/u2-polis.svg" alt="Ilustracion de una polis griega">
        <figcaption>La polis combinaba ciudad, territorio y comunidad política.</figcaption>
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
    titulo: "Cómo era la democracia ateniense",
    subtitulo: "Instituciones y sociedad de Atenas",
    icono: "⚖️",
    imagen: "images/u3-democracia.svg",
    teoria: `
      <h2>3. Cómo era la democracia ateniense</h2>
      <p>El mayor esplendor de la antigua Grecia se alcanzó en la <b>época clásica (490-334 a.C.)</b>, etapa de gran madurez política, artística y cultural. Entre las polis destacaron Atenas y Esparta.</p>
      <p>En el siglo V a.C. se consolidó en Atenas la democracia como sistema de gobierno, basada en instituciones que permitían la participación de los ciudadanos en la toma de decisiones de la polis.</p>
      <h3>ATENAS: instituciones</h3>
      <ul>
        <li><b>Boule o Consejo:</b> 500 ciudadanos encargados de preparar leyes y asuntos políticos.</li>
        <li><b>Ecclesia o Asamblea:</b> ciudadanos que trataban los asuntos principales, elegían cargos y votaban leyes.</li>
        <li><b>Los magistrados:</b> funcionarios del gobierno de la polis; destacaban arcontes (funciones políticas y religiosas) y estrategos (funciones militares).</li>
        <li><b>Tribunales de justicia (Heliea):</b> instituciones populares para la administración de justicia.</li>
      </ul>
      <h3>Sociedad ateniense</h3>
      <p>La sociedad ateniense no era igualitaria. Solo algunos hombres eran ciudadanos y podían participar en la vida política: varones adultos nacidos de padre y madre atenienses.</p>
      <ul>
        <li><b>Ciudadanos:</b> participaban en la Asamblea, formaban parte del ejército y podían ocupar cargos públicos.</li>
        <li><b>Mujeres:</b> sin derechos políticos, con vida orientada al ámbito doméstico.</li>
        <li><b>Metecos:</b> extranjeros residentes, artesanos o comerciantes; pagaban impuestos y podían servir en el ejército, sin derechos políticos plenos.</li>
        <li><b>Esclavos y esclavas:</b> considerados propiedad, sin libertad jurídica ni derechos políticos.</li>
      </ul>
      <div class="nota-box">
        La democracia ateniense fue un gran avance histórico, aunque excluía a una gran parte de la población.
      </div>
      <figure class="img-figure">
        <img src="images/u3-democracia.svg" alt="Esquema de instituciones democráticas atenienses">
        <figcaption>Principales instituciones políticas de la democracia ateniense.</figcaption>
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
    titulo: "Alejandro Magno y la época helenística",
    subtitulo: "Expansión macedónica y fusión cultural",
    icono: "🛡️",
    imagen: "images/u4-helenismo.svg",
    teoria: `
      <h2>4. Alejandro Magno y la época helenística</h2>
      <p>Tras las guerras del siglo V a.C. y la rivalidad entre polis, Macedonia se convirtió en una potencia decisiva en el mundo griego.</p>
      <p><b>Alejandro (356-323 a.C.)</b>, hijo de Filipo de Macedonia, fue educado por Aristóteles. Al suceder a su padre concentró el poder y puso en marcha una expansión militar sin precedentes.</p>
      <ul>
        <li><b>Conquistas en una década:</b> derrotó al Imperio persa y creó un gran imperio desde el mar Egeo hasta la India.</li>
        <li><b>Hegemonía territorial:</b> su imperio fue el mayor de la Antigüedad en su momento.</li>
        <li><b>Helenismo:</b> su expansión favoreció la difusión de la cultura y civilización griega.</li>
        <li><b>Prestigio personal:</b> su capacidad militar le valió el sobrenombre de "el Grande".</li>
      </ul>
      <p>Alejandro murió en Babilonia en 323 a.C. Sus sucesores no mantuvieron la unidad del imperio, que se fragmentó en varios reinos helenísticos. Finalmente Grecia pasó a ser provincia romana en 30 a.C.</p>
      <figure class="img-figure">
        <img src="images/u4-helenismo.svg" alt="Ilustración sobre expansión helenística">
        <figcaption>Expansión y difusión del mundo helenístico tras Alejandro.</figcaption>
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
    subtitulo: "Arquitectura, templos y órdenes clásicos",
    icono: "🎨",
    imagen: "images/u5-arte.svg",
    teoria: `
      <h2>5. Arte en la Antigua Grecia</h2>
      <h3>Características de la arquitectura griega</h3>
      <ul>
        <li>Búsqueda de belleza y perfección a través de la proporción, el equilibrio y la medida correcta.</li>
        <li>Arquitectura a medida humana, no colosal como en Egipto.</li>
        <li>Construcciones urbanas realizadas principalmente en piedra y mármol.</li>
        <li>Edificios adintelados: no usaban arco ni bóveda, sino cubiertas planas y columnas.</li>
        <li>Función sobre todo religiosa, con ejemplos como templos y teatros.</li>
      </ul>
      <h3>Templos y órdenes clásicos</h3>
      <p>El templo era el edificio más importante de la arquitectura griega, considerado residencia de los dioses. Se levantaba en piedra (mármol y caliza), era policromo y presentaba fachada con frontón triangular rodeada de columnas.</p>
      <p>Para decorar el exterior se desarrollaron tres órdenes arquitectónicos, combinaciones de columnas y entablamentos que se consideraban modelos de belleza:</p>
      <ul>
        <li><b>Dórico:</b> sobrio y corpulento.</li>
        <li><b>Jónico:</b> más ligero y esbelto, con volutas.</li>
        <li><b>Corintio:</b> inspirado en el jonico, con hojas de acanto.</li>
      </ul>
      <figure class="img-figure">
        <img src="images/u5-arte.svg" alt="Ilustración de templo griego clásico">
        <figcaption>Modelo didáctico de templo con columnas y frontón.</figcaption>
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
    titulo: "Religión y cultura en la Antigua Grecia",
    subtitulo: "Mitología griega y legado cultural",
    icono: "⚡",
    imagen: "images/u6-mitologia.svg",
    teoria: `
      <h2>6. Religión y cultura en la Antigua Grecia</h2>
      <h3>Mitología griega</h3>
      <p>La religión griega era politeísta: creían en muchos dioses representados con aspecto humano (antropomorfos). Los dioses eran inmortales, tenían poderes sobrehumanos y eran responsables de mantener el orden del mundo.</p>
      <p>Los mitos surgieron como relatos para explicar el origen del mundo, del ser humano y de los fenómenos de la naturaleza.</p>
      <ul>
        <li><b>Dioses olímpicos:</b> Zeus, Hera, Poseidón, Afrodita, Atenea, Hades, Ares, entre otros.</li>
        <li><b>Héroes y criaturas:</b> Hércules, Teseo, Perseo, cíclopes, centauros y gorgonas.</li>
        <li><b>Culto religioso:</b> cada polis estaba protegida por una divinidad y construía templos para su culto.</li>
        <li><b>Fiestas comunes:</b> Juegos Olímpicos periódicos en honor de los dioses.</li>
      </ul>
      <h3>La cultura griega</h3>
      <p>La filosofía nació en Grecia: los pensadores sustituyeron explicaciones míticas por la razón. Destacaron Sócrates, Platón y Aristóteles.</p>
      <p>En literatura se desarrolló la poesía épica sobre héroes y mitos; obras fundamentales fueron <i>La Ilíada</i> y <i>La Odisea</i>, atribuidas a Homero.</p>
      <p>El teatro fue otra gran aportación: espectáculo público con máscaras, tragedias y comedias.</p>
      <p>Las ciencias avanzaron gracias al pensamiento racional: Pitágoras y Euclides (matemáticas), Arquímedes (física), Eratóstenes (astronomía), Hipócrates y Galeno (medicina), Heródoto y Tucídides (historia).</p>
      <figure class="img-figure">
        <img src="images/u6-mitologia.svg" alt="Ilustración simbólica de mitología griega">
        <figcaption>Religión, mitología y cultura como ejes del legado griego.</figcaption>
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
