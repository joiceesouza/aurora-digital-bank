import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  currentIndex = 0;

  slides = [
    {
      image: 'assets/images/image-onboarding-1.svg',
      title: 'Pagamentos mais rápidos',
      description: 'Conecte diferentes métodos e finalize suas transações em segundos.'
    },
    {
      image: 'assets/images/image-onboarding-2.svg',
      title: 'Segurança em primeiro lugar',
      description: 'Biometria, reconhecimento facial e tecnologia avançada para proteger você.'
    },
    {
      image: 'assets/images/image-onboarding-3.svg',
      title: 'Pague com facilidade',
      description: 'Segurança com biometria e reconhecimento facial em cada transação.'
    }
  ];

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++
    }
  }

}
