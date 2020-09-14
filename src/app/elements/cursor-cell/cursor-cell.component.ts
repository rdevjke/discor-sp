import { Component, Input, OnInit } from '@angular/core';
import { ISpCursorColumnDto } from 'src/app/models/sp.model';

@Component({
  selector: 'app-cursor-cell',
  templateUrl: './cursor-cell.component.html',
  styleUrls: ['./cursor-cell.component.scss']
})
export class CursorCellComponent implements OnInit {

  @Input() inputData: ISpCursorColumnDto

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputData)
  }

}
