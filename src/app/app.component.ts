import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { CertificationsComponent } from "./components/certifications/certifications.component";
import { ReferencesComponent } from "./components/references/references.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CertificationsComponent,
    ReferencesComponent,
    FooterComponent
  ],
  template: \
    <!-- Spanish Version Button -->
    <div class="text-end mt-2 me-2">
      <a href="https://github.com/tu-usuario/mi-cv" target="_blank" class="btn btn-sm btn-outline-primary">
        <i class="fab fa-github me-1"></i> Ver en GitHub
      </a>
    </div>
    
    <!-- Main Content -->
    <div class="container-fluid px-0">
      <!-- Header -->
      <header class="py-5 text-center bg-gradient-primary text-white" style="background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);">
        <div class="container">
          <h1 class="display-4 fw-bold mb-3">Allan García</h1>
          <h2 class="h2 mb-4">ESL Specialist</h2>
          <p class="lead">Interactive CV WebApp</p>
          <div class="mt-4">
            <div class="row justify-content-center">
              <div class="col-auto">
                <i class="fas fa-phone-alt me-2"></i> (+505) 83806424
              </div>
              <div class="col-auto">
                <i class="fas fa-envelope me-2"></i> schoolel.info@gmail.com
              </div>
              <div class="col-auto">
                <i class="fas fa-map-marker-alt me-2"></i> Matagalpa, Nicaragua
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Navigation Component -->
      <app-navigation></app-navigation>
      
      <!-- Main Content Sections -->
      <main class="container py-5">
        <section id="experience" class="mb-5">
          <app-experience></app-experience>
        </section>
        
        <section id="education" class="mb-5">
          <app-education></app-education>
        </section>
        
        <section id="skills" class="mb-5">
          <app-skills></app-skills>
        </section>
        
        <section id="certifications" class="mb-5">
          <app-certifications></app-certifications>
        </section>
        
        <section id="references" class="mb-5">
          <app-references></app-references>
        </section>
      </main>
      
      <!-- Footer Component -->
      <app-footer></app-footer>
    </div>
  \,
  styles: [\
    section {
      scroll-margin-top: 80px;
    }
    
    .bg-gradient-primary {
      background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
    }
  \]
})
export class AppComponent {
  title = "Allan García - ESL Specialist CV";
}
