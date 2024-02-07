import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'will-you';
  displayCounterValue = "0"

  incrementCounter() {
    const localStorageCount = localStorage.getItem('counter') ?? "0"
    let counter = parseInt(localStorageCount);

    counter++;
    if (counter > 5) {
      alert('Resetting the game!');
      counter = 0
    }
    localStorage.setItem('counter', counter.toString());
    this.displayCounterValue = counter.toString();
  }

  ngOnInit() {
    this.displayCounterValue = localStorage.getItem('counter') ?? "0";
  }
}
