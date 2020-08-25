import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISpOutputParamDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { ActivatedRoute } from '@angular/router';
import { TestFormDataService } from 'src/app/services/test-form-data.service';

@Component({
  selector: 'app-create-output-params',
  templateUrl: './create-output-params.component.html',
  styleUrls: ['./create-output-params.component.scss']
})
export class CreateOutputParamsComponent implements OnInit {

  form: FormGroup

  constructor(
    private spService: SpService,
    private route: ActivatedRoute,
    private notificated: TestFormDataService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nameOutputSpParam: new FormControl('', [Validators.required]),
      techNameOutputSpParam: new FormControl('', [Validators.required]),
      dataType: new FormControl('', [Validators.required])
    })
  }

  submit(value: ISpOutputParamDto){
    this.route.params.subscribe(
      p=>{
        value.fkSp = p['id'];
      }
    )

    this.spService.postOutputParams(value).subscribe(
      response =>{
        console.log(response);
        this.notificated.sendNotice();
        this.form.reset();
      },
      err =>{
        alert(err.error.message);
      }
    )
  }

}
