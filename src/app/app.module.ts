import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InformationComponent } from './components/information/information.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ValidUserGuard } from './components/introduction/valid-user.guard';
import { FormDataService } from './shared/form-data.service';
import { FormSubmitService } from './shared/form-submit.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IntroductionComponent,
    InformationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormDataService, ValidUserGuard, FormSubmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
