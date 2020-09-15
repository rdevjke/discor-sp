import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'simcusdi';
import { ICursors } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { TestFormDataService } from 'src/app/services/test-form-data.service';
import { CreateCursorColumnComponent } from '../../create-cursor-column/create-cursor-column.component';
import { CreateFromBufferComponent } from '../../create-from-buffer/create-from-buffer.component';

@Component({
  selector: 'app-cursor-page',
  templateUrl: './cursor-page.component.html',
  styleUrls: ['./cursor-page.component.scss']
})
export class CursorPageComponent implements OnInit {

  @Input() cursor: ICursors

  constructor(
    private dialog: DialogService,
    private notice: TestFormDataService,
    private spService: SpService
  ) { }

  ngOnInit(): void {
  }

  removeColumn(columnId: string){
    const sub = this.spService.deleteCursorColumn(columnId).subscribe(
      ()=>{
        this.notice.sendNotice();
        sub.unsubscribe();
      },
      err=>{
        alert(err.error.message);
      }
    )
  }

  openCreateColumnDialog(){
    const config = {
      width: '700px',
      height: '600px'
    };
    const obj = {
      id: this.cursor.cursorInfo.id
    };
    this.dialog.open(CreateCursorColumnComponent,config,obj).afterClosed.subscribe()
  }

  removeCursor(cursorId: number){
    const sub = this.spService.deleteCursor(''+cursorId).subscribe(
      ()=>{
        this.notice.sendNotice();
        sub.unsubscribe();
      },
      err=>{
        alert(err.error.message);
      }
    )
  }

  openImportDialog(){
    const obj={
      id: this.cursor.cursorInfo.id
    };
    const config = {
      width: '600px',
      height: '500px'
    };
    this.dialog.open(CreateFromBufferComponent, config, obj).afterClosed.subscribe(()=>{

    });
  }

}
