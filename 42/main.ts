// //Great Magicians

// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) { 
//         magicians [i] = magicians[i]   + `   the great`
// }
// }

// const magicians2: string[] = ["David Copperfield","David","Jhon"];
// make_great(magicians2)
// show_magicians(magicians2)




function makeGreat(magicians: string[]): string[]{
    return magicians.map(magician => `the Great ${magician}`);
}

const greatMagicians: string[] = makeGreat(magicians);

showMagicians(greatMagicians);
