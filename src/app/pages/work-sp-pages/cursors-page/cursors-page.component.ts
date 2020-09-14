import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'simcusdi';
import { ICursors } from 'src/app/models/sp.model';
import { CreateCursorComponent } from '../../create-cursor/create-cursor.component';

@Component({
  selector: 'app-cursors-page',
  templateUrl: './cursors-page.component.html',
  styleUrls: ['./cursors-page.component.scss']
})
export class CursorsPageComponent implements OnInit {

  @Input() cursors: ICursors
  @Input() spId: string

  constructor(
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
  }

  openCreateCursorDialog(){
    const config = {
      width: '700px',
      height: '600px'
    };
    const obj = {
      id: this.spId
    }
    this.dialog.open(CreateCursorComponent, config, obj).afterClosed.subscribe();
  }

}
