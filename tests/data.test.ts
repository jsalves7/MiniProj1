import { describe, expect, it } from 'vitest';
import { cv } from '../src/data';

const social = (id: string) => cv.socials.find((s) => s.id === id)!;

describe('conteúdo do currículo', () => {
  it('sections have the exact titles in order', () => {
    expect(cv.sections.map((s) => s.title)).toEqual(['Quem Sou Eu?', 'O que faço?', 'Hobbies']);
    expect(cv.sections.map((s) => s.id)).toEqual(['quem-sou-eu', 'o-que-faco', 'hobbies']);
  });

  it('has 3 highlights, 5 education entries, 4 previous jobs, 5 skill groups, 4 hobbies', () => {
    expect(cv.highlights).toHaveLength(3);
    expect(cv.education).toHaveLength(5);
    expect(cv.previous).toHaveLength(4);
    expect(cv.skills).toHaveLength(5);
    expect(cv.hobbies).toHaveLength(4);
  });

  it('current role is SATA | Azores Airlines with 3 duties', () => {
    expect(cv.current.company).toBe('SATA | Azores Airlines');
    expect(cv.current.duties).toHaveLength(3);
  });

  it('previous jobs have 3 to 5 bullets and unique ids', () => {
    for (const job of cv.previous) {
      expect(job.bullets.length).toBeGreaterThanOrEqual(3);
      expect(job.bullets.length).toBeLessThanOrEqual(5);
    }
    expect(new Set(cv.previous.map((j) => j.id)).size).toBe(cv.previous.length);
  });

  it('socials contain the six ids with non-empty hrefs', () => {
    expect(cv.socials.map((s) => s.id).sort()).toEqual(
      ['email', 'facebook', 'github', 'instagram', 'linkedin', 'whatsapp']
    );
    for (const s of cv.socials) {
      expect(s.href).toBeTruthy();
      expect(s.label).toBeTruthy();
    }
  });

  it('github href is https://github.com/jsalves7', () => {
    expect(social('github').href).toBe('https://github.com/jsalves7');
  });

  it('whatsapp href is https://wa.me/351912959146', () => {
    expect(social('whatsapp').href).toBe('https://wa.me/351912959146');
  });

  it('email href starts with mailto:joshua.s.alves@gmail.com', () => {
    expect(social('email').href.startsWith('mailto:joshua.s.alves@gmail.com')).toBe(true);
  });

  it('privacy: no postal address or full date; phone only in the whatsapp href', () => {
    const text = JSON.stringify(cv).replace(social('whatsapp').href, '');
    expect(text).not.toMatch(/\b\d{4}-\d{3}\b/); // código postal
    expect(text).not.toMatch(/\b\d{1,2}[/.-]\d{1,2}[/.-]\d{4}\b/); // data completa
    expect(text).not.toMatch(/\b(Estrada|Rua|Avenida|Travessa|Caminho)\b/);
    expect(text).not.toMatch(/\b9\d{8}\b/); // telemóvel
  });
});
