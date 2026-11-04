// Gera public/cv/Lucas-Silva-de-Lira-CV.pdf (a partir de /cv) e public/og-image.png (a partir de /og).
// Usa um navegador Chromium já instalado (Brave, Chrome ou Edge) via playwright-core.
// Uso: npm run assets   (ou defina CHROMIUM_PATH para forçar um executável)
import { spawn, execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { chromium } from 'playwright-core';

const PORTA = 4399;
const candidatos = [
  process.env.CHROMIUM_PATH,
  'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const executablePath = candidatos.find((p) => existsSync(p));
if (!executablePath) {
  console.error('Nenhum navegador Chromium encontrado. Defina CHROMIUM_PATH.');
  process.exit(1);
}

console.log('> build…');
execSync('npm run build', { stdio: 'inherit' });

console.log('> preview…');
const servidor = spawn('npx', ['astro', 'preview', '--port', String(PORTA)], {
  shell: true,
  stdio: 'ignore',
});
const base = `http://localhost:${PORTA}`;

for (let i = 0; i < 40; i++) {
  try {
    if ((await fetch(base)).ok) break;
  } catch {
    await new Promise((r) => setTimeout(r, 500));
  }
}

const browser = await chromium.launch({ executablePath });
try {
  mkdirSync('public/cv', { recursive: true });

  const pagina = await browser.newPage();
  await pagina.goto(`${base}/cv`, { waitUntil: 'networkidle' });
  await pagina.pdf({ path: 'public/cv/Lucas-Silva-de-Lira-CV.pdf', format: 'A4', printBackground: true });
  console.log('✔ public/cv/Lucas-Silva-de-Lira-CV.pdf');

  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto(`${base}/og`, { waitUntil: 'networkidle' });
  await og.screenshot({ path: 'public/og-image.png' });
  console.log('✔ public/og-image.png');
} finally {
  await browser.close();
  if (process.platform === 'win32') execSync(`taskkill /pid ${servidor.pid} /T /F`, { stdio: 'ignore' });
  else servidor.kill();
}
