/**
* Created with StarFoundry_website.
* User: charue808
* Date: 2015-01-20
* Time: 10:30 AM
* To change this template use Tools | Templates.
*/

$(window).scroll(function() {
		$('#aboutArrowDown').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("slideLeft");
			}
		});
});