import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ScrapService } from 'src/app/services/scrap.service';
import JobI from 'src/app/Model/Job.model';
import { filterMode, pageSet } from 'src/app/Model/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent implements OnInit, OnDestroy {
  jobs: JobI[];
  page = 1;
  lastPage: number;
  mode: filterMode = 'bookmark';
  isLoading = false;

  jobSubscription = new Subscription();


  constructor(public dataService: ScrapService) { }

  getJobs(page: number): void {
    this.jobs = null;
    this.jobSubscription = this.dataService
      .getJobs(page)
      .subscribe(jobs => this.jobs = jobs);
  }

  setPage(opt: pageSet): void {
    opt === 'next' ? (
      this.page ++
    ): this.page --;
    this.getJobs(this.page);
  }

  ngOnInit(): void {
    this.getJobs(this.page);
    this.dataService.getLastPage().subscribe(last => this.lastPage = last);
  }

  ngOnDestroy(): void {
    this.jobSubscription.unsubscribe();
  }

}
