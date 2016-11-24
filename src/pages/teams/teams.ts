import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamDetailPage } from '../pages';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [
    {id: 1, name: 'Vikas Choice' },
    {id: 2, name: 'Tatsat Choice' },
    {id: 3, name: 'Rakshit Choice' }
  ];

  constructor(public navCtrl: NavController) {}

  itemTapped($event, team){
    this.navCtrl.push(TeamDetailPage, team);
  }
}
