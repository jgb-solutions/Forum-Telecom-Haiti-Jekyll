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


/* Countdown */
$(function() {
	FlipClock.Lang.Custom = { days:'Jours', hours:'Heures', minutes:'Minutes', seconds:'Secondes' };
	var opts = {
		clockFace: 'DailyCounter',
		countdown: true,
		language: 'Custom'
	};
	var countdown2017 = 1495033320 - ((new Date().getTime())/1000); // from: 05/17/2016 09:00 am -0600
	countdown2017 = Math.max(1, countdown2017);
	$('.clock-builder-output-2017').FlipClock(countdown2017, opts);

	var countdown2016 = 1463497200 - ((new Date().getTime())/1000); // from: 05/17/2016 09:00 am -0600
	countdown2016 = Math.max(1, countdown2016);
	$('.clock-builder-output-2016').FlipClock(countdown2016, opts);
});
//# sourceMappingURL=site.js.map
