$(function(){
    $('.owl-carousel').owlCarousel({
        margin:20,
        responsiveClass: true,
        nav: false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});

$(function(){
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
          disableOn: 320,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: true
        });
      });
      $('.item').magnificPopup({
        delegate: 'a',
      });
    });    