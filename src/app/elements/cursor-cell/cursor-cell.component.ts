import { Component, Input, OnInit } from '@angular/core';
import { ISpCursorColumnDto } from 'src/app/models/sp.model';

@Component({
  selector: 'app-cursor-cell',
  templateUrl: './cursor-cell.component.html',
  styleUrls: ['./cursor-cell.component.scss']
})
export class CursorCellComponent implements OnInit {

  @Input() inputData: ISpCursorColumnDto

  isValue: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.inputData.type == 'value'){
      this.isValue =true;
    }
  }

}
