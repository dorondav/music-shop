import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AlbumItemComponent } from './albums/album-list/album-item/album-item.component';
import { AlbumsService } from './albums/albums.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewAlbumComponent } from './albums/new-album/new-album.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-list/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './shopping-list/checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    HeaderComponent,
    HomePageComponent,
    DropdownDirective,
    AlbumItemComponent,
    AlbumEditComponent,
    NewAlbumComponent,
    ShoppingListComponent,
    ShoppingCartComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,


  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
