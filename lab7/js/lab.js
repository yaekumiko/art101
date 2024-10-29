// Author: Miki Foster
// Created: 28 October 2024

function myFunction(param1, param2) {

}

function main() {
    console.log("Main function started.");
}

// sortUsername function that takes user input and sorts the letters
function sortUserName() {
    var userName=window.prompt("Enter your name: ");
    console.log("userName =", userName);
    // split string to array
    var nameArray=userName.split('');
    console.log("nameArray =", nameArray);
    // sort array
    var nameArraySort=nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array to a string
var nameSorted=nameArraySort.join('');
console.log("nameSorted =", nameSorted);

return nameSorted;
}

// output
document.writeln("Here's your new name: ",
    sortUserName(), "</br>");