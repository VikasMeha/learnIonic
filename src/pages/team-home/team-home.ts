import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandingsPage, TeamDetailPage, MyTeamsPage } from '../pages';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {
  team: any;

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;  
  
  constructor(private navCtrl: NavController, private navPrm: NavParams ) {
      this.team = this.navPrm.data;
      
  }

  goHome(){
    // this.navCtrl.push(MyTeamsPage);
    this.navCtrl.popToRoot(); 
  }     

}
