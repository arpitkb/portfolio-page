$(document).ready(function () {
    let $btn = $('.project-area .button-group button');

    $btn.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;

    })



    //magnific pop-up
    $('.project-area .grid .pop-up').magnificPopup({
        type: 'image',
        gallery: { enabled: true }

    });

    //caraousel
    $(".site-main .about-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

    //sticky navigation


});

