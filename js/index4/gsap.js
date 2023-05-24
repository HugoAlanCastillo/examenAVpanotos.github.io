let icon1 = gsap.from('#cards-1', {
  duration: 1.5,
  y: 'random(-500,500)',
  scale: 0,
  stagger: 0.5,
  delay: 4.1
});
let icon2 = gsap.from('#cards-2', {
  duration: 1.5,
  x: 'random(500,-500)',
  scale: 0,
  stagger: 0.5,
  delay: 4.3
});
let icon3 = gsap.from('#cards-3', {
  duration: 1.5,
  y: 'random(500,-500)',
  scale: 0,
  stagger: 0.5,
  delay: 4.6
});
let icon4 = gsap.from('#cards-4', {
  duration: 1.5,
  x: 'random(-500,500)',
  scale: 0,
  stagger: 0.5,
  delay: 4.9
});


gsap.set("#icono", { opacity: 0, rotation: 0 }); // Establecer la opacidad y rotación inicial en cero

gsap.to("#icono", {
  opacity: 1, // Aumentar la opacidad para que aparezca gradualmente
  rotation: 360, // Rotación completa de 360 grados
  duration: 2, // Duración de la animación
  delay:7,
  ease: "power2.out", // Efecto de aceleración personalizado
});


gsap.from('#accion', { opacity: 0, duration: 1, ease: 'power1.inOut', delay:5 });
gsap.from('#accion2', { opacity: 0, duration: 1, ease: 'power1.inOut', delay:5 });
gsap.from('#accion3', { opacity: 0, duration: 1, ease: 'power1.inOut', delay:5 });

        gsap.from("#panotos-1", {
          x: "-100%", // Empieza fuera del área a la derecha
          opacity: 0, // Inicia con opacidad cero
          scale: 0.8, // Inicia con escala del 80%
          duration: 1.5, // Duración de la animación en segundos
          ease: "power2.out", // Efecto de aceleración personalizado
          delay: 0.5 // Retraso antes de iniciar la animación en segundos
        });
        
        gsap.to("#panotos-1", {
          x: 0, // Vuelve a su posición original en el eje X
          opacity: 1, // Aumenta la opacidad al estado original
          scale: 1, // Vuelve al tamaño original
          duration: 1.5, // Duración de la animación en segundos
          ease: "power2.inOut", // Efecto de aceleración personalizado
          delay: 2 // Retraso antes de iniciar la animación en segundos
        });
      
        gsap.from("#panotos-2", {
          x: "100%", // Empieza fuera del área a la derecha
          opacity: 0, // Inicia con opacidad cero
          scale: 0.8, // Inicia con escala del 80%
          duration: 1.5, // Duración de la animación en segundos
          ease: "power2.out", // Efecto de aceleración personalizado
          delay: 0.5 // Retraso antes de iniciar la animación en segundos
        });
        
        gsap.to("#panotos-2", {
          x: 0, // Vuelve a su posición original en el eje X
          opacity: 1, // Aumenta la opacidad al estado original
          scale: 1, // Vuelve al tamaño original
          duration: 1.5, // Duración de la animación en segundos
          ease: "power2.inOut", // Efecto de aceleración personalizado
          delay: 2 // Retraso antes de iniciar la animación en segundos
        });

        let icon_1 = gsap.fromTo(
          '#icon-1',
          { opacity: 0, y: -200, scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 5 }
        );  
        let icon_2 = gsap.fromTo(
          '#icon-2',
          { opacity: 0, y: -200, scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 5 }
        ); 
         let icon_3 = gsap.fromTo(
          '#icon-3',
          { opacity: 0, y: -200, scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 5 }
        );
        let icon_4 = gsap.fromTo(
          '#icon-4',
          { opacity: 0, y: -200, scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 5 }
        );

        gsap.from("#panotos-text", {
          opacity: 0,         // Inicialmente, el elemento tiene una opacidad de 0
          duration: 1,        // Duración de la animación en segundos
          delay: 0.5,         // Retardo antes de que comience la animación en segundos
          ease: "power2.out"  // Efecto de aceleración personalizado
        });
        let rama = gsap.fromTo(
          '#plantas',
          { rotation: -3, transformOrigin: 'center bottom' }, // Posición inicial: inclinada hacia la izquierda
          { rotation: 3, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' } // Posición final: inclinada hacia la derecha
        );
        