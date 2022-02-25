//===typing Js start====== //
var typed = new Typed('.type', {
  strings: ['MEHRAB HOSSAIN', 'A WEB DESIGNER', 'A FRONT-END  DEVELOPER'],
  typeSpeed: 40,
  backSpeed: 80,
  smartBackspace: true,
  cursorChar: '<i class="fas fa-mouse-pointer"></i>',
  loop: true,

});
//===typing Js stop====== //

//=====slider js start======//
$('.slick').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplayspeed: 3000,
  draggable: true,
  pauseOnHover: false,
  cssEase: 'linear',

});
//=====slider js stop======//

//=======pre Loader js start======//
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disspear");
};
window.addEventListener("scroll", function () {
  var header = document.querySelector(".primary-menu");
  header.classList.toggle("sticky", window.scrollY > 0);
})
//=======pre Loader js stop======//
//=====Nav Bar js start======//
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//=====Nav Bar js stop======//