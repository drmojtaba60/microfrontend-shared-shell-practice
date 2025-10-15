// // shared-packages/src/plugins/primevue/styles.ts
// import {
//   PRIMEVUE_THEMES,
//   PRIMEICONS_CSS,
//   type ThemeName,
//   AVAILABLE_THEMES,
//   DEFAULT_THEME
// } from './bundle-styles.js';
//
// export interface PrimeVueStylesOptions {
//   theme?: ThemeName;
//   injectMode?: 'style';
// }
//
// class PrimeVueStylesManager {
//   private injected = false;
//   private styleElement?: HTMLStyleElement;
//   private currentTheme?: ThemeName;
//
//   injectStyles(options: PrimeVueStylesOptions = {}) {
//     if (typeof document === 'undefined') {
//       console.warn('⚠️  Document is not available (SSR mode)');
//       return;
//     }
//
//     const theme = options.theme || DEFAULT_THEME;
//
//     // اگر theme تغییر کرده، استایل قبلی رو پاک کن
//     if (this.injected && this.currentTheme !== theme) {
//       this.destroy();
//     }
//
//     if (this.injected && this.currentTheme === theme) {
//       console.log(`ℹ️  Theme "${theme}" is already injected`);
//       return;
//     }
//
//     this.injectAsStyle(theme);
//     this.injected = true;
//     this.currentTheme = theme;
//   }
//
//   private injectAsStyle(theme: ThemeName) {
//     const styleId = 'primevue-bundle-styles';
//
//     // Double check
//     const existingStyle = document.getElementById(styleId);
//     if (existingStyle) {
//       existingStyle.remove();
//     }
//
//     const themeCSS = PRIMEVUE_THEMES[theme];
//
//     if (!themeCSS) {
//       console.error(`❌ Theme "${theme}" not found. Available themes:`, AVAILABLE_THEMES);
//       throw new Error(`Theme "${theme}" is not available`);
//     }
//
//     const style = document.createElement('style');
//     style.id = styleId;
//     style.setAttribute('data-primevue-theme', theme);
//     style.setAttribute('data-primevue-source', '@primeuix/themes');
//
//     style.textContent = `
// /* PrimeVue Theme: ${theme} (@primeuix/themes) */
// ${themeCSS}
//
// /* PrimeIcons */
// ${PRIMEICONS_CSS}
//     `.trim();
//
//     document.head.appendChild(style);
//     this.styleElement = style;
//
//     console.log(`✅ PrimeVue theme "${theme}" injected from @primeuix/themes`);
//   }
//
//   destroy() {
//     this.styleElement?.remove();
//     document.getElementById('primevue-bundle-styles')?.remove();
//
//     this.injected = false;
//     this.styleElement = undefined;
//     this.currentTheme = undefined;
//
//     console.log('🧹 PrimeVue styles destroyed');
//   }
//
//   changeTheme(newTheme: ThemeName) {
//     if (newTheme === this.currentTheme) {
//       console.log(`ℹ️  Theme "${newTheme}" is already active`);
//       return;
//     }
//
//     console.log(`🎨 Changing theme: ${this.currentTheme} → ${newTheme}`);
//     this.destroy();
//     this.injectStyles({ theme: newTheme });
//   }
//
//   getInjectedTheme(): ThemeName | undefined {
//     return this.currentTheme;
//   }
//
//   getAvailableThemes(): readonly ThemeName[] {
//     return AVAILABLE_THEMES;
//   }
//
//   isInjected(): boolean {
//     return this.injected;
//   }
//
//   isDarkTheme(theme?: ThemeName): boolean {
//     const targetTheme = theme || this.currentTheme;
//     return targetTheme ? targetTheme.includes('dark') : false;
//   }
//
//   getThemeInfo() {
//     return {
//       current: this.currentTheme,
//       available: AVAILABLE_THEMES,
//       default: DEFAULT_THEME,
//       injected: this.injected,
//       isDark: this.isDarkTheme()
//     };
//   }
// }
//
// export const stylesManager = new PrimeVueStylesManager();
//
// // Re-export types
// export type { ThemeName };
// export { AVAILABLE_THEMES, DEFAULT_THEME };
