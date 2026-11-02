// Conteúdo do currículo (fonte: cv_joshua_alves.pdf). Sem morada nem data de nascimento.
import type { CvData } from './types';

export const cv: CvData = {
  person: {
    name: 'Joshua Alves',
    title: 'Software Developer',
    photo: null,
  },

  sections: [
    { id: 'quem-sou-eu', title: 'Quem Sou Eu?' },
    { id: 'o-que-faco', title: 'O que faço?' },
    { id: 'hobbies', title: 'Hobbies' },
  ],

  highlights: [
    { value: '6 anos', label: 'de experiência' },
    { value: 'Sistemas distribuídos', label: 'e microsserviços' },
    { value: 'Setor da aviação', label: 'Azores Airlines' },
  ],

  about: {
    summary:
      'Software Developer com 6 anos de experiência especializada no desenvolvimento e escalabilidade de ' +
      'sistemas distribuídos/microserviços. Especializo-me na articulação entre o design de sistemas ' +
      'complexos e a resolução de desafios técnicos específicos do setor da aviação.',
    strengths: [
      'Arquitetura: Sistemas Distribuídos e Microsserviços.',
      'APIs: Design de APIs de Alta Disponibilidade e Performance.',
      'Infraestrutura: Escalabilidade, Integração de Sistemas e Otimização.',
      'Domínio: Soluções Tecnológicas para o Setor da Aviação.',
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
      'Desenvolvimento e manutenção do site da Azores Airlines.',
      'Desenvolvimento e manutenção de diversas soluções para departamentos internos.',
      'Suporte e manutenção da infraestrutura de desenvolvimento aplicacional.',
    ],
  },

  previous: [
    {
      id: 'dreqp',
      role: 'Administrador de Sistemas',
      company: 'DREQP – Direção Regional do Emprego e Qualificação Profissional',
      period: '2017 – 2018',
      bullets: [
        'Gestão de trouble tickets (helpdesk) e apoio às plataformas internas e externas.',
        'Criação de imagens Windows 10 com WDS e configuração de perfis de utilizadores.',
        'Configuração e manutenção de servidores Windows Server 2003, 2008 e 2012, backups e correio Microsoft Exchange.',
        'Configuração de clientes VPN, mapeamento e reconfiguração de rede, bastidores e switches.',
        'Manutenção de equipamentos, impressoras multifunções e quiosques interativos.',
      ],
    },
    {
      id: 'formulasim',
      role: 'Gerente de Loja',
      company: 'FormulaSim',
      period: '2017 – 2018',
      bullets: [
        'Gestão, em part-time, de um negócio de simuladores de corrida 3D.',
        'Instalação, configuração e manutenção de todo o material informático.',
        'Configuração da rede local.',
        'Ajuda ao utilizador na escolha e configuração do jogo; faturação com o software Verba.',
      ],
    },
    {
      id: 'ebi-agua-de-pau',
      role: 'Administrador de Sistemas',
      company: 'Escola Básica Integrada de Água de Pau',
      period: '2016',
      bullets: [
        'Apoio ao utilizador final (helpdesk) ao abrigo do programa Estagiar T.',
        'Manutenção de servidores Windows Server 2008 e 2012.',
        'Manutenção dos equipamentos das salas de aula e dos quiosques interativos.',
        'Manutenção de software escolar (Sige3, BiblioNet, PaperCut) e melhoria do site em WordPress.',
      ],
    },
    {
      id: 'ebi-arrifes',
      role: 'Estágio curricular – Técnico de Informática',
      company: 'Escola Básica Integrada de Arrifes',
      period: '2015',
      bullets: [
        'Estágio de 3 meses em apoio ao utilizador final (helpdesk).',
        'Atuação em cinco escolas públicas de Ponta Delgada e Lagoa.',
        'Apoio técnico a computadores e equipamentos das escolas.',
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
    { id: 'sports', icon: 'sports', title: 'Desporto', text: 'Gosto de me manter ativo e de praticar desporto sempre que posso.' },
    { id: 'photography', icon: 'photography', title: 'Fotografia', text: 'Gosto de captar momentos e paisagens através da fotografia.' },
    { id: 'motorcycling', icon: 'motorcycle', title: 'Motociclismo', text: 'Adoro andar de mota e explorar estradas novas.' },
    { id: 'friends', icon: 'friends', title: 'Amigos', text: 'Gosto de conviver e passar tempo com os meus amigos.' },
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
