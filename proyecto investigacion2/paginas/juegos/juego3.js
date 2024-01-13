class JuegoPlanetas {
    constructor() {
        this.planetas = ["planetatierra.jpg", "neptuno.jpg", "marte.jpg", "saturno.jpg", "venus.jpg", "mercurio.jpg", "jupiter.jpg", "urano.jpg"];
        this.correctas = [2, 2, 1, 1, 0, 2, 1, 0];
        this.opciones = [
            ["NEPTURNO", "JUPITER", "TIERRA"],
            ["MARTE", "VENUS", "NEPTUNO"],
            ["URANO", "MARTE", "MERCURIO"],
            ["TIERRA", "SATURNO", "VENUS"],
            ["VENUS", "MARTE", "URANO"],
            ["JUPITER", "NEPTUNO", "MERCURIO"],
            ["MARTE", "JUPITER", "URANO"],
            ["URANO", "TIERRA", "JUPITER"]
        ];
        this.posActual = 0;
        this.cantidadAcertadas = 0;
    }

    comenzarJuego() {
        this.posActual = 0;
        this.cantidadAcertadas = 0;
        document.getElementById("pantalla-inicial").style.display = "none";
        document.getElementById("pantalla-juego").style.display = "block";
        this.cargarPlaneta();
    }

    cargarPlaneta() {
        if (this.planetas.length <= this.posActual) {
            this.terminarJuego();
        } else {
            this.limpiarOpciones();
            document.getElementById("imgPlaneta").src = "img/" + this.planetas[this.posActual];
            document.getElementById("n0").innerHTML = this.opciones[this.posActual][0];
            document.getElementById("n1").innerHTML = this.opciones[this.posActual][1];
            document.getElementById("n2").innerHTML = this.opciones[this.posActual][2];
        }
    }

    limpiarOpciones() {
        for (let i = 0; i < 3; i++) {
            document.getElementById("n" + i).className = "nombre";
            document.getElementById("l" + i).className = "letra";
        }
    }

    comprobarRespuesta(opElegida) {
        if (opElegida == this.correctas[this.posActual]) {
            document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
            document.getElementById("l" + opElegida).className = "letra letraAcertada";
            this.cantidadAcertadas++;
        } else {
            document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
            document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
            document.getElementById("n" + this.correctas[this.posActual]).className = "nombre nombreAcertada";
            document.getElementById("l" + this.correctas[this.posActual]).className = "letra letraAcertada";
        }
        this.posActual++;
        setTimeout(() => this.cargarPlaneta(), 1000);
    }

    terminarJuego() {
        document.getElementById("pantalla-juego").style.display = "none";
        document.getElementById("pantalla-final").style.display = "block";
        document.getElementById("numCorrectas").innerHTML = this.cantidadAcertadas;
        document.getElementById("numIncorrectas").innerHTML = this.planetas.length - this.cantidadAcertadas;
    }

    volverAlInicio() {
        document.getElementById("pantalla-final").style.display = "none";
        document.getElementById("pantalla-inicial").style.display = "block";
        document.getElementById("pantalla-juego").style.display = "none";
    }
}

const juego = new JuegoPlanetas();
