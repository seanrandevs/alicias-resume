import { Component} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faLinkedinIn = faLinkedinIn;
}
