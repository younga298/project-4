$(function () {
    $(".slidetext:first").show();

    $(".swiper-pagination-bullet").click(function(){
      var slide=$(".slidetext:visible");
      var nextslide=slide.next(".slidetext");
      if(nextslide.length ===0){
        nextslide =$(".slidetext:first");
      }
      // slide.hide();
      nextslide.show(); 
    });
});