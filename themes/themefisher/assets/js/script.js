// Preloader js
$(window).on('load', function () {
	$('.preloader').addClass('d-none');
});

(function($) {
	'use strict';

	// Fix for mobile navbar toggler not working
	// Manually attach click handler to navbar toggler
	$('.navbar-toggler').on('click', function(e) {
		e.preventDefault();
		var target = $(this).data('target');
		$(target).collapse('toggle');
	});

	// Open PDF links in new tab to prevent navigation issues
	$('a[href$=".pdf"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');

	//slider
	$('.slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false
	});

})(jQuery);