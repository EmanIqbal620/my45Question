//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the functions to show magicians names
function showmagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
// function to make magicians great through .map() it will modify array
function makeGreat(magicians) {
    return magicians.map(function (name) { return "THe Great ".concat(name); });
}
;
// Define an array of magicians  names
var magicians = ["harry poter", "Eman", "Iqra"];
// Call make_great to modify magicians names
var great_magicians = make_great(magicians_names);
// Call sow_magicians that show midified list of magicians
show_magicians(great_magicians);
