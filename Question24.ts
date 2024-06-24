//Define variable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana", "orange"];

// test for equality and inquality with strings

console.log("is apple is equal to apple");
console.log(apple == "apple") ;

console.log("is apple is not equal to apple?");
console.log(apple != "apple");

//tests using lowercase function
console.log("\nis apple is equal to apple after converting to lowerccase?");
console.log(uppercaseApple.toLowerCase()== "apple");


console.log("\nis apple is equal to apple after converting to lowerccase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//numerical tests
//equal to
console.log("is ten is equal to twenty?");
console.log("ten == twenty?");

//not equal to 
console.log("\nis ten is equal to  twenty?");
console.log(ten != twenty);

// greater than 
console.log("\nis ten is greater then zero");
console.log(ten > 0);

//less than
console.log("\nis twenty is less than 10");
console.log(twenty < 10);

//greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

//tests this using and or operators
//using &&
console.log("\ntwenrt is not equal to 10 and twenty is greaterthan 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenrt is not equal to 10 and twenty is greaterthan 10");
console.log(twenty != 10 && twenty > 30);

//using || (OR)
console.log("\n20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//tests whether an items is include is arrey
console.log("is orange include in my array?");
console.log(fruits.includes("orange"));

console.log("\n is orange is not include in my fruits array? ");
console.log(!fruits.includes("orange"));





