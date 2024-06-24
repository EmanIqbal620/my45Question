"use strict";
// //Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//Arrey of New Users
let current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
//Arrey of New Users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahdi", "Areeba"];
//Loop through new_Users to check for usernames avaibility
new_users.forEach(new_one_users => {
    let our_condition = (current_users.some(current_One_user => current_One_user.toLowerCase() === new_one_users.toLowerCase()));
    //print Different message using If-ELse statments
    if (our_condition) {
        console.log(`Sorry ${new_one_users} is already takin!`);
    }
    else {
        console.log(`This Username ${new_one_users} is avaiblable`);
    }
});
