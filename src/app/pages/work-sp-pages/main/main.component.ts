import { Component, OnInit, Input } from '@angular/core';
import { ISpStructureDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { TestFormDataService } from 'src/app/services/test-form-data.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() spStructureInput: ISpStructureDto

  constructor(
    private spService: SpService,
    private noticeService: TestFormDataService
  ) { }

  ngOnInit(): void {

  }

  remove(id:number, type: string){
    let flow: Observable<Object>
    console.log(id)
    if(type === 'input'){
      flow = this.spService.deleteInputParam(''+id);
    } else {
      flow = this.spService.deleteOutputParam(''+id);
    }

    const sub = flow.subscribe(
      () => {
        this.noticeService.sendNotice();
        sub.unsubscribe();
      },
      err=>{
        alert(err.error.message);
      }
    )

  }

}
