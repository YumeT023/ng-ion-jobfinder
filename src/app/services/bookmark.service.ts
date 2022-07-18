import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import Bookmark from '../Model/Bookmark.model';
import JobI from '../Model/Job.model';
import bookList from '../Model/Bookmark';

@Injectable()
export class BookmarkService implements OnInit {
  public bookmarks: Bookmark[] = bookList.slice();
  private bookmarkSize = 5;

  bookmarksSubject = new Subject<Bookmark[]>();

  constructor() { }

  /**
   * Add new bookmark to user bookmark list
   * @param job which is going to be saved
   * @returns true if add is successful and false overwise
   */
  add(job: JobI): boolean {
    const len = this.bookmarks.length;

    const newBookmark = this.createBookmark(job);
    this.bookmarks.push(newBookmark);

    if (this.bookmarks.length !== len) {
      this.emitBookmarks();
      return true;
    }
    return false;
  }

  /**
   * Create new bookmark from job
   * @param job
   * @returns the created bookmark
   */
  private createBookmark(job: JobI): Bookmark {
    return {...job, id: this.bookmarkSize + 1};
  }

  /**
   * Remove the specified bookmark
   * @param id of the bookmark that is going to be deleted
   */
  remove(id: number): void {
    if (id > this.bookmarkSize) throw Error("bookmark not found");

    const tmp = this.bookmarks.filter(bookmark => bookmark.id !== id);

    this.bookmarks = tmp;
    this.emitBookmarks();
  }

  emitBookmarks(): void {
    this.bookmarksSubject.next(this.bookmarks.slice());
  }

  ngOnInit(): void {
      this.emitBookmarks();
  }

}
