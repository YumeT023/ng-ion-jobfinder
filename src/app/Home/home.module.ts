import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job/job.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { JobViewComponent } from './job-view/job-view.component';
import { BookmarkService } from '../services/bookmark.service';

const HomeRoutes: Routes = [
  {
    path: 'home-view',
    component: HomeViewComponent,
    children: [
      {
        path: ':section',
        component: JobViewComponent
      }
    ]
  }
]

@NgModule({
  declarations: [HomeViewComponent, JobViewComponent, JobComponent, SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild(HomeRoutes),
  ],
  providers: [BookmarkService]
})
export class HomeModule { }
