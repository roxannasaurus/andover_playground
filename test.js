/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    "use strict";
    $('#fullscreen').css('height', $(document).outerWidth() + 'px');
    $('#fullscreen2').css('height', $(document).outerWidth() + 'px');
    $('#fullscreen3').css('height', $(document).outerWidth() + 'px');
    
    var lancasterPhoto = document.getElementById("lancaster-photo"),
        lancasterImages = document.getElementById("lancaster-images"),
        kensingtonPhoto = document.getElementById("kensington-photo"),
        kensingtonImages = document.getElementById("kensington-images"),
        summervillePhoto = document.getElementById("summerville-photo"),
        summervilleImages = document.getElementById("summerville-images"),
        hamptonPhoto = document.getElementById("hampton-photo"),
        hamptonImages = document.getElementById("hampton-images"),
        lakeshorePhoto = document.getElementById("lakeshore-photo"),
        lakeshoreImages = document.getElementById("lakeshore-images"),
        farmhousePhoto = document.getElementById("farmhouse-photo"),
        farmhouseImages = document.getElementById("farmhouse-images"),
        maybrookPhoto = document.getElementById("maybrook-photo"),
        maybrookImages = document.getElementById("maybrook-images"),
        habershamPhoto = document.getElementById("habersham-photo"),
        habershamImages = document.getElementById("habersham-images"),
        versaillesPhoto = document.getElementById("versailles-photo"),
        versaillesImages = document.getElementById("versailles-images");
        
    $("#show-lancaster").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").show();
        $("#lancaster-images").show();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });

    $("#show-kensington").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").show();
        $("#kensington-images").show();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });
    
    $("#show-summerville").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").show();
        $("#summerville-images").show();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });
    
    $("#show-hampton").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").show();
        $("#hampton-images").show();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });
    
    $("#show-lakeshore").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").show();
        $("#lakeshore-images").show();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });
    
    $("#show-farmhouse").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").show();
        $("#farmhouse-images").show();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });
    
    $("#show-maybrook").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").show();
        $("#maybrook-images").show();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });
    
    $("#show-habersham").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").show();
        $("#habersham-images").show();
        $("#versailles-photo").hide();
        $("#versailles-images").hide();
    });
    
    $("#show-versailles").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#lancaster-photo").hide();
        $("#lancaster-images").hide();
        $("#kensington-photo").hide();
        $("#kensington-images").hide();
        $("#summerville-photo").hide();
        $("#summerville-images").hide();
        $("#hampton-photo").hide();
        $("#hampton-images").hide();
        $("#lakeshore-photo").hide();
        $("#lakeshore-images").hide();
        $("#farmhouse-photo").hide();
        $("#farmhouse-images").hide();
        $("#maybrook-photo").hide();
        $("#maybrook-images").hide();
        $("#habersham-photo").hide();
        $("#habersham-images").hide();
        $("#versailles-photo").show();
        $("#versailles-images").show();
    });
    
    $(lancasterPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(lancasterImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('lancaster-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
    
    $(kensingtonPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(kensingtonImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('kensington-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
    
    $(summervillePhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(summervilleImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('summerville-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
    
    $(hamptonPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(hamptonImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('hampton-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
   
    $(lakeshorePhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(lakeshoreImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('lakeshore-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
    
    $(farmhousePhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(farmhouseImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('farmhouse-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
    
    $(maybrookPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(maybrookImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('maybrook-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
    
    $(habershamPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(habershamImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('habersham-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
    
    $(versaillesPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(versaillesImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('versailles-photo');
    // Modify the src attribute based upon the state var we just set
        if (state === 'bw') {
            src = src.replace('bw_', 'clr_');
        } else {
            src = src.replace('clr_', 'bw_');
        }
    // Apply the new src attribute value  
        $(this).attr("src", src);

        big.style.backgroundImage = "url(" + $(this).attr('src') + ")";
    });
});

