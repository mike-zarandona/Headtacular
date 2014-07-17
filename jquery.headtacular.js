/*
**********************************************************
* Headtacular | A nice minimalist sticky header
* 
* Version:		v1.0.0
* Author:		Mike Zarandona
* Release:		July 16 2014
* 				Initial release.
* 
* Reqs:			jQuery
* 
* Usage:		$('.header').headtacular({ scrollPoint: 10 });
**********************************************************
*/

(function ($, undefined) {
	$.fn.headtacular = function (options) {

		// Override defaults with specified options
		options = $.extend({}, $.fn.headtacular.options, options);

		// store the object
		var elem = $(this);


		// showScrollPoint option
		if ( options.showScrollPoint ) {
			console.log(options.scrollPoint);
			$('body').append('<div id="headtacular-scroll-point" style="height: 0px; width: 100%; border-bottom: 2px solid red; position: absolute; z-index: 99999; left: 0; top: ' + options.scrollPoint + 'px;"></div>');
		}


		// document.scroll() event
		$(document).on('scroll', function() {

			// if scrolled past the scroll point
			if ( $(document).scrollTop() > options.scrollPoint ) {

				// if the object does not already have .is-stuck
				if ( !elem.hasClass('is-stuck') ) {

					// assign the class and padding fix
					elem.addClass('is-stuck')
						.parent().css('padding-top', elem.outerHeight(true));
				}
			}

			// if not scrolled past the scroll point
			else {

				// if the object still has .is-stuck
				if ( elem.hasClass('is-stuck') ) {

					// remove the class and padding fix
					elem.removeClass('is-stuck')
						.parent().removeAttr('style');
				}
			}
		});
	};



	// Default the defaults
	$.fn.headtacular.options = {
		scrollPoint: 10,
		showScrollPoint: false
	};
})(jQuery);
