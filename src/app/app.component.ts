import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [HeaderComponent, UserDetailsComponent], // Import standalone components
  template: `
    <app-header></app-header>
    <app-user-details></app-user-details>
  `,
  styles: []
})
export class AppComponent {}
