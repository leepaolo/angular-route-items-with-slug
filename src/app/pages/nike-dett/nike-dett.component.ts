import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from 'src/app/services/shoes.service';
import { IShoe } from 'src/app/types/shoes.type';

@Component({
  selector: 'app-nike-dett',
  templateUrl: './nike-dett.component.html',
  styleUrls: ['./nike-dett.component.css'],
})
export class NikeDettComponent implements OnInit {
  selectedShoe: IShoe | null = null;

  constructor(
    private readonly shoesService: ShoesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const shoeSlug = params.get('slug');
      this.selectedShoe = this.shoesService.slugify(shoeSlug);
    });
  }
}
