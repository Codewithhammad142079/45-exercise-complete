var guestList = ["Hammad", "Haris", "Shyan", "Anus"];
var dontcome = guestList[0];
console.log(dontcome, "Nhi a skhta");
guestList.splice(0, 1, "wasif ");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
