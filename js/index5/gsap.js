/* let icon1 = gsap.from('#cards-1', {
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
        
        let rama = gsap.fromTo(
          '#plantas',
          { rotation: -3, transformOrigin: 'center bottom' }, // Posición inicial: inclinada hacia la izquierda
          { rotation: 3, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' } // Posición final: inclinada hacia la derecha
        );
         */


        gsap.from("#panotos-text2", {
          duration: 5, // Duración de la animación (en segundos)
          scale: 0, // Escala inicial del elemento (0 = no visible)
          opacity: 0, // Opacidad inicial del elemento (0 = no visible)
          ease: "power2.out", // Efecto de aceleración personalizado
        
        });

        gsap.fromTo(
          "#panotos-text2",
          { scale: 0 }, // Escala inicial del elemento (0 = no visible)
          { duration: 1, scale: 1, ease: "power2.out" } // Zoom hacia el tamaño original
        ).reverse();
        

/*         gsap.from("#frasco_CH", {
          duration: 3,
          scale: 0, // Escala inicial de 0
          ease: "power1.out",
          repeat: -1, // Repetir infinitamente
          yoyo: true, // Reproducir en reversa al final de cada iteración
          delay: 10, // Retraso de 10 segundos antes de iniciar la animación
          onStart: function() {
            gsap.to("#frasco_CH", {
              rotation: 360, // Rotación de 360 grados
              duration: 1, // Duración de la rotación
              repeat: 10, // Repetir la rotación 10 veces
              yoyo: true, // Reproducir en reversa al final de cada iteración
              ease: "power1.inOut", // Efecto de aceleración personalizado
            });
          }
        }); */

        
          


  /*       function animatePala() {
          gsap.from("#frasco_CH", {
            opacity: 0, // Inicialmente invisible
            duration: 1, // Duración de aparición
            ease: "power1.out", // Efecto de aceleración personalizado
            onComplete: function() {
              gsap.to("#frasco_CH", {
                x: "+=10", // Mover el objeto hacia la derecha
                yoyo: true, // Reproducir en reversa al final de la animación
                repeat: -1, // Repetir infinitamente
                duration: 0.1, // Duración de cada vibración
                ease: "power1.inOut", // Efecto de vibración personalizado
              });
            }
          });
        
        }
        
        var timeline = gsap.timeline({ repeat: -1 });
        
        timeline.to({}, 10, {
          repeat: -1,
          onRepeat: function () {
            animatePala();
          }
        });
         */

        gsap.from("#frasco_CH", {
          y: 100,
          duration: 3, // Duración de la aparición inicial
          opacity: 0, // Inicialmente invisible
          ease: "power1.inOut", // Efecto de entrada y salida
          onComplete: function() {
            vibrarObjeto(); // Iniciar la función de vibración después de la aparición
            setInterval(vibrarObjeto, 5000); // Repetir la vibración cada 10 segundos
          }
        });
        
        function vibrarObjeto() {
          gsap.to("#frasco_CH", {
            duration: 0.1, // Duración de cada vibración
            rotation: "+=10", // Rotación hacia la derecha
            yoyo: true, // Reproducir en reversa al final
            repeat: 5, // Repetir la vibración 5 veces
            ease: "power1.inOut", // Efecto de aceleración personalizado
            onComplete: function() {
              gsap.to("#frasco_CH", {
                duration: 0.1, // Duración de la vuelta a la posición original
                rotation: 0, // Rotación a la posición original
                ease: "power1.inOut" // Efecto de aceleración personalizado
              });
            }
          });
        }

        
        gsap.from("#frasco_G", {
          y: -100,
          duration: 3, // Duración de la aparición inicial
          opacity: 0, // Inicialmente invisible
          ease: "power1.inOut", // Efecto de entrada y salida
          onComplete: function() {
            vibrarObjeto2(); // Iniciar la función de vibración después de la aparición
            setInterval(vibrarObjeto2, 5000); // Repetir la vibración cada 10 segundos
          }
        });
        
        function vibrarObjeto2() {
          gsap.to("#frasco_G", {
            duration: 0.1, // Duración de cada vibración
            rotation: "+=-10", // Rotación hacia la derecha
            yoyo: true, // Reproducir en reversa al final
            repeat: 5, // Repetir la vibración 5 veces
            ease: "power1.inOut", // Efecto de aceleración personalizado
            onComplete: function() {
              gsap.to("#frasco_G", {
                duration: 0.1, // Duración de la vuelta a la posición original
                rotation: 0, // Rotación a la posición original
                ease: "power1.inOut" // Efecto de aceleración personalizado
              });
            }
          });
        }

        let caja_1 = gsap.fromTo(
          '#caja_CH',
          { opacity: 0, y: 200, scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 1 }
        ); 

        let caja_2 = gsap.fromTo(
          '#caja_G',
          { opacity: 0, y: -200, scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 1 }
        ); 


        gsap.from("#vasito", {
          duration: 3.5, // Duración de la animación de llegada
          y: 500, // Desplazamiento vertical hacia abajo
          rotation: 360, // Giro completo durante el desplazamiento
          ease: "power1.inOut", // Efecto de aceleración personalizado
          onComplete: function() {
            gsap.set("#vasito", { rotation: 0 }); // Establecer la rotación en 0 después de llegar
            girarVasito()
            setTimeout(girarVasito, 11000); // Llamar a la función girarVasito después de 10 segundos
          }
        });
        
        function girarVasito() {
          gsap.to("#vasito", {
            duration: 1, // Duración de la animación de giro
            rotation: 360, // Giro completo de 360 grados
            ease: "power1.inOut", // Efecto de aceleración personalizado
            onComplete: function() {
              gsap.set("#vasito", { rotation: 0 }); // Establecer la rotación en 0 después del giro
            }
          });
        }
        

        let desc1 = gsap.fromTo(
          '#descrip_CH',
          { opacity: 0, scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 4 }
        ); 
        let desc2 = gsap.fromTo(
          '#descrip_G',
          { opacity: 0,  scale: 0 },
          { opacity: 1, y: 0, scale: 1, duration: 2, delay: 4 }
        ); 

        gsap.set("#etiqueta_PA", { scale: 0, opacity: 0 }); // Establecer la escala y la opacidad iniciales
        gsap.to("#etiqueta_PA", {
          scale: 1,
          opacity: 1,
          duration: 1, // Duración de la animación de aparición (más corta)
          delay: 6, // Retardo antes de que comience la animación (más corto)
          ease: "power4.out", // Efecto de salida personalizado (puedes ajustar el tipo de efecto)
          onStart: function() {
            gsap.to("#etiqueta_PA", {
              scale: 0.8, // Escala más pequeña durante el efecto de rebote inicial
              duration: 0.2, // Duración del efecto de rebote
              yoyo: true, // Repetir el efecto de rebote de ida y vuelta
              repeat: 1, // Número total de repeticiones del efecto de rebote
              ease: "power2.inOut", // Efecto de rebote personalizado
              delay: 0.5 // Retardo antes de que comience el efecto de rebote (más corto)
            });
          }
        });

        gsap.set("#etiqueta_EA", { scale: 0, opacity: 0 }); // Establecer la escala y la opacidad iniciales
        gsap.to("#etiqueta_EA", {
          scale: 1,
          opacity: 1,
          duration: 1, // Duración de la animación de aparición (más corta)
          delay: 8, // Retardo antes de que comience la animación (más corto)
          ease: "power4.out", // Efecto de salida personalizado (puedes ajustar el tipo de efecto)
          onStart: function() {
            gsap.to("#etiqueta_EA", {
              scale: 0.8, // Escala más pequeña durante el efecto de rebote inicial
              duration: 0.2, // Duración del efecto de rebote
              yoyo: true, // Repetir el efecto de rebote de ida y vuelta
              repeat: 1, // Número total de repeticiones del efecto de rebote
              ease: "power2.inOut", // Efecto de rebote personalizado
              delay: 0.5 // Retardo antes de que comience el efecto de rebote (más corto)
            });
          }
        });

      
        gsap.set("#etiqueta_VEN", { scale: 0, opacity: 0 }); // Establecer la escala y la opacidad iniciales
        gsap.to("#etiqueta_VEN", {
          scale: 1,
          opacity: 1,
          duration: 1, // Duración de la animación de aparición (más corta)
          delay: 10, // Retardo antes de que comience la animación (más corto)
          ease: "power4.out", // Efecto de salida personalizado (puedes ajustar el tipo de efecto)
          onStart: function() {
            gsap.to("#etiqueta_VEN", {
              scale: 0.8, // Escala más pequeña durante el efecto de rebote inicial
              duration: 0.2, // Duración del efecto de rebote
              yoyo: true, // Repetir el efecto de rebote de ida y vuelta
              repeat: 1, // Número total de repeticiones del efecto de rebote
              ease: "power2.inOut", // Efecto de rebote personalizado
              delay: 0.5 // Retardo antes de que comience el efecto de rebote (más corto)
            });
          }
        });

      
        gsap.set("#etiqueta_AL", { scale: 0, opacity: 0 }); // Establecer la escala y la opacidad iniciales
        gsap.to("#etiqueta_AL", {
          scale: 1,
          opacity: 1,
          duration: 1, // Duración de la animación de aparición (más corta)
          delay: 7, // Retardo antes de que comience la animación (más corto)
          ease: "power4.out", // Efecto de salida personalizado (puedes ajustar el tipo de efecto)
          onStart: function() {
            gsap.to("#etiqueta_AL", {
              scale: 0.8, // Escala más pequeña durante el efecto de rebote inicial
              duration: 0.2, // Duración del efecto de rebote
              yoyo: true, // Repetir el efecto de rebote de ida y vuelta
              repeat: 1, // Número total de repeticiones del efecto de rebote
              ease: "power2.inOut", // Efecto de rebote personalizado
              delay: 0.5 // Retardo antes de que comience el efecto de rebote (más corto)
            });
          }
        });

      
        gsap.set("#etiqueta_ENG", { scale: 0, opacity: 0 }); // Establecer la escala y la opacidad iniciales
        gsap.to("#etiqueta_ENG", {
          scale: 1,
          opacity: 1,
          duration: 1, // Duración de la animación de aparición (más corta)
          delay: 9, // Retardo antes de que comience la animación (más corto)
          ease: "power4.out", // Efecto de salida personalizado (puedes ajustar el tipo de efecto)
          onStart: function() {
            gsap.to("#etiqueta_ENG", {
              scale: 0.8, // Escala más pequeña durante el efecto de rebote inicial
              duration: 0.2, // Duración del efecto de rebote
              yoyo: true, // Repetir el efecto de rebote de ida y vuelta
              repeat: 1, // Número total de repeticiones del efecto de rebote
              ease: "power2.inOut", // Efecto de rebote personalizado
              delay: 0.5 // Retardo antes de que comience el efecto de rebote (más corto)
            });
          }
        });

      
        gsap.set("#etiqueta_NAT", { scale: 0, opacity: 0 }); // Establecer la escala y la opacidad iniciales
        gsap.to("#etiqueta_NAT", {
          scale: 1,
          opacity: 1,
          duration: 1, // Duración de la animación de aparición (más corta)
          delay: 11, // Retardo antes de que comience la animación (más corto)
          ease: "power4.out", // Efecto de salida personalizado (puedes ajustar el tipo de efecto)
          onStart: function() {
            gsap.to("#etiqueta_NAT", {
              scale: 0.8, // Escala más pequeña durante el efecto de rebote inicial
              duration: 0.2, // Duración del efecto de rebote
              yoyo: true, // Repetir el efecto de rebote de ida y vuelta
              repeat: 1, // Número total de repeticiones del efecto de rebote
              ease: "power2.inOut", // Efecto de rebote personalizado
              delay: 0.5 // Retardo antes de que comience el efecto de rebote (más corto)
            });
          }
        });

      

      