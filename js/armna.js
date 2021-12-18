$(document).ready(function () {
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1500,

	});

	//venobox start//
	$('.venobox').venobox();


	//team-slider//

	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1500,
	});



	//teamtwo part start//
	$('.text_slid').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.img_slid'
	});
	$('.img_slid').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.text_slid',
		centerMode: true,
		prevArrow: '.nest',
		nextArrow: '.priveous',
		centerPadding: '0px',
		focusOnSelect: true
	});
	//teamtwo part end//

	//sticky top manu//

	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		var sticky = $('.sticky-top');

		if (scrolling >= 150) {
			sticky.addClass('nav-bg');
		} else {
			sticky.removeClass('nav-bg');
		}
	});

	// sticky top menu js//


	// Add scrollspy to <body>
	$('body').scrollspy({
		target: ".navbar",
		offset: 50
	});

	//animation scroll js
	var html_body = $('html, body');
	$('nav a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 50
				}, 1500);
				return false;
			}
		}
	});
	
	
	//wow js//
	
	new WOW().init();

});