import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  currentUrl: string;
  fbSharingUrl: string;
  twitterSharingUrl: string;
  linkedinSharingUrl: string;
  blog: any;
  constructor( private route: ActivatedRoute, public blogService: BlogService) {
  }

  ngOnInit() {
    this.currentUrl = window.location.href;
    this.fbSharingUrl= `https://www.facebook.com/sharer.php?u=${this.currentUrl}`;;
    this.twitterSharingUrl = `https://twitter.com/intent/tweet?&url=${this.currentUrl}`;
    this.linkedinSharingUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${this.currentUrl}`;
    this.route.paramMap.subscribe(params => {
      this.blogService.getBlog(params.get('name')).subscribe(blog => {
        this.blog = blog;
      });
    });

  }

}
