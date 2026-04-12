let titulo = document.getElementById("titulo");
let izquierda = document.querySelector(".izquierda");
let derecha = document.querySelector(".derecha");
let footer = document.getElementById("footer");

let estado = false;

// CLICK simple
titulo.addEventListener("click", () => {
    if (!estado) {
        // intercambia fondos
        izquierda.style.backgroundColor = "transparent";
        derecha.style.backgroundColor = "rgba(0,0,0,0.7)";

        // letras del formulario en rojo
        derecha.style.color = "red";

        estado = true;
    }
});

// DOBLE CLICK (vuelve a normal)
titulo.addEventListener("dblclick", () => {
    izquierda.style.backgroundColor = "rgba(0,0,0,0.7)";
    derecha.style.backgroundColor = "white";
    derecha.style.color = "black";

    estado = false;
});

// FOOTER aparece a los 50s
setTimeout(() => {
    footer.style.opacity = "1";

    // transición de colores
    footer.style.backgroundColor = "pink";

    setTimeout(() => {
        footer.style.backgroundColor = "yellow";
    }, 5000);

    setTimeout(() => {
        footer.style.backgroundColor = "transparent";
    }, 10000);

}, 50000);

// TABLA al cargar la página
window.onload = () => {
    let tabla = document.createElement("table");

    tabla.style.width = "50%";
    tabla.style.margin = "50px auto";
    tabla.style.backgroundColor = "#ddd";
    tabla.style.borderCollapse = "collapse";

    for (let i = 0; i < 3; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            let celda = document.createElement("td");
            celda.innerText = "Dato";
            celda.style.border = "1px solid black";
            celda.style.padding = "10px";
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
};