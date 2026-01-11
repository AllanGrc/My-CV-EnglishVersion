import { bootstrapApplication } from '@angular/platform-browser';
import { CertificationsComponent } from './app/components/certifications/certifications.component';
import { appConfig } from './app/app.config';

bootstrapApplication(CertificationsComponent, appConfig)
  .catch((err) => console.error(err));

