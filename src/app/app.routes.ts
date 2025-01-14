import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: 'imprint' }
];
