import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar">
      <h1>{{ title() }}</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Workouts</a></li>
        <li><a href="#">Progress</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </nav>
  `,
  styles: [`

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 1rem 2rem;
    }

    .navbar h1 {
      margin: 0;
      font-size: 1.5rem;
    }

    .navbar ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }

    .navbar ul li {
      display: inline;
    }

    .navbar ul li a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }

    .navbar ul li a:hover {
      color: lightblue;
    }
  `],
})
export class HeaderComponent {
  title = signal('Workout Tracker');
}

