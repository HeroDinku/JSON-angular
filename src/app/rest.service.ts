import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Hero";

  getHero()
  {
    return this.http.get<Hero[]>(this.url);
  }



}

