$(function () {
  $("#QA_list_box li p").click(function () {      
      $(this).next().slideToggle(); 
      $(this).children().toggleClass('rotate')   
  });




  $("#footer_btn").click(function () {  
    $("#footer_btn_UP").slideToggle();

    if($("#footer_btn_UP:visible")==true){
      $(this).find("span").text('펼쳐보기');
      $(this).find("img").attr("src","image/footericondown.png")
    }else{
      $(this).find("span").text('접어두기');
      $(this).find("img").attr("src","image/footericonup.png")
    }
    
  });

  $("#footer_btnUp").click(function () {
    $(this).hide();
    
    $("#footer_btn_UP").slideUp();
    $("#footer_btn").show();
  });

  

  


});


