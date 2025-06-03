import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JustTestingNot } from './just-testing-not/just-testing-not';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JustTestingNot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
