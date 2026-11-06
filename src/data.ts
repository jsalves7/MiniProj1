// Conteúdo do currículo (fonte: cv_joshua_alves.pdf). Sem morada nem data de nascimento.
import type { CvData } from './types';
import photo from './assets/joshua_alves.jpeg';

export const cv: CvData = {
  person: {
    name: 'Joshua Alves',
    title: 'Software Developer',
    photo,
  },

  sections: [
    { id: 'quem-sou-eu', title: 'Quem Sou Eu?' },
    { id: 'o-que-faco', title: 'O que faço?' },
    { id: 'hobbies', title: 'Hobbies' },
  ],

  highlights: [
    { value: '6 anos', label: 'de experiência' },
    { value: 'Sistemas distribuídos', label: 'e microsserviços' },
    { value: 'Setor da aviação', label: 'na Azores Airlines' },
  ],

  about: {
    summary:
      'Sou Software Developer há 6 anos. Trabalho sobretudo em sistemas distribuídos e microsserviços, ' +
      'e gosto de pegar em sistemas complexos e fazê-los resolver problemas concretos do setor da aviação.',
    strengths: [
      'Arquitetura de sistemas distribuídos e microsserviços.',
      'APIs de alta disponibilidade e bom desempenho.',
      'Escalabilidade, integração de sistemas e otimização.',
      'Soluções tecnológicas para o setor da aviação.',
    ],
    languages: [
      { name: 'Português', level: 'Língua materna' },
      { name: 'Inglês', level: 'B2' },
    ],
  },

  education: [
    {
      period: '2024 – 2025',
      title: 'Pós-graduação em Cibersegurança',
      school: 'Instituto Superior Técnico+ (Lisboa)',
    },
    {
      period: '2018 – 2020',
      title: 'TeSP em Desenvolvimento de Aplicações Web',
      school: 'Universidade dos Açores',
      grade: 'Classificação final: 15',
    },
    {
      period: '2016 – 2017',
      title: 'Técnico Especialista em Gestão de Redes e Sistemas Informáticos',
      school: 'ENTA – Escola de Novas Tecnologias dos Açores',
      grade: 'Classificação final: 15',
    },
    {
      period: '2016 – 2017',
      title: 'Cisco Certified Network Associate (CCNA)',
      school: 'ENTA – Escola de Novas Tecnologias dos Açores',
      grade: 'Classificação final: 19',
    },
    {
      period: '2012 – 2015',
      title: 'Técnico de Gestão de Equipamentos Informáticos',
      school: 'EPROSEC – Escola Profissional do Sindicato Escritório e Comércio',
      grade: 'Classificação final: 15',
    },
  ],

  current: {
    role: 'Full-Stack Developer',
    company: 'SATA | Azores Airlines',
    period: '2020 – atual',
    duties: [
      'Desenvolvo e mantenho o site da Azores Airlines.',
      'Desenvolvo e mantenho várias soluções para departamentos internos.',
      'Dou suporte à infraestrutura onde as aplicações são desenvolvidas.',
    ],
  },

  previous: [
    {
      id: 'dreqp',
      role: 'Administrador de Sistemas',
      company: 'DREQP – Direção Regional do Emprego e Qualificação Profissional',
      period: '2017 – 2018',
      bullets: [
        'Geria trouble tickets (helpdesk) e dava apoio às plataformas internas e externas.',
        'Criava imagens de Windows 10 com WDS e configurava perfis de utilizador.',
        'Configurava e mantinha servidores Windows Server 2003, 2008 e 2012, os backups e o correio em Microsoft Exchange.',
        'Configurava clientes VPN, mapeava e reconfigurava a rede, e tratava dos bastidores e dos switches.',
        'Mantinha equipamentos, impressoras multifunções e quiosques interativos.',
      ],
    },
    {
      id: 'formulasim',
      role: 'Gerente de Loja',
      company: 'FormulaSim',
      period: '2017 – 2018',
      bullets: [
        'Geria, em part-time, uma loja de simuladores de corrida 3D.',
        'Instalava, configurava e mantinha todo o material informático.',
        'Configurava a rede local.',
        'Ajudava os clientes a escolher e configurar o jogo, e tratava da faturação no software Verba.',
      ],
    },
    {
      id: 'ebi-agua-de-pau',
      role: 'Administrador de Sistemas',
      company: 'Escola Básica Integrada de Água de Pau',
      period: '2016',
      bullets: [
        'Dava apoio ao utilizador final (helpdesk), ao abrigo do programa Estagiar T.',
        'Mantinha servidores Windows Server 2008 e 2012.',
        'Tratava dos equipamentos das salas de aula e dos quiosques interativos.',
        'Mantinha o software da escola (Sige3, BiblioNet, PaperCut) e melhorava o site em WordPress.',
      ],
    },
    {
      id: 'ebi-arrifes',
      role: 'Estágio curricular – Técnico de Informática',
      company: 'Escola Básica Integrada de Arrifes',
      period: '2015',
      bullets: [
        'Estágio de 3 meses a dar apoio ao utilizador final (helpdesk).',
        'Trabalhava em cinco escolas públicas de Ponta Delgada e Lagoa.',
        'Dava apoio técnico aos computadores e aos equipamentos das escolas.',
      ],
    },
  ],

  skills: [
    { group: 'Cliente', items: ['HTML', 'CSS', 'XML', 'JS', 'TypeScript', 'React', 'Bootstrap', 'Redux', 'jQuery'] },
    { group: 'Servidor', items: ['PHP', 'Java', 'Python', 'REST', 'SOAP'] },
    { group: 'Dados', items: ['MySQL', 'MS SQL', 'MongoDB', 'Redis', 'RabbitMQ'] },
    { group: 'Ferramentas', items: ['Docker', 'Kubernetes'] },
    { group: 'Desenvolvimento e Operações', items: ['TDD', 'DDD', 'CI/CD', 'Git', 'Azure DevOps'] },
  ],

  hobbies: [
    { id: 'sports', icon: 'sports', title: 'Desporto', text: 'Gosto de estar em movimento. Sempre que posso, faço desporto.' },
    { id: 'photography', icon: 'photography', title: 'Fotografia', text: 'Gosto de fotografar paisagens e momentos que não quero deixar passar.' },
    { id: 'motorcycling', icon: 'motorcycle', title: 'Motociclismo', text: 'Andar de mota é das coisas de que mais gosto, sobretudo por estradas que ainda não conheço.' },
    { id: 'friends', icon: 'friends', title: 'Amigos', text: 'Estar com os amigos é sempre tempo bem passado. Faço por não perder esses momentos.' },
  ],

  socials: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/jsalves7' },
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/joshua.silva.127' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/joshua.s.alves' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-alves-7726b73a2/' },
    { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/351912959146' },
    { id: 'email', label: 'E-mail', href: 'mailto:joshua.s.alves@gmail.com' },
  ],
};
