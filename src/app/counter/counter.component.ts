import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  myCount = 0;

  increment() {
    this.myCount = this.myCount + 1;
  }

  decrement() {
    if (this.myCount === 0) {
      this.myCount = 0;
    } else {
      this.myCount = this.myCount - 1;
    }

  }

  reset() {
    this.myCount = 0;
  }
}
