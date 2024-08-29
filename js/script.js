
// Slick Slider
jQuery(document).ready(function($){
  
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
		mobileFirst: true, 
		responsive: [
			{
				breakpoint: 900,
				settings: "unslick"
			 }
		  ]
	});


});