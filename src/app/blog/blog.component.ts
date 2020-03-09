import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import blogData from '../../assets/json/blog-posts.json';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: any;
  blogSrc: string;
  constructor( private route: ActivatedRoute, public blogService: BlogService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.blogService.getBlog(params.get('name')).subscribe(blog => {
        this.blog = blog;
      });
    });

  }

}
