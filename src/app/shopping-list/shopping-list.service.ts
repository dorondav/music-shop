import { Injectable } from '@angular/core';
import { ShoppingList } from './shopping-list.model';
import { Album } from '../albums/album.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  listChange = new Subject<Album[]>();
  id: number;
  album: Album;
  buyAlbum = [];

  cartItems: number;

  constructor() { }

  addAlbumToShoppingListArray(buyAlbum: Album) {
    this.album = buyAlbum;
    this.buyAlbum.slice(this.buyAlbum.push(this.album));
    this.cartItems = this.buyAlbum.length;
    // console.log(this.cartItems);

  }
  getAlbumsForSl() {
    return this.buyAlbum;
  }

  deleteAlbum(index: number) {
    this.buyAlbum.splice(index, 1);
    this.listChange.next(this.buyAlbum.slice());
  }
}
