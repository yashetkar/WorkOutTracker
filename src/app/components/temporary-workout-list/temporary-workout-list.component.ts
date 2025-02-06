import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-temporary-workout-list',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule
  templateUrl: './temporary-workout-list.component.html',
  styleUrls: ['./temporary-workout-list.component.css']
})
export class TemporaryWorkoutListComponent {
  @Input() temporaryWorkouts: any[] = []; // Replace `any` with your actual type
}
