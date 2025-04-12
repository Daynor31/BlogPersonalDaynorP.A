gsap.registerPlugin(ScrollTrigger);

gsap.from(".contenedor", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".contenedor", //activa
    start: "top 80%", // cuando el top del contenedor llegue al 80% de la pantalla
    toggleActions: "play reverse play reverse", //como border
    markers: true // para ver las marcas de scroll
  }
  
});
gsap.from(".contenedor_experiencia", {
    y: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".contenedor_experiencia",
      start: "top 80%", // cuando el top del contenedor llegue al 80% de la pantalla
      toggleActions: "play reverse play reverse",
      markers: true // para ver las marcas de scroll
    }
  });
gsap.from(".card", {
    y: 100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".card",
      start: "top 80%", // cuando el top del contenedor llegue al 80% de la pantalla
      toggleActions: "play reverse play reverse",
      markers: true // para ver las marcas de scroll
    }
  });
  gsap.from(".contenedor-contacto",{
    y:-100,
    opacity:0,
    ease:"bounce",
    scrollTrigger:{
      trigger:".contenedor-contacto",
      toggleActions:"play reverse play reverse",
      duration:6,
    },
  });