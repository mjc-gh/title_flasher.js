(function($){
	var original = document.title;
	var focus = true;
	
	var flash, timer;
	
	function reset_title(){
		clearInterval(timer);
		timer = null;

		document.title = original;
	}

	$.doc_title_flasher = $.dtf = function(title){
		reset_title();
		
		if (!focus){
			original = document.title;
			document.title = flash = title;

			timer = setInterval(function(){
				document.title = (document.title == original ? flash : original);
				
			}, 1500);
		}
	};

	$(window).bind('focus focusin', function(){
		focus = true;
		reset_title();
		
	}).bind('blur focusout', function(){
		focus = false;
		
	});

})(jQuery);
