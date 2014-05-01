(function ( $ ) {

	$.fn.EqualHeight = function( options ) {

		// By default the plugin is responsive.
		var settings = $.extend({
			responsive: true
		}, options );
	
		//Assign this to element to keep plugin working, need to fix this.
		var element = this;

		//Collect all heights of the elements and give them the same height as the tallest element
		var arrayTextHeight = [];
		var largestTextHeight;

		function createEqualHeight(){

			element.each(function() {
				//The removeAttr is needed to reset the height of the elements
				$(this).removeAttr('style');
				arrayTextHeight.push($(this).height());
			});

			//Get the highest value from the array
			largestTextHeight = Math.max.apply(Math, arrayTextHeight);

			element.height(largestTextHeight);

			//Clear the array so it can be filled with new values.
			arrayTextHeight.length = 0;

		}

		if (settings.responsive) {

			//Resize pas na een half seconde, maakt de website sneller. Na 500 milliseconden voert hij de doneResizing functie uit.
			var timer;
			$(window).resize(function() {
				clearTimeout(timer);
				timer = setTimeout(createEqualHeight, 500);
			});
		}

		//Equals height of elements on the page load.
		createEqualHeight();

	};

}( jQuery ));