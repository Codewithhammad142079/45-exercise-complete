// // Sandwiches
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich ordered with:");
    items.forEach(function (item) {
        console.log("-" + item);
    });
}
makeSandwich("turkey", "cheese");
makeSandwich("ham", "lecttuce", "tomato");
makeSandwich("peanut butter", "jelly");
