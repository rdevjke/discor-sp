import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogData, DialogRef } from 'simcusdi';
import { ISpCursorColumnDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { TestFormDataService } from 'src/app/services/test-form-data.service';

@Component({
  selector: 'app-create-cursor-column',
  templateUrl: './create-cursor-column.component.html',
  styleUrls: ['./create-cursor-column.component.scss']
})
export class CreateCursorColumnComponent implements OnInit {

  @Input() fkCursor: number

  constructor(
    private fb:FormBuilder,
    private spService: SpService,
    private noticeService: TestFormDataService,
    private dialogRef: DialogRef,
    private dialogData: DialogData
  ) {
    this.formBuild();
  }

  form: FormGroup

  ngOnInit(): void {

  }

  private formBuild(){
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      techName: this.fb.control('', [Validators.required]),
      pos: this.fb.control('', [Validators.required]),
      type: this.fb.control('', [Validators.required]),
      dataType: this.fb.control('', [Validators.required])
    })
  }

  submit(value:ISpCursorColumnDto){
    value.virtCol = false;
    value.fkSpCursor = this.dialogData.data.id;
    this.spService.postCursorColumn(value).subscribe(
      ()=>{
        this.dialogRef.closeDialog();
        this.noticeService.sendNotice();
      },
      err =>{
        alert(err.error.message);
      }
    )
  }

}
