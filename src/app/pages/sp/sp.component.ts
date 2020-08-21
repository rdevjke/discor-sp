import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { SpService } from 'src/app/services/sp.service';
import { ISpDto } from 'src/app/models/sp.model';

@Component({
  selector: 'app-sp',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.scss']
})
export class SpComponent implements OnInit {

  constructor(private sp: SpService,
      private detectRef: ChangeDetectorRef
    ) { }

  spArray: ISpDto[] = []

  ngOnInit(): void {
    this.fetchSp()
  }

  removeSp(id: string){
    this.sp.deleteSp(id).subscribe(
      response=>{
        console.log(response)
        this.fetchSp()
      },
      err=>{
        alert(err.error.message)
      }
    )
  }

  fetchSp(){
    this.sp.getAllSp().subscribe(
      response=>{
        this.spArray = response
        console.log(response)
      }
    )
  }
}
