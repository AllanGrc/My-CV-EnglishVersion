import { Injectable, signal, computed } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  private language = signal<"es" | "en">("es");
  
  isEnglish = computed(() => this.language() === "en");

  constructor() {
    console.log("✅🌍 LanguageService INICIALIZADO!");
  }

  toggleLanguage(): void {
    console.log("🔄 Cambiando idioma...");
    const newLang = this.language() === "es" ? "en" : "es";
    this.language.set(newLang);
    
    // Mostrar alert
    alert(newLang === "en" 
      ? "Language changed to English! (Demo)" 
      : "¡Idioma cambiado a español! (Demo)");
  }
}
