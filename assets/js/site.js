// jQuery to collapse the navbar on scroll
function collapseNavbar() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
}

$(window).scroll(collapseNavbar);

$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  	if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
		$('.navbar-toggle:visible').click();
  	}
});

$(function() {
	$('#counter').countdownCube({
		target: new Date( 'May 17, 2017 10:00:00' ),
		cubeSize: 100
	});

	texts = $('.countdownCubeTitleDiv');
	texts.eq(0).parent().hide();
	texts.eq(1).text('Mois');
	texts.eq(2).text('Jours');
	texts.eq(3).text('Heures');
	texts.eq(4).text('Min.');
	texts.eq(5).text('Sec.');
});
//# sourceMappingURL=site.js.map
