// Gera public/cv/Lucas-Silva-de-Lira-CV.pdf (a partir de /cv) e public/og-image.png (a partir de /og).
// Usa um navegador Chromium já instalado (Brave, Chrome ou Edge) via playwright-core.
// Uso: npm run assets   (ou defina CHROMIUM_PATH para forçar um executável)
import { execSync } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';
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
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};
const raiz = join(process.cwd(), 'dist');
const servidor = createServer((req, res) => {
  try {
    const caminho = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
    let arquivo = join(raiz, caminho);
    if (arquivo !== raiz && !arquivo.startsWith(raiz + sep)) return res.writeHead(403).end();
    if (existsSync(arquivo) && statSync(arquivo).isDirectory()) arquivo = join(arquivo, 'index.html');
    if (!existsSync(arquivo)) return res.writeHead(404).end('não encontrado');
    res.writeHead(200, { 'Content-Type': tipos[extname(arquivo)] ?? 'application/octet-stream' });
    res.end(readFileSync(arquivo));
  } catch {
    res.writeHead(400).end('requisição inválida');
  }
});
await new Promise((ok) => servidor.listen(0, '127.0.0.1', ok));
const base = `http://127.0.0.1:${servidor.address().port}`;

const browser = await chromium.launch({ executablePath });
try {
  mkdirSync('public/cv', { recursive: true });

  // Um currículo em PDF e uma imagem de compartilhamento para cada idioma.
  const idiomas = [
    { rota: '', pdf: 'Lucas-Silva-de-Lira-CV.pdf', og: 'og-image.png' },
    { rota: '/en', pdf: 'Lucas-Silva-de-Lira-Resume.pdf', og: 'og-image-en.png' },
  ];

  for (const { rota, pdf, og } of idiomas) {
    const cv = await browser.newPage();
    await cv.goto(`${base}${rota}/cv`, { waitUntil: 'networkidle' });
    await cv.pdf({ path: `public/cv/${pdf}`, format: 'A4', printBackground: true });
    console.log(`✔ public/cv/${pdf}`);

    const cartao = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await cartao.goto(`${base}${rota}/og`, { waitUntil: 'networkidle' });
    await cartao.screenshot({ path: `public/${og}` });
    console.log(`✔ public/${og}`);
  }
} finally {
  await browser.close();
  servidor.closeAllConnections();
  servidor.close();
}
