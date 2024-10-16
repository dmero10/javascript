// 1.	Presentar un mensaje N veces
// 2.	Presentar numeros multiplos del 7 de 1 a N numeros
// 3.	Presentar numeros multiplos de cualquier numero hasta N
// 4.	Presentar los numeros Positivos de N numeros
// 5.	Presentar los numero Pares de N numeros
// 6.	Presentar los divisores de cualquier numero. Ejem: num=6  divisores(1,2,3)
// 7.	Presentar la tabla de sumar del 10 del 1 al 12 Ejemplo: (1+2=3 …12+2=14)
// 8.	Presentar cualquier tabla de multiplicar desde un valor inicial a un valor final.
// 9.	Presentar los numeros comprendidos entre dos numeros
// 10.	Presentar los numeros paras comprendidos entre dos nmeros

// 1
function mensajeNveces(mensaje, N) {
    for (let i = 1; i <= N; i++) {
        console.log(i+mensaje);
    }
}


// 2
function multiplosde7(N) {
    console.log(`Múltiplos de 7 desde 1 hasta ${N}:`)
    for (let i = 1; i <= N; i++) {
        if (i % 7 === 0) 
            console.log(i)
    }
}

// 3
function multiplosde(numero, N) {
    console.log(`Múltiplos de ${numero} desde 1 hasta ${N}:`)
    for (let i = 1; i <= N; i++) {
        if (i % numero === 0) 
            console.log(i);
    }
}

// 4
function numpositivos(N) {
    console.log(`Números positivos hasta ${N}:`)
    for (let i = 1; i <= N; i++) {
        console.log(i)
    }
}

// 5
function numpares(N) {
    console.log(`Números pares hasta ${N}:`)
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) 
            console.log(i)
    }
}

// 6
function divide(num) {
    console.log(`Divisores de ${num}:`)
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) 
            console.log(i)
    }
}

// 7
function tabladesumar() {
    console.log("Tabla de sumar del 10 (del 1 al 12):")
    for (let i = 1; i <= 12; i++) {
        console.log(`${i} + 10 = ${i + 10}`)
    }
}

// 8
function tablademultiplicar(num, vi, vf) {
    console.log(`Tabla de multiplicar del ${num} desde ${vi} hasta ${vf}:`)
    for (let i = vi; i <= vf; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

// 9
function numentre(min, max) {
    console.log(`Números entre ${min} y ${max}:`)
    for (let i = min; i <= max; i++) {
        console.log(i)
    }
}

// 10
function paresentre(min, max) {
    console.log(`Números pares entre ${min} y ${max}:`)
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) 
            console.log(i)
    }
}

// funciones
mensajeNveces("Hola", 5)
//multiplosde7(50)
//multiplosde(3, 30)
//numpositivos(10)
//numpares(20)
//divide(6)
//tabladesumar()
//tablademultiplicar(5, 1, 10)
//numentre(5, 15)
//paresentre(4, 20)
