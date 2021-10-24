import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRoutingModule } from './trending-routing.module';
import { TrendingPageComponent } from './trending-page/trending-page.component';
import { TrendingCardsComponent } from './trending-cards/trending-cards.component';
import { FeaturedCardsComponent } from './featured-cards/featured-cards.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    TrendingPageComponent,
    TrendingCardsComponent,
    FeaturedCardsComponent
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    CarouselModule.forRoot()
  ],
  exports:[
    TrendingPageComponent,
    TrendingCardsComponent,
    FeaturedCardsComponent
  ],
})
export class TrendingModule { }
