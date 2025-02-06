import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-filter-section',
  standalone: true, // Mark as standalone
  imports: [FormsModule], // Import FormsModule
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent {
  searchUsername: string = '';
  filterWorkoutType: string = '';

  @Output() search = new EventEmitter<{ username: string, workoutType: string }>();

  onSearch() {
    this.search.emit({ username: this.searchUsername, workoutType: this.filterWorkoutType });
  }
}
