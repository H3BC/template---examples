	$(document).ready(function(){

	$('li').on('click',function(){
		if ($(window).width() > 650){
		$('a').removeClass('active');
		$(this).children('a').addClass('active');
	}
	else{
		return false;
	}
	});
	
});