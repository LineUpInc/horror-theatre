var recall = $('.btn');
var pop = $('.popup');
var logo = $('#logo');
var callbtn = $('#call-btn');
recall.click(function () {
    'use strict';
    logo.css('visibility', 'hidden');
    pop.css('display', 'block');
});
callbtn.click(function () {
    'use strict';
    location.replace("https://horror-theatre.000webhostapp.com/");
});