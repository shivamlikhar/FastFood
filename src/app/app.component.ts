import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project-app';

  loadedFeature = 'instamart';
  homeFeature = 'home'

  onNavigate(feature : string){
    this.loadedFeature = feature;
    
  }
}
