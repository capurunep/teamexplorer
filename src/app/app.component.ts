import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team 4';
  project='Task to do';
  showbuttons=false;

items: FirebaseListObservable<any[]>

constructor(private af: AngularFire)
{
this.items = af.database.list('/items');

}
over()
{
  this.showbuttons=true;

}
offmouse()
{
  this.showbuttons=false;
}
}
