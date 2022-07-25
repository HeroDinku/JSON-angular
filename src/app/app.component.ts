
import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HttpClient } from '@angular/common/http';
import mydata from './mydata.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Jdata';
  internal_Priority:Number = 0;
  last_event_time:Date = new Date();
  sitn_id:Number = 0;
  total_Alerts:Number = 0;
  first_event_Time:Date = new Date();
  last_state_Change:Date= new Date();
  story_Id:Number = 1;
  created_At:Date = new Date();
  description: String= '';
  superseded_By: string = '';

constructor(){}

hero:Hero[]=[];
heroman: any =[];

ngOnInit():void{

  this.heroman = mydata.dd;
  //console.log(this.heroman.length);
  //console.log(mydata.dd);
}


}
