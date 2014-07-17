Headtacular
===========

A nice minimalist sticky header.

<br />



## Let's Begin

### Requirements

* jQuery

### Getting Started

1. Include jQuery
1. Include `jquery.headtacular.js`
1. When the `document` is `ready()`, call `.headtacular()` on the element which you'd like to stick

### Example

	$('.header').headtactular({ scrollPoint: 100 });

<br />



## How it Works
As the user scrolls, the script will check if they have scrolled past the `scrollPoint`.  If so, it will add the CSS class **`.is-stuck`** to the targeted object.

**This is a BYOS** (**B**ring **Y**our **O**wn **S**tyle) **plugin**. That means it is up to you to style the targeted object as well as the `.is-stuck` class as this plugin doesn't come with any styling.  That keeps things flexible and simple.

You *could* try something like this:

	.header {
		transition: all 300ms;
		background-color: #fff;
	}

	.header.is-stuck {
		position: fixed;
		left: 0;
		width: 100%;
		top: 0;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
	}

<br />



## Changelog

**v1.0.0**<br />Initial release.

<br />



## Author
[Mike Zarandona](http://mikezarandona.com) | [@mikezarandona](http://twitter.com/mikezarandona)
