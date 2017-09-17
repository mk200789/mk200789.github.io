$(document).ready(function(){
	$('.scrollTop').bind('click', function(event){
		console.log('scrolltotop');
		$('html, body').animate({
			scrollTop: 0
		}, 1500), !1
	});

	$('.scroll').bind('click', function(event){
		console.log('scrolling');
		$('html,body').animate({
			scrollTop:$(this.hash).offset().top
		},1500);
		// $('#navbar').collapse('hide');
		event.preventDefault();
	});

});
