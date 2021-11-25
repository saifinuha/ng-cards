import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : 'Nature',
      imageUrl : 'assets/tree.jpeg',
      username : 'nature',
      content : 'Saw this awesome tree during my hike today'
    },
    {
      title : 'Snowy Mountain',
      imageUrl : 'assets/mountain.jpeg',
      username : 'hikingperson',
      content : 'Beautiful view of some mountains I saw during my hike'
    },
    {
      title : 'Mountain Biking',
      imageUrl : 'assets/biking.jpeg',
      username : 'biking12222',
      content : 'Action shot of me riding my bike'
    },
  ]
}
