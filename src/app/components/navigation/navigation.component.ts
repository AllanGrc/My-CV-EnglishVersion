import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navigation.component.html",
  styles: [\
    .nav-link {
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-link:hover {
      transform: translateY(-2px);
    }
    
    .nav-link.active {
      font-weight: bold;
      color: #0d6efd !important;
    }
    
    .nav-link.active::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 3px;
      background: #0d6efd;
      border-radius: 3px;
    }
    
    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column !important;
      }
    }
  \]
})
export class NavigationComponent {
  navItems = [
    { id: "experience", label: "Experience", icon: "fa-briefcase" },
    { id: "education", label: "Education", icon: "fa-graduation-cap" },
    { id: "skills", label: "Skills", icon: "fa-tools" },
    { id: "certifications", label: "Certifications", icon: "fa-award" },
    { id: "references", label: "References", icon: "fa-user-friends" }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
