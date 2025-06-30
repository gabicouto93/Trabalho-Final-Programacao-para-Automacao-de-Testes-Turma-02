import { describe, it, expect } from 'vitest';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from '../codigo.js';

describe('Testes da disciplina - fundamentos JS', () => {

  // Função 1
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    expect(geradorDeTagsDeIdentificacao('Pantera')).toBe('PANTERA');
  });

  // Função 2 - verificarSePodeSerAdotado
  it('QUANDO o porte = P, DEVE permitir adoção independente da idade', () => {
    expect(verificarSePodeSerAdotado(0, 'P')).toBe(true);
  });

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    expect(verificarSePodeSerAdotado(1, 'M')).toBe(true);
  });

  it('QUANDO o porte = G e idade >= 2, DEVE ser permitida a adoção', () => {
    expect(verificarSePodeSerAdotado(3, 'G')).toBe(true); // idade >= 2 retorna true direto
  });

  it('QUANDO a idade < 2 para porte G, DEVE retornar false', () => {
    expect(verificarSePodeSerAdotado(1, 'G')).toBe(false);
  });

  it('QUANDO o porte for inválido em verificarSePodeSerAdotado, DEVE retornar false', () => {
    expect(verificarSePodeSerAdotado(3, 'Z')).toBe(false);
  });

  // Função 3 - calcularConsumoDeRacao
  it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    expect(calcularConsumoDeRacao('Pitoco', 1, 14.5)).toBe(4350);
  });

  // Função 4 - decidirTipoDeAtividadePorPorte
  it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    expect(decidirTipoDeAtividadePorPorte('pequeno')).toBe('brincar dentro de casa');
  });

  it('QUANDO o porte = médio, DEVE retornar "caminhada no quarteirão"', () => {
    expect(decidirTipoDeAtividadePorPorte('médio')).toBe('caminhada no quarteirão');
  });

  it('QUANDO o porte = "grande", DEVE retornar atividade "correr no parque"', () => {
    expect(decidirTipoDeAtividadePorPorte('grande')).toBe('correr no parque');
  });

  it('QUANDO o porte for inválido em decidirTipoDeAtividadePorPorte, DEVE retornar "porte inválido"', () => {
    expect(decidirTipoDeAtividadePorPorte('gigante')).toBe('porte inválido');
  });

  // Função 5 - buscarDadoAsync
  it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    expect(resultado).toBe('Pipoca');
  });

});
