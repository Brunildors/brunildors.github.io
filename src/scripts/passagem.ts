/**
 * Passagem entre seções:
 * 1. cada seção ganha `.visivel` quando o topo dela entra na tela (o CSS faz o corte da lâmina);
 * 2. o menu marca a seção que está no meio da tela e o marcador bordô desliza até ela.
 */
const secoes = [...document.querySelectorAll<HTMLElement>('[data-secao]')];

const entrada = new IntersectionObserver(
  (itens) => {
    for (const item of itens) {
      if (!item.isIntersecting) continue;
      item.target.classList.add('visivel');
      entrada.unobserve(item.target);
    }
  },
  { rootMargin: '0px 0px -12% 0px' },
);
secoes.forEach((secao) => entrada.observe(secao));

const menu = document.querySelector<HTMLElement>('[data-menu]');
const marcador = menu?.querySelector<HTMLElement>('[data-marcador]');
const links = menu ? [...menu.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')] : [];

const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');

function posicionar(link: HTMLElement) {
  marcador?.style.setProperty('--x', `${link.offsetLeft}px`);
  marcador?.style.setProperty('--y', `${link.offsetTop + link.offsetHeight - 3}px`);
  marcador?.style.setProperty('--w', `${link.offsetWidth}px`);
  // no celular o menu rola: mantém o item atual à vista
  menu?.scrollTo({
    left: Math.max(0, link.offsetLeft - 24),
    behavior: menosMovimento.matches ? 'auto' : 'smooth',
  });
}

function marcar(id: string) {
  for (const link of links) {
    if (link.hash === `#${id}`) {
      link.setAttribute('aria-current', 'location');
      posicionar(link);
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

if (links.length > 0) {
  const atual = new IntersectionObserver(
    (itens) => {
      for (const item of itens) if (item.isIntersecting) marcar(item.target.id);
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  secoes.filter((secao) => secao.id).forEach((secao) => atual.observe(secao));

  window.addEventListener('resize', () => {
    const ativo = menu?.querySelector<HTMLElement>('[aria-current]');
    if (ativo) posicionar(ativo);
  });
}
