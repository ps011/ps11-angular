import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  closeResult: string;
  @ViewChild('subscription', {static: false}) subscription;
  email = new FormControl('');
  constructor(private modalService: NgbModal, private subscribeService: SubscriptionService) { }

  ngAfterViewInit() {
    if (!localStorage.getItem('subscribedEmail')) {
      this.open(this.subscription);
    }
  }

  open(content) {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = 'Closed with: $result';
        }, (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
        });
}

subscribeEmail() {
  console.log(this.email.value)
  this.subscribeService.addEmailToSubscription(this.email.value)
  .subscribe(data => {
    localStorage.setItem('subscribedEmail', data['email']);
    this.modalService.dismissAll()
  });
}


}
