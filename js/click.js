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
        
     // var isAuto = false;
     let count = 0;
     $("#booktotal .more").click(()=>{
         count++;

         if(count == 0 || count ==16){
             count =0;
             $("#booktotal .booktotal").animate({"height" : 664});
         } else {               
             $("#booktotal .booktotal").animate({"height" : 664+(300*count) });
         }
         // isAuto = !isAuto;
     })
   
        // var isAuto = false;
        $(".intro .more").click(() => {
            let $open = $(".open");
            if ($open.css("height") === "200px") {
                $open.animate({"height": "420px"});
                $open.children(".textbox").delay(400).animate({"height": "380px"});
            } else {
                $open.animate({"height": "200px"});
                $open.children(".textbox").animate({"height": "160px"});
            }
        });



        $(".textbutton").click(function(){
            $(".his-modal").toggle();
        });
        $(".close").click(function(){
            $(".his-modal").hide();
        });


        $('#buttons li').click(function () {
            let idx=$(this).index();
      
            $('#buttons li').removeClass("active")
            $(this).addClass("active")     
            
        });
    


    });





   


   

