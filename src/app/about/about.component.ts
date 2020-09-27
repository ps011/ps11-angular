import { Component, OnInit } from '@angular/core';
import {AboutService} from '../services/about.service';
import {About} from './about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: About;

  constructor(public aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAboutByName('Prasheel')
      .subscribe((about: About) => {
        this.about = about[0];
      });
  }

}
