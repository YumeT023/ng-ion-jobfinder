import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef, ViewChild, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { IonToggle } from '@ionic/angular';
import { filterMode } from 'src/app/Model/types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent { }