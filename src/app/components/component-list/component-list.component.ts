import { Component, OnInit } from '@angular/core';
import { fadeOut } from 'src/app/Animations/animaciones';
import { Image } from 'src/app/moduls/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
  animations: [fadeOut],
})
export class ComponentListComponent implements OnInit {
  images: Image[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => (this.images = images));
  }

  displayedColumns: string[] = ['image-id', 'image-author'];
}
