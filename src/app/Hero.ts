//import db from './db.json';

export class Hero {
internal_Priority:Number;
last_event_Time:Number;
sitn_id:Number;
total_Alerts:Number;
first_event_Time:Number;
last_state_Change:Number;
story_Id:Number;
created_At:Number;
 description: String;
superseded_By: null;

constructor (internal_Priority:Number,last_event_Time:Number, last_state_changed:Number, sitn_id:Number, total_Alerts:Number, first_event_Time:Number, last_state_Change:Number, story_Id:Number,created_At:Number, description: String,
superseded_By:null,)
{   this.internal_Priority=internal_Priority;
    this.last_event_Time= last_event_Time;
    this.sitn_id= sitn_id;
    this.total_Alerts= total_Alerts;
    this.first_event_Time= first_event_Time;
    this.last_event_Time= last_event_Time;
    this.last_state_Change=last_state_Change;
    this.story_Id= story_Id;story_Id;
    this.created_At= created_At;
    this.description=description;
    this.superseded_By=superseded_By;
}

//jsondata = fs.readFileSync(`${__dirname}/db.json`, 'utf-8');
//dataObj = JSON.parse(jsondata);
//console.log(db);
}

