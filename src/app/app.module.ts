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
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    BlogCarouselComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    NgCircleProgressModule.forRoot({
      responsive: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
