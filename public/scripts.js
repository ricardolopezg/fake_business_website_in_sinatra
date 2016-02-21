$(document).ready(function() {

<<<<<<< HEAD
$("#product1 a, #product1_modal_link").on("click", function() {
  $("#modal_product1").show();
  $("body").addClass("modal_no_scroll");
  return false; // prevents body auto reposition to top left on click
});
=======
  $("#about_text h2").html("About"); 
  $("#about_text p").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt corporis molestiae dolore nisi expedita, magnam dolorum, animi, tenetur cupiditate vel exercitationem. Fugit dignissimos unde, rem optio ab, eius sint odit.");

  $("#history_button").click(function(){
    $("#about_text h2").html("");
    $("#about_text p").html("");
    $("#history_text h2").html("History")
    $("#history_text p").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla fugit quis sint ullam quos quia molestiae iste, animi itaque fuga, placeat nostrum temporibus laborum rem iure voluptatem ex ad dolore!");
    return false;
  });

  $("#about_button").click(function(){
    $("#about_text h2").html("About"); 
    $("#about_text p").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt corporis molestiae dolore nisi expedita, magnam dolorum, animi, tenetur cupiditate vel exercitationem. Fugit dignissimos unde, rem optio ab, eius sint odit.");
    $("#history_text h2").html("")
    $("#history_text p").html("")
    return false;
  });




});
  
>>>>>>> master

$("#product2 a, #product2_modal_link").on("click", function() {
  $("#modal_product2").show();
  $("body").addClass("modal_no_scroll");
  return false;
});

$("#product3 a, #product3_modal_link").on("click", function() {
  $("#modal_product3").show();
  $("body").addClass("modal_no_scroll");
  return false;
});

$("#product4 a, #product4_modal_link").on("click", function() {
  $("#modal_product4").show();
  $("body").addClass("modal_no_scroll");
  return false;
});

$(".modal_close").on("click", function() {
  $(".modal_background").hide();
  $("body").removeClass("modal_no_scroll");
  return false;
});

$(document).keydown(function(event) {
  if (event.keyCode == 27) {
    $(".modal_background").hide();  
    $("body").removeClass("modal_no_scroll");
  }
});




  

