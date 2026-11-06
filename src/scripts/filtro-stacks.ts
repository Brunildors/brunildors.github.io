/**
 * Filtro da aba Stacks: mostra só o grupo da função escolhida (web, back-end, banco…).
 * Sem JavaScript os botões ficam ocultos e todos os grupos aparecem.
 */
const raiz = document.querySelector<HTMLElement>('[data-stacks]');

if (raiz) {
  const botoes = [...raiz.querySelectorAll<HTMLButtonElement>('[data-filtro]')];
  const grupos = [...raiz.querySelectorAll<HTMLElement>('[data-grupo]')];
  const status = raiz.querySelector<HTMLElement>('[data-status]');
  const modeloTodas = raiz.dataset.statusTodas ?? '';
  const modeloFiltro = raiz.dataset.statusFiltro ?? '';
  const modeloUma = raiz.dataset.statusFiltroUma ?? modeloFiltro;

  function aplicar(filtro: string, nome: string) {
    let total = 0;

    for (const grupo of grupos) {
      const mostrar = filtro === 'todas' || grupo.dataset.grupo === filtro;
      grupo.hidden = !mostrar;
      if (!mostrar) continue;

      total += grupo.querySelectorAll('li').length;
      // reinicia a animação de entrada do grupo
      grupo.classList.remove('entra');
      void grupo.offsetWidth;
      grupo.classList.add('entra');
    }

    for (const botao of botoes) botao.setAttribute('aria-pressed', String(botao.dataset.filtro === filtro));
    raiz!.dataset.filtroAtual = filtro;

    if (status) {
      const modelo = filtro === 'todas' ? modeloTodas : total === 1 ? modeloUma : modeloFiltro;
      status.textContent = modelo.replace('{n}', String(total)).replace('{categoria}', nome);
    }
  }

  for (const botao of botoes) {
    botao.addEventListener('click', () => aplicar(botao.dataset.filtro ?? 'todas', botao.dataset.nome ?? ''));
  }
}
