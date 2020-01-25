import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'inventory';
  storedPosts=[];
  total:number;
  onPostAdded(p: any){
    this.total=p.total;
    this.storedPosts.push(p);
    
}
}
