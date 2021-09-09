import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUserDetailsPageComponent } from './get-user-details-page/get-user-details-page.component';
import { DataServiceService } from 'src/services/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewDetailsOfAllUsersComponent } from './view-details-of-all-users/view-details-of-all-users.component';
@NgModule({
  declarations: [
    AppComponent,
    GetUserDetailsPageComponent,
    ViewDetailsOfAllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
