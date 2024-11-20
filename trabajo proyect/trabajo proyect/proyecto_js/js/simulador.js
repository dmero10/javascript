function calcularTotal() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const aplicarIva = document.getElementById("iva").checked;
  const resultado = document.getElementById("resultado");
  // Calcular subtotal
  let subtotal = precio * cantidad;
  // Aplicar descuento si la cantidad es mayor a 10
  let descuento = 0 
  if (cantidad > 10){
    descuento=subtotal * 0.10
  }
  // Calcular IVA si el checkbox está seleccionado
  let  iva = 0
  if (aplicarIva==true){
    iva = (subtotal - descuento) * 0.15 
  } 
  // Calcular total
  const total = subtotal - descuento + iva;
  // Mostrar resultados en el área de texto
  resultado.innerHTML = `
                Subtotal: ${subtotal.toFixed(2)} USD
                Descuento: ${descuento.toFixed(2)} USD
                IVA: ${iva.toFixed(2)} USD
                Total a pagar: ${total.toFixed(2)} USD
            `;
}

function verificarRespuesta1() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 3 tiene un error 🎉</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta2() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = '1A, 2B, 3D, 4C';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta3() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  const respuestaCorrecta = 'a';

  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La secuencia lógica es la opción "a". 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}


function verificarRespuesta4() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'a';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}


function verificarRespuesta5() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'd';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}


function verificarRespuesta6() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'd';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta7() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'd';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta8() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'c';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}


function verificarRespuesta9() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'b';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta10(){
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'd';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta11() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'a';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta12(){
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'c';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta13(){
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'b';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarNumeroPerfecto() {
  const numero = parseInt(document.getElementById('numero').value);
  let sumaDivisores = 0;

  if (numero > 1) {
      for (let i = 1; i < numero; i++) {
          if (numero % i === 0) {
              sumaDivisores += i;
          }
      }

      const esPerfecto = sumaDivisores === numero;
      const mensaje = esPerfecto 
          ? `✔️ El número ${numero} es un número perfecto.` 
          : `❌ El número ${numero} no es un número perfecto.`;

      document.getElementById('resultado').value = mensaje;
  } else {
      document.getElementById('resultado').value = "⚠️ Ingrese un número mayor a 1.";
  }
}

function contarDigitos() {
  const frase = document.getElementById('frase').value;
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
      if (!isNaN(frase[i]) && frase[i] !== ' ') {
          contador++;
      }
  }

  const mensaje = `La frase contiene ${contador} dígitos.`;
  document.getElementById('resultado').value = mensaje;
}

function generarNumerosYCalcularPromedio() {
  // Crear el arreglo con 10 números aleatorios entre 1 y 100
  let numeros = [];
  for (let i = 0; i < 10; i++) {
      numeros.push(Math.floor(Math.random() * 100) + 1);
  }

  // Filtrar los números pares y calcular su promedio
  let numerosPares = numeros.filter(num => num % 2 === 0);
  let sumaPares = numerosPares.reduce((acum, num) => acum + num, 0);
  let promedioPares = numerosPares.length > 0 ? sumaPares / numerosPares.length : 0;

  // Mostrar los resultados
  const mensaje = `Los números generados son: ${numeros.join(', ')}\n` +
                  `Los números pares son: ${numerosPares.join(', ')}\n` +
                  `El promedio de los números pares es: ${promedioPares.toFixed(2)}`;
  document.getElementById('resultado').value = mensaje;
}

function contarPalabras() {
  const frase = document.getElementById('frase').value;
  const palabras = frase.split(' '); // Divide la frase en palabras usando el espacio como separador
  const cantidadPalabras = palabras.length; // Cuenta la cantidad de palabras

  // Mostrar el resultado
  const mensaje = `${cantidadPalabras} palabras tiene la frase`;
  document.getElementById('resultado').value = mensaje;
}

function validarNumero() {
  const input = document.getElementById('numero');
  // Solo permite números enteros
  input.value = input.value.replace(/[^0-9]/g, '');
}

function sumarDigitos() {
  const numero = document.getElementById('numero').value;
  const digitos = numero.split('').map(Number); // Convierte cada carácter en un número
  const suma = digitos.reduce((acc, digito) => acc + digito, 0); // Suma los dígitos

  // Mostrar el resultado
  document.getElementById('resultado').value = `La suma de los dígitos es: ${suma}`;
}

function verificarRespuesta19() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'a';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function verificarRespuesta20() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
      return;
  }

  // Respuesta correcta
  const respuestaCorrecta = 'd';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
      resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 🎉</p>';
  } else {
      resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}