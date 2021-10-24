import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  posts = [
  {
    imageUrl: '/assets/Image/furtado.jpg',
    photographer: 'Andre Furtado',
    time: '3',
    mhd: 'mins'
  },
  {
    imageUrl: '/assets/Image/vladimir.jpg',
    photographer: 'Vladimir Bogovčič',
    time: '12',
    mhd: 'mins'
  },
  {
    imageUrl: '/assets/Image/elijah.jpg',
    photographer: "Elijah O'Donnell",
    time: '34',
    mhd: 'mins'
  },
  {
    imageUrl: '/assets/Image/maxime.jpg',
    photographer: 'Maxime Francis',
    time: '36',
    mhd: 'mins'
  },
  {
    imageUrl: '/assets/Image/iriser.jpg',
    photographer: 'Irina Iriser',
    time: '47',
    mhd: 'mins'
  },
  {
    imageUrl: '/assets/Image/buenconcejo.jpg',
    photographer: 'JV Buenconcejo',
    time: '1',
    mhd: 'hour'
  },
  {
    imageUrl: '/assets/Image/mossholder.jpg',
    photographer: 'Tim Mossholder',
    time: '1',
    mhd: 'hour'
  },
  {
    imageUrl: '/assets/Image/olsson.jpg',
    photographer: 'Ella Olsson',
    time: '2',
    mhd: 'hours'
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
