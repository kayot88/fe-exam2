(function ( $ ) { 
	$(document).ready(function() {
//Adaptive menu, animated button
$("#menu").click(function() {
  // $(".header__nav").toggleClass("header__nav--open");
  $(".nav__btn").toggleClass("nav__btn--animate");
  //$(".main-screen__slider-item").toggleClass("main-screen__slider-item--adaptive-menu");
});

$('.ba-header__main').slick({
	'dots': true 
});
//Fixed sticky menu
var menu = $(".ba-nav");
var logo = $('.ba-nav__logo');
fixed_menu = "ba-nav--fixed";
fixed_logo = "ba-nav__logo--fixed";

// var menu_btn = $(".nav__btn"); 
// fixed_menu_btn = "nav__btn--fixed";

menuPos = menu.offset().top;  

$(window).scroll(function() {
	if ($(this).scrollTop() > menuPos) {
		menu.addClass(fixed_menu);
    // menu_btn.addClass(fixed_menu_btn);
  } else {
  	menu.removeClass(fixed_menu);
    // menu_btn.removeClass(fixed_menu_btn);
  }
});
logoPos = logo.offset().top;  

$(window).scroll(function() {
	if ($(this).scrollTop() > logoPos) {
		logo.addClass(fixed_logo);
	} else {
		logo.removeClass(fixed_logo);
	}
});
//   // Set active element in color
$('.ba-nav__item').click(function(e) {
	e.preventDefault();
	$('.ba-nav__item').removeClass('ba-nav__item--active');
	$(this).addClass('ba-nav__item--active');
});
//   // SVG
// $('#sss svg').replaceWith("<svg class="ba-whoweare__svg" width="165" height="165"></svg>");
// $('#sss svg').replaceWith("<svg class="ba-whoweare__svg" width="165" height="165">	<use xlink:href="#redman"></use></svg>");


//#button-up
if ($('#button-up').length) {
    let scrollTrigger = 300, // px
    backToTop = function() {
    	let scrollTop = $(window).scrollTop();
    	if (scrollTop > scrollTrigger) {
    		$('#button-up').addClass('is-visible');
    	} else {
    		$('#button-up').removeClass('is-visible');
    	}
    };
    backToTop();
    $(window).on('scroll', function() {
    	backToTop();
    });
    $('#button-up').on('click', function(e) {
    	e.preventDefault();
    	$('html,body').animate({
    		scrollTop: 0
    	}, 1000);
    });
  }
//   //Animated title to left 
$('.title__animate--bounceInLeft').addClass('hidden').viewportChecker({
	classToAdd: 'visible animated flipInY',
	offset: 100,
	repeat: true,
});
$('.subtitle__animate--flipInX').addClass('hidden').viewportChecker({
	classToAdd: 'visible animated flipInX',
	offset: 100,
	repeat: true,
});
$('.subtitle__animate--rollIn').addClass('hidden').viewportChecker({
	classToAdd: 'visible animated rollIn',
	offset: 100,
	repeat: true,
});
// $(function() {
//   $('.ba-ourwork__nav li').click(function(e) {
// e.preventDefault()
//     $('.ba-ourwork__nav li').removeClass('active');
//     $(this).addClass('active');
//   });

//   $('.ba-ourwork__grid').filterizr();
// });
var $gallery = $('.ba-ourwork__grid').isotope({
	itemSelector: '.ba-ourwork__photo',
	percentPositon: true,
	masonry: {
		columnWidth: '.ba-ourwork__size'
	}
});
$('.ba-ourwork__nav').on('click', 'li', function(evt) {
	evt.preventDefault();

	var filterValue = $(this).data('filter');
	$gallery.isotope({filter: filterValue });

	$(this).addClass('active').siblings().removeClass('active');
})

$(window).on('load', function(){

	var map; 

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 49.56853410000001, lng: 34.585375099999965},
		zoom: 8,
		disableDefaultUI: true
	});

	var marker = new google.maps.Marker({
		map: map,
		position: {lat: 49.56853410000001, lng: 34.585375099999965}
	})
});

//   //Slow scroll from menu-item to current section
$(".ba-nav__link").on("click", function(event) {
  event.preventDefault();
  let id = $(this).attr('href'),
  top = $(id).offset().top;

  $('body,html').animate({ scrollTop: top }, 700);
});

});
}( jQuery )); 

