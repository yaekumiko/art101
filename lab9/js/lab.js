/* 
    lab.js - this JavaScript/jQuery script uses buttons to modify elements on the page

    Requirements: jQuery must be loaded for this script to work

    Author: Miki Foster
    Created: 1 November 2024

*/

// add button to challenge section
$(".special-sections").append("<button class='make-special'>Make Special</button>");

// add click listener to challenge button
$(".special-sections button").click(function(){
    $(this).parent().toggleClass("special");
});