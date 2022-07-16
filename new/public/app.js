$(function() {

    // FIXED HEADER
    let header = $("#header");
    let intro = $("intro");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    chekScroll(scrollPos, headerH);


    $(window).on("scroll resize", function() {
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        chekScroll(scrollPos, headerH)
    });
    
    function chekScroll(scrollPos, headerH) {
        if( scrollPos > headerH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


// SMOOTH SCROLL
   $("[data-scroll]").on("click", function(event) {
       event.preventDefault()

       let elementID = $(this).data('scroll');
       let elementOffset = $(elementID).offset().top;

       $("html, body").animate({
           scrollTop: elementOffset -75
       }, 777);

       nav.removeClass("show");

       console.log(elementID);
       console.log(elementOffset);
   });



//    NAV TOGGLE

    
    
    navToggle.on("click", function(event) {
        event.preventDefault();
 
        nav.toggleClass("show");

    })


    // reviews: https://kenwheeler.github.io/slick/

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
      });

    
})