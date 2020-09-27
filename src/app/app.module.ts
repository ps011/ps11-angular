import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { InterestsComponent } from './interests/interests.component';
import { BlogComponent } from './blog/blog.component';
import { MarkdownModule } from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import {AuthGuardService} from './services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CodingChallengesComponent } from './coding-challenges/coding-challenges.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    BlogCarouselComponent,
    InterestsComponent,
    BlogComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CodingChallengesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter
      }
    }),
    MarkdownModule.forRoot({ loader: HttpClient }),

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
