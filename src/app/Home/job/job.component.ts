import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Bookmark from 'src/app/Model/Bookmark.model';
import JobI from 'src/app/Model/Job.model';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit, OnDestroy {
  @Input() jobInfo: Bookmark | JobI = null;
  job: Bookmark | JobI = null;
  timeoutSubscription = new Subscription();

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.timeoutSubscription = new Observable(() => {
      setTimeout(() => {
        this.job = this.jobInfo
      }, 2000)
    }).subscribe();
  }

  async remove(id: number): Promise<void> {
    this.job = null;
    this.timeoutSubscription = new Observable(() => {
      setTimeout(() => 
        this.bookmarkService.remove(id)
      , 500);
    }).subscribe();
  }

  ngOnDestroy(): void {
    this.timeoutSubscription.unsubscribe();
  }

}
