//Unchange Magicians
// const originalMagicians: string[] = ["David Copperfield","David Blaine","Derren Brown"];
// const newMagicians: string[] = makeGreat(originalMagicians.slice());
// showMagicians(originalMagicians);
// showMagicians(newMagicians);
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
var magicians3 = ["David Copperfield", "David", "Jhon"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
