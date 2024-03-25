$(function () { 
 

    $('.book-wrapper li').click(function () {
        let idx=$(this).index();
  
        $('.book-wrapper li').removeClass("active")
        $(this).addClass("active")     
        
        $(".booklist ul").eq(idx).fadeIn('slow').css("display","flex").siblings().hide();
    });


    
 
    $("#top_tab li").click(function(){
        var target = $(this).index();
        console.log(target); 

        $("#top_tab li").removeClass("active");
        $(this).addClass("active");


        $(".introduce").eq(target).fadeIn().css("display","flex").siblings(".introduce").hide();
    });

   


//         $('.active:eq(0)').css({ "background-color": "#fff" })
//         $('.active:eq(1)').click(function () {
//             $('.active').css({ "background-color": "transparent" })
//             $(this).css({ "background-color": "#242424","color":"#fff"  })
//             $(".booklist ul:nth-of-type(2)").fadeIn('slow').css("display","flex");
//             $(".booklist ul:nth-of-type(1)").hide();
//             $(".booklist ul:nth-of-type(3)").hide();
//             $(".booklist ul:nth-of-type(4)").hide();
//             $(".booklist ul:nth-of-type(5)").hide();
            
      


//     });



//     $('.active:eq(2)').click(function () {
//         $('.active').css({ "background-color": "transparent" })
//         $(this).css({ "background-color": "#242424","color":"#fff"  })
//         $(".booklist ul:nth-of-type(3)").fadeIn('slow').css("display","flex");
//         $(".booklist ul:nth-of-type(1)").hide();
//         $(".booklist ul:nth-of-type(2)").hide();
//         $(".booklist ul:nth-of-type(4)").hide();
//         $(".booklist ul:nth-of-type(5)").hide();
     


// });


// $('.active:eq(3)').click(function () {
//     $('.active').css({ "background-color": "transparent" })
//     $(this).css({ "background-color": "#242424","color":"#fff"  })
//     $(".booklist ul:nth-of-type(4)").fadeIn('slow').css("display","flex");
//     $(".booklist ul:nth-of-type(1)").hide();
//     $(".booklist ul:nth-of-type(2)").hide();
//     $(".booklist ul:nth-of-type(3)").hide();
//     $(".booklist ul:nth-of-type(5)").hide();
 


// });


// $('.active:eq(4)').click(function () {
//     $('.active').css({ "background-color": "transparent" })
//     $(this).css({ "background-color": "#242424","color":"#fff"  })
//     $(".booklist ul:nth-of-type(5)").fadeIn('slow').css("display","flex");
//     $(".booklist ul:nth-of-type(1)").hide();
//     $(".booklist ul:nth-of-type(2)").hide();
//     $(".booklist ul:nth-of-type(3)").hide();
//     $(".booklist ul:nth-of-type(4)").hide();



// });





   

});