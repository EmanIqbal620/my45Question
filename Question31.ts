//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames = [ "Eman", "Ayesha","Iqra","Admin", "Romaisa"];

if(userNames.length === 0){
    console.log("Your Arrey is Empty we need to find  some users!")
}else{
    //Using ForEach Loop on Arrey
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to sea a status reaport`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again`)
        }
    })
};
