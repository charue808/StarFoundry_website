//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    // Navigation Arrow slide
    $('#aboutArrowDown').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
            $(this).addClass("slideLeft");
        }
    });
});

/*
 * If the scroll highlight doesn't match the section, you may want to change
 * the parameter before the 'easeInOutExpo' parameter- this might cause some cached
 * values to update.. not sure why but speeding up the scroll time fixed the issue
 */ 
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
            
        }, 800, 'easeInOutExpo');
        console.log('anchor test ' + $anchor.attr('href'));
        event.preventDefault();
    });
});

$( ".propositionTeach" ).hover(
    function() {
        // var originalText = $(this).html();
        $(  ".propositionTeach" ).wrap( "<span style='color:#F2AE72; cursor:pointer;'><u></u></span>" );
    }, function() {
        $(  ".propositionTeach" ).unwrap();
        $(  ".propositionTeach" ).unwrap();
    }
);


$( ".propositionTools" ).hover(
  function() {
	  // var originalText = $(this).html();
      $(  ".propositionTools" ).wrap( "<span style='color:#F2AE72; cursor:pointer;'><u></u></span>" );
  }, function() {
      $(  ".propositionTools" ).unwrap();
      $(  ".propositionTools" ).unwrap();
  }
);


/*
$( ".propositionTools" ).hover(
  function() {
	  // var originalText = $(this).html();
	  // 
	  $(  ".propositionTools" ).replaceWith("<span style='color:#F2AE72' class='propositionTools'><u>highly curated tools</u></span></a></span>");
      
	//  $(  ".propositionTools" ).wrap( "<span style='color:#F2AE72; cursor:pointer;'><u></u></span>" );
  }, function() {
   $(  ".propositionTools" ).replaceWith("<span style='color:#59acd9' class='propositionTools'>highly curated tools</span></a></span>");
  }
);
*/


$( ".propositionSkills" ).hover(
  function() {
	  // var originalText = $(this).html();
      $(  ".propositionSkills" ).wrap( "<span style='color:#F2AE72; cursor:pointer;'><u></u></span>" );
  }, function() {
      $(  ".propositionSkills" ).unwrap();
      $(  ".propositionSkills" ).unwrap();
  }
);


$(".propositionTeach").click(function(){
            activateTab('cognitiveinstruction');

});

$(".propositionTools").click(function(){
            activateTab('curatedtools');

});

$(".propositionSkills").click(function(){
            activateTab('powerfultechniques');

});


function activateTab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

