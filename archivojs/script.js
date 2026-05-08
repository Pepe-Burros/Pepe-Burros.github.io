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
sr.reveal('.home-text',{delay:10});
sr.reveal('.container-box',{delay:200});
sr.reveal('.contac-text',{delay:200});
sr.reveal('.details',{delay:200});
sr.reveal('.home-img',{delay:400});
sr.reveal('.middle-text',{delay:250});
sr.reveal('.menu-contenido',{delay:470});
sr.reveal('.Return',{delay:470});
sr.reveal('.card',{delay:470});
sr.reveal('.menu-grid',{delay:470});

//PRUEBA TOOGLE INFORMACION
function toggleDesc(el) {
  el.classList.toggle('active');
}

