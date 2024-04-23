//Define Variabel
var appel = "apple";
var uppercaseAppel = "Apple";
var ten = 10;
var twenty = 20;
var fruits = ["appel", "banana", "orange"];
//Test for equality and inequlity string
console.log("apple is equal to apple");
console.log(appel == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(appel != "apple");
//Tests using lower case function
console.log("Is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseAppel.toLowerCase() == "appel");
console.log("\nIs APPEL not equal to apple after converting to lowercase?");
console.log(uppercaseAppel.toLowerCase() != "appel");
//NUmerical tests
//equal to
console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty);
// greater than
console.log("\nIs ten is greater than Zero?");
console.log(ten > 0);
//less than
console.log("\nIs twenty is less than ten");
console.log(twenty < 10);
//greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// Test using and & "or" operatar
//using (and) &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 30);
// using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// test wether and item include in array
console.log("\nis orange include in my fruits array");
console.log(fruits.includes("orange"));
console.log("\nis orange not include in my fruits array");
console.log(!fruits.includes("orange"));
