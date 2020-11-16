import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import About from '../interfaces/about.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(public http: HttpClient) { }

  getAllAbouts() {
    return this.http.get('https://ps11-backend.herokuapp.com/about/');
  }

  getAboutByName(name) {
    return this.http.get(`https://ps11-backend.herokuapp.com/about/${name}`);
  }

  createAbout(name, about, imageUrl, resumeUrl) {
    return this.http.post(`https://ps11-backend.herokuapp.com/about/create`,
      {name, about, imageUrl, resumeUrl});
  }

  updateAbout(about: About) {
    return this.http.post(`https://ps11-backend.herokuapp.com/about/update/${about.name}`,about);
  }
}
