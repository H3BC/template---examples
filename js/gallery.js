$(document).ready(function(){


	$('body').addClass('scroll-block');

	setTimeout(function(){
		$('body').addClass('loaded');
		$('body').removeClass('scroll-block');

	},2400);	

});