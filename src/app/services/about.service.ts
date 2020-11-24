import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import About from '../interfaces/about.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(public http: HttpClient) { }

  getAllAbouts() {
    return this.http.get(`${environment.BASE_URL}/about/`);
  }

  getAboutByName(name) {
    return this.http.get(`${environment.BASE_URL}/about/${name}`);
  }

  createAbout(name, about, imageUrl, resumeUrl) {
    return this.http.post(`${environment.BASE_URL}/about/create`,
      {name, about, imageUrl, resumeUrl});
  }

  updateAbout(about: About) {
    return this.http.post(`${environment.BASE_URL}/about/update/${about.name}`,about);
  }
}
