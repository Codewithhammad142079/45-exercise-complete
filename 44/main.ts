// // Sandwiches

function makeSandwich(...items: string[]): void {
    console.log("Sandwich ordered with:");
    items.forEach(item => {
        console.log("-"+item);
    });
}

makeSandwich("turkey","cheese");
makeSandwich("ham","lecttuce","tomato");
makeSandwich("peanut butter","jelly");


