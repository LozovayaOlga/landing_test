
///-------nav active---оставляет цвет навигации активным, если ты на этой странице находишься--

$('document').ready(function() {
    $('.nav__item  a').each(function() {
        if ('http://localhost:3000/'+$(this).attr('href') == window.location.href)
        {
            $(this).addClass('active');
        }
    });
}); 
  
