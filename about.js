/*jslint browser: true*/
/*global $, jQuery, alert*/

$('#mission, #team').on('click', function (e) {
    "use strict";
    e.preventDefault();
    var target = $(this).get(0).id === +'mission' ? $('#team') : $('#mission');
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});