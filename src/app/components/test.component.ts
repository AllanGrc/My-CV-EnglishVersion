import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { CertificationsComponent } from "./certifications/certifications.component";
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: "app-test",
  standalone: true,
  imports: [
    CommonModule,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CertificationsComponent,
    ReferencesComponent
  ],
  templateUrl: "../app.html",
  styleUrls: ["../app.scss"]
})
export class TestComponent {
  constructor() {
    console.log("CV WebApp loaded - Showing basic structure");
  }
}
