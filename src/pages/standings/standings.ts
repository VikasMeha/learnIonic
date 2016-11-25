import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html'
})
export class StandingsPage {
team: any;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team=this.navParams.data;
  }
    
}
