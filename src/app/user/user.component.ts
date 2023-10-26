import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() c: Client;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  ville: string = '';
  constructor() {}

  ngOnInit() {}

  sendParent() {
    this.change.emit(this.ville);
  }
}
