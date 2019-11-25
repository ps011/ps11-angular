import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import blogData from '../../assets/json/blog-posts.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: any;
  blogSrc: string;
  constructor( private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      blogData.forEach(blog => {
        if (params.get('name') === blog.link) {
          this.blog = blog;
        }
      });
    });

  }

}
