$(document).ready(function() {
// Cache the elements we'll need
var menu = jQuery('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});

//Scroll to Top Button
$(function() {
    var topBtn = $('#pageTop');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});
