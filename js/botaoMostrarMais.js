function mostrarMaisProjetos() {
    // Seleciona todos os elementos com a classe "projeto" que estão ocultos
    let projetosOcultos = document.querySelectorAll('.projeto:not(.ativo)');
  
    // Define o número máximo de projetos a serem mostrados de cada vez
    let maxProjetosAMostrar = 2;
  
    // Itera sobre os projetos ocultos e os torna visíveis
    for (let i = 0; i < maxProjetosAMostrar && i < projetosOcultos.length; i++) {
      projetosOcultos[i].classList.add('ativo');
    }
  
    // Verifica se ainda existem projetos ocultos
    let projetosRestantes = document.querySelectorAll('.projeto:not(.ativo)');
    if (projetosRestantes.length === 0) {
      // Se não houver mais projetos ocultos, oculta o botão "Mostrar mais"
      document.querySelector('.btn-mostrar-projetos').style.display = 'none';
    }
  }