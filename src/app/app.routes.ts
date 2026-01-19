import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartscreenComponent } from './start-screen/startscreen.component';
import { GameComponent } from './game/game.component';
import { MatIconModule } from '@angular/material/icon';
import { GameInfoComponent } from './game-info/game-info.component';
import {MatCardModule} from '@angular/material/card';

export const routes: Routes = [
  { path: '', component: StartscreenComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatIconModule,
    GameInfoComponent,
    MatCardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }