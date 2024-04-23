//Unchange Magicians
// const originalMagicians: string[] = ["David Copperfield","David Blaine","Derren Brown"];
// const newMagicians: string[] = makeGreat(originalMagicians.slice());
// showMagicians(originalMagicians);
// showMagicians(newMagicians);

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string [] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(magicians[i] + ` the Great`);
    }
    return greatMagicians;
}

const magicians3: string[] = ["David Copperfield","David","Jhon"];


const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
