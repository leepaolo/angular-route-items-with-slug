import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoesService } from 'src/app/services/shoes.service';
import { IShoe, IShoesCollection } from 'src/app/types/shoes.type';
import { generateSlug } from 'src/app/utils/url.utils';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css'],
})
export class NikeComponent implements OnInit {
  shoesList: IShoesCollection | null = null;

  constructor(
    private readonly shoesService: ShoesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shoesService.getShoesList().subscribe((data) => {
      this.shoesList = data;
    });
  }

  onSelectShoe(shoe: IShoe): void {
    const shoeSlug = generateSlug(shoe.name);
    this.router.navigate([`/shoes-nike-dett/${shoeSlug}`]);
  }
}
