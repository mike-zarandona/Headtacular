# Headtacular

[![Bower version](https://badge.fury.io/bo/headtacular.svg)](http://badge.fury.io/bo/headtacular)

A nice minimalist sticky header.  Project Site: [http://s.codepen.io/mike-zarandona/debug/zvEwKO](http://s.codepen.io/mike-zarandona/debug/zvEwKO).

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

**This is a BYOS** (**B**_ring_ **Y**_our_ **O**_wn_ **S**_tyle_) **plugin**. That means it is up to you to style the targeted object as well as the `.is-stuck` class as this plugin doesn't come with any styling.  That keeps things flexible and simple.

You *could* try something like this:

	.header {
		transition: all 300ms;
		background-color: #fff;
		position: relative;
		z-index: 9999;
	}

	.header.is-stuck {
		position: fixed;
		left: 0;
		width: 100%;
		top: 0;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
	}

<br />



## Options

**scrollPoint** (_default: 0_)<br />Sets the distance (in pixels) from the top of the browser window which the user must scroll to activate Headtacular.

**showScrollPoint** (_default: false_)<br />Sets the distance (in pixels) from the top of the browser window which the user must scroll to activate Headtacular.

**parentOffset** (_default: true_)<br />Activates the padding offset fix - the `.parent()` of the targeted object will have a `padding-top` applied equal to the height of the `.is-stuck` element.

<br />



## Changelog

**v1.0.4**<br />
+ Documentation update.

**v1.0.3**<br />
+ Added `bower.json` for Bower support.

**v1.0.2**<br />
- Bug fix:  fixed typo inside `document.ready()` event

**v1.0.1**<br />
+ Added `options.parentOffset` to turn on / off padding fix<br />
- Fired a check at `document.ready()` for pre-scrolled pages

**v1.0.0**<br />
- Initial release.

<br />



## Author
[Mike Zarandona](http://mikezarandona.com) | [@mikezarandona](http://twitter.com/mikezarandona)
