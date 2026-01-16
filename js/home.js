// Registra plugins GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Só cria o ScrollSmoother se NÃO for mobile
if (!ScrollTrigger.isTouch) {
    ScrollSmoother.create({
        smooth: 1,
        effects: true
    });
}

// Animação de blur na primeira seção
gsap.to(".blur", {
    opacity: 0,
    filter: "blur(20px)",
    y: -50,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".secao-1",
        start: "top+=150 top",
        end: "bottom+=200 top",
        scrub: true,
    }
});



document.querySelectorAll('a.cta-button').forEach(button => {
    button.addEventListener('click', function (e) {
        if (!ScrollTrigger.isTouch) {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
        }
        // No mobile, o clique segue o comportamento normal
    });
});