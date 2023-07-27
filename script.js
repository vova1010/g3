// header

$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".header__link").click(function(){
        if ($(window).width() < 767){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').removeClass('lock');
    }
    }); 
    $(".header__logo").click(function(){
        if ($(window).width() < 992){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    });
    $(".header__burger, .header__link, .header__logo").click(function(){
        $('.header__menu').show(); 
    });
}); 


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

// header

// slider menu

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    let link = document.getElementsByClassName("menu__link");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active__link", "");
      }
    slides[slideIndex-1].style.display = "grid";
    link[slideIndex-1].className += " active__link";
}


// search category

function search_category() {
    let input = document.getElementById('catalog__search__input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('catalog__link');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="grid";                 
        }
    }
}

// search category item

function search_category_item() {
    let input = document.getElementById('catalog__search__input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('category__item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="grid";                 
        }
    }
}