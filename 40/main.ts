//Album
interface Album{
    artis: string;
    title:string;
    tracks?: number;
}

function makeAlbum(artis:string,title:string,tracks?:number):
Album {
    const album: Album={artis,title};
    if (tracks){
        album.tracks = tracks;
    }
    return album;
}

const album1 :Album= makeAlbum("ED Shreean","Divide",16);
const album2 :Album= makeAlbum("Taylor Swift","1989");
const album3 :Album= makeAlbum("Beyonce","Lemonade",12);

console.log(album1);
console.log(album2);
console.log(album3);

