import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coding-challenges',
  templateUrl: './coding-challenges.component.html',
  styleUrls: ['./coding-challenges.component.scss']
})
export class CodingChallengesComponent implements OnInit {

  codingChallenges = [{
    title: 'Javascript 30',
    shortDescription: 'It was a 30 Day Vanilla Javascript Challenge in which I made 30 different things using vanilla JS',
    thumbnail: 'https://res.cloudinary.com/designu/image/upload/v1587067694/thumbnails/javascript30.png',
    author: 'Prasheel Soni',
    profileLink: 'https://github.com/ps011',
    link: 'https://ps011.github.io/javascript30',
  }, {
    title: '100 Days of Code',
    shortDescription: '100 Days of Code is a 100 day challenge where in I will code for minimum an hour per day for 100 days',
    thumbnail: 'https://res.cloudinary.com/designu/image/upload/v1587068180/thumbnails/100daysofcode.png',
    author: 'Prasheel Soni',
    profileLink: 'https://github.com/ps011',
    link: 'https://github.com/100daysofcode',
  }];

  constructor() {
  }

  ngOnInit() {
  }


}
