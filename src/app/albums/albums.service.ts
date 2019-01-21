import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumChange = new Subject<Album[]>();
  albums: Album[] = [
    new Album(
      'Ride the Lightning', 'Metallica',
      'https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png', 'Metal', 'July 27, 1984',
      10
    ),
    new Album(
      'Amnesiac', 'Radiohead',
      'https://upload.wikimedia.org/wikipedia/en/c/c5/Radiohead.amnesiac.albumart.jpg', 'Alternativ Rock',
      '5 June 2001', 9.99
    )

  ];
  constructor() { }

  setAlbums(albums: Album[]) {
    this.albums = albums;
    console.log(this.albums);

  }
  getAlbums() {
    return this.albums.slice();
  }
  getAlbum(index: number) {
    return this.albums[index];
  }

  updateAlbum(index: number, newAlbum: Album) {
    this.albums[index] = newAlbum;
    console.log(JSON.stringify(newAlbum.releaseDate));
    this.albumChange.next(this.albums.slice());
  }
}
