import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8",
    });
  }
  libraryCacheHitRatio() {
    let array = this.http.get("http://localhost:7700/tuning/libraryCache/", {
      headers: this.headers,
    });
    return array;
  }
  findAllLibraryCache(): Observable<any> {
    return this.http.get("http://localhost:7700/tuning/libraryCache/", {
      headers: this.headers,
    });
  }
  findAllDictionaryCache(): Observable<any> {
    return this.http.get("http://localhost:7700/tuning/dictionaryCache/", {
      headers: this.headers,
    });
  }
  findAllSystemEvent(): Observable<any> {
    return this.http.get("http://localhost:7700/tuning/systemEvent/", {
      headers: this.headers,
    });
  }

  findAllRedoLogBuffer(): Observable<any> {
    return this.http.get("http://localhost:7700/tuning/redoLogBuffer/", {
      headers: this.headers,
    });
  }

  findAllLogFile(): Observable<any> {
    return this.http.get("http://localhost:7700/tuning/logFile/", {
      headers: this.headers,
    });
  }
  findAllFileStat(): Observable<any> {
    return this.http.get("http://localhost:7700/tuning/fileStat/", {
      headers: this.headers,
    });
  }
  findAllLatch(): Observable<any> {
    return this.http.get("http://localhost:7700/tuning/latch/", {
      headers: this.headers,
    });
  }
}
