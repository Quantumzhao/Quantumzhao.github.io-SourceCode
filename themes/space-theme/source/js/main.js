$(document).ready(function(){
    var $navlink = $('.nav-link'),
        i = ['Bulletin Board', 'Github Projects', 'posts', 'about'];

    $navlink.removeClass('active');
    $navlink.eq(i.indexOf(document.title)).addClass('active');
});

