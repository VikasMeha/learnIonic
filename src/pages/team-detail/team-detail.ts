import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
  team: any;

  constructor(private navCtrl: NavController, private NavParams: NavParams ) {

      this.team = this.NavParams.data;
      console.log ('**nav params:', this.NavParams );
  }

 goHome(){
   this.navCtrl.parent.parent.popToRoot();
 }     
}
