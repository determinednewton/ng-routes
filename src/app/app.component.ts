import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  slides = [
    {caption: 'The Piper at the Gates of Dawn'},
    {caption: 'A Saucerful of Secrets'},
    {caption: 'Music from the Film More'},
    {caption: 'Ummagumma'},
    {caption: 'Atom Heart Mother'},
    {caption: 'Meddle'}
  ];
}
