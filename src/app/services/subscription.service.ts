import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  addEmailToSubscription(email) {
    return this.http.post('https://ps11-backend.herokuapp.com/subscribe/add', {email});
  }
}
