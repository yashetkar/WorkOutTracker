import { Workout } from './workout.model';

export interface UserWorkout {
  username: string;
  workouts: Workout[];
}
