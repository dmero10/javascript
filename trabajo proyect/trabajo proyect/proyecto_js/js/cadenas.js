// Función para agregar un espacio entre cada carácter de la palabra ingresada
function generarEspaciado() {
  // Obtener la palabra ingresada por el usuario
  const palabra = document.getElementById("palabra").value;
  // obtener el control para asignar la respuesta
  const respuesta = document.getElementById("resp");

  // Inicializar una variable para almacenar la nueva palabra con espacios
  let resultado = "";

  // Usar un bucle para recorrer cada carácter de la palabra
  for (let i = 0; i < palabra.length; i++) {
    // Agregar el carácter actual a la variable resultado seguido de un espacio
    // if (palabra[i]=="a")
    resultado += palabra[i] + " ";
  }

  // Mostrar el resultado en el área de texto
  respuesta.innerHTML = resultado.trim(); // Eliminar el último espacio al final
}

function concatenarNombreApellido() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const resultado = `${apellido} ${nombre}`;
  document.getElementById('resultado').value = resultado;
}


function compararFrases() {
  const frase1 = document.getElementById('frase1').value;
  const frase2 = document.getElementById('frase2').value;

  let resultado;
  if (frase1 === frase2) {
      resultado = "Las frases son iguales.";
  } else if (frase1 > frase2) {
      resultado = "La primera frase es mayor.";
  } else {
      resultado = "La segunda frase es mayor.";
  }

  document.getElementById('resultado').value = resultado;
}

function crearConEspacios() {
  const palabra = document.getElementById('palabra').value;
  const resultado = palabra.split('').join(' ');
  document.getElementById('resultado').value = resultado;
}

function mostrarAscii() {
  const frase = document.getElementById('frase').value;
  let resultado = '';
  for (let i = 0; i < frase.length; i++) {
      resultado += `${frase[i]}: ${frase.charCodeAt(i)}\n`;
  }
  document.getElementById('resultado').value = resultado;
}

function invertirFrase() {
  const frase = document.getElementById('frase').value;
  const fraseInvertida = frase.split('').reverse().join('');
  document.getElementById('resultado').value = fraseInvertida;
}


function contarVocales() {
  const palabra = document.getElementById('palabra').value.toLowerCase();
  const vocales = 'aeiou';
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) {
          contador++;
      }
  }

  document.getElementById('resultado').value = `La palabra tiene ${contador} vocales.`;
}



function contarLetras() {
  const palabra = document.getElementById('palabra').value.toLowerCase();
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
      if (alfabeto.includes(palabra[i])) {
          contador++;
      }
  }

  document.getElementById('resultado').value = `La palabra/frase tiene ${contador} letras del alfabeto.`;
}

function contarDigitos() {
  const frase = document.getElementById('frase').value;
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
      if (!isNaN(frase[i]) && frase[i] !== ' ') {
          contador++;
      }
  }

  document.getElementById('resultado').value = `La frase tiene ${contador} dígitos.`;
}





function contarSignos() {
  const palabra = document.getElementById('palabra').value;
  const signos = ['.', ',', ';', ':', '!', '?', '-', '(', ')', '[', ']', '{', '}', '"', "'", '¿', '¡'];
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
      if (signos.includes(palabra[i])) {
          contador++;
      }
  }

  document.getElementById('resultado').value = `La palabra o frase tiene ${contador} signos de puntuación.`;
}




function contarPalabras() {
  const frase = document.getElementById('frase').value.trim();
  if (frase === '') {
      document.getElementById('resultado').value = 'La frase no contiene palabras.';
      return;
  }

  const palabras = frase.split(/\s+/); // Divide por espacios múltiples o simples
  document.getElementById('resultado').value = `La frase tiene ${palabras.length} palabras.`;
}