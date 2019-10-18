import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) {
    this.getMypro()
  }

  getMypro() {
    return this.http.get(
      'https://mypro-a9811.firebaseio.com/.json'
    );
  }
}
