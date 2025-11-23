$(document).ready(function(){

    // Inicializar AOS (Animaciones al scrollear)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Inicializar Carousel de Promociones
    $('.promos-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });

});
