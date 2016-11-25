import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';

 // import { TeamsPage } from '../teams/teams';
// import { TeamsPage } from '../pages';
// import { MyTeamsPage } from '../pages';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  constructor(private navCtrl: NavController) {}

  itemTapped(){
    this.navCtrl.push(TeamsPage)
  }
}
