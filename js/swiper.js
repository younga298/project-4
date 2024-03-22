$(function(){
    var swiper = new Swiper(".mySwiper1", {
        pagination: {
          el: ".audio_wrap .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });
});