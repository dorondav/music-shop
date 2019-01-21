import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';
import { NewAlbumComponent } from './albums/new-album/new-album.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'albums', component: AlbumsComponent, children: [
      { path: ':id', component: AlbumDetailComponent },
      { path: ':id/edit', component: AlbumEditComponent },
    ]
  }, {
    path: 'new-album', component: NewAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
