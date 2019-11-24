import { Component, OnInit } from '@angular/core';
import blogPosts from '../../assets/json/blog-posts.json';
@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent implements OnInit {

  carouselOptions = {
    margin: 25,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: false,
        loop: false
      },
      1500: {
        items: 4,
        nav: false,
        loop: false
      }
    }
  };

  images = [
    {
      text: 'Everfresh Flowers',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg'
    },
    {
      text: 'Blue Clear',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg'
    },
    {
      text: 'Evening Clouds',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg'
    },
    {
      text: 'Fontains in Shadows',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg'
    },
    {
      text: 'Kites in the Sky',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg'
    },
    {
      text: 'Sun Streak',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg'
    }
  ];
  blogPosts = blogPosts;

  constructor() { }

  ngOnInit() {
    console.log(blogPosts);
  }

}
