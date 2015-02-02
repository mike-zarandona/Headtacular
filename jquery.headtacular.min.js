/*
**********************************************************
* Headtacular | headtacular.com | A nice minimalist sticky header
* Version:		v1.0.4
* Author:		Mike Zarandona | @mikezarandona
* Usage:		$('.header').headtacular();
**********************************************************
*/
!function(a){a.fn.headtacular=function(b){b=a.extend({},a.fn.headtacular.options,b);var c=a(this);b.showScrollPoint&&(console.log(b.scrollPoint),a("body").append('<div id="headtacular-scroll-point" style="height: 0px; width: 100%; border-bottom: 2px solid red; position: absolute; z-index: 99999; left: 0; top: '+b.scrollPoint+'px;"></div>')),a(document).on("read, scroll",function(){a(document).scrollTop()>b.scrollPoint?c.hasClass("is-stuck")||(c.addClass("is-stuck"),b.parentOffset&&c.parent().css("padding-top",c.outerHeight(!0))):c.hasClass("is-stuck")&&(c.removeClass("is-stuck"),b.parentOffset&&c.parent().removeAttr("style"))})},a.fn.headtacular.options={scrollPoint:10,showScrollPoint:!1,parentOffset:!0}}(jQuery);