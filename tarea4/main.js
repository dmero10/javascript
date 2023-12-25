/*document.getElementById("aceptar").addEventListener("click", function() {
    var seleccion = document.getElementById("opciones").value;
    var numero = document.getElementById("numero1").value;
    var resultado;
    switch(seleccion) {
        case "BASE 10 A BASE 2":
            resultado = parseInt(numero, 10).toString(2);
            break;
        case "BASE 10 A BASE 8":
            resultado = parseInt(numero, 10).toString(8);
            break;
        case "BASE 10 A BASE 16":
            resultado = parseInt(numero, 10).toString(16);
            break;
        case "BASE 2 A BASE 10":
            resultado = parseInt(numero, 2).toString(10);
            break;
        case "BASE 2 A BASE 8":
            resultado = parseInt(numero, 2).toString(8);
            break;
        case "BASE 2 A BASE 16":
            resultado = parseInt(numero, 2).toString(16);
            break;
        default:
            resultado = "Selecciona una opción válida";
    }
    document.getElementById("respuesta").innerHTML = "<h3>El resultado es: " + resultado + "</h3>";
});*/
class tarea{
//EJERCICIO 1
mostrarDivisores() {
    let num = document.getElementById("numero1").value;
    let resp = document.getElementById("respuesta");
    num = parseInt(num);
    let resultado = this.acuDivisores(num);
    resp.innerHTML = `<h3>Números divisores: ${resultado.divisores.join(', ')}<br>Suma de los divisores: ${resultado.suma}</h3>`;
  }
//EJERCICIO 2
perfecto() {
    let numero = document.getElementById("numero1").value;
    let resp = document.getElementById("respuesta");
    numero = parseInt(numero);
    let esPerfecto = this.numeroPerfecto(numero);
    if (esPerfecto) {
        resp.innerHTML = `<h3>El ${numero} es un número perfecto</h3>`;
    } else {
        resp.innerHTML = `<h3>El ${numero} no es un número perfecto</h3>`;
    }
}
//EJERCICIO 3
primo() {
    let num = document.getElementById("numero1").value;
    num = parseInt(num);
    let resp = document.getElementById("respuesta");

    if (this.nPrimo(num)) {
        resp.innerHTML = `<h3>El ${num} Es un número primo</h3>`;
    } else {
        resp.innerHTML = `<h3>El ${num} No es un número primo</h3>`;
    }
  }

//EJERCICIO 4
primosGemelos() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let resp = document.getElementById("respuesta");

    console.log(num1, num2);

    if (this.nPrimo(num1) && this.nPrimo(num2) && Math.abs(num1 - num2) === 2) {
        resp.innerHTML = `<h3>${num1} y ${num2} Son primos gemelos</h3>`;
    } else {
        resp.innerHTML = `<h3>${num1} y ${num2} No son primos gemelos</h3>`;
    }
  }

//EJERCICIO 5
concad(){
    let cadena1 = document.getElementById("numero1").value;
    let cadena2 = document.getElementById("numero2").value;
    let resultado = "";
    if (cadena1.length > 0) {
        resultado += cadena1;
    }
resultado += " " + cadena2;
document.getElementById("respuesta").innerHTML = `<H3>La Concatenación es: ${resultado}</H3>`;
}


//EJERCICIO 6 BUSCAR UNA SUBCADENA
buscarCadena(){
    let pos
    let cadena = document.getElementById("numero1").value;
    let buscado = document.getElementById("numero2").value;
    let resp = document.getElementById("respuesta");
    pos = this.isbuscarCadena(cadena,buscado)        
    if (pos >=0) {
        resp.innerHTML = `<h3>"${buscado}" se encontró en la posicion : ${pos} de la cadena<h3>`
    } else {
        resp.innerHTML = `<h3>"${buscado}" No se encontró en la cadena<h3>`
    } }


//EJERCICIO 7 INSERTAR UNA SUBCADENA
insertarsub(){
let cadena=document.getElementById("numero1").value;
let subcadena=document.getElementById("numero2").value;
let posicion=parseInt(document.getElementById("posicion").value,10);
if(isNaN(posicion)|| posicion<0||posicion>cadena.length){
document.getElementById("respuesta").innerHTML=`la posicion ${posicion} no existe en la cadena ingrese una posicion valida`
return
}
let insertar=cadena.slice(0,posicion)+ subcadena+ cadena.slice(posicion);
document.getElementById("respuesta").innerHTML=`<h3> ${insertar} </h3>`}


// EJERCICO 8
eliminarcad() {
    let cadena1 = document.getElementById("numero1").value;
    let subcadena = document.getElementById("numero2").value;
    let resultado = "";
    let i = 0;
    while (i < cadena1.length) {
      if (cadena1.slice(i, i + subcadena.length) === subcadena) {
        i += subcadena.length;
      } else {
        resultado += cadena1[i];
        i++;
      }
    }
document.getElementById("respuesta").innerHTML = `<h3>La cadena resultante es: ${resultado}</h3>`;
  }
//EJERCICIO 9
convertirACadena() {
    let arregloInput = document.getElementById("numero1").value;
    let arreglo = arregloInput.split(';').map(item => item.trim());
    let cadenaResultado = "";
    for (let i = 0; i < arreglo.length; i++) {
        cadenaResultado += arreglo[i];
    } 
    document.getElementById("respuesta").innerHTML =`<H3>Arreglo convertido a cadena: ${cadenaResultado}</H3>`;
}
// EJERCICIO 10
encontrarMayor(){
    let max=0;
    let arreglo1 = document.getElementById("numero1").value;
    let arreglo = arreglo1.split(';').map(Number);
    for(let i = 0;i<=arreglo.length;i++)
    if (arreglo[i]>max){
        max = arreglo[i]
    }
    document.getElementById("respuesta").innerHTML =`<H3>El mayor elemento del arreglo es: ${max}</H3>`;
}
//EJERCICIO 11
buscarValor() {
    let valores = document.getElementById("numero1").value;
    let buscar = document.getElementById("numero2").value;
    let arreglo = valores.split(",");
    let encontrado = false;
    for (let i = 0; i < arreglo.length; i++) {
        if (buscar == arreglo[i]) {
            encontrado = true;
            document.getElementById("respuesta").innerHTML = `<h3>"${buscar}" sí está en el arreglo en la posición ${i}</h3>`;
            break;
        }
    }
    if (!encontrado) {
        document.getElementById("respuesta").innerHTML = `<h3>"${buscar}" no se encuentra en el arreglo</h3>`;
    }
}
//EJERCICIO 12
inserarArre() {
    let arreglo = document.getElementById("numero1").value;
    let nuevonum = document.getElementById("numero2").value;
    let posicion = parseInt(document.getElementById("posicion").value, 10);
    nuevonum= ","+nuevonum+",";
    let nuevoarre = arreglo.split(",");
    if (isNaN(posicion) || posicion < 0 || posicion > arreglo.length) {
        document.getElementById("respuesta").innerHTML = `<h3>La posición ${posicion} no existe en la cadena. Ingrese una posición válida.</h3>`;
        return;
    }
    let insertar = nuevoarre.slice(0, posicion) + nuevonum + nuevoarre.slice(posicion);
    document.getElementById("respuesta").innerHTML = `<h3>${insertar}</h3>`;
}
//EJERCICIO 13-14 CONVERTIR UNA CADENA A ARREGLO Y ELIMINAR
cadeArre(){
let cadena=document.getElementById("numero1").value;
let arreglo=cadena.split(" ")
document.getElementById("respuesta").innerHTML=`<br><h3> Estes es tu Arreglo = [${arreglo}]</h3>`
}
eliminar(){
    let cadena=document.getElementById("numero1").value;
    let eli=document.getElementById("numero2").value;
    let arreglo=cadena.split(" ")
    for(let i=0;i<arreglo.length;i++){
    if(arreglo[i]===eli){
        arreglo.splice(i, 1);
        i--;
    }}
    document.getElementById("respuesta").innerHTML = `<br><h3>Este es tu nuevo arreglo = [${arreglo}]</h3>`
}
//EJERCICIOS DEL 15 AL 20 ,CONVERTIR BASES 
base(){
let seleccion=document.getElementById("opciones").value;
let numero=parseInt(document.getElementById("numero1").value);
let resultado=this.operaciones(seleccion,numero);
document.getElementById("respuesta").innerHTML=`<h3>El resultado es = ${resultado}</h3>`
}


////////////////////////////////////////////           funciones            ///////////////////////////////////////////////////////////
//FUNCION EJERCICI 1
acuDivisores(n) {
    let cont = 1, r = 0, acu = 0, divisores = [];
    while (cont < n) {
        r = n % cont;
        if (r === 0) {
            acu = acu + cont;
            divisores.push(cont);
        }
        cont = cont + 1;
    }
    return { suma: acu, divisores: divisores };
  }
//FUNCION EJERCICI 2
numeroPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}
//FUNCION EJERCICI 3
nPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
  }


//FUNCION BUSCAR SUBCADENA
isbuscarCadena(cadena,buscado){
    let posAux = 0, posC = 0, posB = 0, lonC = 0, lonB = 0, enc = false
    lonC = cadena.length
    lonB = buscado.length
    while (posC < lonC && enc == false) {
        if (cadena[posC] == buscado[0]) {
            posAux = posC
            posB = 0
            while (posAux < lonC && posB < lonB && cadena[posAux] == buscado[posB]) {
                posAux++
                posB++
            }
            if (posB == lonB) {
                enc = true
            } else {
                posC = posC + 1
            }
        }
        else {
            posC = posC + 1
        }
    }
    if (enc == true) {
        return posC
    } else {
        return -1
    }
}

//INSERTAR SUBCADENA
/*insertarsub(){
    let cadena=document.getElementById("numero1").value;
    let subcadena=document.getElementById("numero2").value;
    let posicion=parseInt(document.getElementById("posicion").value,10);
    //if(isNaN(posicion)|| posicion<0||posicion>cadena.length){
    //document.getElementById("respuesta").innerHTML=`la posicion ${posicion} no existe en la cadena ingrese una posicion valida`
    //return
    ///}
    //let insertar=cadena.slice(0,posicion)+ subacadena+ cadena.slice(posicion);
    //document.getElementById("respuesta").innerHTML=`<h3> ${insertar} </h3>`
    
    insertar=this.isinsert(cadena,subcadena,posicion)
    document.getElementById("respuesta").innerHTML=`${insertar}`}
isinsert(cadena,subcadena,posicion){
if(isNaN(posicion)||posicion<0||posicion>cadena.length){
document.getElementById("respuesta").innerHTML=`<h3>INGRESE UNA POSICION VALIDA</h3>`
return this.insertar} 
else{
let respuesta=" "; 
for(let i=0;i<cadena.length;i++){
if(i === posicion){
respuesta += subcadena;
document.getElementById("respuesta").innerHTML=`${respuesta}`
return this.insertar;
}
respuesta+=cadena[i];
}
if(posicion ===cadena.length){
respuesta+=subcadena;
document.getElementById("respuesta").innerHTML=`<h3>${respuesta}</h3>`
return this.insertar;
}
}
}*/





//FUNCIONES DE BASES
operaciones(seleccion,numero){
let resultado="";
    //DE BASE 10 A BASE 2
if(seleccion==="BASE 10 A BASE 2"){
    numero=parseInt(numero,10);
    while(numero>0){
    let residuo=numero%2;
    resultado=residuo+resultado;
    numero=Math.floor(numero/2);
    }
   return resultado
    }
    //DE BASE 10 A BASE 8
    else if(seleccion==="BASE 10 A BASE 8"){
    numero=parseInt(numero,10);
    while(numero>0){
    let residuo=numero%8;
    resultado=residuo+resultado;
    numero=Math.floor(numero/8)
    }
    return resultado
    }
    //DE BASE 10 A BASE 16
    else if(seleccion==="BASE 10 A BASE 16"){
    numero=parseInt(numero,10);
    while(numero>0){
    let residuo=numero%16;
    if (residuo >= 10) {
    resultado = String.fromCharCode('A'.charCodeAt(0) + residuo - 10) + resultado;
    } else {
    resultado=residuo+resultado;}
    numero=Math.floor(numero/16);
    }
    return resultado
    }
     //DE BASE 2 A BASE 10
if(seleccion==="BASE 2 A BASE 10"){
    numero=parseInt(numero,2);
    while(numero>0){
    let residuo=numero%10;
    resultado=residuo+resultado;
    numero=Math.floor(numero/10);
    }
   return resultado
    }
    //DE BASE 2 A BASE 8
    else if(seleccion==="BASE 2 A BASE 8"){
    numero=parseInt(numero,2);
    while(numero>0){
    let residuo=numero%8;
    resultado=residuo+resultado;
    numero=Math.floor(numero/8)
    }
    return resultado
    }
    //DE BASE 2 A BASE 16
else if (seleccion === "BASE 2 A BASE 16") {
    numero = parseInt(numero, 2);
    while (numero > 0) {
        let residuo = numero % 16;
        if (residuo >= 10) {
            resultado = String.fromCharCode('A'.charCodeAt(0) + residuo - 10) + resultado;
        } else {
            resultado = residuo + resultado;
        }
        numero = Math.floor(numero / 16);
    }
    return resultado.toUpperCase();
}}}

let ta = new tarea()





