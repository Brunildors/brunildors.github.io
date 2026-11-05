// Gera public/cv/Lucas-Silva-de-Lira-CV.pdf (a partir de /cv) e public/og-image.png (a partir de /og).
// Usa um navegador Chromium já instalado (Brave, Chrome ou Edge) via playwright-core.
// Uso: npm run assets   (ou defina CHROMIUM_PATH para forçar um executável)
import { execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { chromium } from 'playwright-core';

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

// Servidor estático mínimo para dist/, só para este script.
const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.woff2': 'font/woff2',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
};
const raiz = join(process.cwd(), 'dist');
const servidor = createServer((req, res) => {
  const caminho = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  let arquivo = join(raiz, caminho);
  if (!arquivo.startsWith(raiz)) return res.writeHead(403).end();
  if (existsSync(arquivo) && statSync(arquivo).isDirectory()) arquivo = join(arquivo, 'index.html');
  if (!existsSync(arquivo)) return res.writeHead(404).end('não encontrado');
  res.writeHead(200, { 'Content-Type': tipos[extname(arquivo)] ?? 'application/octet-stream' });
  res.end(readFileSync(arquivo));
});
await new Promise((ok) => servidor.listen(0, '127.0.0.1', ok));
const base = `http://127.0.0.1:${servidor.address().port}`;

const browser = await chromium.launch({ executablePath });
try {
  mkdirSync('public/cv', { recursive: true });

  const cv = await browser.newPage();
  await cv.goto(`${base}/cv`, { waitUntil: 'networkidle' });
  await cv.pdf({ path: 'public/cv/Lucas-Silva-de-Lira-CV.pdf', format: 'A4', printBackground: true });
  console.log('✔ public/cv/Lucas-Silva-de-Lira-CV.pdf');

  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto(`${base}/og`, { waitUntil: 'networkidle' });
  await og.screenshot({ path: 'public/og-image.png' });
  console.log('✔ public/og-image.png');
} finally {
  await browser.close();
  servidor.close();
}
