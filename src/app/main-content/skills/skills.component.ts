import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(public translate: TranslationService) {}

  skillData = [
    { icon: '/assets/img/skills/html.png', description: 'HTML' },
    { icon: '/assets/img/skills/css.png', description: 'CSS' },
    { icon: '/assets/img/skills/javascript.png', description: 'Javascript' },
    { icon: '/assets/img/skills/material-design.png', description: 'Material Design' },
    { icon: '/assets/img/skills/typescript.png', description: 'Typescript' },
    { icon: '/assets/img/skills/angular.png', description: 'Angular' },
    { icon: '/assets/img/skills/firebase.png', description: 'Firebase' },
    { icon: '/assets/img/skills/git.png', description: 'GIT' },
    { icon: '/assets/img/skills/rest-api.png', description: 'Rest-Api' },
    { icon: '/assets/img/skills/scrum.png', description: 'Scrum' },
    { icon: '/assets/img/skills/growth-mindset.png', description: 'Growth mindset' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
