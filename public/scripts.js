$(document).ready(function() {

// About Page
  $("#about_text h2").html("About"); 
  $("#about_text p").html("Vinyl green juice bushwick, XOXO gentrify whatever migas locavore heirloom squid. Craft beer pug mumblecore, locavore man bun messenger bag listicle artisan etsy kickstarter shabby chic echo park. You probably haven't heard of them kitsch paleo marfa, twee keffiyeh pickled try-hard slow-carb ennui tacos taxidermy vice gastropub literally. Put a bird on it gluten-free chambray schlitz, fixie flexitarian food truck. Kitsch thundercats fashion axe, brunch banjo tattooed pinterest chia etsy flannel ugh. Yuccie portland banjo four dollar toast schlitz, disrupt mixtape. Leggings literally direct trade, banh mi aesthetic thundercats pop-up brunch irony gastropub slow-carb biodiesel small batch. Messenger bag cred next level, fixie +1 art party microdosing gentrify sustainable franzen kogi. Fap PBR&B brunch, iPhone yr semiotics offal tattooed sriracha leggings pickled VHS synth deep v man bun. Locavore actually squid, kogi food truck offal typewriter 8-bit viral bitters microdosing lumbersexual vegan drinking vinegar flannel. 3 wolf moon craft beer gentrify, raw denim asymmetrical occupy kickstarter. Cred green juice chillwave drinking vinegar sartorial, wayfarers offal synth seitan poutine retro freegan bitters mustache. Disrupt synth deep v celiac, gentrify four dollar toast actually listicle helvetica crucifix freegan messenger bag keytar try-hard cold-pressed. Humblebrag kale chips selvage, microdosing disrupt pitchfork stumptown tofu you probably haven't heard of them deep v trust fund raw denim asymmetrical wolf tacos.");

  $("#history_button").click(function(){
    $("#about_text h2").html("");
    $("#about_text p").html("");
    $("#history_text h2").html("History")
    $("#history_text p").html("Affogato biodiesel austin freegan lomo, fashion axe asymmetrical vice lo-fi. Ennui gluten-free vegan VHS. +1 twee meditation hammock, williamsburg quinoa bitters tattooed bicycle rights XOXO poutine. Occupy man braid pitchfork church-key heirloom, kale chips brunch PBR&B waistcoat. Squid tilde cronut bicycle rights, DIY pickled stumptown asymmetrical skateboard. Banh mi cred gluten-free craft beer microdosing. Four dollar toast synth blog, echo park distillery humblebrag drinking vinegar narwhal 8-bit single-origin coffee shabby chic tilde cray pop-up literally. Cardigan post-ironic +1 gluten-free VHS. Pork belly sustainable tousled, cardigan tofu pour-over brunch. Mixtape vinyl semiotics waistcoat chia. Aesthetic VHS celiac wolf stumptown occupy, tumblr authentic selvage pitchfork truffaut fixie ennui seitan. Semiotics brunch food truck pickled, etsy next level farm-to-table pour-over letterpress gluten-free meditation. Tattooed lumbersexual ethical biodiesel kinfolk. Cliche gentrify polaroid, freegan roof party trust fund paleo actually PBR&B.");
    return false;
  });

  $("#about_button").click(function(){
    $("#about_text h2").html("About"); 
    $("#about_text p").html(" Vinyl green juice bushwick, XOXO gentrify whatever migas locavore heirloom squid. Craft beer pug mumblecore, locavore man bun messenger bag listicle artisan etsy kickstarter shabby chic echo park. You probably haven't heard of them kitsch paleo marfa, twee keffiyeh pickled try-hard slow-carb ennui tacos taxidermy vice gastropub literally. Put a bird on it gluten-free chambray schlitz, fixie flexitarian food truck. Kitsch thundercats fashion axe, brunch banjo tattooed pinterest chia etsy flannel ugh. Yuccie portland banjo four dollar toast schlitz, disrupt mixtape. Leggings literally direct trade, banh mi aesthetic thundercats pop-up brunch irony gastropub slow-carb biodiesel small batch. Messenger bag cred next level, fixie +1 art party microdosing gentrify sustainable franzen kogi. Fap PBR&B brunch, iPhone yr semiotics offal tattooed sriracha leggings pickled VHS synth deep v man bun. Locavore actually squid, kogi food truck offal typewriter 8-bit viral bitters microdosing lumbersexual vegan drinking vinegar flannel. 3 wolf moon craft beer gentrify, raw denim asymmetrical occupy kickstarter. Cred green juice chillwave drinking vinegar sartorial, wayfarers offal synth seitan poutine retro freegan bitters mustache. Disrupt synth deep v celiac, gentrify four dollar toast actually listicle helvetica crucifix freegan messenger bag keytar try-hard cold-pressed. Humblebrag kale chips selvage, microdosing disrupt pitchfork stumptown tofu you probably haven't heard of them deep v trust fund raw denim asymmetrical wolf tacos.");
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

