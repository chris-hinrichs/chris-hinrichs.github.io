$(document).ready(function(){
    $(".about-button").click(function() {     
        $("#modal-container").show();
        $("#modal-box").hide();
        $("#modal-box").fadeIn();
    });
    
    $("#modal-overlay").click(function() {
        $("#modal-container").fadeOut();
    });
    
    $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $("#nav-toggle span, #nav-toggle span:before, #nav-toggle span:after").removeClass("button-pressed");
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      $("#nav-toggle span, #nav-toggle span:before, #nav-toggle span:after").addClass("button-pressed");
       setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300)
    }
  });

  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
      $("#nav-toggle span, #nav-toggle span:before, #nav-toggle span:after").removeClass("button-pressed");
    }
  });

  $(".sidebar-container ul li a").click(function(e) {  //modified code from piazza post 175, did not come up with this all by myself.
    e.preventDefault();
    var toScroll = this.hash;
    $("html, body").animate({ scrollTop: $(toScroll).offset().top-20 }, 700);
  });

  $(".photo-container").click(function(e) {  //modified code from piazza post 175, did not come up with this all by myself.
    e.preventDefault();;
    $("html, body").animate({ scrollTop: $("#personal").offset().top-20 }, 700);
  });
});