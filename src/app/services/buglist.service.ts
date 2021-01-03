import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BuglistService {

  url = "https://jsonplaceholder.typicode.com/posts";
  constructor( private http: HttpClient) { }

  getBugList(){
    return this.http.get(this.url);
  }
}
