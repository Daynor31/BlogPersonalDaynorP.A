
  // Animación al cargar la página
  window.onload = function() {
    gsap.from(".hero-imagen-desarrollador", {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "power2.out"
    });
    
    gsap.from(".hero h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 1, // Esto hace que la animación comience después de un segundo
      ease: "power2.out"
    });

    gsap.from(".hero h2", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1.5, // Esto hace que la animación comience después de un segundo y medio
      ease: "power2.out"
    });
    gsap.from(".hero-inferior", {
      x: -100,
      opacity:0,
      duration:2,
      scrollTrigger: {
        x:-100,
        duration:3,
        trigger: ".hero-inferior",
        start: "top 100%",
        scrub: true,
      },         
    });  
  };
  
