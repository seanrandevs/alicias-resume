import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  faChevronDown = faChevronDown;

  toggleDescription(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      if (element.style.display === 'block') {
        element.style.removeProperty('display');
      } else {
        element.style.display = 'block';
      }
    }
  }
}


// toggleActive(): void {
  //   this.isActive = !this.isActive; // Toggle the active state
  // }
