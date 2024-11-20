// Función simplificada para calcular el promedio de números mayores a un valor dado
function calcularPromedio() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const limiteStr = document.getElementById("limite").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
  const limite = parseFloat(limiteStr);

  // Inicializar variables para la suma y el conteo
  let suma = 0;
  let conteo = 0;

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      suma += numeros[i];
      conteo++;
    }
  }

  // Calcular el promedio si hay números que cumplan la condición
  let promedio = 0;
  if (conteo > 0) {
    promedio = suma / conteo;
    respuesta.innerHTML = `Promedio: ${promedio.toFixed(2)}`;
  } else {
    respuesta.innerHTML = "No hay números mayores que el límite.";
  }
}