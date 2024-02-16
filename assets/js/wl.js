const wrds = [
    //  Palabras de 7 letras
    {
        wR: "espinas",
        hT: "Prolongación aguda y afilada que tienen ciertos animales y plantas en su superficie.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "bandera",
        hT: "Pieza de tela, que se sujeta por uno de sus lados a un asta.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "derecho",
        hT: "Lo recto, lo rígido, lo correcto.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "ganador",
        hT: "Que gana, especialmente en una competición, disputa o enfrentamiento.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "cerveza",
        hT: "Bebida de sabor amargo y color amarillento, que se obtiene por fermentación de la cebada.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "certeza",
        hT: "Conocimiento seguro y claro que se tiene de algo.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "corteza",
        hT: "Parte exterior del tallo, la raíz y las ramas de los árboles, arbustos y plantas leñosas.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "experto",
        hT: "Que es muy hábil o tiene gran experiencia en un trabajo o actividad.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "fluvial",
        hT: "De los ríos o que tiene relación con ellos.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "helices",
        hT: "Mecanismo compuesto por varias palas o aspas ladeadas que, al girar con fuerza alrededor de un eje desplazan el fluido en el que están.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  10
    {
        wR: "huertos",
        hT: "Terrenos de regadío de pequeña extensión destinado al cultivo de verduras, legumbres y árboles frutales.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "idiomas",
        hT: "Sistemas de signos que utiliza una comunidad para comunicarse oralmente o por escrito.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "limosna",
        hT: "Dinero o bien que se da como ayuda a un necesitado.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "liquido",
        hT: "Sustancia cuyas partículas presentan mayor movilidad que los sólidos y menor que los gases.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "oxigeno",
        hT: "Gas incoloro e inodoro que se encuentra en el aire, en el agua, en los seres vivos.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "parvada",
        hT: "Grupo de aves, en general de misma especie, que actúan de modo homogéneo mientras vuelan.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "tsunami",
        hT: "Ola de grandes dimensiones originada cerca de la costa por un seísmo o erupción volcánica submarina.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "tornado",
        hT: "Gigantesco embudo de aire, que sopla en espiral ciclónica hacia arriba.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "unisono",
        hT: "Tiene el mismo tono o sonido que otra cosa.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "tecnica",
        hT: "Conjunto de procedimientos o recursos que se usan en un arte, en especial se adquieren por medio de su práctica.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  20
    {
        wR: "vestido",
        hT: "Prenda que cubre y resguarda el cuerpo femenino.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "fluidez",
        hT: "Capacidad de un discurso de expresarse correctamente con cierta facilidad.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "glacial",
        hT: "Que es extremadamente frío o que hiela.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "titular",
        hT: "Enunciado que encabeza una información o noticia y resume de forma sucinta el contenido de la misma.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "voluble",
        hT: "Propio de una persona que cambia fácil o frecuentemente de manera de ser.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "inverso",
        hT: "Es opuesto o contrario en el orden, dirección, posición o sentido.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "acuerdo",
        hT: "Decisión sobre algo tomada en común por varias personas.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "avenida",
        hT: "Calle ancha, que generalmente tiene dos sentidos de circulación.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "farmaco",
        hT: "Sustancia que sirve para reducir o aliviar un dolor físico.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "nitidez",
        hT: "Que está limpio, claro y transparente.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  30
    {
        wR: "onirico",
        hT: "Perteneciente a los sueños, sucesos que se imaginan mientras se duerme.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "impacto",
        hT: "Choque violento de una cosa en movimiento contra otra.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "calidad",
        hT: "Superioridad o excelencia de algo o de alguien.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "sublime",
        hT: "Que es extraordinariamente bello y produce una gran emoción.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "mensaje",
        hT: "Noticia o comunicación que una persona envía a otra o pone en su conocimiento.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "detalle",
        hT: "Parte, hecho o circunstancia que contribuye a formar o completar una cosa pero no es indispensable en ella.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "honesto",
        hT: "Que actúa rectamente, cumpliendo su deber y de acuerdo con la moral.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "castigo",
        hT: "Pena que se impone a la persona que ha cometido un delito, una falta o ha tenido un mal comportamiento.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "esencia",
        hT: "Extracto concentrado de los principios que dan olor o sabor a una sustancia.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "inmenso",
        hT: "Que es tan grande que no puede medirse.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  40
    {
        wR: "energia",
        hT: "Capacidad que tiene la materia de producir trabajo en forma de movimiento, luz, calor.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "ventaja",
        hT: "Circunstancia o situación que da superioridad en alguna cosa.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "natural",
        hT: "Que forma parte de la naturaleza de algo y es propio y característico de ello.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "evaluar",
        hT: "Valorar conocimientos, actitud o rendimiento de una persona o de un servicio.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "reducir",
        hT: "Hacer menor la cantidad, el tamaño, la intensidad o la importancia de una cosa.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "moderno",
        hT: "Que pertenece al presente, al tiempo actual.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "valorar",
        hT: "Atribuir o determinar el valor de algo o de alguien teniendo en cuenta diversos elementos o juicios.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "vinculo",
        hT: "Unión o relación no material, especialmente la que se establece entre dos personas.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "potente",
        hT: "Que tiene mucha fuerza para realizar una función o una acción, o para producir un efecto determinado.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "excluir",
        hT: "Sacar o dejar fuera de un lugar o de un grupo a alguien o algo.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  50
    {
        wR: "espacio",
        hT: "Medio físico en el que se sitúan los cuerpos y los movimientos, que suele caracterizarse como tridimensional e ilimitado.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "dominar",
        hT: "Tener e imponer la supremacía en cuanto al poder, la autoridad o la fuerza sobre algo o alguien.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "euforia",
        hT: "Sensación exteriorizada de optimismo y bienestar.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "novedad",
        hT: "Cosa que es nueva, que antes no existía.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "palabra",
        hT: "Unidad léxica constituida por un sonido o conjunto de sonidos articulados que tienen un significado fijo.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "confort",
        hT: "Condiciones materiales que proporcionan bienestar o comodidad.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "sonrisa",
        hT: "Gesto de alegría, felicidad o placer que se hace curvando la boca hacia arriba.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "cultura",
        hT: "Conjunto de ideas no especializadas adquiridas gracias a la lectura, el estudio y el trabajo.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "perfume",
        hT: "Sustancia aromática elaborada para dar un olor agradable.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "planeta",
        hT: "Cuerpo celeste sólido que gira alrededor de una estrella y que no emite luz propia.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  60
    {
        wR: "secreto",
        hT: "Que solamente es conocido por un número limitado de personas.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "juguete",
        hT: "Objeto que sirve para jugar y está destinado expresamente a este fin.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "dibujar",
        hT: "Representar figuras de personas, animales o cosas en una superficie mediante líneas trazadas.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "arribar",
        hT: "Llegar al puerto que es su destino.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "exaltar",
        hT: "Conceder grandeza, honor o gran valor a una persona o cosa.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "furtivo",
        hT: "Que se hace a escondidas o de manera disimulada.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "incidir",
        hT: "Influir en un asunto o causar un efecto en él.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "iglesia",
        hT: "Conjunto de personas que profesan la religión cristiana.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "efusivo",
        hT: "Manifestación intensa de sentimientos de alegría o afecto.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "sensato",
        hT: "Que muestra buen juicio, prudencia y madurez en sus actos y decisiones.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  70
    {
        wR: "ensayar",
        hT: "Poner en práctica una acción o actividad para poder perfeccionar su ejecución.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "nodriza",
        hT: "Vehículo que se emplea para aprovisionar a otros de menor tamaño.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "nublado",
        hT: "Que está parcial o completamente cubierto de nubes.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "refugio",
        hT: "Lugar que sirve para protegerse de un peligro.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "caricia",
        hT: "Roce suave de algo que produce una sensación agradable.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "turismo",
        hT: "Actividad recreativa que consiste en viajar o recorrer un país o lugar por placer.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "cristal",
        hT: "Vidrio endurecido, transparente e incoloro, que se obtiene de la fusión a elevada temperatura.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "pintura",
        hT: "Sustancia o producto de textura líquida o espesa con que se da color a una cosa.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "premisa",
        hT: "Afirmación o idea que se da como cierta y que sirve de base a un razonamiento o una discusión.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "amuleto",
        hT: "Objeto portátil al que se le atribuye un poder mágico.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  80
    {
        wR: "ultraje",
        hT: "Hecho o insulto que ofende a una persona por atentar contra su dignidad.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "adverso",
        hT: "Que es contrario, negativo o desfavorable.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "disfraz",
        hT: "Vestimenta con que alguien cambia o modifica su aspecto o condición para no ser reconocido.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "parcial",
        hT: "Que tiene relación con una parte del todo.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "batalla",
        hT: "Enfrentamiento, lucha o conflicto entre personas para imponerse al oponente.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "hechizo",
        hT: "Acción de someter la voluntad de alguien o de modificar el destino mediante el uso de brebajes o remedios mágicos.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "decreto",
        hT: "Resolución o decisión que toma una persona o un organismo con autoridad para ello.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "cerebro",
        hT: "Parte del encéfalo, constituida por una masa de tejido nervioso y que se ocupa de las funciones cognitivas y del control de actividades vitales.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "cancion",
        hT: "Pieza musical cantada.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "litigio",
        hT: "Enfrentamiento o disputa entre dos personas o partes en un juicio.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  90
    {
        wR: "apostar",
        hT: "Exponer una cantidad de dinero o una pertenencia para tomar parte en un juego.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "oficina",
        hT: "Lugar donde se realiza un trabajo profesional de gestión, administración.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "testigo",
        hT: "Persona que está presente en un acto o en una acción, con o sin intención de dar testimonio de lo que ha ocurrido.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "cotizar",
        hT: "Poner o fijar precio a algo.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "galante",
        hT: "Que es muy educado, cortés y atento en el trato.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "exhalar",
        hT: "Desprender o despedir gases, vapores u olores.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "zumbido",
        hT: "Ruido continuado y monótono que produce molestia o resulta desagradable, como el que producen ciertos insectos al volar.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "acogida",
        hT: "Recibimiento que se ofrece a una persona cuando llega a un lugar.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "fachada",
        hT: "Parte o cara visible de los muros exteriores de un edificio o de otra cosa en relación.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "neutral",
        hT: "Que no se inclina en favor de ninguna de las partes opuestas o enfrentadas en una lucha o competición.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  100
    {
        wR: "momento",
        hT: "Espacio de tiempo muy breve.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "ofrecer",
        hT: "Poner a disposición del público un producto o servicio.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "funcion",
        hT: "Actividad particular que realiza una persona o una cosa dentro de un sistema de elementos.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "mostrar",
        hT: "Exponer una cosa de forma que pueda ser vista por alguien con detenimiento.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "cumplir",
        hT: "Hacer aquello que determina una obligación.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "gracias",
        hT: "Expresión que se usa para agradecer algo a una persona.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "ilusion",
        hT: "Esperanza, con o sin fundamento real, de lograr o de que suceda algo que se anhela.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "montaña",
        hT: "Elevación natural del terreno de gran altura.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "obligar",
        hT: "Hacer con autoridad, que una persona cumpla con determinada cosa, sin dejarle posibilidad de elegir.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "posible",
        hT: "Que puede ser o suceder, o que se puede realizar.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  110
    {
        wR: "escasez",
        hT: "Existencia limitada e insuficiente de algo, especialmente si se considera necesario.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "opinion",
        hT: "Idea, juicio o concepto que una persona tiene o se forma acerca de algo o alguien.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "escuela",
        hT: "Institución destinada a la enseñanza, que proporciona conocimientos que se consideran básicos.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "columna",
        hT: "Elemento arquitectónico de soporte, rígido, más alto que ancho y normalmente de sección cilíndrica.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "campaña",
        hT: "Conjunto de actividades o de trabajos encaminados a conseguir un fin.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "memoria",
        hT: "Capacidad de recordar.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "sugerir",
        hT: "Indicar o insinuar a una persona que haga cierta cosa.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "dividir",
        hT: "Distribuir algo que puede partirse entre varias personas.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "alianza",
        hT: "Pacto o unión entre personas, grupos sociales o estados para lograr un fin común.",
        lCs: ['', '', '', '', '', '', '']
    },
    {
        wR: "deducir",
        hT: "Extraer una conclusión a partir de hechos, sean generales o particulares.",
        lCs: ['', '', '', '', '', '', '']
    },
    //  120





    //  Palabras de 6 letras
    {
        wR: "acuñar",
        hT: "Imprimir en objeto de metal, especialmente en una moneda.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "islote",
        hT: "Isla pequeña y generalmente despoblada.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "planta",
        hT: "Organismo vivo que crece sin poder moverse.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "soltar",
        hT: "Hacer que algo o alguien deje de estar asido, atado o retenido.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "cambio",
        hT: "Dinero que se devuelve al comprador cuando entrega una cantidad superior al importe.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "modelo",
        hT: "Cosa que sirve como pauta para ser imitada, reproducida o copiada.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "dinero",
        hT: "Conjunto de monedas y billetes que se usan como medio legal de pago.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "dormir",
        hT: "Reposar, con los ojos cerrados, en un estado inconsciente en el que se produce la suspensión de movimientos voluntarios.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "eterno",
        hT: "Que no puede ser medido por el tiempo, que no tiene ni principio ni fin.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "espeso",
        hT: "Que tiene mucha densidad o condensación.",
        lCs: ['', '', '', '', '', '']
    },
    //  10
    {
        wR: "inicio",
        hT: "Punto de donde parte, nace o surge una cosa.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "margen",
        hT: "Zona, límite o extremo de un lugar o terreno.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "fresca",
        hT: "Temperatura moderadamente fría, tal que resulta agradable o que no molesta.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "origen",
        hT: "Fenómeno o hecho que es el principio.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "social",
        hT: "Perteneciente o relativo a la sociedad.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "nombre",
        hT: "Palabra o conjunto de palabras con las que se designan y se distinguen los seres vivos y los objetos físicos o abstractos.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "anhelo",
        hT: "Deseo intenso o vehemente de una cosa.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "severo",
        hT: "Que es estricto y riguroso al aplicar una ley o una regla.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: "correo",
        hT: "Servicio público que se encarga del transporte y reparto de la correspondencia.",
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'javier',
        hT: 'Nombre propio masculino, que tiene su origen en el santo católico Francisco de Javier',
        lCs: ['', '', '', '', '', '']
    },
    //  20
    {
        wR: 'pensar',
        hT: 'Formar o combinar ideas o juicios en la mente',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'grande',
        hT: 'Que tiene un tamaño superior al que se considera normal',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'fuerte',
        hT: 'Que resiste el uso continuado, el rozamiento o que está firmemente sujeto y es difícil de arrancar, quitar o romper',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'equipo',
        hT: 'Grupo de personas que juega unido contra otro en una competición deportiva o en un juego',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'origen',
        hT: 'Lugar de donde procede una cosa',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'hombre',
        hT: 'Persona adulta de sexo masculino',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'camino',
        hT: 'Franja de terreno utilizada o dispuesta para caminar o ir de un lugar a otro',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'cuidar',
        hT: 'Procurar, a una cosa o persona, la vigilancia o las atenciones necesarias para evitarle algún mal o peligro',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'enviar',
        hT: 'Hacer llegar una cosa a un lugar.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'poseer',
        hT: 'Tener una cosa o a una persona en su poder o ser dueño de ella.',
        lCs: ['', '', '', '', '', '']
    },
    //  30
    {
        wR: 'relato',
        hT: 'Cuento o narración de carácter literario, generalmente breve.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'cuerpo',
        hT: 'Conjunto de las partes que forman un ser vivo.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'volver',
        hT: 'Poner una cosa en el estado o el lugar originales.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'sentir',
        hT: 'Percibir una sensación proveniente de un estímulo externo o del propio cuerpo.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'asunto',
        hT: 'Cosa o hecho que sucede o interesa, en el que se piensa, del que se trata o sobre el cual se realizan gestiones.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'asunto',
        hT: 'Cosa o hecho que sucede o interesa, en el que se piensa, del que se trata o sobre el cual se realizan gestiones.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'fuente',
        hT: 'Lugar donde brota una corriente de agua, ya sea del suelo, de entre las rocas, de un caño o de una llave.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'efecto',
        hT: 'Cosa producida por una causa.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'buscar',
        hT: 'Hacer lo necesario para encontrar o hallar a una persona o una cosa',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'cariño',
        hT: 'Sentimiento moderado de amor o afecto hacia una persona o un animal',
        lCs: ['', '', '', '', '', '']
    },
    //  40
    {
        wR: 'enigma',
        hT: 'Dicho o cosa que tiene un significado o un sentido oculto y que es difícil de comprender o interpretar',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'vender',
        hT: 'Dar una cosa a alguien a cambio de una determinada cantidad de dinero',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'aludir',
        hT: 'Referirse a una persona o una cosa sin nombrarlos de forma expresa',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'numero',
        hT: 'Concepto matemático que expresa una cantidad',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'pueblo',
        hT: 'Conjunto de personas que vive en una población, región o país determinados',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'regalo',
        hT: 'Cosa que se da a una persona como muestra de afecto o de consideración',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'hablar',
        hT: 'Mantener una conversación con una persona u otras acerca de un asunto',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'divino',
        hT: 'De dios o de los dioses o relacionado con ellos',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'evento',
        hT: 'Acontecimiento, especialmente si es de cierta importancia',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'desear',
        hT: 'Querer determinada cosa, generalmente buena, para alguien',
        lCs: ['', '', '', '', '', '']
    },
    //  50
    {
        wR: 'puente',
        hT: 'Construcción que se levanta sobre una depresión del terreno o en otro sitio para comunicar dos lados',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'huella',
        hT: 'Señal que un cuerpo deja en el suelo al moverse',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'elogio',
        hT: 'Reconocimiento de los méritos o cualidades de una persona',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'pasado',
        hT: 'Que es anterior al presente.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'apoyar',
        hT: 'Poner una cosa de manera que otra la sostenga para que no se caiga.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'reunir',
        hT: 'Unir de nuevo algo que se ha separado.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'bailar',
        hT: 'Mover el cuerpo y las extremidades con ritmo siguiendo el compás de una pieza musical.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'fragil',
        hT: 'Que se puede romper fácilmente.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'asiduo',
        hT: 'Que realiza con constancia y con cierta continuidad o frecuencia alguna cosa.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'sonido',
        hT: 'Sensación producida en el oído por un conjunto de vibraciones que se propagan por un medio elástico, como el aire.',
        lCs: ['', '', '', '', '', '']
    },
    //  60
    {
        wR: 'fervor',
        hT: 'Sentimiento y actitud de profunda veneración religiosa.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'formal',
        hT: 'Que cumple con las condiciones necesarias o con los requisitos establecidos.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'futuro',
        hT: 'Que existirá o sucederá en un tiempo posterior al presente.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'amargo',
        hT: 'Por su sabor causa disgusto.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'estilo',
        hT: 'Conjunto de rasgos peculiares que caracterizan a un artista.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'narrar',
        hT: 'Contar algo que ha sucedido realmente, o un hecho o historia ficticios.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'gritar',
        hT: 'Hablar con un tono de voz más alto de lo que se considera normal.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'precio',
        hT: 'Cantidad de dinero que permite la adquisición o uso de un bien o servicio.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'fundar',
        hT: 'Establecer una ciudad, un edificio, una empresa, un organismo, una institución.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'ritual',
        hT: 'Es una secuencia de actividades que implican palabras, acciones realizados según una secuencia establecida.',
        lCs: ['', '', '', '', '', '']
    },
    // 70
    {
        wR: 'atacar',
        hT: 'Embestir con ánimo de causar daño para destruirlo.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'espejo',
        hT: 'Superficie de cristal que retrata y refleja o da la imagen de algo.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'obrero',
        hT: 'Persona que tiene por oficio hacer un trabajo manual o que requiere esfuerzo físico como empleada de otra persona.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'bosque',
        hT: 'Extensión de terreno densamente poblado de árboles, arbustos y matorrales.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'agitar',
        hT: 'Mover una cosa repetidamente hacia un lado y otro con fuerza y rapidez.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'fundir',
        hT: 'Convertir una sustancia sólida en líquida por la acción del calor.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'corona',
        hT: 'Aro que se coloca sobre la cabeza, generalmente como adorno, en señal de premio o como símbolo de nobleza.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'macizo',
        hT: 'Que está formado por una masa sólida y no tiene huecos en su interior.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'bondad',
        hT: 'Inclinación a hacer el bien, comportamiento virtuoso.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'novato',
        hT: 'Que es nuevo en una situación o una actividad determinadas, por lo que carece de experiencia.',
        lCs: ['', '', '', '', '', '']
    },
    //  80
    {
        wR: 'gentil',
        hT: 'Que demuestra o se comporta con amabilidad, educación y cortesía.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'chispa',
        hT: 'Partícula encendida o luminosa que salta de una materia que arde o del roce de dos objetos.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'espiar',
        hT: 'Observar atenta y disimuladamente lo que dice o hace alguien por algún interés.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'alerta',
        hT: 'Situación de peligro en la que se debe vigilar o poner atención.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'moneda',
        hT: 'Pieza de metal redonda y con un relieve en cada cara, a la que se le asigna un valor económico determinado.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'chiste',
        hT: 'Dicho, ocurrencia o historia breve, que encierra un doble sentido, una burla y cuya intención es hacer reír.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'manjar',
        hT: 'Alimento o comida que resultan exquisitos, delicados o apetitosos.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'maceta',
        hT: 'Recipiente, normalmente en forma de cono truncado con un agujero en el fondo para el drenaje.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'filtro',
        hT: 'Materia porosa, a través de la cual se hace pasar un fluido para clarificarlo o depurarlo.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'ceniza',
        hT: 'Polvo mineral de color gris claro que queda como residuo de una combustión completa.',
        lCs: ['', '', '', '', '', '']
    },
    //  90
    {
        wR: 'concha',
        hT: 'Caparazón calcáreo que protege el cuerpo de la mayoría de los moluscos.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'sierra',
        hT: 'Conjunto de montañas de menor proporción que la cordillera.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'restar',
        hT: 'Realizar una operación aritmética que consiste en quitar una cantidad.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'chisme',
        hT: 'Comentario o noticia no verificada que circula entre la gente.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'grieta',
        hT: 'Abertura alargada y con muy poca separación entre sus bordes que se hace en la tierra.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'fiable',
        hT: 'Persona o cosa, que inspira confianza, seguridad o es digno de ella.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'cocina',
        hT: 'Habitación de una casa u otro edificio que dispone de instalaciones adecuadas para preparar los alimentos.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'esfera',
        hT: 'Cuerpo limitado por una superficie curva cuyos puntos están todos a igual distancia de uno interior llamado centro.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'viento',
        hT: 'Corriente de aire que se produce en la atmósfera al variar la presión.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'brillo',
        hT: 'Luz intensa, muy clara o limpia que desprende o refleja un cuerpo.',
        lCs: ['', '', '', '', '', '']
    },
    //  100
    {
        wR: 'maleta',
        hT: 'Utensilio cuadrangular de piel o plástico, sirve para transportar ropa, objetos personales cuando se viaja.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'ciudad',
        hT: 'Espacio urbano con alta densidad de población, en la que predomina el comercio, la industria y los servicios.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'lluvia',
        hT: 'Precipitación acuosa en forma de gotas.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'amable',
        hT: 'Persona que se comporta con agrado, educación y afecto hacia los demás.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'cursar',
        hT: 'Estudiar una materia, o un ciclo académico en un centro de enseñanza.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'burlar',
        hT: 'Evitar ser visto, o hallado por alguien que te vigila o persigue.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'barato',
        hT: 'Que tiene un precio bajo en relación con otros bienes semejantes.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'manual',
        hT: 'Folleto o libro en que se dan las instrucciones para el uso y mantenimiento de un aparato.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'vulgar',
        hT: 'Que es o se considera poco refinado, de poca educación o de mal gusto.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'oceano',
        hT: 'Masa de agua salada que cubre aproximadamente las tres cuartas partes de la superficie terrestre.',
        lCs: ['', '', '', '', '', '']
    },
    //  110
    {
        wR: 'utopia',
        hT: 'Plan o sistema ideal de gobierno en el que se concibe una sociedad perfecta y justa.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'oponer',
        hT: 'Exponer razones contrarías a una idea o un proyecto.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'caudal',
        hT: 'Cantidad de agua que lleva una corriente o que fluye de un manantial o fuente.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'reacio',
        hT: 'Que muestra oposición, resistencia a hacer algo, o a recibir una influencia.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'acervo',
        hT: 'Conjunto de bienes o valores morales o culturales que pertenecen a un grupo.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'saciar',
        hT: 'Hacer desaparecer el hambre o la sed con comida o bebida suficiente.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'forzar',
        hT: 'Aplicar la fuerza física a una cosa para que deje de oponer resistencia y poder hacer algo.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'temple',
        hT: 'Punto de dureza o elasticidad que se da a un metal.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'prensa',
        hT: 'Máquina para imprimir sobre papel, mediante la presión de una plancha que tiene grabados caracteres.',
        lCs: ['', '', '', '', '', '']
    },
    {
        wR: 'guiñar',
        hT: 'Cerrar y abrir con rapidez un ojo dejando el otro abierto.',
        lCs: ['', '', '', '', '', '']
    },
    //  120





    //  Palabras de 5 letras
    {
        wR: "campo", // 5
        hT: "Superficie terrestre no ocupada por núcleos de población.",
        lCs: ['', '', '', '', '']
    },
    {
        wR: "mujer", // 5
        hT: "Persona del sexo femenino, que ha llegado a la edad adulta.",
        lCs: ['', '', '', '', '']
    },
    {
        wR: "nubes", // 5
        hT: "Masa visible suspendida en la atmósfera.",
        lCs: ['', '', '', '', '']
    },
    {
        wR: "nacer", // 5
        hT: "Salir del vientre materno, del huevo o de la semilla.",
        lCs: ['', '', '', '', '']
    },
    {
        wR: "soñar", // 5
        hT: "Representarse en la fantasía imágenes o sucesos mientras se duerme.",
        lCs: ['', '', '', '', '']
    },
    {
        wR: "heroe", // 5
        hT: "Se distingue por haber realizado una hazaña extraordinaria.",
        lCs: ['', '', '', '', '']
    },
    {
        wR: "truco", // 5
        hT: "Procedimiento ingenioso o hábil para conseguir algo.",
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'nuevo',
        hT: 'Que acaba de aparecer, de formarse o fabricarse.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'salir',
        hT: 'Ir o pasar de un lugar cerrado o limitado al exterior.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'delia',
        hT: 'Nombre propio femenino de origen griego, que significa natural de Delos.',
        lCs: ['', '', '', '', '']
    },
    //  10
    {
        wR: 'exito',
        hT: 'Resultado, en especial feliz, de una empresa o acción emprendida, o de un suceso.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'tenaz',
        hT: 'Que pone mucho empeño y no desiste en algo que quiere hacer o conseguir.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'ayuda',
        hT: 'Acción que una persona hace de manera desinteresada.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'papel',
        hT: 'Material que se presenta como una lámina fina hecha con pasta de fibras vegetales u otros materiales molidos.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'volar',
        hT: 'Moverse por el aire usando alas o un medio artificial.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'dueño',
        hT: 'Persona que posee una cosa.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'señal',
        hT: 'Onda electromagnética que permite transmitir información a un circuito electrónico.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'arbol',
        hT: 'Planta de tronco leñoso, grueso y elevado que se ramifica a cierta altura.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'pluma',
        hT: 'Instrumento de escritura que consiste en un tubo hueco de plástico con tinta viscosa en su interior.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'veloz',
        hT: 'Persona o animal, que se mueve o actúa muy deprisa.',
        lCs: ['', '', '', '', '']
    },
    //  20
    {
        wR: 'honor',
        hT: 'Cualidad moral que impulsa a una persona a actuar rectamente.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'etica',
        hT: 'Disciplina filosófica que estudia el bien y el mal y sus relaciones con la moral y el comportamiento humano.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'razon',
        hT: 'Capacidad de la mente para establecer relaciones entre ideas o conceptos y obtener conclusiones o formar juicios.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'error',
        hT: 'Idea, opinión o expresión que una persona considera correcta pero que en realidad es falsa o desacertada.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'color',
        hT: 'Impresión que producen en la retina los rayos de luz reflejados y absorbidos por un cuerpo.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'motor',
        hT: 'Máquina que produce movimiento gracias a otra fuente de energía.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'suelo',
        hT: 'Superficie sobre la que se pisa, generalmente recubierta de algún material para hacerla lisa y resistente.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'medir',
        hT: 'Determinar la longitud, extensión, volumen o capacidad de una cosa por medio de un instrumento graduado.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'rueda',
        hT: 'Objeto circular, de poco grosor respecto a su radio, que puede girar sobre un eje de múltiples aplicaciones.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'noche',
        hT: 'Período que transcurre desde que se pone el Sol hasta que vuelve a salir.',
        lCs: ['', '', '', '', '']
    },
    //  30
    {
        wR: 'danza',
        hT: 'Baile en donde se utiliza el movimiento del cuerpo, normalmente con música, como una forma de expresión.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'calor',
        hT: 'Energía que se manifiesta por un aumento de temperatura y procede de la transformación de otras energías.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'juego',
        hT: 'Actividad que se realiza generalmente para divertirse o entretenerse.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'oasis',
        hT: 'Paraje aislado en el desierto en el que hay agua y crece la vegetación.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'oasis',
        hT: 'Paraje aislado en el desierto en el que hay agua y crece la vegetación.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'madre',
        hT: 'Mujer que ha tenido uno o más hijos.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'vicio',
        hT: 'Hábito de hacer mal algo o de hacer una cosa perjudicial.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'pelea',
        hT: 'Enfrentamiento físico entre personas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'cifra',
        hT: 'Signo gráfico simple que expresa un número en un sistema de numeración.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'dudar',
        hT: 'No estar seguro de algo o de alguien.',
        lCs: ['', '', '', '', '']
    },
    //  40
    {
        wR: 'tenue',
        hT: 'Que es poco intenso o perceptible.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'ruido',
        hT: 'Sonido inarticulado, sin ritmo ni armonía y confuso.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'dosis',
        hT: 'Cantidad de algo, especialmente la de un medicamento o una droga que se ingiere en una toma.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'elite',
        hT: 'Grupo selecto y minoritario de personas, animales o cosas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'ritmo',
        hT: 'Forma de alternar una serie de sonidos que se repiten periódicamente en un determinado intervalo de tiempo.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'fuego',
        hT: 'Emisión de luz y calor producida por la combustión de una materia.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'pilar',
        hT: 'Elemento arquitectónico de soporte, rígido, más alto que ancho y normalmente de sección cuadrada.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'banco',
        hT: 'Empresa comercial que realiza operaciones financieras con el dinero procedente de clientes.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'paseo',
        hT: 'Distancia corta que se puede recorrer en poco tiempo.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'hielo',
        hT: 'Cuerpo sólido y cristalino en que se convierte el agua por el descenso de la temperatura.',
        lCs: ['', '', '', '', '']
    },
    //  50
    {
        wR: 'pulir',
        hT: 'Alisar una superficie para que quede suave y brillante.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'nieve',
        hT: 'Precipitación en forma de pequeños cristales de hielo.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'lapso',
        hT: 'Porción de tiempo que transcurre entre dos hechos o dos cosas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'catar',
        hT: 'Probar un alimento o una bebida para examinar su sabor o su calidad.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'prisa',
        hT: 'Prontitud y rapidez con que ocurre o se realiza una cosa.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'llave',
        hT: 'Herramienta para apretar o aflojar tuercas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'vapor',
        hT: 'Fase gaseosa en que se transforma una sustancia, generalmente líquida.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'fugaz',
        hT: 'Que dura muy poco tiempo.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'teñir',
        hT: 'Dar a una cosa un color distinto del que tenía.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'torre',
        hT: 'Construcción cilíndrica o poligonal, más alta que ancha.',
        lCs: ['', '', '', '', '']
    },
    //  60
    {
        wR: 'impar',
        hT: 'Número que dividido por dos, no da como resultado un número entero.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'cavar',
        hT: 'Hacer un hoyo o zanja en la tierra.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'gesta',
        hT: 'Hecho o conjunto de hechos dignos de ser recordados, especialmente los que destacan por su trascendencia.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'nadar',
        hT: 'Avanzar en el agua, haciendo los movimientos necesarios.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'mimar',
        hT: 'Tratar a alguien con mucho cariño y delicadeza.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'malla',
        hT: 'Estructura delgada y flexible formada por el entrecruzamiento de filamentos.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'barca',
        hT: 'Embarcación pequeña con el fondo cóncavo, impulsada por remos.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'gemir',
        hT: 'Emitir gemidos por dolor, pena o placer.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'robot',
        hT: 'Máquina automática programable capaz de realizar determinadas operaciones.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'cesta',
        hT: 'Recipiente de mimbre, junco u otro material flexible, con dos asas.',
        lCs: ['', '', '', '', '']
    },
    //  70
    {
        wR: 'celda',
        hT: 'Habitación pequeña y con escaso mobiliario.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'mecha',
        hT: 'Cordón de hilos retorcidos de material combustible que sirve para encender o alumbrar.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'brasa',
        hT: 'Trozo de carbón, leña u otra materia combustible que arde sin dar llama.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'titan',
        hT: 'Cada uno de los doce gigantes de la mitología griega hijos de Gea y Urano que quisieron asaltar el cielo.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'ixtle',
        hT: 'Es una fibra vegetal conocida por su resistencia.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'marea',
        hT: 'Agua que invade la costa en el movimiento de flujo o subida.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'aforo',
        hT: 'Capacidad total de las localidades de un teatro, sala de cine, etc.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'pesca',
        hT: 'Conjunto de técnicas y actividades mediante las cuales se capturan peces.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'credo',
        hT: 'Conjunto de principios ideológicos o religiosos de una persona.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'cutis',
        hT: 'Piel de una persona, principalmente la de la cara.',
        lCs: ['', '', '', '', '']
    },
    //  80
    {
        wR: 'farol',
        hT: 'Utensilio para alumbrar que consiste en una caja con una o más caras de cristal.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'laico',
        hT: 'Que es independiente de toda confesión religiosa.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'savia',
        hT: 'Líquido que circula por los vasos conductores de las plantas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'bruma',
        hT: 'Niebla de menor densidad que la neblina, especialmente la que se forma sobre el mar.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'falda',
        hT: 'Prenda principalmente femenina, consiste en una tela que se ajusta a la cintura y cubre en parte las piernas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'trago',
        hT: 'Acción de tragar un líquido o beber de una vez.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'asear',
        hT: 'Limpiar y poner en orden una cosa o un sitio.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'himno',
        hT: 'Composición poética o musical de tono solemne que representa y ensalza a una organización o un país.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'tribu',
        hT: 'Agrupación de pueblos primitivos e integrada por un conjunto de personas que comparten un origen.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'sesgo',
        hT: 'Oblicuidad o torcimiento de una cosa hacia un lado.',
        lCs: ['', '', '', '', '']
    },
    //  90
    {
        wR: 'mixto',
        hT: 'Que está compuesto por dos o más cosas distintas mezcladas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'coser',
        hT: 'Unir con hilo enhebrado en una aguja pedazos o partes de una tela.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'polvo',
        hT: 'Conjunto de partículas diminutas que flotan en el aire y se depositan sobre los objetos.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'tacto',
        hT: 'Sentido corporal mediante el cual se perciben el contacto o la presión de las cosas sobre la piel.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'letra',
        hT: 'Signo escrito que, solo o unido a otros, representa un sonido.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'fosil',
        hT: 'Que se ha petrificado mediante procesos químicos y geológicos.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'metal',
        hT: 'Cuerpo simple, generalmente sólido, que es buen conductor del calor y de la electricidad.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'lista',
        hT: 'Serie de palabras o datos, que está escrita en un papel atendiendo a un orden determinado.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'sabio',
        hT: 'Que muestra buen juicio, prudencia y madurez en sus actos y decisiones.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'texto',
        hT: 'Conjunto de enunciados que componen un documento escrito.',
        lCs: ['', '', '', '', '']
    },
    //  100
    {
        wR: 'subir',
        hT: 'Ir de un lugar a otro más alto.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'feliz',
        hT: 'Emoción o estado de ánimo que se produce cuando llega a un momento de conformación, bienestar.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'jugar',
        hT: 'Tomar parte en un juego organizado o en determinado deporte de equipo.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'regla',
        hT: 'Instrumento para medir y trazar líneas rectas que consiste en una barra rectangular.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'otoño',
        hT: 'Estación del año comprendida entre el verano y el invierno.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'libro',
        hT: 'Obra impresa, unidas por un lado y protegidas con tapas, también llamadas cubiertas.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'optar',
        hT: 'Escoger una posibilidad entre varias.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'hogar',
        hT: 'Domicilio habitual de una persona y en el que desarrolla su vida privada, familiar.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'valla',
        hT: 'Construcción hecha de cualquier material para cercar un terreno.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'playa',
        hT: 'Extensión casi plana de arena o piedras en la orilla del mar.',
        lCs: ['', '', '', '', '']
    },
    //  110
    {
        wR: 'fruto',
        hT: 'Producto de las plantas y de la tierra que tiene una utilidad.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'sutil',
        hT: 'Que es poco perceptible.',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'omiso',
        hT: 'Palabra que significa "no hacer caso de algo".',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'silla',
        hT: 'Asiento individual con patas y respaldo".',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'valle',
        hT: 'Terreno llano de nivel más bajo que el que lo rodea".',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'magia',
        hT: 'Conjunto de conocimientos y prácticas con los que se pretende conseguir cosas extraordinarias".',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'coche',
        hT: 'Vehículo automóvil de cuatro ruedas para circular por tierra".',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'selva',
        hT: 'Terreno extenso, sin cultivar y muy poblado de árboles y plantas que es característico de climas cálidos".',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'acero',
        hT: 'Aleación de hierro con pequeñas cantidades de carbono y que adquiere con el temple gran dureza y elasticidad".',
        lCs: ['', '', '', '', '']
    },
    {
        wR: 'mitin',
        hT: 'Reunión de personas en donde uno o varios oradores pronuncian discursos de tema político o social".',
        lCs: ['', '', '', '', '']
    },
    //  120



    //  Palabras de 4 letras
    {
        wR: "hola",
        hT: "Expresión con que se saluda.",
        lCs: ['', '', '', '']
    },
    {
        wR: "mapa",
        hT: "Representación geográfica de la Tierra, o parte de ella.",
        lCs: ['', '', '', '']
    },
    {
        wR: "higo",
        hT: "Fruto segundo de la higuera, de forma parecida a una pera.",
        lCs: ['', '', '', '']
    },
    {
        wR: "lazo",
        hT: "Nudo que está formado por una o más anillas.",
        lCs: ['', '', '', '']
    },
    {
        wR: "unir",
        hT: "Juntarse para formar un todo.",
        lCs: ['', '', '', '']
    },
    {
        wR: "dias",
        hT: "Periodos de 24 horas.",
        lCs: ['', '', '', '']
    },
    {
        wR: "amor",
        hT: "Sentimiento de intensa atracción emocional hacia una persona con la que se desea compartir una vida.",
        lCs: ['', '', '', '']
    },
    {
        wR: "idea",
        hT: "Plan o intención de hacer una cosa.",
        lCs: ['', '', '', '']
    },
    {
        wR: "fiel",
        hT: "Que es firme y constante en sus afectos, ideas y cumple con sus compromisos hacia alguien.",
        lCs: ['', '', '', '']
    },
    {
        wR: "duro",
        hT: "Cosa que ofrece una gran resistencia y es muy marcado o pronunciado.",
        lCs: ['', '', '', '']
    },
    //  10
    {
        wR: "beso",
        hT: "Contacto o presión que se hace con los labios sobre una persona o una cosa.",
        lCs: ['', '', '', '']
    },
    {
        wR: "casa",
        hT: "Construcción cubierta destinada a ser habitada.",
        lCs: ['', '', '', '']
    },
    {
        wR: "frio",
        hT: "Temperatura baja o más baja de lo que se desea.",
        lCs: ['', '', '', '']
    },
    {
        wR: "real",
        hT: "Que tiene existencia verdadera y efectiva.",
        lCs: ['', '', '', '']
    },
    {
        wR: "moda",
        hT: "Gusto, costumbre o uso, propios de un grupo en un período de tiempo.",
        lCs: ['', '', '', '']
    },
    {
        wR: "suma",
        hT: "Operación aritmética que consiste en reunir varias cantidades en una sola.",
        lCs: ['', '', '', '']
    },
    {
        wR: "huir",
        hT: "Alejarse precipitadamente de un lugar o de una persona por temor o para evitar un daño.",
        lCs: ['', '', '', '']
    },
    {
        wR: "leer",
        hT: "Pasar la vista por los signos de una palabra o texto escrito para interpretarlos mentalmente.",
        lCs: ['', '', '', '']
    },
    {
        wR: "meta",
        hT: "Lugar o punto en el que termina una carrera.",
        lCs: ['', '', '', '']
    },
    {
        wR: "auge",
        hT: "Crecimiento o desarrollo notables y progresivos de algo, en especial de un proceso o una actividad.",
        lCs: ['', '', '', '']
    },
    //  20
    {
        wR: "dama",
        hT: "Mujer distinguida, especialmente la de buena educación y clase social alta.",
        lCs: ['', '', '', '']
    },
    {
        wR: "leal",
        hT: "Que es incapaz de traicionar o engañar, actúa con respeto y fidelidad a sus principios morales.",
        lCs: ['', '', '', '']
    },
    {
        wR: "plan",
        hT: "Idea del modo de llevar a cabo una acción.",
        lCs: ['', '', '', '']
    },
    {
        wR: "arte",
        hT: "Actividad en la que el ser humano recrea, con una finalidad estética, un aspecto de la realidad.",
        lCs: ['', '', '', '']
    },
    {
        wR: "ocio",
        hT: "Tiempo libre o descanso de las ocupaciones habituales.",
        lCs: ['', '', '', '']
    },
    {
        wR: "boda",
        hT: "Ceremonia en la que se celebra la unión matrimonial de dos personas mediante determinados ritos.",
        lCs: ['', '', '', '']
    },
    {
        wR: "pais",
        hT: "Comunidad social con un territorio y órganos de gobierno propios que es soberana e independiente.",
        lCs: ['', '', '', '']
    },
    {
        wR: "tono",
        hT: "Fuerza, intensidad o volumen de un sonido.",
        lCs: ['', '', '', '']
    },
    {
        wR: "aire",
        hT: "Sustancia gaseosa, transparente, inodora e insípida que envuelve la Tierra y forma la atmósfera.",
        lCs: ['', '', '', '']
    },
    {
        wR: "raiz",
        hT: "Órgano de la planta, desprovisto de hojas y generalmente introducido en la tierra.",
        lCs: ['', '', '', '']
    },
    //  30
    {
        wR: "risa",
        hT: "Conjunto de sonidos que se emiten y de gestos o movimientos que se hacen al reír.",
        lCs: ['', '', '', '']
    },
    {
        wR: "vela",
        hT: "Mecha que asciende por el interior de una barra de combustible sólido.",
        lCs: ['', '', '', '']
    },
    {
        wR: "rayo",
        hT: "Descarga eléctrica entre dos nubes cargadas de electricidad estática.",
        lCs: ['', '', '', '']
    },
    {
        wR: "luna",
        hT: "Satélite natural de la Tierra.",
        lCs: ['', '', '', '']
    },
    {
        wR: "joya",
        hT: "Objeto de adorno o de uso, hecho de algún metal noble.",
        lCs: ['', '', '', '']
    },
    {
        wR: "voto",
        hT: "Derecho a expresar en votación esta opinión o voluntad.",
        lCs: ['', '', '', '']
    },
    {
        wR: "nave",
        hT: "Embarcación grande de vela o de motor.",
        lCs: ['', '', '', '']
    },
    {
        wR: "riña",
        hT: "Discusión entre dos personas en que generalmente se reprochan algo y se insultan.",
        lCs: ['', '', '', '']
    },
    {
        wR: "mago",
        hT: "Persona que emplea ciertos conocimientos y prácticas con los que pretende conseguir cosas extraordinarias.",
        lCs: ['', '', '', '']
    },
    {
        wR: "ovni",
        hT: "Objeto volador de origen y naturaleza desconocidos.",
        lCs: ['', '', '', '']
    },
    //  40
    {
        wR: "hada",
        hT: "Ser fantástico con figura de mujer bella y poderes mágicos.",
        lCs: ['', '', '', '']
    },
    {
        wR: "leña",
        hT: "Conjunto de troncos, ramas y trozos de madera destinado a hacer fuego.",
        lCs: ['', '', '', '']
    },
    {
        wR: "foro",
        hT: "Reunión de personas para tratar un asunto de interés, a menudo expertos ante un público.",
        lCs: ['', '', '', '']
    },
    {
        wR: "soez",
        hT: "Que es grosero y bajo en sus palabras o actos de modo que resulta desagradable y ofensivo.",
        lCs: ['', '', '', '']
    },
    {
        wR: "duna",
        hT: "Acumulación de arena en forma de media luna que forma y empuja el viento en el desierto.",
        lCs: ['', '', '', '']
    },
    {
        wR: "sien",
        hT: "Parte de la cara humana, situada a cada lado de ella, entre la frente, la oreja y la mejilla.",
        lCs: ['', '', '', '']
    },
    {
        wR: "orca",
        hT: "Mamífero marino de la familia del delfín.",
        lCs: ['', '', '', '']
    },
    {
        wR: "silo",
        hT: "Lugar, generalmente subterráneo, que carece de humedad y está destinado a almacenar grano.",
        lCs: ['', '', '', '']
    },
    {
        wR: "laja",
        hT: "Piedra grande no tallada ni esculpida, lisa, plana y no muy gruesa.",
        lCs: ['', '', '', '']
    },
    {
        wR: "sede",
        hT: "Lugar que constituye el núcleo principal de un domicilio principal o una organización.",
        lCs: ['', '', '', '']
    }
    //  50
];