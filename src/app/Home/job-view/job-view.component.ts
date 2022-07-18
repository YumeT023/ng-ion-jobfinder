import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import Bookmark from 'src/app/Model/Bookmark.model';
import JobI from 'src/app/Model/Job.model';
import { filterMode } from 'src/app/Model/types';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css'],
})
export class JobViewComponent implements OnInit, OnDestroy, OnChanges {
  listItems: (JobI | Bookmark)[];
  listSubscription = new Subscription();

  @Input() mode: filterMode;
  @Input() job: JobI[];

  constructor(private bookmarkService: BookmarkService) { }

  getBookmark(): void {
    this.listSubscription = this.bookmarkService
      .bookmarksSubject
      .subscribe(list => this.listItems = list)

    this.bookmarkService.emitBookmarks();
  }

  getItems(): void {
    if (this.mode === 'find') {
      this.listItems = this.job;
    } else this.getBookmark();
  }

  ngOnInit() {
    this.getItems();
  }

  ngOnDestroy(): void {
    this.listSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['mode']) return null;

    const { previousValue, currentValue } = changes['mode'];

    if (previousValue !== currentValue) {
      this.getItems();  
    }
  }

}
