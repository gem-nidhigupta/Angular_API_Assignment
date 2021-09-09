import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUserDetailsPageComponent } from '../app/get-user-details-page/get-user-details-page.component';
import { ViewDetailsOfAllUsersComponent } from '../app/view-details-of-all-users/view-details-of-all-users.component';
const routes: Routes = [
  { path: '', redirectTo: 'getUserDetails', pathMatch: 'full' },
  { path: 'getUserDetails', component: GetUserDetailsPageComponent },
  { path: 'viewDetailsAll', component: ViewDetailsOfAllUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
