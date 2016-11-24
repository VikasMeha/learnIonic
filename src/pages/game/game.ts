import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GamePage Page');
  }

}
