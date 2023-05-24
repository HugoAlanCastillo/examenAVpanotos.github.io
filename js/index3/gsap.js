gsap.from("#panotos-text", { opacity: 0, duration: 1, delay: 1.5 });
gsap.from("#panotos-text", {
  scale: 0.8,
  duration: 0.5,
  onStart: function () {
    document.getElementById("panotos-text").classList.add("highlight");
  },
});

gsap.from("#graph-Titulo", {
  opacity: 0,        
  y: 100,            
  duration: 1.5,     
  ease: "power3.out",
  delay: 1.0 
});


gsap.from("#graph-1", {
  x: "-100%",   
  opacity: 0,   
  duration: 1.3,  
  delay: 1  
});

gsap.from("#graph-3", {
  x: "-100%",   
  opacity: 0,  
  duration: 1.6,  
  delay: 1  
});

gsap.from("#graph-2", {
  x: "100%",   
  opacity: 0,   
  duration: 1.9,  
  delay: 1  
});

gsap.from("#tuboRosaChico", {
  y: "100%", 
  opacity: 0, 
  duration: 1,
  ease: "power1.out",
  delay: 0.5 
});

gsap.from("#tuboAmaChico", {
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  delay: 1,
  onComplete: function () {
    gsap.to("#tuboAmaChico", {
      delay:4.5,
      scale: 1.2, 
      duration: 0.5,
      repeat: 1, 
      yoyo: true, 
      ease: "power2.inOut" 
    });
  }
});

gsap.from("#tuboAmaGrande", {
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  delay: 1.5,
  onComplete: function () {
    gsap.to("#tuboAmaGrande", {
      delay:4.5,
      scale: 1.2, 
      duration: 0.5,
      repeat: 1, 
      yoyo: true, 
      ease: "power2.inOut" 
    });
  }
});

gsap.from("#tuboRosaGrande", {
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  delay: 2 
});

/*   gsap.from('#titulo-Pano', {
    duration: 1.5,
    y: -200,
    scale: 0,
    stagger: 0.5,
    delay: 3.5,
    ease: "power2.out", 
  })
 */
gsap.from("#titulo-Pano", { opacity: 0, duration: 1, delay: 4.5 });

gsap.from("#titulo-Pano", {
  scale: 0.8,
  duration: 0.5,
  delay: 4.5,
  onStart: function () {
    document.getElementById("titulo-Pano").classList.add("highlight");
  },
  onComplete: function () {
    gsap.to("#titulo-Pano", {
      scale: 1.2, 
      duration: 0.5,
      repeat: 1, 
      yoyo: true, 
      ease: "power2.inOut" 
    });
  }
});


let rou = gsap.from('#titulo-izq', {
  duration: 1.5,
  y: 200,
  scale: 0,
  stagger: 0.5,
  delay: 3.5,
  ease: "power2.out", 
});

let rouLine = gsap.from('#titulo-Linea', {
  duration: 1.5,
  y: 200,
  scale: 0,
  stagger: 0.5,
  delay: 3.8,
  ease: "power2.out", 
});





