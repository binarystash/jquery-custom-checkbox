[![Build Status](https://travis-ci.org/binarystash/jquery-custom-checkbox.svg?branch=master)](https://travis-ci.org/binarystash/jquery-custom-checkbox)

# Custom Checkbox

Custom Checkbox is a jQuery plugin for customizing the appearance of checkboxes.

## Demo

Play with a [fiddle](http://jsfiddle.net/binarystash/B32wj/).

## Installation

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/binarystash/jquery-custom-checkbox/master/dist/jquery.custom-checkbox.min.js
[max]: https://raw.github.com/binarystash/jquery-custom-checkbox/master/dist/jquery.custom-checkbox.js

In your webpage:

```html
<script src="jquery.js"></script>
<script src="dist/custom-checkbox.min.js"></script>
<link rel="stylesheet" href="css/custom-checkbox.css"/>
```
## Usage

1. Suppose you have the following.
	
	```html
	<input type="checkbox" id="first"/><label for="first">First</label>
    <label><input id="second" type="checkbox"/>Second</label>
    <input id="third" type="checkbox"/><label>Third</label>
    ```

2. Call the plugin.

	```javascript
	jQuery('input[type="checkbox"]').customCheckbox();
	```

3. Customize the appearance by editing custom-checkbox.css

##Compatibility
Tested on IE8; latest versions of Firefox and Chrome

##Support
Report bugs at https://github.com/binarystash/jquery-custom-checkbox/issues.