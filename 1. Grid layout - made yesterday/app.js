var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger",
        scrub: .5,
        pin: true,
        start: "top top",
        end: "+=400%"
    },
});


tl.from(".target", {
    y: 100,
    opacity: 0,
    ease: 'expo',
    duration: 1
}, 0).from(".target", {
    ease: 'none',
    duration: 1
}).to(".target", {
    opacity: 0,
    y: -100,
    ease: 'none',
    duration: 1
}).from(".target2", {
    opacity: 0,
    y: 100,
    ease: 'none',
    duration: 1
}, '-=.4').from(".target2", {
    ease: 'none',
    duration: 2
});





gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: .2 }
});