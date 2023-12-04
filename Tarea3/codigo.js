function calcularMod(){
    let num1 = 0, num2 = 0;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    mod = 2 * num1 + num2 - num1 % 3;
    a =  num1 * num2 + 3 %  num1 + num2;
    b =  num1 - num2 + 2 * num1 % num2;
    c =  2 * num2 + num1 / 2 + 4 * num2 % num1;
    d =  num2 - num1 + 3 * num1 % num2;
    e=(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3;
    f= 2 *(4 - 10 + 8)/2* 36 *(1/2);
    g= Math.floor((260 / 12 + 54 % 3 - 85 % 7));
    h= (48 < 2 * 3) || (2 * 7 < 12);
    i=  ((8 > 2) || (932 < 23) ) && 4 == 2 ;
    document.getElementById("respuesta").innerHTML =`1 ) = 2 * ${num1} + ${num2} - ${num1} % 3 = ${mod}`;
    respuesta.innerHTML+=`<br>2 ) =  ${num1} * ${num2} + 3 %  ${num1} + ${num2} = ${a}`;
    respuesta.innerHTML+=`<br>3 ) =  ${num1} - ${num2} + 2 * ${num1} % ${num2} = ${b}` ;
    respuesta.innerHTML+=`<br>4 ) =  2 * ${num2} + ${num1} / 2 + 4 * ${num2} % ${num1} = ${c}`;
    respuesta.innerHTML+=`<br>5 ) =  ${num2} - ${num1} + 3 * ${num1} % ${num2} = ${d}`;
    respuesta.innerHTML+=`<br>6 ) =  (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 = ${e}`;
    respuesta.innerHTML+=`<br>7 ) =  2 *(4 - 10 + 8)/2* 36 *(1/2) = ${f}`;
    respuesta.innerHTML+=`<br>8 ) =  (260 / 12 + 54 % 3 - 85 % 7) = ${g}`;
    respuesta.innerHTML+=`<br>9 ) =  (48 < 2 * 3) || (2 * 7 < 12) = ${h}`;
    respuesta.innerHTML+=`<br>10 ) =  ((8 > 2) || (932 < 23) ) && 4 == 2  = ${i}`;
}


function suma() {
    let num1 = 0, num2 = 0, suma = 0;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    suma = num1+num2;
    document.getElementById("respuesta").innerHTML = `La respuesta de la suma es: ${suma}`;
}



function Areatri()  
{
let num1=0 , num2= 0 ,area=0;
num1 = parseInt(document.getElementById("num1").value);
num2 = parseInt(document.getElementById("num2").value);
area = num1*num2/2;
document.getElementById("respuesta").innerHTML= `El area tu triangulo es de :${area}`;
}


/***************************************                CONDICIONES                     *****************************************/



function parimpar() 
{
let num1=0;
num1= parseInt(document.getElementById("num1").value)
if (num1 % 2 == 0){
document.getElementById("respuesta").innerHTML= `El numero es par`;
}
else{
document.getElementById("respuesta").innerHTML= `El numero es impar`;
}
}


function calculadora(){
let num1=0 , num2=0 , caracter="0" , ej=0;
num1=parseInt(document.getElementById("num1").value);
caracter=document.getElementById("caracter").value;
num2=parseInt(document.getElementById("num2").value);
if(caracter === "+"){
    ej=num1+num2;
    document.getElementById("respuesta").innerHTML=`El resultado es ${ej}`;
}else if(caracter === "-"){
    ej=num1-num2;
    document.getElementById("respuesta").innerHTML=`El resultado es ${ej}`;
}else if(caracter === "*"){
    ej=num1*num2;
    document.getElementById("respuesta").innerHTML=`El resultado es ${ej}`;
}else if (caracter === "/"){
    ej=num1/num2;
    document.getElementById("respuesta").innerHTML=`El resultado es ${ej}`;
}
}


function Tablamul(){
    let num1 = 0;
    num1 = parseInt(document.getElementById("num1").value);
    document.getElementById("respuesta").innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        let resultado = document.createElement("p");
        resultado.textContent = `${i} x ${num1} = ${i * num1}`;
        document.getElementById("respuesta").appendChild(resultado);
    }
}


function palabraco()    
{
let palabra1="0" , palabra2="0" , uni="0"
palabra1=document.getElementById("palabra1").value;
palabra2=document.getElementById("palabra2").value;
uni = palabra1 +" "+ palabra2;
document.getElementById("respuesta").innerHTML=`La union de las dos palabras es : ${uni}`;
}


function Mayorde3()
{
let num1=0 , num2=0 , num3=0;
num1=parseInt(document.getElementById("num1").value);
num2=parseInt(document.getElementById("num2").value);
num3=parseInt(document.getElementById("num3").value);
if(num1>num2 && num1>num3) {
document.getElementById("respuesta").innerHTML=`El numero ${num1} es mayor que ${num2} y ${num3}`;
}
else if(num2>num1 && num2>num3){
document.getElementById("respuesta").innerHTML=`El numero ${num2} es mayor que ${num1} y ${num3}`;
}
else if(num3>num1 && num3>num2){
document.getElementById("respuesta").innerHTML=`El numero ${num3} es mayor que ${num1} y ${num2}`;
}
}


function  Edadvo(){
let num1=0;
num1=parseInt(document.getElementById("num1").value);
if(num1>=18){
    document.getElementById("respuesta").innerHTML=`Eres mayor de edad si puedes votar`;
}
else{
    document.getElementById("respuesta").innerHTML=`Eres menor de eda aun no puedes votar`;
}
}

function CalBMI() {
    let num1 = 0, num2 = 0, BMI = 0;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        document.getElementById("respuesta").innerHTML = `Por favor, introduce valores válidos para altura y peso.`;
        return; 
    }
    BMI = num1 / Math.pow(num2, 2);
    if (BMI < 18.5) {
        document.getElementById("respuesta").innerHTML = `Estás dentro de los valores de delgadez.`;
    } else if (BMI < 24.9) {
        document.getElementById("respuesta").innerHTML = `Estás dentro de los valores normales.`;
    } else if (BMI < 29.9) {
        document.getElementById("respuesta").innerHTML = `Estás dentro de los valores de sobrepeso.`;
    } else {
        document.getElementById("respuesta").innerHTML = `Estás dentro de los valores de obesidad.`;
    }
}
function nepoce() {
    let num1 = 0;
    num1 = parseInt(document.getElementById("num1").value);
    if(num1>0){
        document.getElementById("respuesta").innerHTML = `El numero ${num1} es positivo`;      
        }  
    else if(num1===0){
        document.getElementById("respuesta").innerHTML = `El numero es 0`;
    }
    else{
        document.getElementById("respuesta").innerHTML = `El numero ${num1} negativo`;
    }
     }


function Añobi()  
{
let num1=0;
num1=parseInt(document.getElementById("num1").value);
if(num1%4 === 0) 
{
document.getElementById("respuesta").innerHTML = `El año ${num1} es bisiesto`;  
}
else if(num1%400===0){
 document.getElementById("respuesta").innerHTML = `El año ${num1} es bisiesto`; 
}
else{
    document.getElementById("respuesta").innerHTML = `El año ${num1} es no bisiesto`; 
}
}

function signozo(){
let num1=0 , num2=0;
num1=parseInt(document.getElementById("num1").value);
num2=parseInt(document.getElementById("num2").value);
if ((num2 === 3 && num1 >= 21) || (num2 === 4 && num1 <= 19)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Aries`; 
} else if ((num2 === 4 && num1 >= 20) || (num2 === 5 && num1 <= 20)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Tauro`; 
} else if ((num2 === 5 && num1 >= 21) || (num2 === 6 && num1 <= 20)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Geminis`; 
} else if ((num2 === 6 && num1 >= 21) || (num2 === 7 && num1 <= 22)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Cancer`; 
} else if ((num2 === 7 && num1 >= 23) || (num2 === 8 && num1 <= 22)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Leo`; 
} else if ((num2 === 8 && num1 >= 23) || (num2 === 9 && num1 <= 22)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Virgo`; 
} else if ((num2 === 9 && num1 >= 23) || (num2 === 10 && num1 <= 22)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Libra`; 
} else if ((num2 === 10 && num1 >= 23) || (num2 === 11 && num1 <= 21)) {
 document.getElementById("respuesta").innerHTML = `Eres de signo Escorpio`; 
} else if ((num2 === 11 && num1 >= 22) || (num2 === 12 && num1 <= 21)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Sagitario`; 
} else if ((num2 === 12 && num1 >= 22) || (num2 === 1 && num1 <= 19)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Capricornio`; 
} else if ((num2 === 1 && num1 >= 20) || (num2 === 2 && num1 <= 18)) {
document.getElementById("respuesta").innerHTML = `Eres de signo Acuario`; 
} else {
document.getElementById("respuesta").innerHTML = `Eres de signo Piscis`; 
}
} 

function diadelmes(){
let num1=0;
num1=parseInt(document.getElementById("num1").value);
if(num1>0 && num1<=15)
{
document.getElementById("respuesta").innerHTML = `Este dia pertence a la primera quincena el mes`;
}
else
if(num1>=16 && num1<=30){
document.getElementById("respuesta").innerHTML = `Este dia pertence a la segunda quincena el mes`;
}
}

function diasemana(){
let num1=0;
num1=parseInt(document.getElementById("num1").value)
switch(num1)    
{
case 1:document.getElementById("respuesta").innerHTML = `Lunes`;
break;
case 2:document.getElementById("respuesta").innerHTML = `Martes`;
break;
case 3:document.getElementById("respuesta").innerHTML = `Miercoles`;
break;
case 4:document.getElementById("respuesta").innerHTML = `Jueves`;
break;
case 5:document.getElementById("respuesta").innerHTML = `Viernes`;
break;
case 6:document.getElementById("respuesta").innerHTML = `Sabado`;
break;
case 7:document.getElementById("respuesta").innerHTML = `Domingo`;
break;
default:
    document.getElementById("respuesta").innerHTML = `Numero incorrecto`;
}
}

function palabraigual(){
let num1="0" , num2="0";
num1=document.getElementById("palabra1").value
num2=document.getElementById("palabra2").value
if(num1===num2){
document.getElementById("respuesta").innerHTML = `La palabra " ${num1} " y " ${num2} " son iguales`;
}else{
document.getElementById("respuesta").innerHTML = `La palabra " ${num1} " y " ${num2} " no son iguales`;
}
}
 
function calculadorades(){
let num1=0, num2=0 ,des=0;
num1=parseInt(document.getElementById("num1").value)
num2=parseInt(document.getElementById("num2").value)
des= num1-(num1*num2/100);
document.getElementById("respuesta").innerHTML = `<br>Tu descuento es de ${num1*num2/100}$`;
document.getElementById("respuesta").innerHTML += `<br>Tu Total a pagar menos descuento es de: ${des}$`;
}

function calculadoraimp(){
let num1=0 , num2=0;
num1=parseInt(document.getElementById("num1").value)
num2=parseInt(document.getElementById("num2").value)
des= num1+(num1*num2/100);
document.getElementById("respuesta").innerHTML = `<br>Subtotal a pagar : ${num1}$`;
document.getElementById("respuesta").innerHTML += `<br>Estos son los impuestos totales : ${num1*num2/100}$`;
document.getElementById("respuesta").innerHTML += `<br>Tu Total a pagar mas impuestos : ${des}$`;
}
function calculadoraume(){
let num1=0, num2=0 ,aum=0;
num1=parseInt(document.getElementById("num1").value)
num2=parseInt(document.getElementById("num2").value)
aum=num1+(num1*num2/100);
document.getElementById("respuesta").innerHTML = `Tu salario a hora es de : ${aum}$`;
}
function destotal(){
    let num1=0, num2=0 ,t=0;
    num1=parseInt(document.getElementById("num1").value)
    num2=parseInt(document.getElementById("num2").value)
    t=num1*num2;
    if(t>100){
    document.getElementById("respuesta").innerHTML = `<br>Tienes un descuento del 10%`;
    document.getElementById("respuesta").innerHTML +=`<br>Tu total a pagar menos el descuento es : ${t-(t*0.10)}$`;
    }else{
    document.getElementById("respuesta").innerHTML = `No tienes descuento tu total a pagar es : ${t}$`;
    }
}
function impanual(){
let num1=0;
num1=parseInt(document.getElementById("num1").value)
if(num1<=10000){
document.getElementById("respuesta").innerHTML = `Estos son los impuestos sobre la renta que tienes que pagar :${num1*0.05}$`;
}else if(num1>=10001 && num1<=19999){
document.getElementById("respuesta").innerHTML = `Estos son los impuestos sobre la renta que tienes que pagar :${num1*0.10}$`;
}else if(num1>20000){
document.getElementById("respuesta").innerHTML = `Estos son los impuestos sobre la renta que tienes que pagar :${num1*0.15}$`;
}
}

function antiguedad(){
let num1=0, num2=0;
num1=parseInt(document.getElementById("num1").value)
num2=parseInt(document.getElementById("num2").value)
if(num1>5){
document.getElementById("respuesta").innerHTML = `<br>Este sera tu bono por trabajar mas de 5 años aqui : ${num2*0.05}$`;
document.getElementById("respuesta").innerHTML += `<br>Este sera tu salario : ${(num2*0.05)+num2}$`;
}else{
document.getElementById("respuesta").innerHTML = `Aun no tienes los años suficiente para resivir un bono por antiguedad`;  
}
}

function distanciata(){
let num1=0 ;
num1=parseInt(document.getElementById("num1").value);
if(num1<50){
document.getElementById("respuesta").innerHTML = `El costo de envio sera de 10$`; 
}
else{
document.getElementById("respuesta").innerHTML = `El costo de envio sera de 20$`; 
}
}

function totalmesaño(){
let num1=0 ;
num1=parseInt(document.getElementById("num1").value);
if(num1>500){
    document.getElementById("respuesta").innerHTML = `Tendras un descuento de 10% en tu proxima compra`; 
}else{
    document.getElementById("respuesta").innerHTML= `No tendras ningun descuento en tu proxima compra`;
}
}


function descuentovol(){
  let num1=0 , num2=0;
  num1=parseInt(document.getElementById("num1").value);
  num2=parseInt(document.getElementById("num2").value);
if(num1<50){
document.getElementById("respuesta").innerHTML= `<br>Tienes un descuento de 5%`;
document.getElementById("respuesta").innerHTML +=`<br>total a pagar : ${num1*num2-(num1*num2*0.05)}`;
}
else
if(num1>=50 && num1<=99){
document.getElementById("respuesta").innerHTML= `<br>Tienes un descuento de 10%`;
document.getElementById("respuesta").innerHTML +=`<br>total a pagar : ${num1*num2-(num1*num2*0.10)}`;
}else{
document.getElementById("respuesta").innerHTML= `<br>Tienes un descuento de 15%`;
document.getElementById("respuesta").innerHTML +=`<br>total a pagar : ${num1*num2-(num1*num2*0.15)}`;
}
}

function cosser(){
num1=parseInt(document.getElementById("num1").value);
if (num1>=10){
document.getElementById("respuesta").innerHTML= `Tienes un descuento del 20% en el servivio`;
document.getElementById("respuesta").innerHTML= `Total a pagar por el servicio menos el descuento : ${50-(50*0.20)}$`;
}else{
document.getElementById("respuesta").innerHTML= `no tienes descuento , valor total a pagar 50$`;  
}
}



/*************************************         CICLOS  Y ARREGLOS         ***********************************************************************/





function forsuma(){
    let suma=0
    for(let i=0; i<=50;i++){
    if(i%2===0){
    suma=suma+i;}
    }
  document.getElementById("respuesta").innerHTML=`La suma de todos los pares del 1 al 50 es de ${suma}`
}




function vocalestol(){
let num1="0";
num1=document.getElementById("num1").value;
num1=num1.toLowerCase();
let contador=0;
let indice=0;
while(indice<num1.length){
const caracter=num1[indice]
if(caracter ===`a`||caracter===`e`||caracter===`i`||caracter===`o`||caracter===`u`){
    contador++;
}
indice++
}
document.getElementById("respuesta").innerHTML=`El total de vocales en la palabra "${num1}" es : ${contador}`
}

function contadordi(){
let num1="0" , contador=0;
num1=document.getElementById("num1").value;
for( let i=0;i<num1.length;i++){
  contador++;
}
document.getElementById("respuesta").innerHTML=`El total de caracteres que hay en la palabra "${num1}" es : ${contador} `
}

function Adivinanu(){
let num1=0;  
num1=parseInt(document.getElementById("num1").value);
let numal = Math.floor(Math.random()*3)+1;
if(num1===numal){
document.getElementById("respuesta").innerHTML=`Felicidades el numero era ${numal}`;}
else{
    document.getElementById("respuesta").innerHTML=`Sigue intentando`;
}}

function contadorletra(){
let num1="0" , contador=0;
num1=document.getElementById("num1").value;
num1=num1.toLowerCase();
for(let i=0 ;i<num1.length;i++){
const caracter = num1[i];
if(caracter>='a' && caracter<='z'){
 contador++;
}
}
document.getElementById("respuesta").innerHTML=`El total de letras que hay en la palabra "${num1}" es : ${contador} `
}

function sumaimparesa(){
let a=1 ,suma=0;
while(a<=100){
suma=suma+a;
a=a+2;
}
document.getElementById("respuesta").innerHTML=`La suma de los impares del 1 al 100 es : ${suma} `
}

function contadorcaracteres(){
let num1="0" , contador=0;
num1=document.getElementById("num1").value;
num1=num1.toLowerCase();
for(let i=0 ;i<num1.length;i++){
const caracter = num1[i];
if(caracter>='!' && caracter<='/'){
contador++;
}
}
document.getElementById("respuesta").innerHTML=`El total de caracteres que hay en la palabra "${num1}" es : ${contador} `
}

function sumaingresados(){
    let suma=0;
    let num1 = document.getElementById("num1");
    let numero = parseInt(num1.value);
    if (!isNaN(numero)) {
        miArreglo.push(numero);
        num1.value = "";
        mostrarResultado();
    }
for(let i=0;i<miArreglo.length;i++){
suma=suma+miArreglo[i];}
document.getElementById("respuesta").innerHTML=`La suma de todos los lementos de este arreglo es : ${suma}`
}

function cuentare(){
num1=parseInt(document.getElementById("num1").value)
while(num1>=2){
num1=num1-1;
document.getElementById("respuesta").innerHTML+=`<br>${num1}`
}
}

function sumaarreglo(){
    let suma=0;
    let num1 = document.getElementById("num1");
    let numero = parseInt(num1.value);
    if (!isNaN(numero)) {
        miArreglo.push(numero);
        num1.value = "";
        mostrarResultado();
    }
for(let i=0;i<miArreglo.length;i++){
suma=suma+miArreglo[i];}
document.getElementById("respuesta").innerHTML=`La suma de todos los lementos de este arreglo es : ${suma}`
}

function sumaarreglopro(){
    let suma=0 , co=0;
    let num1 = document.getElementById("num1");
    let numero = parseInt(num1.value);
    if (!isNaN(numero)) {
        miArreglo.push(numero);
        num1.value = "";
        mostrarResultado();
    }
for(let i=0;i<miArreglo.length;i++){
suma=suma+miArreglo[i];
co=co+1;}
document.getElementById("respuesta").innerHTML=`El promedio de las calificaciones es : ${suma/co}`
}



function mayorymenorarre(){
    let num1 = document.getElementById("num1");
    let numero = parseInt(num1.value);
    if (!isNaN(numero)) {
        miArreglo.push(numero);
        num1.value = "";
        mostrarResultado();
    }
let mayor1=0 , menor1=0;
for(let i=0 ;i<miArreglo.length;i++){
if(i===0){
menor1= miArreglo[i];
mayor1= miArreglo[i];
}else if(miArreglo[i]>mayor1){
mayor1=miArreglo[i];
}else if(miArreglo[i]<menor1){
menor1=miArreglo[i];
}}
document.getElementById("respuesta").innerHTML=`El numero mayor es ${mayor1} y el menor es ${menor1}`
}


let miArreglo = [];
function encontrarnumero() {
    let num2 = parseInt(document.getElementById("num2").value);
    let num1 = document.getElementById("num1");
    let numero = parseInt(num1.value);
    let encontrado = false;
    if (!isNaN(numero)) {
        miArreglo.push(numero);
        num1.value = "";
        mostrarResultado();
    } 
    for (let i = 0; i < miArreglo.length; i++) {
        if (num2 === miArreglo[i]) {
            encontrado = true;
            break;
        }
    }
    if (encontrado) {
        document.getElementById("respuesta").innerHTML = `El número ${num2} sí se encuentra en el arreglo.`;
    } else {
        document.getElementById("respuesta").innerHTML = `El número ${num2} no se encuentra en el arreglo.`;
    }
}



function contadorelempares(){
    let sumapar=0;
    let num1 = document.getElementById("num1");
    let numero = parseInt(num1.value);
    if (!isNaN(numero)) {
        miArreglo.push(numero);
        num1.value = "";
        mostrarResultado();
    } 
for(let i=0;i<miArreglo.length;i++) {
    if(miArreglo[i]%2===0){
    sumapar=sumapar+1;
    }
}
document.getElementById("respuesta").innerHTML = `Hay ${sumapar} numeros pares en el arreglo`;
}

function invertir() {
  let num1 = document.getElementById("num1");
  let numero = parseInt(num1.value);
  if (!isNaN(numero)) {
    miArreglo.push(numero);
    num1.value = "";
    mostrarResultado();
  }
  let inver = [];
  for (let i = 0; i < miArreglo.length; i++) {
    inver[miArreglo.length - 1 - i] = miArreglo[i];
  }

  document.getElementById("respuesta").innerHTML = `${inver}`;
}


function buscarindice(){
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let numero = parseInt(num1.value);
if (!isNaN(numero)) {
  miArreglo.push(numero);
  num1.value = "";
  mostrarResultado();
}
for(let i=0;i<miArreglo.length;i++){
if(parseInt(num2.value)===miArreglo[i]){
document.getElementById("respuesta").innerHTML = `El numero ${miArreglo[i]} esta en la posicion ${i}`;
return;}
document.getElementById("respuesta").innerHTML = `El numero ${parseInt(num2.value)} no esta en el arreglo`;}
}


/*********************************************       FUNCIONES         ***************************************************/

function saludar(){
document.getElementById("respuesta").innerHTML= `HOLA :)`
}

function sumarNumerosf(a, b) {
    let resultado = a + b;
    return resultado;
}

function multiplicarNumeros(numero1, numero2) {
    var resultado = numero1 * numero2;
    return resultado;
}

function parimpar3(){
    let num="0";
    num=document.getElementById("num").value
    if (num % 2 == 0) {
        document.getElementById("respuesta").innerHTML= `el numero es par`
    } else {
        document.getElementById("respuesta").innerHTML= `el numero es impar`
    }
}

function calcularAreaRectangulo(base, altura){
   return(base * altura) / 2;
}

function imprimirNombre() {
    var nombre = "Luis Steven Yami Elkin Douglas"; 
    document.getElementById("respuesta").innerHTML= `mi nombre es ${nombre}`
}


function celsiusToFahrenheit() {
    let gradosCelsius= parseInt(prompt("Ingrese la temperatura en grados Celsius:"));

        return gradosFahrenheit = (gradosCelsius * 9/5) + 32;
}

function contadorcaracteresf(){
    let num1="0" , contador=0;
    num1=document.getElementById("num1").value;
    num1=num1.toLowerCase();
    for(let i=0 ;i<num1.length;i++){
    const caracter = num1[i];
    if(caracter>='!' && caracter<='/'){
    contador++;
    }
    }
    document.getElementById("respuesta").innerHTML=`El total de caracteres que hay en la palabra "${num1}" es : ${contador} `
    }


function imprimirNumeros() {
    num=document.getElementById("num").value
    for( let num = 1; num <= 10; num++){
        document.write(num + "<br>");
    }
}

function sumarNumeros3(listaNumeros) {
    var resultado = listaNumeros.reduce(function(suma, numero) {
        return suma + numero;
    }, 0);

    return resultado;
}








