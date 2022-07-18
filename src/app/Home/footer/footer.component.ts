import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pageSet } from 'src/app/Model/types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor() { }

  @Output() set = new EventEmitter<pageSet>();
  @Input() canSet: [number, number];
  @Input() page: number;

  pageSet(opt: pageSet): void {
    this.set.emit(opt);
  }

  ngOnInit() {}

}
