import { faLinkedin, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mom-book';
  faLinkedin = faLinkedin;
  faAmazon = faAmazon;

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
