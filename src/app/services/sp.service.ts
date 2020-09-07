import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ISpDto, ISpInputParamDto, ISpStructureDto, ISpOutputParamDto, ISpCursorDto, ISpCursorColumnDto } from '../models/sp.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpService {

  constructor(private http: HttpClient) { }

  private url = environment.spUrl

  getAllSp(): Observable<ISpDto[]>{
    return this.http.get<ISpDto[]>(this.url+`api/sp/get/all`);
  }

  getSpById(id:string): Observable<ISpStructureDto>{
    return this.http.get<ISpStructureDto>(this.url+`api/sp/get`, {
      params: new HttpParams().set('id', id)
    });
  }

  postSp(sp: ISpDto){
    return this.http.post(this.url+`api/sp/add`, sp);
  }

  deleteSp(id: string){
    return this.http.post(this.url + `api/sp/delete?id=${id}`, '');
  }

  postInputParams(data: ISpInputParamDto){
    return this.http.post(this.url+ `api/sp/input/add`, data);
  }

  deleteInputParam(id:string){
    return this.http.post(this.url+ `api/sp/input/delete`,'', {
      params: new HttpParams().set('id', id)
    })
  }

  postOutputParams(data: ISpOutputParamDto){
    return this.http.post(this.url+ `api/sp/output/add`, data);
  }

  deleteOutputParam(id: string){
    return this.http.post(this.url+`api/sp/output/delete`,'', {
      params: new HttpParams().set('id', id)
    })
  }

  postCursor(data: ISpCursorDto){
    return this.http.post(this.url+`api/sp/cursor/add`, data);
  }

  postCursorColumn(data: ISpCursorColumnDto){
    return this.http.post(this.url+`api/sp/cursor/column/add`, data, {
      params: new HttpParams().set('funcVirtSpCursorColumn', ' ')
    });
  }
}
