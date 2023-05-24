gsap.from("#panotos-logo1", {
    x: "-400%",           
    duration: 1,          
    ease: "power2.out",    
    delay: 1.0,
  });

  gsap.from("#panotos-logo2", {
    x: "-400%",           
    duration: 1,          
    ease: "power2.out",    
    yoyo: true,            
    delay: 1.0,
  });

  gsap.from("#panotos-titulo1", {
    x: "100%",                
    opacity: 0,               
    duration: 1.5,           
    ease: "back.out(1.7)",    
    delay: 1.0,
  });
  
  gsap.from("#panotos-titulo2", {
    x: "100%",                
    opacity: 0,               
    duration: 1.5,           
    ease: "bounce.out",       
    delay: 1.0,
  });
  

  
gsap.from("#rama", {
    x: -15,                 
    y: 15,                 
    rotation: -3,           
    transformOrigin: "50%", 
    duration: 3,            
    ease: "sine.out",        
    yoyo: true,             
    repeat: -1,              
    stagger: 0.2,

  });

  
