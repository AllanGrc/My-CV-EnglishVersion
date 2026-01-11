import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styles: [\
    .cv-footer {
      background-color: #f8f9fa;
      border-top: 1px solid #dee2e6;
    }
    
    .cv-footer a {
      color: #0d6efd;
      text-decoration: none;
    }
    
    .cv-footer a:hover {
      text-decoration: underline;
    }
  \]
})
export class FooterComponent {}
