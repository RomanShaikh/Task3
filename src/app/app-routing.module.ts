import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { WeatherComponent} from './weather/weather.component';
import { MovieComponent} from './movie/movie.component';
import { CurrencyComponent} from './currency/currency.component';
import { MenuComponent} from './menu/menu.component';

const routes: Routes=[
  
  { path: 'menu',component: MenuComponent },
  { path: 'weather',component: WeatherComponent },
  { path: 'movie' ,component: MovieComponent },
  { path: 'currency' ,component: CurrencyComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
