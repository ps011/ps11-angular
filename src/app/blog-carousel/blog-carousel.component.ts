import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';
import {Blog} from '../interfaces/blog.interface';
import { GoogleAnalyticsService } from '../services/google-analytics.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent implements OnInit {

  blogPosts: Blog[];

  constructor(public blogService: BlogService, private googleAnalyticsService: GoogleAnalyticsService, private router: Router) { }

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe((blogs: Blog[]) => {
      this.blogPosts = blogs.filter(blog => !blog.hidden);
    });
  }

  redirectToBlog(event, blog) {
    this.googleAnalyticsService.eventEmitter('blog', 'open', blog.title, event.type);
    this.router.navigate(['/blog', blog._id]);
  }

}
