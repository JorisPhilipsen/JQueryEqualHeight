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


// function createEqualHeight(){
// 	this.each(function() {
// 		//De removeAttr is om de vorige hoogte te resetten.
// 		$(this).removeAttr('style');
// 		arrayTextHeight.push($(this).height());
// 	});

// 	//Pak de hoogste uit de array.
// 	largestTextHeight = Math.max.apply(Math, arrayTextHeight);

// 	this.height(largestTextHeight);
	
// 	//Maak de array weer leeg zodat deze kan worden gevuld met nieuwe hoogtes
// 	arrayTextHeight.length = 0;
// }


// this.each(function() {
// 	//De removeAttr is om de vorige hoogte te resetten.
// 	$(this).removeAttr('style');
// 	arrayTextHeight.push($(this).height());
// });

// //Pak de hoogste uit de array.
// largestTextHeight = Math.max.apply(Math, arrayTextHeight);

// this.height(largestTextHeight);

// //Maak de array weer leeg zodat deze kan worden gevuld met nieuwe hoogtes
// arrayTextHeight.length = 0;







// (function ($, Drupal, window, document, undefined) {

// 	$(document).ready(function() {
		
// 		//Resize pas na een half seconde, maakt de website sneller. Na 500 milliseconden voert hij de doneResizing functie uit.
// 		var timer;
// 		$(window).resize(function() {
// 			clearTimeout(timer);
// 			timer = setTimeout(doneResizing(), 500);
// 		});

// 		function doneResizing(){

// 			//Dit is voor de team pagina. Verzamel alle hoogtes en maak ze allemaal even groot als de hoogste.
// 			var arrayTextHeight = [];
// 			var largestTextHeight;

// 			$("#block-views-team-block .views-field-nothing").each(function() {
// 				//De removeAttr is om de vorige hoogte te resetten.
// 				$(this).removeAttr('style');
// 				arrayTextHeight.push($(this).height());
// 			});

// 			//Pak de hoogste uit de array.
// 			largestTextHeight = Math.max.apply(Math, arrayTextHeight);

// 			$("#block-views-team-block .views-field-nothing").height(largestTextHeight);
			
// 			//Maak de array weer leeg zodat deze kan worden gevuld met nieuwe hoogtes
// 			arrayTextHeight.length = 0;

// 		}

// })(jQuery, Drupal, this, this.document);