import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http: HttpClient) { }

  getAllBlogs() {
    return this.http.get(`${environment.BASE_URL}/blogs/`);
  }

  getBlog(id) {
    return this.http.get(`${environment.BASE_URL}/blogs/${id}`);
  }

  createBlog(blog) {
    return this.http.post(`${environment.BASE_URL}/blogs/create`, blog);
  }
}
