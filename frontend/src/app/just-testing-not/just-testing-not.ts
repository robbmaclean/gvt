import { Component } from '@angular/core';

@Component({
  selector: 'app-just-testing-not',
  imports: [],
  templateUrl: './just-testing-not.html',
  styleUrl: './just-testing-not.css'
})
export class JustTestingNot {
  doSomething() {
    console.log('Sorry I am not tested')
  }
}
