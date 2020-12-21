import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { JobPostsComponent } from './job-posts/job-posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full'},
  { path: 'activities', component: ActivitiesComponent},
  { path: 'JobPosts', component: JobPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
