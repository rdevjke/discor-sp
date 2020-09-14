import { Injectable } from '@angular/core';
import { ISpStructureDto } from '../models/sp.model';
import { SpService } from './sp.service';
import { Observable } from 'rxjs';
import { switchMap, pluck } from 'rxjs/operators'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  data: ISpStructureDto
  currentSpId: string

  constructor(
    private spService: SpService,
  ) {  }

  loadStore(id: string){
    this.spService.getSpById(id).subscribe((r)=>{
      this.data = r;
    })
  }

  getInputParams(){
    return this.data.spPart.inputParams;
  }

}
