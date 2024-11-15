/* 
Author: Miki Foster
Created: 11 November 2024
*/

// create sortingHat()
// get length of str
// mod length 4
function sortingHat(str) {
// return syltherin, gryffindor, ravenclaw, and hufflepuff
const houses = [
    {name: "Slytherin", description: "Ambition, cunningness, heritage, and resourcefulness."},
    {name: "Gryffindor", description: "Bravery, helping others, and chivalry."},
    {name: "Ravenclaw", description: "Intelligence, knowledge, planning ahead, and wit."},
    {name: "Hufflepuff", description: "Hard work, patience, loyalty, and fair play."},
            
]

    len = str.length;
    mod = len % houses.length;

    return houses[mod];
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    var newText = "<p>The Sorting Hat has sorted you into " + house.name + "</p>" + 
                    "<p>Distinctive traits include: " + house.description + "</p>";
    document.getElementById("output").innerHTML = newText;
})