/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

	$(document).ready(function() {
		
		//Resize pas na een half seconde, maakt de website sneller. Na 500 milliseconden voert hij de doneResizing functie uit.
		var timer;
		$(window).resize(function() {
			clearTimeout(timer);
			timer = setTimeout(doneResizing(), 500);
		});

		function doneResizing(){

			//Dit is voor de team pagina. Verzamel alle hoogtes en maak ze allemaal even groot als de hoogste.
			var arrayTextHeight = [];
			var largestTextHeight;

			$("#block-views-team-block .views-field-nothing").each(function() {
				//De removeAttr is om de vorige hoogte te resetten.
				$(this).removeAttr('style');
				arrayTextHeight.push($(this).height());
			});

			//Pak de hoogste uit de array.
			largestTextHeight = Math.max.apply(Math, arrayTextHeight);

			$("#block-views-team-block .views-field-nothing").height(largestTextHeight);
			
			//Maak de array weer leeg zodat deze kan worden gevuld met nieuwe hoogtes
			arrayTextHeight.length = 0;

		}

})(jQuery, Drupal, this, this.document);