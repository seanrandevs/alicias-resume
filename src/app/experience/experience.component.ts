import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  faChevronDown = faChevronDown;
  

  
}
