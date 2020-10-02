import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { SpService } from 'src/app/services/sp.service';
import { ISpDto } from 'src/app/models/sp.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private sp: SpService,
  ) { }

spArray: ISpDto[] = []

ngOnInit(): void {
  this.fetchSp();
}

removeSp(id: string){
  this.sp.deleteSp(id).subscribe(
    ()=>{
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
      console.log(this.spArray);
    }
  )
}

}
