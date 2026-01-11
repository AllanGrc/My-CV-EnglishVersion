import { Injectable, signal, computed, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private darkMode = signal(false);
  
  isDarkMode = computed(() => this.darkMode());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log("✅🎨 THEME SERVICE INICIALIZADO!");
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
    }
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem("cv-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    let initialDarkMode = false;
    
    if (savedTheme === "dark") {
      initialDarkMode = true;
      console.log("📁 Tema cargado de localStorage: oscuro");
    } else if (savedTheme === "light") {
      initialDarkMode = false;
      console.log("📁 Tema cargado de localStorage: claro");
    } else if (prefersDark) {
      initialDarkMode = true;
      console.log("🌙 Usando preferencia del sistema: oscuro");
    } else {
      console.log("☀️ Usando tema por defecto: claro");
    }
    
    this.darkMode.set(initialDarkMode);
    this.applyTheme(initialDarkMode);
  }

  toggleTheme(): void {
    console.log("🔄 Cambiando tema...");
    const newMode = !this.darkMode();
    this.darkMode.set(newMode);
    this.applyTheme(newMode);
    
    localStorage.setItem("cv-theme", newMode ? "dark" : "light");
    console.log("💾 Tema guardado:", newMode ? "dark" : "light");
  }

  private applyTheme(isDark: boolean): void {
    const body = document.body;
    const html = document.documentElement;
    
    // Limpiar clases
    body.classList.remove("light-theme", "dark-theme");
    html.classList.remove("light-theme", "dark-theme");
    
    // Agregar clase
    const themeClass = isDark ? "dark-theme" : "light-theme";
    body.classList.add(themeClass);
    html.classList.add(themeClass);
    
    // 🔥🔥🔥 ESTO ES LO CRÍTICO - APLICAR ESTILOS DIRECTAMENTE
    if (isDark) {
      body.style.cssText = "background-color: #121212 !important; color: white !important;";
      console.log("🌙🌙🌙 ESTILOS OSCUROS APLICADOS INLINE");
    } else {
      body.style.cssText = "background-color: white !important; color: black !important;";
      console.log("☀️☀️☀️ ESTILOS CLAROS APLICADOS INLINE");
    }
    
    // Actualizar meta tag
    this.updateMetaThemeColor(isDark);
  }

  private updateMetaThemeColor(isDark: boolean): void {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.setAttribute("name", "theme-color");
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute("content", isDark ? "#121212" : "#0d6efd");
  }
}
