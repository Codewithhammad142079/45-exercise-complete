let guestList = ["Hammad","Haris","Shyan","Anus"];

let dontcome = guestList[0];

console.log(dontcome,"Nhi a skhta");

guestList.splice(0, 1, "wasif ");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));