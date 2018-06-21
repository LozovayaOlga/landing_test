
$(document).ready
(function() {
	
	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');

$menulink.click
(function() {
	
	$menulink.toggleClass('active');
	$menu.toggleClass('active');
	return false;
});});


$(document).ready
(function() {
	
	
	var $block = $('.screen__description--2'),
	$screen_button = $('.screen_button'),
	$screen_close = $('.screen_close');

$screen_button.click
(function() {
	$screen_close.toggleClass('d-block');
	$block.toggleClass('d-block');
	$screen_button.toggleClass('none');
	return false;
});});