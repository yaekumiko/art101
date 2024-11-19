/* 
Author: Miki Foster
Created: 18 November 2024 
*/

function fizzBuzzBoom() {
    let oneLongString = "";

    for (let i=1; i<=200; i++) {
        let str = i + ": ";

        if (i%3 == 0) str += "Fizz!";
        if (i%5 == 0) str += "Buzz!";
        if (i%7 == 0) str += "Boom!";

        if (str == i + ": ") str = i;

        oneLongString += str + "<br>";
        
    }

    $("#output").html(oneLongString);
}

fizzBuzzBoom();