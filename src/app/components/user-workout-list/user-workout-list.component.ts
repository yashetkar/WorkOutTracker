import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-user-workout-list',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import CommonModule
  templateUrl: './user-workout-list.component.html',
  styleUrls: ['./user-workout-list.component.css']
})
export class UserWorkoutListComponent {
  @Input() filteredWorkouts: any[] = []; // Replace `any` with your actual type

  getTotalDuration(workouts: any[]): number { // Replace `any` with your actual type
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }
}
