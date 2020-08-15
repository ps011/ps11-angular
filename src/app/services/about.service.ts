import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  updateAbout(name, about,  imageUrl, resumeUrl) {
    return this.http.post(`https://ps11-backend.herokuapp.com/about/update/${name}`,
      {about, imageUrl, resumeUrl});
  }
}
