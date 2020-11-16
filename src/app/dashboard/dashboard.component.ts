import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import About from "../interfaces/about.interface";
import { AboutService } from "../services/about.service";
import { BlogService } from "../services/blog.service";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  closeResult: string;
  aboutData: About;
  aboutForm: FormGroup;
  addBlogForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private aboutService: AboutService,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addBlogForm = new FormGroup({
      title: new FormControl(''),
      shortDescription: new FormControl(''),
      banner: new FormControl(''),
      thumbnail: new FormControl(''),
      author: new FormControl(''),
      profileLink: new FormControl(''),
      tags: new FormControl(''),
      content: new FormControl(''),
      link: new FormControl('')
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getAboutData() {
    this.aboutService
      .getAboutByName("Prasheel")
      .subscribe((data: About) => {
       this.aboutForm = new FormGroup({
          name: new FormControl(data.name),
          about: new FormControl(data.about),
          imageUrl: new FormControl(data.imageUrl),
          resumeUrl: new FormControl(data.resumeUrl)
        });
        this.aboutData = data
      });
  }

  addBlog() {
    this.blogService.createBlog(this.addBlogForm.value)
    .subscribe(data => this.modalService.dismissAll());
  }

  updateAbout() {
    this.aboutService.updateAbout(this.aboutForm.value)
    .subscribe(data => this.modalService.dismissAll());
  }

  async open(content, action) {
    switch (action) {
      case "EDIT_ABOUT": {
        await this.getAboutData();
        break;
      }
      default: {
        
      }
    }
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        this.closeResult = "Closed with: $result";
      },
      (reason) => {
        this.closeResult = "Dismissed $this.getDismissReason(reason)";
      }
    );
  }
}
