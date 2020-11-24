import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  addEmailToSubscription(email) {
    return this.http.post(`${environment.BASE_URL}/subscribe/add`, {email});
  }
}
