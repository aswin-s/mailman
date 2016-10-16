import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MailService } from './../../services/mail.service';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public mailService: MailService) {
console.log("Initialized",mailService);
  }
  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    // this.navCtrl.push(TabsPage);
    this.mailService.validateUser("demo", "pass");
  }
}
