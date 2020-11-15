import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import About from "../interfaces/about.interface";
import { AboutService } from "../services/about.service";
import { BlogService } from "../services/blog.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  closeResult: string;
  aboutData: About;
  constructor(
    private modalService: NgbModal,
    private aboutService: AboutService,
    private blogService: BlogService
  ) {}

  ngOnInit() {}

  getAboutData() {
    this.aboutService
      .getAboutByName("Prasheel")
      .subscribe((data: About) => (this.aboutData = data));
  }

  addBlog() {
    this.blogService.createBlog({}).subscribe(console.log);
  }

  async open(content, action) {
    switch (action) {
      case "EDIT_ABOUT": {
        await this.getAboutData();
        break;
      }
      case "ADD_BLOG": {
        this.addBlog();
        break;
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
