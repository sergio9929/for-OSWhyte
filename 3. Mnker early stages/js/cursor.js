var cursor, init, mouseX, mouseY, positionElement, timer;

cursor = document.getElementById('cursor');

document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelectorAll("a.tarjeta, a.pantalla__bloque, a.producto__contenido").forEach(element => {
        element.addEventListener("mouseenter", (event) => {
            cursor.classList.add("cursor--sobre-tarjeta")
        })
        element.addEventListener("mouseleave", (event) => {
            cursor.classList.remove("cursor--sobre-tarjeta")
        })
    });

    document.querySelectorAll("a.nav__link").forEach(element => {
        element.addEventListener("mouseenter", (event) => {
            cursor.classList.add("cursor--sobre-link")
        })
        element.addEventListener("mouseleave", (event) => {
            cursor.classList.remove("cursor--sobre-link")
        })
    });

    document.querySelectorAll("label, button, .galeria__imagen-extra").forEach(element => {
        element.addEventListener("mouseenter", (event) => {
            cursor.classList.add("cursor--sobre-boton")
        })
        element.addEventListener("mouseleave", (event) => {
            cursor.classList.remove("cursor--sobre-boton")
        })
    });

    document.querySelectorAll("input, .producto-unico__descripcion").forEach(element => {
        element.addEventListener("mouseenter", (event) => {
            cursor.classList.add("cursor--sobre-texto")
        })
        element.addEventListener("mouseleave", (event) => {
            cursor.classList.remove("cursor--sobre-texto")
        })
    });
});



positionElement = (event) => {
    cursor.style.transform = 'translate3d(' + event.clientX + 'px, ' + event.clientY + 'px, 0)';
};

timer = false;

window.onmousemove = init = (event) => {
    return timer = setTimeout(() => {
        return positionElement(event);
    }, 1);
};