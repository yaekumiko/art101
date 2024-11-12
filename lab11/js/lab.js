/* 
    lab.js - This simple JavaScript/jQuery script gets a value from an input field
    and outputs a modified version.

    Requirements: jQuery must be loaded for this script to work.

    Author: Miki Foster
    Created: 11 November 2024
*/

// sorts the characters of a str in alphabetical order
function sortString(inputString) {
    // covert str to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {

    // get value of input field
    const userName = $("#user-name").val();

    // sort user's name
    const userNameSorted = sortString(userName);

    // append new div to output div with sorted name
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});

