// Creating a Guest List of Array 
var guestList = ["Hammad", "Haris", "Shyan", "Anus"];
// Making variabel for those guest who cant come
var dontcome = guestList[0];
// printing the name of guest who cant come
console.log(dontcome, "Nhi a skhta");
//Add or remove  guest from guest list Array
guestList.splice(0, 1, "wasif");
//Message print for Bigger tabel
console.log("Good Nes ! WE have found a Bigger Tabel for Dinner");
//Adding a new guetst at starting index of array 
guestList.unshift("Ali");
//Adding a new guest at Ending index of array 
guestList.push("Zain");
// Get a middel of our guest list array
var middelIndex = Math.floor(guestList.length / 2);
// adding a new guest to mmiddel index of array
guestList.splice(middelIndex, 0, "Osama");
//print message updated list
console.log("Updated list of our guest");
//sending a invitation message one by ine with thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
//inform that only tow guest can be invited for dinner
console.groupCollapsed("unfortunately, the new dinner tabel wont arrive on time so I can invite only tow guest Dinner with me");
// using while-loop to removed guest from the Array until only tow name remains
while (guestList.length > 2) {
    var removeguest = guestList.pop();
    console.log("Sorry, ".concat(removeguest, " I cant invite you to dinner"));
}
console.log("Invitation tow the last 2 guest");
guestList.forEach(function (lasttwo) { return console.log("Luckyly ".concat(lasttwo, ", you are still invited tow dinner")); });
//removing last tow guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
