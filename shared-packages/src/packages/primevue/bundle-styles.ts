// shared-packages/scripts/bundle-styles.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src/plugins/primevue');
const nodeModules = path.resolve(__dirname, '../node_modules');

// PrimeUix themes
const themes = {
  'aura-light-green': '@primeuix/themes/aura/aura-light-green',
  'aura-light-blue': '@primeuix/themes/aura/aura-light-blue',
  'aura-light-indigo': '@primeuix/themes/aura/aura-light-indigo',
  'aura-light-purple': '@primeuix/themes/aura/aura-light-purple',
  'aura-dark-green': '@primeuix/themes/aura/aura-dark-green',
  'aura-dark-blue': '@primeuix/themes/aura/aura-dark-blue',
  'aura-dark-indigo': '@primeuix/themes/aura/aura-dark-indigo',
  'aura-dark-purple': '@primeuix/themes/aura/aura-dark-purple',
  'lara-light-blue': '@primeuix/themes/lara/lara-light-blue',
  'lara-light-indigo': '@primeuix/themes/lara/lara-light-indigo',
  'lara-light-purple': '@primeuix/themes/lara/lara-light-purple',
  'lara-light-teal': '@primeuix/themes/lara/lara-light-teal',
  'lara-dark-blue': '@primeuix/themes/lara/lara-dark-blue',
  'lara-dark-indigo': '@primeuix/themes/lara/lara-dark-indigo',
  'lara-dark-purple': '@primeuix/themes/lara/lara-dark-purple',
  'lara-dark-teal': '@primeuix/themes/lara/lara-dark-teal'
};

function readCSS(filePath:any) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.warn(`⚠️  Could not read: ${filePath}`);
    return '';
  }
}

function resolveThemePath(themePath:any) {
  // Try with .css extension
  const cssPath = path.join(nodeModules, themePath + '.css');
  if (fs.existsSync(cssPath)) {
    return cssPath;
  }

  // Try direct path
  const directPath = path.join(nodeModules, themePath);
  if (fs.existsSync(directPath)) {
    return directPath;
  }

  // Try index.css
  const indexPath = path.join(nodeModules, themePath, 'index.css');
  if (fs.existsSync(indexPath)) {
    return indexPath;
  }

  return null;
}

function generateStylesFile() {
  console.log('📦 Bundling PrimeUix themes from node_modules...\n');

  // Read PrimeIcons
  const iconsCSS = readCSS(path.join(nodeModules, 'primeicons/primeicons.css'));
  console.log('✓ Bundled PrimeIcons');

  // Read themes
  const themesData:any = {};
  Object.entries(themes).forEach(([themeName, themePath]) => {
    const resolvedPath = resolveThemePath(themePath);

    if (resolvedPath) {
      const themeCSS = readCSS(resolvedPath);
      if (themeCSS) {
        themesData[themeName] = themeCSS;
        console.log(`✓ Bundled theme: ${themeName}`);
      }
    } else {
      console.warn(`⚠️  Theme not found: ${themeName}`);
    }
  });

  const themeNames = Object.keys(themesData);

  const output = `// Auto-generated file - Do not edit manually
// Generated at: ${new Date().toISOString()}
// Source: @primeuix/themes

export const PRIMEVUE_THEMES = ${JSON.stringify(themesData, null, 2)} as const;

export const PRIMEICONS_CSS = ${JSON.stringify(iconsCSS)};

export type ThemeName = keyof typeof PRIMEVUE_THEMES;

export const AVAILABLE_THEMES: readonly ThemeName[] = ${JSON.stringify(themeNames)} as const;

export const DEFAULT_THEME: ThemeName = 'aura-light-blue';
`;

  const outputPath = path.join(srcDir, 'styles.bundled.ts');
  fs.writeFileSync(outputPath, output);

  console.log(`\n✅ Styles bundled successfully!`);
  console.log(`📄 Output: ${outputPath}`);
  console.log(`🎨 Themes bundled: ${themeNames.length}`);

  const sizeInKB = (Buffer.byteLength(output) / 1024).toFixed(2);
  console.log(`📊 Bundle size: ${sizeInKB} KB`);
}

try {
  generateStylesFile();
} catch (error) {
  console.error('❌ Error bundling styles:', error);
  process.exit(1);
}
