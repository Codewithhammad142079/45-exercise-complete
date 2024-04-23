function makeAlbum(artis, title, tracks) {
    var album = { artis: artis, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("ED Shreean", "Divide", 16);
var album2 = makeAlbum("Taylor Swift", "1989");
var album3 = makeAlbum("Beyonce", "Lemonade", 12);
console.log(album1);
console.log(album2);
console.log(album3);
