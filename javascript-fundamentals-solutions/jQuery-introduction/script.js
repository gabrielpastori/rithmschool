//Write the necessary to code wait for the DOM to load in jQuery
$(document).ready(function(){
    //Select the footer element
    var $footer = $('footer');
    //Select the div with an id of "container"
    var $div = $('#container');
    //Select all of the lis inside of the ul with a class of nav
    var $lis = $('.nav li')
    //Select the third li inside of the div with a class of list-container
    var $thirdLi = $('.list-container li:nth-child(3)');
    //Select only the last li in each of the uls
    var $lastLis = $('ul li:last-child');
});
