import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogData, DialogRef } from 'simcusdi';
import { ISpCursorColumnDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { TestFormDataService } from 'src/app/services/test-form-data.service';

@Component({
  selector: 'app-create-from-buffer',
  templateUrl: './create-from-buffer.component.html',
  styleUrls: ['./create-from-buffer.component.scss']
})
export class CreateFromBufferComponent implements OnInit {

  form: FormGroup

  constructor(
    private spService: SpService,
    private notice: TestFormDataService,
    private dialogData: DialogData,
    private dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required])
    })
  }

  async submit(value: any){
    let errors = [];
    let str = value.text;
    const text = str.split('\n');
    for(let item in text){
      if(text[item].length > 1){
        let params = text[item].split('\t');
        let column: ISpCursorColumnDto = {
          fkSpCursor: this.dialogData.data.id,
          virtCol: false,
          pos: +params[2],
          techName: params[1],
          name: params[0],
          type: params[3].trim(),
          //dataType: string,
        };
        try{
          await this.pustToTheServer(column);
        } catch(e){
          errors.push(e.error.message);
        }
      }
    }
    if(errors.length == 0){
      console.log('done!');
      this.dialogRef.closeDialog();
      this.notice.sendNotice();
    }else {
      console.log(errors);
    }
  }

  async pustToTheServer(data:ISpCursorColumnDto){
    return await this.spService.postCursorColumn(data).toPromise();
  }

}
