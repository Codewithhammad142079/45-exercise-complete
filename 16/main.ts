// Creating a Guest List of Array 

let guestList = ["Hammad","Haris","Shyan","Anus"];

// Making variabel for those guest who cant come
let dontcome = guestList[0];

// printing the name of guest who cant come
console.log(dontcome,"Nhi a skhta");

//Add or remove  guest from guest list Array
guestList.splice(0, 1, "wasif");

//Message print for Bigger tabel
console.log("Good Nes ! WE have found a Bigger Tabel for Dinner");

//Adding a new guetst at starting index of array 
guestList.unshift("Ali");

//Adding a new guest at Ending index of array 
guestList.push("Zain");

// Get a middel of our guest list array
let middelIndex: number = Math.floor(guestList.length / 2);

// adding a new guest to mmiddel index of array
guestList.splice(middelIndex, 0,"Osama");

//print message updated list
console.log("Updated list of our guest");

//sending a invitation message one by ine with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));