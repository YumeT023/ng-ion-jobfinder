import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import JobI from '../Model/Job.model';

@Injectable({
  providedIn: 'root'
})
export class ScrapService {
  private API_URL = "https://api-portaljob.herokuapp.com";

  constructor(private http: HttpClient) { }

  /**
   * get the last page at portal job
   * @returns 
   */
  getLastPage(): Observable<number> {
    return this.http.get<number>(`${this.API_URL}/_`).pipe(
      map(res => res["last_page"])
    );
  }

  /**
   * get * items on the given page
   * @param page where items will be fetched
   */
  getJobs(page: number = 1): Observable<JobI[]> {
    return this.http.get<JobI[]>(`${this.API_URL}/${page}`).pipe(
      map(res => res["information"])
    );
  }
}
