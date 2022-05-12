document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("desplegar-nav").addEventListener("click", () => {
        document.querySelector(".nav__links").classList.toggle("nav__links--mostrar")
    })

    console.log(localStorage)
})