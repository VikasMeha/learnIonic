import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { MyTeamsPage } from '../pages/pages';
import { TournamentsPage } from '../pages/pages';
import { TeamsPage } from '../pages/pages';
import { TeamDetailPage } from '../pages/pages';
// import { TeamHomePage, StandingsPage } from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    // TeamHomePage,
    // StandingsPage,
    TournamentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    // TeamHomePage,
    // StandingsPage,
    TournamentsPage
  ],
  providers: []
})
export class AppModule {}
