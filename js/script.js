
// Slick Slider
	

jQuery(document).ready(function($){

	if($(window).innerWidth() <= 900) {
		$('.hero-slider .slide1').clone().prependTo('.hero-slider');
		$('.hero-slider .slide2').clone().prependTo('.hero-slider');
	}

	$('.hero-slider').slick({
	    draggable: true,
	    autoplay: true,
	    autoplaySpeed: 4000,
	    arrows: false,
	    dots: false,
	    fade: true,
	    speed: 1500,
	  	pauseOnHover:false,
	    infinite: true,
	    cssEase: 'linear',
	    touchThreshold: 100,
		rows: 2,
		slidesToShow: 1,
  		slidesToScroll: 1,
		infinite: 'infiniteScroll',
		mobileFirst: true, 
		responsive: [
			{
				breakpoint: 900,
				settings: "unslick"
			 }
		  ]
	});


});