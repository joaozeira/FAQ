/* ATIVAR  */
/* 
const activebtnMobile = document.getElementById("active-btn-mobile");
 */
function activeMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const removelogo = document.getElementById("logo");
  removelogo.classList.toggle("activeLogo");  
}


/* INFO PRÉ-NAV */
function toggleMenuOnScroll() {
  var preNav = document.querySelector(".pre-nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      preNav.style.display = "none";
    } else {
      preNav.style.display = "flex";
    }
  });
}

/* MENU DESKTOP - ATIVAR AO CLICAR */
function addActive() {
  var addActive = document.getElementById("linkhome");
  var linkWhatsapp = document.getElementsByClassName('.buttons-links')

  addActive.classList.toggle("active");
  linkWhatsapp.document.style="display:none"
  
}

/* MOVER SCROLL HORIZONTAL */
/* PRODUTOS 1 */
var ondescroll = document.getElementById("container1");
function movertoleft(){
  ondescroll.scrollBy(-250, 250);
}
function movertoright(){
  ondescroll.scrollBy(250, 250);
}

var ondescrolll = document.getElementById("container2");
function movertoleftt(){
  ondescrolll.scrollBy(-1200, 250);
}
function movertorightt(){
  ondescrolll.scrollBy(1200, 250);
}

/* POSIÇÃO DO SCROLL */
var home = document.getElementById("home");
var about = document.getElementById("about");
var culture = document.getElementById("culture");

var targetPos = culture.getBoundingClientRect().top;

var menu = document.getElementById("nav-desktop");

window.addEventListener("scroll", function () {
  // Obtém a posição atual do scroll
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  // Verifica se o scroll atingiu a posição do elemento alvo
  if (scrollPos >= targetPos) {
    // Adiciona a classe 'active' ao menu
    menu.classList.add("active");
  } else {
    // Remove a classe 'active' do menu
    menu.classList.remove("active");
  }
});
toggleMenuOnScroll();

/* VOLTAR AO TOPO */
document.getElementById("backToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/* ESCONDER BOTÃO "VOLTAR AO TOPO" */
function esconderBackToTop() {
  var button = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      button.style.display = "flex";
    } else {
      button.style.display = "none";
    }
  });
}

/* SWIPER */
const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
esconderBackToTop();

/* MOSTRAR INFORMAÇÕES NO SCROLL */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .container, #home .stats .stat,
  #about .content, #about img,
  #culture .title, #culture .paragrafo, #culture .card,
  #trajetoria .title,  #trajetoria .circles,
  #produtos .produtos-info, #produtos .container2, #produtos 
  .container,
  #empresas div, #empresas .img-empresas, #empresas .button, 
  #depoimentos .titulos, #depoimentos .swiper,
  #contato .titulos,  #contato .info, #contato .button, #contato .img,
  footer .content div, footer .content .social .links img
  `,
  { interval: 50 }
);

/* MOSTRAR CARD DENTRO DA TRAJETORIA */
function showCard() {
  const circles = document.getElementById("circles");
  const showCard1 = document.getElementById("trajetoria-card");
  const showCard2 = document.getElementById("trajetoria-card2");
  const showCard3 = document.getElementById("trajetoria-card3");

  showCard1.classList.toggle("active");
  showCard2.classList.remove("active");
  showCard3.classList.remove("active");

  circles.classList.toggle("active");
}
function showCard2() {
  const showCard1 = document.getElementById("trajetoria-card");
  const showCard2 = document.getElementById("trajetoria-card2");
  const showCard3 = document.getElementById("trajetoria-card3");

  showCard1.classList.remove("active");
  showCard2.classList.toggle("active");
  showCard3.classList.remove("active");

  circles.classList.toggle("active");
}

function showCard3() {
  const showCard1 = document.getElementById("trajetoria-card");
  const showCard2 = document.getElementById("trajetoria-card2");
  const showCard3 = document.getElementById("trajetoria-card3");

  showCard1.classList.remove("active");
  showCard2.classList.remove("active");
  showCard3.classList.toggle("active");

  circles.classList.toggle("active");
}
