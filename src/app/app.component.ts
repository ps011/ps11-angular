import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    window.addEventListener('scroll', this.bannerScrolled, true);
  }

  bannerScrolled() {
    if (window.scrollY > 400) {
      document.querySelector('.header-nav').classList.add('menu-bg');
    } else {
      document.querySelector('.header-nav').classList.remove('menu-bg');
    }
  }


}
