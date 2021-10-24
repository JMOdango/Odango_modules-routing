import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingPageComponent } from './trending-page/trending-page.component';

const routes: Routes = [{
  path: 'trending', 
  component: TrendingPageComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule { }
