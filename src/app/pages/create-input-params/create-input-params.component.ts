import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpService } from 'src/app/services/sp.service';
import { ISpInputParamDto } from 'src/app/models/sp.model';
import { ActivatedRoute } from '@angular/router';
import { TestFormDataService } from 'src/app/services/test-form-data.service';
import { DialogData, DialogRef } from 'simcusdi';

@Component({
  selector: 'app-create-input-params',
  templateUrl: './create-input-params.component.html',
  styleUrls: ['./create-input-params.component.scss']
})
export class CreateInputParamsComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private sp: SpService,
    private testNotificated: TestFormDataService,
    private dialogData: DialogData,
    private dialogRef: DialogRef
    ) {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      techNameInputSpParam: ['', [Validators.required]],
      nameInputSpParam: ['', [Validators.required]],
      dataType:['',[Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  submit(value: ISpInputParamDto){
    value.fkSp = this.dialogData.data.id;
    this.sp.postInputParams(value).subscribe(
      response => {
        console.log(response)
        this.dialogRef.closeDialog();
        this.testNotificated.sendNotice();
        // this.form.reset();
      },
      err => {
        alert(err.error.message);
      }
    )
  }

}
