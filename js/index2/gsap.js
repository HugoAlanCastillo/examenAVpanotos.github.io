gsap.from("#panotos-text", { opacity: 0, duration: 1, delay: 3.5 });

gsap.from("#panotos-text", {
  scale: 0.8,
  duration: 0.5,
  delay: 3.5,
  onStart: function () {
    document.getElementById("panotos-text").classList.add("highlight");
  },
  onComplete: function () {
    gsap.to("#panotos-text", {
      scale: 1.5, 
      duration: 0.5,
      repeat: 1,
      yoyo: true, 
      ease: "power2.inOut" 
    });
  }
});

gsap.from("#cards-C", {
    y: "100%", 
  opacity: 0, 
  scale: 0.5, 
  rotation: -180, 
  duration: 1.5,
  ease: "elastic.out(1, 0.75)", 
  delay: 1.5 
  });
  
gsap.from("#cards-P", {
    y: "100%",
    opacity: 0,
    scale: 0.5,
    rotation: -180,
    duration: 1.5,
    ease: "elastic.out(1, 0.75)",
    delay: 1.8
  });
  
  gsap.from("#cards-R", {
    y: "100%",
    opacity: 0,
    scale: 0.5,
    rotation: -180,
    duration: 1.5,
    ease: "elastic.out(1, 0.75)",
    delay: 2.1 
  });
  

  gsap.to("#linea-cardsTOS", {
    scaleX: 1,
    opacity: 1,
    duration: 0.8,
    delay: 0.5,
    ease: "power2.out",
  });


