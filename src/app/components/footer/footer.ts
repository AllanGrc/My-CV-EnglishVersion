import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
<footer class="cv-footer bg-dark text-white py-4 mt-5">
  <div class="container">
    <div class="row py-4">
      <!-- Contact -->
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">Contact</h5>
        <p><i class="fas fa-phone me-2"></i>(+505) 83806424</p>
        <p><i class="fas fa-envelope me-2"></i>schoolel.info@gmail.com</p>
        <p><i class="fas fa-map-marker-alt me-2"></i>Matagalpa, Nicaragua</p>
      </div>
      
      <!-- Quick links -->
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">Quick Links</h5>
        <p><a href="#experience" class="text-decoration-none text-light">Experience</a></p>
        <p><a href="#education" class="text-decoration-none text-light">Education</a></p>
        <p><a href="#skills" class="text-decoration-none text-light">Skills</a></p>
        <p><a href="#certifications" class="text-decoration-none text-light">Certifications</a></p>
        <p><a href="#references" class="text-decoration-none text-light">References</a></p>
      </div>
      
      <!-- Development -->
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">Development</h5>
        <p>Angular 17+</p>
        <p>Bootstrap 5</p>
        <p>TypeScript</p>
      </div>
    </div>
    
    <hr class="my-2 bg-light">
    
    <div class="text-center py-3">
      <p class="mb-2">© 2025 Allan García. All rights reserved.</p>
      <small class="text-muted">Interactive CV WebApp - Professional Portfolio | Updated: 2026-01-09 17:30:33</small>
    </div>
  </div>
</footer>
  `,
  styles: [`
    .cv-footer {
      background: linear-gradient(135deg, #343a40 0%, #212529 100%);
    }
    
    .cv-footer a {
      transition: color 0.3s ease;
    }
    
    .cv-footer a:hover {
      color: #0dcaf0 !important;
    }
  `]
})
export class FooterComponent {
  constructor() {
    console.log("✅ FooterComponent - Updated with 5 Quick Links");
  }
}

