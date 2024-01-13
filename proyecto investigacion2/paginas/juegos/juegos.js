//arreglo con nombres e imagenes relacionadas entre si
let animales = [
    { nombre: "caballo", imagen: "imgl/caballo.jpg" },
    { nombre: "leon", imagen: "imgl/leon.jpg" },
    { nombre: "elefante", imagen: "imgl/elefante.png" },
    { nombre: "mono", imagen: "imgl/mono.jpg" }
];
let nombreAnimalActual = "";
//esta funcion escoge una imagen aleatoria de las que se encuentra en el arreglo en el divImagen 
function imagenAleatoria() {
    let indiceAleatorio = Math.floor(Math.random() * animales.length);
    nombreAnimalActual = animales[indiceAleatorio].nombre.toLowerCase();
    let urlImagen = animales[indiceAleatorio].imagen;
    let divImagen = document.getElementById("imagen");
    divImagen.style.backgroundImage = `url('${urlImagen}')`;
    return nombreAnimalActual;
}
//esta funcion crea un div para mostrar la alerta 
function mostrarAlerta2(imagenSrc) {
    let divAlerta = document.createElement('div');
    divAlerta.style.position = 'fixed';
    divAlerta.style.top = '0';
    divAlerta.style.right = '300px';
    divAlerta.style.width = '100%';
    divAlerta.style.height = '100%';
    divAlerta.style.display = 'flex';
    divAlerta.style.alignItems = 'center';
    divAlerta.style.justifyContent = 'center';
    let imagen = document.createElement('img');
    imagen.src = imagenSrc;
    imagen.alt = 'Imagen de alerta';
    divAlerta.appendChild(imagen);
    document.body.appendChild(divAlerta);
    setTimeout(function () {
        divAlerta.style.display = 'none';
    }, 2500);
}
// y la de aqui se encarga de mostrar la imagen segun , si es correcto o incorrecto el nombre introducido 
//del animalprimero se manda el alerta si o hiciste bien se cambia la imagen a otra si lo hiciste mal no se cambia 
//hasta que lo hagas bien
function animalCorrecto() {
    let respuesta = document.getElementById("respuesta").value.toLowerCase().trim();
    if (respuesta === nombreAnimalActual) {
        mostrarAlerta2('imgl/correcto.png');
        setTimeout(imagenAleatoria,2500);
    } else {
        mostrarAlerta2('img/inco.png');
    }
}
/////////////////////////////////////// segundo juego /////////////////////////////////////////////////
var informacionDetallada = {
    Sol: {
        texto: "El Sol es una estrella, es decir, un cuerpo celeste que brilla con luz propia,compuesto  de hidrógeno y helio a enormes temperaturas en estado de plasma. Es la estrella mas cercana a La Tierra  y de la que depende toda la vida en ella. Concentrada en el Sol encontramos el 99,85% de toda la masa del Sistema Solar. ",
        imagen: "img/sol2.jpg"
    },
    Mercurio: {
        texto: "Mercurio es uno de los cuatro planetas rocosos o sólidos; es decir, tiene un cuerpo rocoso, como la Tierra. Este planeta es el más pequeño de los cuatro, con un diámetro de 4879 km en el ecuador. Mercurio está formado aproximadamente por un 70% de elementos metálicos y un 30% de silicatos. La densidad de este planeta es la segunda más alta de todo el sistema solar, siendo su valor de 5430 kg/m³, solo un poco menor que la densidad de la Tierra.",
        imagen: "img/mercurio.png"
    },
    Tierra: {
        texto: "Nuestro hogar, el planeta Tierra, es un planeta terrestre y rocoso. Tiene una superficie sólida y activa, con montañas, valles, cañones, llanuras y mucho más. La Tierra es especial porque es un planeta océano, ya que el agua cubre el 70% de su superficie. Nuestra atmósferaestá compuesta, en gran parte, por nitrógeno.",
        imagen: "img"
    },
    Marte: {
        texto: "Marte es un planeta desértico y frío. Es la mitad del tamaño de la Tierra, y también recibe el nombre de (planeta rojo). Es rojo por el hierro oxidado que tiene en el suelo. Como la Tierra, Marte tiene estaciones, casquetes polares, volcanes, cañones y clima.",
        imagen: "img"
    },
    Jupiter: {
        texto: "Júpiter es el planeta más grande de nuestro sistema solar. Es parecido a una estrella, pero nunca llegó a ser lo suficientemente masiva como para empezar a arder. Está cubierto de rayas de nubes arremolinadas. Tiene fuertes tormentas como la Gran Mancha Roja, que hace cientos de años que dura.",
        imagen: "img"
    },
    Saturno: {
        texto: "Saturno es el sexto planeta del sistema solar y con un radio de 58.232 kilómetros el segundo planeta más grande, solo superado por el colosal Júpiter. Al igual que este se trata de un planeta del tipo gigante gaseoso.",
        imagen: "img"
    },
    Urano: {
        texto: "Urano está compuesto de agua, metano y amoniaco sobre un pequeño centro rocoso. Su atmósfera está hecha de hidrógeno y helio, como Júpiter y Saturno, pero además contiene metano. El metano es lo que le da a Urano el color azul. Urano también tiene anillos tenues.",
        imagen: "img"
    },
    Neptuno: {
        texto: "Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas. Su nombre fue puesto en honor al dios romano del mar —Neptuno—, y es el cuarto planeta en diámetro y el tercero más grande en masa. Su masa es diecisiete veces la de la Tierra y ligeramente mayor que la de su planeta «gemelo» Urano, que tiene quince masas terrestres y no es tan denso. En promedio, Neptuno orbita el Sol a una distancia de 30,1 ua(Unidades Astronomicas). Su símbolo astronómico es ♆, una versión estilizada del tridente del dios Neptuno.",
        imagen: "img"
    },
    Venus: {
        texto: "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero más pequeño después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (en la Antigua Grecia, Afrodita). Al ser el segundo objeto natural más brillante después de la Luna, puede ser visto en un cielo nocturno despejado a simple vista. Se trata de un planeta interior de tipo rocoso y terrestre, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición, aunque totalmente diferentes en cuestiones térmicas y atmosféricas (la temperatura media de Venus es de 463,85 °C).",
        imagen: "img"
    },
};
function mostrarInformacion(planeta) {
    var informacionPlaneta = document.getElementById('informacionPlaneta');
    var imagenPlaneta = document.getElementById('imagenPlaneta');
    var informacion = informacionDetallada[planeta];
    if (informacion) {
        informacionPlaneta.innerText = informacion.texto;
        imagenPlaneta.src = informacion.imagen;
        informacionPlaneta.style.display = 'block';
        informacionPlaneta.style.color= '#fff';
    } else {
        console.error("Información no encontrada para el planeta:", planeta);
    }
}
///////////////////////////////////////// tercer juego   ///////////////////////////////////////////




