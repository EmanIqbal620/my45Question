//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
//  Define a function to print each magician name from an arrey
function show_magicians(magicians) {
    return magicians.forEach(function (name) { return console.log(name); });
}
// Define an arrey containing magician name
var magicians_name = ["Harry poter", "Eman", "Usman"];
// Calling the function to print each magician name
show_magicians(magician_names);
