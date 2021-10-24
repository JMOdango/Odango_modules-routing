import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.css']
})
export class TrendingPageComponent implements OnInit {
  posts = [
  {
    imageUrl: '/assets/Image/furtado.jpg',
    photographer: 'Andre Furtado',
  },
  {
    imageUrl: '/assets/Image/vladimir.jpg',
    photographer: 'Vladimir Bogovčič',
  },
  {
    imageUrl: '/assets/Image/elijah.jpg',
    photographer: "Elijah O'Donnell",
  },
  {
    imageUrl: '/assets/Image/maxime.jpg',
    photographer: 'Maxime Francis',
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
