$(document).ready(function() {

$("#product1 a, #product1_modal_link").on("click", function() {
  $("#modal_product1").show();
  $("body").addClass("modal_no_scroll");
  return false; // prevents body auto reposition to top left on click
});

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




  

}); // end doc ready