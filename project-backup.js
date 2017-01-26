/*jslint browser: true*/
/*global $, jQuery, alert*/

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
        bfImages = document.getElementById("bfimages");
    
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
    
});


