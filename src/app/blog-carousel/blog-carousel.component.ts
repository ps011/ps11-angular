import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';
import {Blog} from '../blog/blog.interface';
@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent implements OnInit {

  blogPosts: Blog[];

  constructor(public blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe((blogs: Blog[]) => {
      console.log(blogs);
      this.blogPosts = blogs;
    });
  }

}
