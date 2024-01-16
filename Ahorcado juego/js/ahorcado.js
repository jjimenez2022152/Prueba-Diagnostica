const palabras = ["huawei", "samsung", "iphone", "honor", "xiaomi"];

let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

let letrasAdivinadas = new Array(palabraSecreta.length).fill("_");

let intentosRestantes = 6;

function mostrarPalabra() {
    document.getElementById("palabraMostrar").innerText = letrasAdivinadas.join(" ");
}

function adivinarLetra() {
    const letraInput = document.getElementById("letraInput").value.toLowerCase();

    if (letrasAdivinadas.includes(letraInput)) {
        alert("Ya usaste esa letra, prueba con otra!");
        return;
    }
    if (palabraSecreta.includes(letraInput)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letraInput) {
                letrasAdivinadas[i] = letraInput;
            }
        }
        mostrarPalabra();
    } else {
        intentosRestantes--;
        document.getElementById("contadorIntentos").innerText = intentosRestantes;

        if (intentosRestantes === 0) {
            alert("¡Has perdido! La palabra secreta era: " + palabraSecreta);
            reiniciarJuego();
        }
    }

    if (letrasAdivinadas.join("") === palabraSecreta) {
        alert("¡Felicidades! ¡Has adivinado la palabra!");
        reiniciarJuego();
    }

    document.getElementById("letraInput").value = "";
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    letrasAdivinadas = new Array(palabraSecreta.length).fill("_");
    intentosRestantes = 6;

    mostrarPalabra();
    document.getElementById("contadorIntentos").innerText = intentosRestantes;
}
