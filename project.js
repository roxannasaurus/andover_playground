/*jslint browser: true*/
/*global $, jQuery, alert*/
$(window).on('scroll', function () {
    "use strict";
    var toTop = $(this).scrollTop(), index = 0;
    
	
    index = Math.floor(toTop) - 5000;
    
    if (index >= 1) {
        document.getElementById("myID0").className = "sideMenu show";
    } else {
        document.getElementById("myID0").className = "sideMenu hide";
    }
    
    if (index >= 3) {
        document.getElementById("myID").className = "sideMenu show";
    } else {
        document.getElementById("myID").className = "sideMenu hide";
    }
  
    if (index >= 7) {
        document.getElementById("myID2").className = "sideMenu show2";
    } else {
        document.getElementById("myID2").className = "sideMenu hide2";
    }
    
    if (index >= 11) {
        document.getElementById("myID1").className = "sideMenu show2";
    } else {
        document.getElementById("myID1").className = "sideMenu hide2";
    }
    
    if (index >= 15) {
        document.getElementById("myID3").className = "sideMenu show";
    } else {
        document.getElementById("myID3").className = "sideMenu hide";
    }
  
    $('.circle').css('background-color', 'lightgray');
  
    $('.circle').slice(0, index).css('background-color', '#8ead3d');
});


function ImageCollection(fp, dl) {
    "use strict";
    this.fp = fp;
    this.dl = dl;
    this.i = 0;
    this.next = function (imgId, linkId) {
        var img = document.getElementById(imgId), link = document.getElementById(linkId);
        
        this.i = this.i + 1;
        if (this.i === fp.length) {
            this.i = 0;
        }
        img.src = fp[this.i];
        link.href = dl[this.i];
    };
    
    this.prev = function (imgId, linkId) {
        var img = document.getElementById(imgId), link = document.getElementById(linkId);
        
        this.i = this.i - 1;
        if (this.i <= 0) {
            this.i = fp.length - 1;
        }
        img.src = fp[this.i];
        link.href = dl[this.i];
    };
}

var ic1 = new ImageCollection(['Andover+Construction_Jefferson.png', 'Andover+Construction_Savannah.png', 'Andover+Construction_Lexington.png',
                               'Andover+Construction_Chesapeake.png',
                               'Andover+Construction_Charleston.png', 'Andover+Construction_Drayton.png'],       ['Andover+Construction_Jefferson.pdf', 'Andover+Construction_Savannah.pdf',
        'Andover+Construction_Lexington.pdf', 'Andover+Construction_Chesapeake.pdf', 'Andover+Construction_Charleston.pdf', 'Andover+Construction_Drayton.pdf']);

$(function () {
    "use strict";
    $('#fullscreen').css('height', $(document).outerWidth() + 'px');
    $('#fullscreen2').css('height', $(document).outerWidth() + 'px');
    $('#fullscreen3').css('height', $(document).outerWidth() + 'px');
    
    var harbourPhoto = document.getElementById("harbour-photo"),
        pwPhoto = document.getElementById("pw-photo"),
        bfPhoto = document.getElementById("bf-photo"),
        harbourImages = document.getElementById("images"),
        pwImages = document.getElementById("pwimages"),
        bfImages = document.getElementById("bfimages"),
        lancasterPhoto = document.getElementById("lancaster-photo"),
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
    
    $(harbourPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
    
    $(pwPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen2 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen2').fadeIn();
    });
    $('#fullscreen2').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
    
    $(bfPhoto).click(function () {
        var src = $(this).css('background-image'); //get the source attribute of the clicked 
        src = src.replace(/\s?url\([\'\"]?/, '').replace(/[\'\"]?\)/, '');
        $('#fullscreen3 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen3').fadeIn();
    });
    $('#fullscreen3').click(function () {
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
  
    $(harbourImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('harbour-photo');
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
    
    $(pwImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('pw-photo');
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
    
    $(bfImages).find('img').bind("click", function () {
        var src = $(this).attr("src"), state = (src.indexOf("bw_") === 0) ? 'bw' : 'clr',
            big = document.getElementById('bf-photo');
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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
        $('#fullscreen4 img').attr('src', src); //assign it to the tag for your fullscreen div
        $('#fullscreen4').fadeIn();
    });
    $('#fullscreen4').click(function () {
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


