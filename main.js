document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-menu').classList.toggle('show'); });

 ScrollReveal().reveal('.showcase');
 ScrollReveal().reveal('.noticias', {delay:800});
 ScrollReveal().reveal('.NOTICIA-SEMANA', {delay:800});
 ScrollReveal().reveal('.NOTICIA-MES', {delay:800});
 ScrollReveal().reveal('.evento', {delay:800});
 ScrollReveal().reveal('.nav-2', {delay:800});
 ScrollReveal().reveal('.nav-3', {delay:800});
  ScrollReveal().reveal('.ONCES', {delay:800});
   ScrollReveal().reveal('.DECIMOS', {delay:800});
    ScrollReveal().reveal('.NOVENOS', {delay:800});
     ScrollReveal().reveal('.OCTAVOS', {delay:800});
      ScrollReveal().reveal('.SEPTIMOS', {delay:800});
       ScrollReveal().reveal('.SEXTOS', {delay:800});
        ScrollReveal().reveal('.nav-3', {delay:800});
         ScrollReveal().reveal('.ajedrez', {delay:800});
          ScrollReveal().reveal('.atletismo', {delay:800});
           ScrollReveal().reveal('.baloncesto', {delay:800});
            ScrollReveal().reveal('.futbol', {delay:800});
             ScrollReveal().reveal('.futbolsala', {delay:800});
              ScrollReveal().reveal('.voleibol', {delay:800});

window.onscroll = function(){
    if(document.document.srollTop > 100){
        document.querySelector(`.subir`)
        .classList.add(`show`);
    }
    else{document.querySelector(`.subir`)
.classList.remove(`show`)}
}
