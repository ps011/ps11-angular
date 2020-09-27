import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: any;
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
