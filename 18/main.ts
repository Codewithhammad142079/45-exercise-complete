//  Making a Array of countries and print its original order
let countriesTovisit: string[] =["china","Pakistan","Australia","Plastine"];
console.log("Orginal order:",countriesTovisit);

// print the array in Alphabetical order without modifind the actuall array
console.log("Alphabetical order:",[...countriesTovisit].sort());

//Show that the array is still  in orginal order
console.log("Still in Orginal Order:",countriesTovisit);

console.log("Reverse Order:",[...countriesTovisit].reverse());

//Show that the array is still  in orginal order
console.log("Still in Orginal Order:",countriesTovisit);

//We have changed the Orginal array Order Now
console.log("Orginal array Reversed:",countriesTovisit.reverse());

//print the array tow show that its back to its original order
console.log("Back to Original order:", countriesTovisit.reverse());

// print the array tow show that its order has been change in alphabetical order
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());

//We have changed again the Orginal array Order Now is revers prder again   
console.log("Orginal array Reversed:", countriesTovisit.reverse());