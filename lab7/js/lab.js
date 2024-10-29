// Author: Miki Foster
// Created: 28 October 2024

// declare variable userName
// use window.prompt() to get user's name
function sortUserName {
    var userName=window.prompt("Enter your name:");
    console.log("userName =", userName);

    // split string to array
    var nameArray = nameArray.split.('');
    console.log("nameArray =", nameArray);

    // sort array
    var nameArraySort = nameArraySort.sort('');
    console.log("nameArraySort =", nameArraySort);

    // join array back to string
    var nameSorted = nameArraySort.join();
    console.log("nameSorted =", nameSorted);
    
    return nameSorted;
}

// result/output
document.writeln("Here is your new name: ",
    sortUserName(), "</br>");
