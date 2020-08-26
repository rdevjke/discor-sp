import { Component, OnInit, Input } from '@angular/core';
import { ICursors } from 'src/app/models/sp.model';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  @Input() cursor: ICursors

  constructor() { }

  ngOnInit(): void {
  }

}
