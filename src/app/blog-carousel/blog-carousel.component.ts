import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';
@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent implements OnInit {

  blogPosts;

  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe(blogs => {
      this.blogPosts = blogs;
    });
  }

}
