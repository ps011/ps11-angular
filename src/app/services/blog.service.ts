import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http: HttpClient) { }

  getAllBlogs() {
    return this.http.get('https://ps11-backend.herokuapp.com/blogs/');
  }

  getBlog(id) {
    return this.http.get(`https://ps11-backend.herokuapp.com/blogs/${id}`);
  }

  createBlog(blog) {
    return this.http.post('https://ps11-backend.herokuapp.com/blogs/create', blog);
  }
}
