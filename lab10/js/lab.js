/* 
    lab.js - This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.

    Author: Miki Foster
    Created: 6 November 2024
*/

function generateRandomText() {
    const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min=3;
    const max=200;
    const randLen=Math.floor(Math.random() * (max - min + 1)) + min;
// get a random string index to slice the lorem ipsum text
    const randStart=Math.floor(Math.random() * (text.length - randLen + 1));
// generate random lorem ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){

// new fake dialogue
    const newText=generateRandomText();

// append new div to output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
