$(document).ready(function() {

// About Page
  $("#about_text h2").html("About"); 
  $("#about_text p").html("Mars and new ones appear frequently on steep slopes of craters, troughs, and valleys. The streaks are dark at first and get lighter with age. Sometimes, the streaks start in a tiny area which then spread out for hundreds of metres. They have also been seen to follow the edges of boulders and other obstacles in their path. The commonly accepted theories include that they are dark underlying layers of soil revealed after avalanches of bright dust Mars and new ones appear frequently on steep slopes of craters, troughs, and valleys. The streaks are dark at first and get lighter with age. Sometimes, the streaks start in a tiny area which then spread out for hundreds of metres. They have also been seen to follow the edges of boulders and other obstacles in their path. The commonly accepted theories include that they are dark underlying layers of soil revealed after avalanches of bright dust.");

  $("#history_button").click(function(){
    $("#about_text h2").html("");
    $("#about_text p").html("");
    $("#history_text h2").html("History")
    $("#history_text p").html("Mars and new ones appear frequently on steep slopes of craters, troughs, and valleys. The streaks are dark at first and get lighter with age. Sometimes, the streaks start in a tiny area which then spread out for hundreds of metres. They have also been seen to follow the edges of boulders and other obstacles in their path. The commonly accepted theories include that they are dark underlying layers of soil revealed after avalanches of bright dust Mars and new ones appear frequently on steep slopes of craters, troughs, and valleys. The streaks are dark at first and get lighter with age. Sometimes, the streaks start in a tiny area which then spread out for hundreds of metres. They have also been seen to follow the edges of boulders and other obstacles in their path. The commonly accepted theories include that they are dark underlying layers of soil revealed after avalanches of bright dust.");
    return false;
  });

  $("#about_button").click(function(){
    $("#about_text h2").html("About"); 
    $("#about_text p").html("Mars and new ones appear frequently on steep slopes of craters, troughs, and valleys. The streaks are dark at first and get lighter with age. Sometimes, the streaks start in a tiny area which then spread out for hundreds of metres. They have also been seen to follow the edges of boulders and other obstacles in their path. The commonly accepted theories include that they are dark underlying layers of soil revealed after avalanches of bright dust Mars and new ones appear frequently on steep slopes of craters, troughs, and valleys. The streaks are dark at first and get lighter with age. Sometimes, the streaks start in a tiny area which then spread out for hundreds of metres. They have also been seen to follow the edges of boulders and other obstacles in their path. The commonly accepted theories include that they are dark underlying layers of soil revealed after avalanches of bright dust.");
    $("#history_text h2").html("")
    $("#history_text p").html("")
    return false;
  });

  
// Services Page
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

