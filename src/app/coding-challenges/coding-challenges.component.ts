import { AfterViewInit, Component, OnInit} from '@angular/core';
import GitHubCalendar from 'github-calendar';

@Component({
  selector: 'app-coding-challenges',
  templateUrl: './coding-challenges.component.html',
  styleUrls: ['./coding-challenges.component.scss']
})
export class CodingChallengesComponent implements AfterViewInit {

  codingChallenges = [{
    title: 'Javascript 30',
    shortDescription: 'It was a 30 Day Vanilla Javascript Challenge in which I made 30 different things using vanilla JS',
    thumbnail: 'https://res.cloudinary.com/designu/image/upload/v1587067694/thumbnails/javascript30.png',
    author: 'Prasheel Soni',
    profileLink: 'https://github.com/ps011',
    link: 'https://ps011.github.io/javascript30',
    tags: ['html', 'css', 'javascript']
  }, {
    title: '100 Days of Code',
    shortDescription: '100 Days of Code is a 100 day challenge where in I will code for minimum an hour per day for 100 days',
    thumbnail: 'https://res.cloudinary.com/designu/image/upload/v1587068180/thumbnails/100daysofcode.png',
    author: 'Prasheel Soni',
    profileLink: 'https://github.com/ps011',
    link: 'https://ps011.github.io/100daysofcode',
    tags: [
      'javascript',
      '100days',
      'code',
      '100daysofcode',
      'developer',
      'web',
      'nodejs',
      'react',
      'css'
    ],
  },
  {
    title: '5 🌟 on Hackerrank',
    shortDescription: 'I took the challenge to hone my problem solving skills and started solving problems on Hackerrank. Soon I got my 5-star badge and I have solved more than 50 problems.',
    thumbnail: 'https://res.cloudinary.com/designu/image/upload/v1587068180/thumbnails/100daysofcode.png',
    author: 'Prasheel Soni',
    profileLink: 'https://github.com/ps011',
    link: 'https://github.com/ps011/hackerrank-practice',
    tags: [
      'javascript',
      'competitive coding',
      'code',
      'problem solving',
      'developer',
      'web',
      'nodejs',
    ],
  }];

  constructor() {
  }

  ngAfterViewInit() {
    new GitHubCalendar(".calendar", "ps011");
  }


}
