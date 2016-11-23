(function($) { "use strict";
	/* DOCUMENT LOAD */
	$(function() {
		// WP FIX: PORTFOLIO SINGLE NAV
		function fixPortfolioNav()
		{
			$( '.portfolio-nav .left-arrow a' ).addClass( 'prev ajax' );
			$( '.portfolio-nav .right-arrow a' ).addClass( 'next ajax' );
		}
		fixPortfolioNav();
		$( document ).ajaxComplete(function( event, request, settings )
		{
			fixPortfolioNav();
		});
		$( 'form#commentform' ).prepend( $( 'form#commentform p.comment-form-comment' ) );
		$('.format-video, .format-audio').each(function()
		{
		});	
	});

})(jQuery);