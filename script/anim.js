//NAV
gsap.from(".header", {
    x: 3000, 
    duration: 1.5
  });
//QUOTES
  gsap.from(".titleText", {
      y : 100,
      opacity: 0,
      duration :1,
      delay : .8,
      ease : "power3"
  })
  
  gsap.from(".asideImg",{
      opacity: 0,
      duration:1,
      delay:.6
  })
  gsap.from(".question", {
      x: -200,
      duration:.8,
      opacity:0,
      delay:1.2
  })
  gsap.from("#guess0",{
      x:50,
      opacity:0,
      duration:.5,
      delay:.8
  })
  gsap.from("#guess1",{
    x:-50,
    opacity:0,
    duration:.5,
    delay:.8
})
gsap.from("#progress",{
    x:-50,
    opacity:0,
    duration:.5,
    delay :1
})

// HOME

gsap.from('.paragraphe1',{
    y: 100,
    opacity:0,
    duration:.7,
    delay:.8,
    ease: "power3"
})

gsap.from('.paragraphe2',{
    y: 100,
    opacity:0,
    duration:.5,
    delay:1.1,
    ease: "power3"
})
gsap.from('.pomme', {
    opacity:0,
    duration:.5,
    delay:1.5
})
gsap.from('.chirac1', {
    opacity:0,
    x:50,
    duration:.5,
    delay:1
})
gsap.from('.jacques',{
    opacity:0,
    duration:.3,
    delay:.8
})
gsap.from('.chirac2', {
    opacity:0,
    x:-50,
    duration:.5,
    delay:1
})