/* gsap.from("#imagen-svg", { x: "100%", duration: 1.5, ease: "power2.out" });
 */


gsap.from("#panotos-logo", {
  x: "-100%",        // Inicia desde la derecha
  duration: 2,      // Duración total de la animación
  ease: "power1.out", // Easing inicial (lento)
  stagger: 0.2,
  opacity: 0,
  delay: 1.0,
})


function animatePala() {
  gsap.from("#PalaReforesta-logo", {
    rotation: 360,       // Grados de rotación
    duration: 1.4,         // Duración de la animación
    ease: "power1.inOut", // Easing de la animación
    
  });

}

var timeline = gsap.timeline({ repeat: -1 });

timeline.to({}, 10, {
  repeat: -1,
  onRepeat: function () {
    animatePala();
  }
});

// Iniciar la animación inicial
animatePala();


gsap.from("#TitleReforesta-logo", {
  opacity: 0,                 // Inicia con opacidad 
  duration: 2.5,              // Duración de la animación
  ease: "power2.out",
  delay: 1.0,         // Easing de la animación
});


