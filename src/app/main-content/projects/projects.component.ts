import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isDialogOpen = false;
  currentProject: any = null;

  projects = [
    {
      id: 1,
      title: 'Join',
      description: 'Ein Projekt für Benutzerregistrierung.',
      technologies: ['HTML', 'CSS', 'Angular', 'Typescript', 'Firebase'],
      githubLink: 'https://github.com/username/join',
      liveLink: 'https://join.kenan-günes.de',
      image: './../../../assets/img/project/join-dialog.png',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'Ein JavaScript-basiertes Jump-and-Run-Spiel.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/username/el-pollo-loco',
      liveLink: 'https://el-pollo-loco.kenan-günes.de',
      image: './../../../assets/img/project/el-pollo-dialog.png',
    },
  ];

  constructor(public translate: TranslationService) {}

  ngOnInit(): void {
    this.loadProjectTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadProjectTranslations();
    });
  }

  loadProjectTranslations(): void {
    this.projects.forEach((project, index) => {
      this.translate.get(`PROJECT${index + 1}_TITLE`).subscribe((title: string) => {
        project.title = title;
      });
      this.translate.get(`PROJECT${index + 1}_DESCRIPTION`).subscribe((description: string) => {
        project.description = description;
      });
    });
  }

  openDialog(project: any): void {
    console.log('Dialog geöffnet:', project);
    this.currentProject = project;
    this.isDialogOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeDialog(): void {
    console.log('Dialog geschlossen');
    this.currentProject = null;
    this.isDialogOpen = false;
    document.body.style.overflow = '';
  }


  goToLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('URL is invalid or missing');
    }
  }

  nextProject(): void {
    const currentIndex = this.projects.findIndex(project => project === this.currentProject);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.currentProject = this.projects[nextIndex];
  }
}
