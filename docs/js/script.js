$(function(){
    AOS.init();
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
    // $('[data-toggle="tooltip"]').tooltip();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        // nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1, 
        responsiveClass:true,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 2
        //     },
        //     1000: {
        //         items: 1
        //     }
        // }
    });
});
