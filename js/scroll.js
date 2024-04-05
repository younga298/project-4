$(function () {

    $(".section1 .text-wrap").css({ opacity: "1", transform: "translateY(0)" });

    $(window).scroll(function () {
        let ws = $(this).scrollTop();

        let sec2 = $('.section2').offset().top;
        if (ws > sec2 - 500) {
            $(".section2 .text-wrap").css({ opacity: "1", transform: "translateY(0)" });
            $(".section2 .card-list").css({ opacity: "1", transform: "translateY(0)" });
        };


        let sec3 = $('#section3').offset().top;
        if (ws > sec3 - 500) {
            $('#section3 #title-box').css({ opacity: "1", transform: "translateY(0)" });

        };


        let sec4 = $('.bookmovie').offset().top;
        if (ws > sec4 - 500) {
            $('.bookmovie .mv-txt').css({ opacity: "1", transform: "translateY(0)" });

        };

        let sec5 = $('#best_seller').offset().top;
        if (ws > sec5 - 500) {
            $('#best_seller .text_box').css({ opacity: "1", transform: "translateY(0)" });
        };

        let sec6 = $('#challenge_page').offset().top;
        if (ws > sec6 - 500) {
            $('#challenge_page .text_box').css({ opacity: "1", transform: "translateY(0)" });
            $('#img_box p').css({ opacity: "1", transform: "translateY(0)" });
            $('#lifestory').css({ opacity: "1", transform: "translateY(0)" });

        };


        let sec7 = $('#book_check_list').offset().top;
        if (ws > sec7 - 500) {         
            $('#book_check_list #text-box').css({ opacity: "1", transform: "translateY(0)" });
        };

        let sec8 = $('#reading').offset().top;
        if (ws > sec8 - 500) {
            $('#reading .textwrap').css({ opacity: "1", transform: "translateY(0)" });
        };
        
        if (ws > sec8) {
            $('#reading .card-wrap').css({ opacity: "1", transform: "translateY(0)" });
            $('#reading .card-wrap .card').css({  transform: "scale(1)" });
        };

        let sec9 = $('#price').offset().top;
        if (ws > sec9 - 500) {
            $('#price .textbox').css({ opacity: "1", transform: "translateY(0)" });
        };
    

        let sec10 = $('#audioview').offset().top;
        if (ws > sec10 - 500) {
            $('#audioview .textbox').css({ opacity: "1", transform: "translateY(0)" });
            $('#audioview  .phonewrap').css({ opacity: "1", transform: "translateY(0)" });
        };
 

        let sec11 = $('#review_bg').offset().top;
        if (ws > sec11 - 500) {
            $('#review_bg .textbox').css({ opacity: "1", transform: "translateY(0)" });
        
        };
        
    })
});
