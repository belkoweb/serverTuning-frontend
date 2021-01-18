import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

let API_URL = "http://localhost:7900/api/admin/";
let API_URL2 = "http://localhost:7900/api/user/";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type":"application/json; charset=UTF-8"
    });
  }
  findAllLibraryCache(): Observable<any> {
    return this.http.get("http://localhost:7900/mediatek-api/audit_stock/",
   {headers: this.headers});
  }
  findAllDictionaryCache(): Observable<any> {
    return this.http.get("http://localhost:7900/mediatek-api/audit_stock/",
      {headers: this.headers});
  }
  findAllSystemEvent(): Observable<any> {
    return this.http.get("http://localhost:7900/mediatek-api/audit_stock/",
      {headers: this.headers});
  }

  findAllRedoLogBuffer(): Observable<any> {
    return this.http.get("http://localhost:7900/mediatek-api/audit_stock/",
      {headers: this.headers});
  }


  findAllLogFile(): Observable<any> {
    return this.http.get("http://localhost:7900/mediatek-api/audit_stock/",
      {headers: this.headers});
  }
  findAllFileStat(): Observable<any> {
    return this.http.get("http://localhost:7900/mediatek-api/audit_stock/",
      {headers: this.headers});
  }
  findAllLatch(): Observable<any> {
    return this.http.get("http://localhost:7900/mediatek-api/audit_stock/",
      {headers: this.headers});
  }


}
