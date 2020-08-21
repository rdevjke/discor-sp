import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ISpDto } from '../models/sp.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpService {

  constructor(private http: HttpClient) { }

  private url = environment.spUrl

  getAllSp(): Observable<ISpDto[]>{
    return this.http.get<ISpDto[]>(this.url+`api/sp/get/all`)
  }

  getSpById(id:string): Observable<ISpDto>{
    return this.http.get<ISpDto>(this.url+`api/sp/get`, {
      params: new HttpParams().set('id', id)
    })
  }

  postSp(sp: ISpDto){
    return this.http.post(this.url+`api/sp/add`, sp)
  }

  deleteSp(id: string){
    return this.http.post(this.url + `api/sp/delete?id=${id}`, '')
  }
}
