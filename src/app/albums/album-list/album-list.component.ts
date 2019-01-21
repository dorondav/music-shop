import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.albumService.albumChange
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;

        }
      );
    this.albums = this.albumService.getAlbums();
  }

}
