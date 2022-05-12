datos = [
    {
        'imagen': "support_agent",
        'titulo': "Support",
        "links": [
            { "icono": "help", "texto": "FAQ General" },
            { "icono": "code", "texto": "FAQ Técnico" },
            { "icono": "confirmation_number", "texto": "Create ticket" }
        ],
        "boton": { "icono": "", "texto": "FAQ General" }
    },
    {
        'imagen': "code",
        'titulo': "Technical Documen&shy;ta&shy;tion",
        "links": [
            { "icono": "description", "texto": "Reference and User Manuals" }
        ],
        "boton": { "icono": "", "texto": "Reference and User Manuals" }
    },
    {
        'imagen': "request_page",
        'titulo': "Billing",
        "links": [
            { "icono": "monetization_on", "texto": "Billing Sinclair" }
        ],
        "boton": { "icono": "", "texto": "Billing Sinclair" }
    },
    {
        'imagen': "cached",
        'titulo': "Convert",
        "links": [
            { "icono": "cached", "texto": "Convert to pdf" },
            { "icono": "tune", "texto": "Transform" }
        ],
        "boton": { "icono": "", "texto": "FAQ" }
    },
    {
        'imagen': "cached",
        'titulo': "Convert",
        "links": [
            { "icono": "cached", "texto": "Convert to pdf" },
            { "icono": "tune", "texto": "Transform" }
        ],
        "boton": { "icono": "", "texto": "FAQ" }
    }
]

window.addEventListener("DOMContentLoaded", () => {
    console.log("cargando")
    var cartas = ""
    datos.forEach(carta => {
        cartas += '<div class="card loading">'
            + '<span class="material-icons black">' + carta.imagen + '</span>'
            + '<h1>' + carta.titulo + '</h1>'
            + '<ul class="card-links">'
        carta.links.forEach(link => {
            cartas += '<li><a href="javascript:void(0)" data-icon="' + link.icono + '" class="' + (link.icono.length > 0 ? "icon" : "") + '">' + link.texto + '</a></li>'
        });

        cartas += '</ul>'
            + '<div class="card-footer">'
            + '<a href="javascript:void(0)" data-icon="' + carta.boton.icono + '" class="boton' + (carta.boton.icono.length > 0 ? " icon" : "") + '">' + carta.boton.texto + '</a>'
            + '</div>'
            + '</div>'
    });
    document.querySelector(".deck").innerHTML = cartas;

    document.getElementById("verNav").addEventListener("click", () => {
        document.querySelector(".nav-content").classList.toggle("show");
    })

    document.querySelectorAll(".dropdown").forEach(element => {
        element.addEventListener("click", (event) => {
            element.classList.toggle("active")
            if (event.target.closest("li") != null) {
                element.querySelector("span").innerHTML = event.target.closest("li").innerHTML;
            }
        })
    });

    document.querySelectorAll(".dropdown-links").forEach(element => {
        element.addEventListener("click", (event) => {
            element.classList.toggle("active")
        })
    });

    document.querySelectorAll(".card.compact").forEach(element => {
        element.querySelector(".boton").innerHTML = "Desplegar";
        element.querySelector(".boton").addEventListener("click", (event) => {
            element.classList.toggle("compacted");
            if (element.classList.contains("compacted")) {
                element.querySelector(".boton").innerHTML = "Desplegar";
            } else {
                element.querySelector(".boton").innerHTML = element.dataset.button;
            }
        })
    });
})

// simulacion de carga
window.addEventListener("load", () => {
    // setTimeout(() => {
    //     document.querySelectorAll(".spinner").forEach(element => {
    //         element.classList.remove("load");
    //         setTimeout(() => {
    //             element.remove("spinner");
    //         }, 1000);
    //     });
    // }, 2000);
    document.querySelectorAll(".loading").forEach(element => {
        element.classList.remove("loading");
    });
    console.log("cargado")
})