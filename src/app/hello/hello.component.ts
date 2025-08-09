import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <div class="hello">
      <p>Hello, this is a blank template for Athena Angular apps.</p>
    </div>
  `,
  styles: [`
    .hello {
      padding: 20px;
      margin: 20px 0;
      background-color: #f0f0f0;
      border-radius: 8px;
    }
  `]
})
export class HelloComponent {}