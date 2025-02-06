import { Component } from '@angular/core';
import { Workout } from '../models/workout.model';
import { UserWorkout } from '../models/user-workout.model';
import {WorkoutFormComponent} from '../workout-form/workout-form.component';
import {TemporaryWorkoutListComponent} from '../temporary-workout-list/temporary-workout-list.component';
import {UserWorkoutListComponent} from '../user-workout-list/user-workout-list.component';
import {FilterSectionComponent} from '../filter-section/filter-section.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  imports: [
    WorkoutFormComponent,
    TemporaryWorkoutListComponent,
    UserWorkoutListComponent,
    FilterSectionComponent
  ],
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  temporaryWorkouts: Workout[] = [];
  workoutList: UserWorkout[] = [
    // Existing workout data...
  ];

  searchUsername: string = '';
  filterWorkoutType: string = '';

  onAddWorkout(workout: Workout) {
    this.temporaryWorkouts.push(workout);
  }

  onSubmitWorkouts(username: string) { // Accept username as a parameter
    if (this.temporaryWorkouts.length === 0) {
      alert('⚠️ Please add at least one workout.');
      return;
    }

    let existingUser = this.workoutList.find(user => user.username.toLowerCase() === username.toLowerCase());

    if (existingUser) {
      existingUser.workouts.push(...this.temporaryWorkouts);
    } else {
      this.workoutList.push({
        username: username.trim(),
        workouts: [...this.temporaryWorkouts]
      });
    }

    alert(`✅ Workouts Submitted!\n\n👤 Name: ${username}\n💪 Total Workouts: ${this.temporaryWorkouts.length}`);
    this.temporaryWorkouts = [];
  }

  onSearch(filter: { username: string, workoutType: string }) {
    this.searchUsername = filter.username;
    this.filterWorkoutType = filter.workoutType;
  }

  filteredWorkouts(): UserWorkout[] {
    return this.workoutList.filter(user => {
      const matchesUsername = this.searchUsername ? user.username.toLowerCase().includes(this.searchUsername.toLowerCase()) : true;
      const matchesWorkoutType = this.filterWorkoutType ? user.workouts.some(workout => workout.type === this.filterWorkoutType) : true;
      return matchesUsername && matchesWorkoutType;
    });
  }
}

