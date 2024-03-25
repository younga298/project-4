$(function(){
    var swiper = new Swiper(".mySwiper1", {
        pagination: {
          el: ".page1.swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        on: {
          slideChange: function () {
            let idx = this.activeIndex;
            
            $(".introduce:first .slidetext").eq(idx).fadeIn().siblings(".slidetext").hide();
          },
        },
      });

      var swiper2 = new Swiper(".mySwiper2", {
        pagination: {
          el: ".page2.swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        on: {
          slideChange: function () {
            let idx = this.activeIndex;
            console.log(idx)
            $(".introduce:last .slidetext").eq(idx).fadeIn().siblings(".slidetext").hide();
          },
        },
      });
});