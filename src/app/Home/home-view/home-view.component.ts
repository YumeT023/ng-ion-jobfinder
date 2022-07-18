import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ScrapService } from 'src/app/services/scrap.service';
import JobI from 'src/app/Model/Job.model';
import { filterMode } from 'src/app/Model/types';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent implements OnInit {
  jobs: JobI[];
  mode: filterMode = 'bookmark';
  isLoading = false;


  constructor(private dataService: ScrapService) { }

  getJobs(page: number): void {
    this.jobs = null;
    this.dataService
      .getJobs(page)
      .subscribe(jobs => this.jobs = jobs);
  }

  ngOnInit(): void {
    this.getJobs(1);
  }

}
