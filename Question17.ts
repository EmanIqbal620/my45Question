// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//namearray
let guestarray:string [] = ["fatima", "suman","iqra"];

//can not make dinner
let cannotattend:string = "iqra"
//invite  new guest
let newGuest:string ="halima";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;


guestArray.unshift("noreen");

let middleGuest:string = "aqsa";
let midleIndex = guestArray.length/2;
guestarray.splice(midleIndex,0,middleGuest);

guestarray.push("suman");
console.log(guestArray);

console.log("we can invite only two peoples for dinner!");

while(guestArray.length>2){
 let removeGuest = guestArray.pop();
console.log(`sorry ${removeGuest} we can't invite you to dinner!`);
};
guestarray.map((item)=> console.log(`${item} you are  still invited to dinner!`));

guestarray.pop();
guestarray.pop();
console.log(guestarray);
