import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/moduls/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  image: Image;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    this.imagesService.getImagesById(identifier).subscribe((image) => {
      if (!image) {
        this.router.navigateByUrl('/');
      }

      this.image = image;
      console.log('Image --> ', this.image);
    });
  }
}
