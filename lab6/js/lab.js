// Author: Miki Foster
// Created: 23 October 2024


// Define variables
myTransport=["bus","walking","ride from boyfriend","my mom"];

// Create an object for main ride
myMainRide={
  make:"Lexus",
  model:"i250 F Sport",
  color:"black",
  year:2014,
  age:function() {
      return 2024 - this.year;
  }
}

// Output
document.writeln("How I usually get around: ", myTransport, "</br>");
document.writeln("My main ride: <pre>",
        JSON.stringify(myMainRide, null, '\t'), "</pre>");