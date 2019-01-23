import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Album } from '../album.model';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {
  album: Album;
  albumForm: FormGroup;
  id: number;
  constructor(
    private albumService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.album = this.albumService.getAlbum(this.id);
      }
    );
    this.initForm();
  }

  initForm() {
    this.albumForm = new FormGroup({
      'albumName': new FormControl(this.album.albumName, Validators.required),
      'artistName': new FormControl(this.album.artistName, Validators.required),
      'imagePath': new FormControl(this.album.imagePath, Validators.required),
      'genre': new FormControl(this.album.genre, Validators.required),
      'price': new FormControl(this.album.price, [Validators.required,
      Validators.pattern(/^((0?0?\.([1-9]\d*|0[1-9]\d*))|(([1-9]|0[1-9])\d*(\.\d+)?))$/)
      ]),
      'releaseDate': new FormControl(this.album.releaseDate, Validators.required)
    });
  }

  onSubmit() {
    this.albumService.updateAlbum(this.id, this.albumForm.value);
  }
  onCancel() {
    this.router.navigate(['/albums']);
  }
}
