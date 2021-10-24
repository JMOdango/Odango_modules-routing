import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryCardsComponent } from './gallery-cards/gallery-cards.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';


@NgModule({
  declarations: [
    GalleryCardsComponent,
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  exports:[
    GalleryCardsComponent,
    GalleryPageComponent,
  ],
})
export class GalleryModule { }
