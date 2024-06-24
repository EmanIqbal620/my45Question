"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//Making A Function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Creating a function with by-default values
make_shirt();
//Calling a function now Medium size and default message
make_shirt("Medium");
//Calling a functin now with Small size and also Diferent Print Message
make_shirt("Small", "I Love JavaSccript");
