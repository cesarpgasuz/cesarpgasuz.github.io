
document.addEventListener("DOMContentLoaded", function() {
 
    /// efecto para la barra superior cuando se hace scroll
    window.addEventListener("scroll", function() {
    let scrollValue = window.scrollY;
    if(scrollValue < 200) {
      document.querySelector(".espaciado").style.marginTop = "35px";
      document.querySelector(".espaciado").style.transition = "all 0.2s";
      document.querySelector(".logo-mini span").style.color = "transparent";
      document.querySelector(".logo-mini-im").style.display = "none";
    } else {
      document.querySelector(".espaciado").style.marginTop = "0px";
      document.querySelector(".espaciado").style.transition = "all 0.2s";
      document.querySelector(".logo-mini span").style.color = "#fff";
      document.querySelector(".logo-mini-im").style.display = "inline-block";
    }
  });



    // cambiar fecha automaticamente
    const year = new Date().getFullYear();
    const yearHTML = document.querySelector('.pie span:first-child');
    yearHTML.textContent = year;

});


