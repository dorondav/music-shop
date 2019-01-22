import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingList } from './shopping-list.model';
import { Album } from '../albums/album.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  cart = [];
  id: number;
  constructor(private shoppingLs: ShoppingListService) { }

  ngOnInit() {
    this.cart = this.shoppingLs.getAlbumsForSl();
    console.log(this.cart.length);
  }

  onDeleteItem() {
    this.shoppingLs.deleteAlbum(this.id);
  }
}
