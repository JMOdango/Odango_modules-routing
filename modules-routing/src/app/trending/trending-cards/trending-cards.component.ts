import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-cards',
  templateUrl: './trending-cards.component.html',
  styleUrls: ['./trending-cards.component.css']
})
export class TrendingCardsComponent implements OnInit {
  @Input() imageUrl = '';
  @Input() photographer = '';

  constructor() { }

  ngOnInit(): void {
  }

}
