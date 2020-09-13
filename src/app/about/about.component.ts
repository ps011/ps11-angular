import { Component, OnInit } from '@angular/core';
import {AboutService} from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: any = {};

  constructor(public aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAboutByName('Prasheel')
      .subscribe(about => {
        this.about = about[0];
      });
  }

}
