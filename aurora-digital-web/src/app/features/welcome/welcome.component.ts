import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/auth/login'])
  }

}
