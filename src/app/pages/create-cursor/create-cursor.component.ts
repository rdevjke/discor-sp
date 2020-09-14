import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISpCursorDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { ActivatedRoute } from '@angular/router';
import { TestFormDataService } from 'src/app/services/test-form-data.service';
import { DialogRef, DialogData } from 'simcusdi';

@Component({
  selector: 'app-create-cursor',
  templateUrl: './create-cursor.component.html',
  styleUrls: ['./create-cursor.component.scss']
})
export class CreateCursorComponent implements OnInit {

  form: FormGroup
  fkSp: string

  constructor(
    private spService: SpService,
    private noticeService: TestFormDataService,
    private dialogRef: DialogRef,
    private dialogData: DialogData
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      techName: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    })
  }

  submit(value: ISpCursorDto){
    value.fkSp = this.dialogData.data.id;
    this.spService.postCursor(value).subscribe(
      ()=>{
        this.noticeService.sendNotice();
        this.dialogRef.closeDialog();
      },
      err =>{
        alert(err.error.message);
      }
    )
  }

}
