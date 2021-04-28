$(document).ready(() => {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('#slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    variableWidth: false,
                    centerMode: false,
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    centerMode: false,
                    slidesToShow: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 750,
                settings: {
                    variableWidth: false,
                    centerMode: false,
                    slidesToShow: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });


    $('.open-modal').click(() => {
        $('#pop-up-order-bg').css('display', 'flex');
    })

    $("#pop-up-order-bg, #pop-up-order-cancel, #pop-up-thanks-close").click((e) => {
        if (e.target.id === 'pop-up-order-bg' || e.target.id === 'pop-up-order-cancel' || e.target.id === 'pop-up-thanks-close') {
            $('#pop-up-order-bg').hide();
        }
    })

    $('.open-modal-discount').click(() => {
        $('#discount-container').hide();
        $('#pop-up-discount').show();
    })

    $('.form-button').click(() => {
        $('.error-input').hide();
        $('.reserve-input input, select').css('borderColor', 'rgb(174, 137, 89)');

        let name = $('#name');
        let service = $('#service');
        let data = $('#data');
        let phone = $('#phone');
        let master = $('#master');
        let time = $('#time');

        let error = false;

        if (!name.val()) {
            error = true;
            name.siblings().show();
            name.css('borderColor', 'red');
        }
        if (!service.val()) {
            error = true;
            service.siblings().show();
            service.css('borderColor', 'red');
        }
        if (!data.val()) {
            error = true;
            data.siblings().show();
            data.css('borderColor', 'red');
        }
        if (!phone.val()) {
            error = true;
            phone.siblings().show();
            phone.css('borderColor', 'red');
        }
        if (!master.val()) {
            error = true;
            master.siblings().show();
            master.css('borderColor', 'red');
        }
        if (!time.val()) {
            error = true;
            time.siblings().show();
            time.css('borderColor', 'red');
        }

        if (!error) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&service=' + service.val() + '&data=' + data.val() + '&phone=' + phone.val() + '&master=' + master.val() + '&time=' + time.val(),
                success: () => {
                    $('#pop-up-order').hide();
                    $('#pop-up-thanks').show();
                },
                error: () => {
                    $('#pop-up-order-bg').hide();
                    alert('Ошибка бронирования, свяжитесь пожалуста по номеру телефона.');
                }
            });
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header-menu a').click(() => {
        $('#header').removeClass('menu-open');
    })
})