import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getuserfromplaceholder(){

    let data=this.http.get<any>("https://jsonplaceholder.typicode.com/users");
    return data;
  }
}
