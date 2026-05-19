const header=document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', this.window.scrollY >80);
})

//scroll reveal
const sr=ScrollReveal(
    {
        origin: 'top',
        distance: '85px',
        duration: 2500,
        reseat: false 
    }
);

//ANIMACIONES JSJSAKJSKAJ
sr.reveal('.home-text',{delay:0.2});
sr.reveal('.container-box',{delay:0.2});
sr.reveal('.contac-text',{delay:0.2});
sr.reveal('.details',{delay:0.2});
sr.reveal('.home-img',{delay:0.2});
sr.reveal('.middle-text',{delay:0.2});
sr.reveal('.menu-contenido',{delay:0.2});
sr.reveal('.Return',{delay:0.2});
sr.reveal('.card',{delay:0.2});
sr.reveal('.menu-grid',{delay:0.2});
sr.reveal('.Logo',{delay:0.2});
//PRUEBA TOOGLE INFORMACION
function toggleDesc(el) {
  el.classList.toggle('active');
}

