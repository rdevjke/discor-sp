import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISpDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';

@Component({
  selector: 'app-work-sp',
  templateUrl: './work-sp.component.html',
  styleUrls: ['./work-sp.component.scss']
})
export class WorkSpComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private spService: SpService
  ) { }

  active = '1'
  item: ISpDto
  id: string

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params['id'])
      this.id = params['id']
      this.spService.getSpById(params['id']).subscribe(
        response=>{
          console.log(response)
        }
      )
    })
  }

}
