import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from '../album.model';
import { AlbumsService } from '../albums.service';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers

})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  id: number;
  public isCollapsed = true;

  constructor(private route: ActivatedRoute,
    private albumService: AlbumsService,
    private router: Router,
    config: NgbDropdownConfig) {
    config.placement = 'top-left';
    config.autoClose = true;
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.album = this.albumService.getAlbum(this.id);
        console.log(`album details` + this.album.price);
      }
    );
  }
  onEditAlbum() {
    this.router.navigate(['edit'], { relativeTo: this.route });

  }

}
