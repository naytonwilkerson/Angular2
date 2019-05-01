import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'App works!';

  pessoas: string [] = ['joão','maria','angular 2'];

  nome: string = "Altera em tempo real";

}
