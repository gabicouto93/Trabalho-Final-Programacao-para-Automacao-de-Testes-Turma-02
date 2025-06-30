import { describe, it, expect } from 'vitest';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from '../codigo.js';

describe('Testes da disciplina - fundamentos JS', () => {
  
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    expect(geradorDeTagsDeIdentificacao('Pantera')).toBe('PANTERA');
  });

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    expect(verificarSePodeSerAdotado(1, 'M')).toBe(true);
  });

  it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    expect(calcularConsumoDeRacao('Pitoco', 1, 14.5)).toBe(4350);
  });

  it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    expect(decidirTipoDeAtividadePorPorte('pequeno')).toBe('brincar dentro de casa');
  });

  it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    expect(resultado).toBe('Pipoca');
  });

});
