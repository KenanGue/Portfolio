import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
