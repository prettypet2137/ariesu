jQuery(function($){
	$('.qa-opener').off('click').on('click', function(){
		if(!$(this).hasClass('opened')) {
			$(this).next('.qa-popup').slideDown();
			$(this).addClass('opened');
		} else {
			$(this).next('.qa-popup').slideUp();
			$(this).removeClass('opened');
		}
	});
});