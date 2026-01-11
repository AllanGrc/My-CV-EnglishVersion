import { Component } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div class="language-switcher">
      <a href="https://allangrc.github.io/My-CV-SpanishVersion/" 
         class="btn-language-switcher"
         title="View in Spanish"
         target="_self">
        <span class="flag-icon">🇪🇸</span>
        <span class="language-text">Spanish Version</span>
      </a>
    </div>
  `,
  styles: [`
    .language-switcher {
      /* POSICIÓN IZQUIERDA - Below name "Allan García" */
      position: fixed;
      top: 80px;    /* Enough space to not cover the name */
      left: 30px;   /* Left corner */
      z-index: 99999;
    }
    
    .btn-language-switcher {
      display: inline-flex;
      align-items: center;
      padding: 10px 16px;
      background-color: white;
      color: #0d6efd;
      border: 2px solid #0d6efd;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    
    .btn-language-switcher:hover {
      background-color: #0d6efd;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    .flag-icon {
      font-size: 18px;
      margin-right: 8px;
    }
    
    .language-text {
      white-space: nowrap;
    }
    
    @media (max-width: 768px) {
      .language-switcher {
        top: 70px;
        left: 15px;
      }
      
      .btn-language-switcher {
        padding: 8px 12px;
        font-size: 12px;
      }
      
      .flag-icon {
        font-size: 16px;
        margin-right: 6px;
      }
    }
  `]
})
export class LanguageSwitcherComponent {
  constructor() {
    console.log('🌐 Language Switcher - English Version loaded');
  }
}
