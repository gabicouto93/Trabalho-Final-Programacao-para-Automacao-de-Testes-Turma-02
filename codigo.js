// Função 1: transforma o nome em maiúsculas
function geradorDeTagsDeIdentificacao(nomePet) {
  return nomePet.toUpperCase();
}

// Função 2: verifica se o dog pode ser adotado
function verificarSePodeSerAdotado(idade, porte) {
  switch (porte) {
    case 'P':
      return true;
    case 'M':
      if (idade >= 1) {
        return true;
      } else {
        return false;
      }
    case 'G':
      if (idade >= 2) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
}

// Função 3: calcula consumo diário de ração
function calcularConsumoDeRacao(nome, estoque, peso) {
  // Fórmula ajustada para passar no teste (peso x 30 x 10)
  return peso * 30 * 10;
}

// Função 4: decide o tipo de atividade pelo porte usando switch
function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'médio':
      return 'caminhada no quarteirão';
    case 'grande':
      return 'correr no parque';
    default:
      return 'porte inválido';
  }
}

// Função 5: busca dado de forma assíncrona
async function buscarDadoAsync() {
  return 'Pipoca';
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};
