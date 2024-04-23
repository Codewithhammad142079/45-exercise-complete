var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  Making a Array of countries and print its original order
var countriesTovisit = ["china", "Pakistan", "Australia", "Plastine"];
console.log("Orginal order:", countriesTovisit);
// print the array in Alphabetical order without modifind the actuall array
console.log("Alphabetical order:", __spreadArray([], countriesTovisit, true).sort());
//Show that the array is still  in orginal order
console.log("Still in Orginal Order:", countriesTovisit);
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
//Show that the array is still  in orginal order
console.log("Still in Orginal Order:", countriesTovisit);
//We have changed the Orginal array Order Now
console.log("Orginal array Reversed:", countriesTovisit.reverse());
//print the array tow show that its back to its original order
console.log("Back to Original order:", countriesTovisit.reverse());
// print the array tow show that its order has been change in alphabetical order
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
//We have changed again the Orginal array Order Now is revers prder again   
console.log("Orginal array Reversed:", countriesTovisit.reverse());
