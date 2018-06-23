//раскрывает меню при нажатии
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

//кнопка подробнее-скрыть
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

//при нажатии красиво мотает к якорю

$(document).ready(function() {
    $(".scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});