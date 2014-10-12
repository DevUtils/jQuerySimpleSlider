jQuerySimpleSlider
==================

A Easy Simple Slider jQuery Plugin

![Screenshot](https://raw.githubusercontent.com/DevUtils/jQuerySimpleSlider/master/screenshot-1.jpg)

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.simpleSlider.min.js"></script>
```

## Usage

Create simple slider:

```html
<div id="my-slider-1">
	<ul>
		<li title="Texto da legenda 1"><img src="img/img1.jpg"></li>
		<li title="Texto da legenda 2"><img src="img/img2.jpg"></li>
		<li title="Texto da legenda 3"><img src="img/img3.jpg"></li>
	</ul>
</div>
```

```javascript
$('#my-slider-1').simpleSlider
(
	{
		'width': 800,
		'height': 300,
	}
);
```
