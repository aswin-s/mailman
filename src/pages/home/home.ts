import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})
export class HomePage {
  public mails: any;
  constructor(public navCtrl: NavController) {
    this.mails = [{
      from: "Premjith Manapetty",
      id: "F89B216354E725BC6525802200179BDF",
      importance: "0",
      subject: ":-)",
      time: "20160902T095003,09+0530"
    },
    {
      id: "01BE0C173D3B3AF16525802000555553",
      importance: "0", 
      "from": "Rinto Jose",
      subject: "Re: Updated: Home Page motion effects",
      time: "20161011T100206,30+0530"
    }];

  }

  parseTime(item) {
    console.log(item);
  }

}
