import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component"
import { ReferencesComponent } from "./references/references.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule ,HeaderComponent, AboveTheFoldComponent, AboutMeComponent, ProjectsComponent, SkillsComponent, ReferencesComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
