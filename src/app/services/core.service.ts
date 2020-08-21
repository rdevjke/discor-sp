import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IComponentSourseInf } from '../models/sp.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  private url = environment.coreUrl

  getCompSourseInf(): Observable<IComponentSourseInf[]>{
    const id = 6;
    return this.http.get<IComponentSourseInf[]>(this.url+`api/compAsSourceInf/getByIdAsSourceInf?id=${id}`);
  }
}
