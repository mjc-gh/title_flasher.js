(function($){
	var original = document.title;
	var flash, timer;
	
	function reset_title(){
		clearInterval(timer);
		timer = null;

		document.title = original;
	}
	
	$.doc_title_flasher = $.dtf = function(title){
		reset_title();
		
		original = document.title;
		document.title = flash = title;

		timer = setInterval(function(){
			document.title = (document.title == original ? flash : original);
				
		}, 1500);
	};

	$(window).on('focus focusin', reset_title);	
	
})(jQuery);