import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alurapic';
  description = 'Leão';
  url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Suçtan_the_Barbary_Lion.jpg';
}

