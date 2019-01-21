import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {
  newAlbumForm: FormGroup;
  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.newFormInit();
  }

  newFormInit() {
    this.newAlbumForm = new FormGroup({
      'albumName': new FormControl(null, Validators.required),
      'artistName': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'genre': new FormControl(null, Validators.required),
      'price': new FormControl(null, [Validators.required,
      Validators.pattern(/^((0?0?\.([1-9]\d*|0[1-9]\d*))|(([1-9]|0[1-9])\d*(\.\d+)?))$/)
      ]),
      'releaseDate': new FormControl(null, Validators.required)
    });
  }

  onAddNewAlbum() {
    this.albumService.addNewAlbum(this.newAlbumForm.value);
    this.newAlbumForm.reset();
  }

}
