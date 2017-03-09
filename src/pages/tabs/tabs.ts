import { Component } from '@angular/core';

import { DeepLink, NavParams } from 'ionic-angular';


@DeepLink({ name: 'TabsPage' })
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = 'SchedulePage';
  tab2Root: any = 'SpeakerListPage';
  tab3Root: any = 'MapPage';
  tab4Root: any = 'AboutPage';
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
