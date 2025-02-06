import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-workout-form',
  standalone: true, // Mark as standalone
  imports: [FormsModule], // Import FormsModule
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  username: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  @Output() addWorkout = new EventEmitter<any>(); // Replace `any` with your actual type
  @Output() submitWorkouts = new EventEmitter<string>();

  addWorkoutToTemporaryList() {
    if (!this.workoutType || this.workoutMinutes === null || this.workoutMinutes <= 0) {
      alert('⚠️ Please fill all fields correctly. Workout minutes must be greater than 0.');
      return;
    }

    if (this.workoutMinutes > 180) {
      alert('⚠️ Workout minutes seem too high! Consider breaking it into multiple sessions.');
      return;
    }

    this.addWorkout.emit({ type: this.workoutType, minutes: this.workoutMinutes });
    this.workoutType = '';
    this.workoutMinutes = null;
  }

  onSubmitWorkouts() {
    if (!this.username) {
      alert('⚠️ Please enter a username.');
      return;
    }

    this.submitWorkouts.emit(this.username);
    this.username = '';
  }
}
