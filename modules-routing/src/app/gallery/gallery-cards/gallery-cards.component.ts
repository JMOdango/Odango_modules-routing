import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-cards',
  templateUrl: './gallery-cards.component.html',
  styleUrls: ['./gallery-cards.component.css']
})
export class GalleryCardsComponent implements OnInit {
  @Input() imageUrl = '';
  @Input() photographer = '';
  @Input() time = '';
  @Input() mhd = '';

  constructor() { }

  ngOnInit(): void {
  }

}
