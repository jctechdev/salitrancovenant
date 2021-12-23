const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-bar');


navToggle.addEventListener('click', () => {
nav.classList.toggle('nav-visible'); //this is added to .nav class once clicked

})


const navLinks = document.querySelectorAll(".nav_link");

function linkAction(){
  /*Active link*/
  navLinks.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navBar = document.getElementById("nav-bar");
  navBar.classList.remove('nav-visible');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 3000,
    reset: true
});

/*SCROLL HOME*/

sr.reveal('.hero_texts',{delay: 200}); 

