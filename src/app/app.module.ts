import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { InterestsComponent } from './interests/interests.component';
import { OwlModule } from 'ngx-owl-carousel';
import { BlogComponent } from './blog/blog.component';
import { MarkdownModule } from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    BlogCarouselComponent,
    InterestsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
