import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
  { title: 'Vízesés', description: 'Minden játékos egyszerre kezd inni. Az óramutató járásával megegyező irányban csak akkor szabad abbahagyni az ivást, ha a tőled jobbra ülő már befejezte. Aki a Lászlót (Ász) húzta, az hagyhatja abba legelőször.' },
  { title: 'Te', description: 'Választhatsz valakit, akinek innia kell egy kortyot.' },
  { title: 'Én', description: 'Gratulálok! Te iszol egy kortyot.' },
  { title: 'Padló', description: 'Érintsd meg a padlót a kezeddel. Az a csapattárs, aki utoljára ér le, inni köteles.' },
  { title: 'Hüvelykujj-mester', description: 'Érintsd meg az asztallapot a hüvelykujjaddal. Az utolsó játékos, aki az asztalhoz ér, iszik.' },
  { title: 'Csajok', description: 'A teremtés koronái, vagyis a nők isznak egy kortyot.' },
  { title: 'Mennyország', description: 'Mutass a mutatóujjaddal az ég felé. Aki utoljára mutat fel, annak innia kell.' },
  { title: 'Párban', description: 'Válassz egy csapattársat, akinek mostantól minden alkalommal veled együtt kell innia, amikor téged iszásra kérnek.' },
  { title: 'Rím', description: 'Válassz egy szót. Az óramutató járásával megegyezően a többieknek rímelniük kell rá. Aki megismétel egy szót, vagy nem talál új rímet, az iszik.' },
  { title: 'Férfiak', description: 'A férfiak koccinthatnak és ihatnak egyet.' },
  { title: 'Szabály', description: 'Találj ki egy új szabályt, ami a játék végéig érvényes. A szabály nem írhat felül meglévőket.' },
  { title: 'Én még sosem...', description: 'A játékos egy kör erejéig bedobhat egy "Én még sosem..." kérdést. Akire igaz, az iszik.' },
  { title: 'Király kupa', description: 'Önts egy tetszőleges italt a középső kupába. Aki a negyedik királyt húzza, annak azonnal ki kell ürítenie a kupát.' }
];

  title: string = '';
  description: string = '';
  @Input()card: string = '';
  constructor(){

  }


  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1] ;
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
      }
    }
  }
