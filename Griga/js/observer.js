document.addEventListener("DOMContentLoaded", function () {

    //observer para animacion de entrada
    var target = document.querySelectorAll(".div");
    var options = {
        // root: document.querySelector('#scrollArea'),
        // rootMargin: '0px',
        // threshold: .25
    }

    var observer = new IntersectionObserver(callback, options);

    target.forEach(element => {
        observer.observe(element);
    });

    //observer para lazy load de imagenes
    var lazyimg = document.querySelectorAll('img[data-src]')
    console.log(lazyimg)
    var imgObserver = new IntersectionObserver(callback_img, { rootMargin: "100px" });
    lazyimg.forEach((img) => {
        imgObserver.observe(img);
    })

})

//observer para animacion de entrada
function callback(entries, observer) {
    entries.forEach(element => {
        if (element.isIntersecting) {
            // console.log("mostrando", element.target);
            element.target.style.transform = "";
            element.target.style.opacity = "";
            observer.unobserve(element.target);
        } else {
            element.target.style.opacity = "0";
            element.target.style.transform = "scale(.5) translateY(100px)"
        }
    });
}

//observer para lazy load de imagenes
function callback_img(entries, observer) {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            var lazyimg = element.target;
            console.log("lazy loaded", lazyimg);
            lazyimg.src = lazyimg.dataset.src;
            if (lazyimg.getAttribute('data-srcset')) {
                lazyimg.setAttribute('srcset', lazyimg.dataset.srcset);
            }
            observer.unobserve(element.target);
        }
    });
}