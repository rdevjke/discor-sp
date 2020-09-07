import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISpStructureDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { TestFormDataService } from 'src/app/services/test-form-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-sp',
  templateUrl: './work-sp.component.html',
  styleUrls: ['./work-sp.component.scss']
})
export class WorkSpComponent implements OnInit, OnDestroy {

  sub: Subscription
  active = '1'
  spStructure: ISpStructureDto
  id: string

  constructor(
    private route: ActivatedRoute,
    private spService: SpService,
    private testNotificated: TestFormDataService,
    private cd: ChangeDetectorRef
  ) {
    this.sub = this.testNotificated.onSubscrube().subscribe(
      ()=>{
        this.fetchSp()
      }
    )
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.id = params['id'];
      }
    )
    this.fetchSp();
    //console.log(this.spStructure)
  }

  fetchSp(){
    this.spService.getSpById(this.id).subscribe(
      response=>{
        this.spStructure = response;
        console.log(response)
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
