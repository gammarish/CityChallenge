

var allMarkers = null;
var chartsItems = [];

$(function () {
    $.extend(true, CC,
    {
        Home: function () {

            this.intervalFunction = function intervalFunction() {
                Initialize();
            },

            this.iniHome = function () {
                Initialize();
                //this.intervalFunction();
            },

            this.iniHome();
        }
    });
});


var homeObj = null

$(document).ready(function () {
    homeObj = new CC.Home();
    
});
