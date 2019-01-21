export class Album {
    albumName: string;
    artistName: string;
    imagePath: string;
    genre: string;
    releaseDate: string;
    price: number;
    constructor(albumName: string, artistName: string, imagePath: string, genre: string,
        releaseDate: string, price: number) {
        this.albumName = albumName;
        this.artistName = artistName;
        this.imagePath = imagePath;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.price = price;
    }
}
