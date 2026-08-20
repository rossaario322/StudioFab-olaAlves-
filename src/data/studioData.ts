import { StudioService, ClientReview, FAQItem } from '../types';

export const STUDIO_INFO = {
  name: 'Studio Fabíola Alves',
  subtitle: 'Fisioterapia & Massoterapia',
  professionalName: 'Fabíola Alves',
  slogan: 'Redescubra o prazer do movimento: no nosso studio, o seu bem-estar e a sua qualidade de vida são o nosso principal foco.',
  phone: '(41) 99136-9885',
  whatsappRaw: '5541991369885',
  instagram: '@fabiolaalves.studio',
  instagramUrl: 'https://instagram.com/fabiolaalves.studio',
  address: {
    street: 'Rua Luiz Parigot de Souza, 356',
    neighborhood: 'Portão',
    city: 'Curitiba',
    state: 'PR',
    zip: '81070-050',
    plusCode: 'GPF3+Q9 Portão, Curitiba - PR',
    googleMapsUrl: 'https://maps.google.com/?q=Rua+Luiz+Parigot+de+Souza+356+Portao+Curitiba+PR',
  },
  openingHours: {
    weekdays: 'Segunda a Sexta: 08:00 às 19:00',
    saturday: 'Sábado: Horários especiais sob agendamento prévio',
    sunday: 'Domingo: Fechado',
    closingHourToday: 'Fecha às 19:00',
  },
  rating: {
    score: 5.0,
    reviewCount: 7,
    platform: 'Google Maps',
  },
  amenities: [
    'Ambiente 100% climatizado e arejado',
    'Iluminação relaxante em LED azul (Cromoterapia)',
    'Maca ergonômica com higienização hospitalar',
    'Tatame emborrachado para Pilates Solo',
    'Acessibilidade completa para pessoas com deficiência',
    'Atendimento privativo e exclusivo por horário',
    'Parceiro Oficial Wellhub (antigo Gympass)',
  ]
};

export const STUDIO_SERVICES: StudioService[] = [
  {
    id: 'ventosaterapia',
    title: 'Ventosaterapia',
    category: 'massoterapia',
    shortDescription: 'Terapia milenar com sucção para desinflamação, alívio de dores musculares intensas e liberação de toxinas.',
    fullDescription: 'A ventosaterapia utiliza campânulas acrílicas de sucção que criam vácuo sobre os pontos de gatilho miofasciais. Estimula a microcirculação sanguínea, alivia contraturas profundas nas costas e ombros, acelerando a recuperação de bailarinos, atletas e pessoas com sobrecarga no trabalho diário.',
    benefits: [
      'Alívio quase imediato de pontos de tensão e nós musculares',
      'Aumento da oxigenação dos tecidos e eliminação de toxinas',
      'Redução de dores crônicas na região cervical, dorsal e lombar',
      'Aceleração da recuperação muscular pós-treino ou esforço físico'
    ],
    indications: [
      'Dores nas costas e rigidez no pescoço',
      'Praticantes de dança, musculação, corrida e esportes',
      'Tensões causadas por estresse e longas horas sentado(a)',
      'Contraturas e inflamações musculares recorrentes'
    ],
    durationMinutes: 50,
    featured: true,
    highlightTag: 'Destaque no Studio',
    iconName: 'Activity'
  },
  {
    id: 'massoterapia-pedras-quentes',
    title: 'Massoterapia & Pedras Quentes',
    category: 'massoterapia',
    shortDescription: 'Combinação de massagem terapêutica profunda com pedras vulcânicas aquecidas posicionadas na coluna.',
    fullDescription: 'Uma experiência de profundo relaxamento e autocuidado físico e mental. As pedras vulcânicas aquecidas transmitem calor penetrante diretamente ao longo da coluna vertebral e feixes musculares, desfazendo bloqueios de tensão enquanto manobras manuais especializadas restabelecem a harmonia corporal.',
    benefits: [
      'Termoterapia penetrante que relaxa a musculatura profunda',
      'Redução dos níveis de cortisol (hormônio do estresse) e ansiedade',
      'Sensação de leveza, bem-estar prolongado e melhora do sono',
      'Estímulo ao fluxo linfático e relaxamento sensorial em ambiente com luz azul'
    ],
    indications: [
      'Estresse acumulado, cansaço mental e esgotamento físico',
      'Dores lombares e cervicais de origem tensional',
      'Dificuldade para relaxar ou quadros de insônia',
      'Necessidade de uma pausa renovadora para autocuidado'
    ],
    durationMinutes: 60,
    featured: true,
    highlightTag: 'Experiência Premium',
    iconName: 'Sparkles'
  },
  {
    id: 'fisioterapia-reabilitacao',
    title: 'Fisioterapia & Reabilitação',
    category: 'fisioterapia',
    shortDescription: 'Avaliação clínica minuciosa e protocolo individualizado para tratamento de lesões, hérnias e dores articulares.',
    fullDescription: 'Atendimento focado na raiz do problema e não apenas no sintoma. A Fisioterapeuta Fabíola Alves realiza avaliação postural e biomecânica para prescrever terapias manuais e exercícios terapêuticos específicos que recuperam a amplitude, eliminam a dor e devolvem a confiança nos movimentos cotidianos.',
    benefits: [
      'Tratamento focado na causa raiz da dor ou lesão',
      'Recuperação da amplitude de movimento e estabilidade articular',
      'Prescrição de exercícios individualizados conforme sua biomecânica',
      'Prevenção de cirurgias e recidivas de dores na coluna'
    ],
    indications: [
      'Lombalgia, ciatalgia, hérnia de disco e bico de papagaio',
      'Lesões articulares (ombro, joelho, quadril e tornozelo)',
      'Reabilitação pós-trauma ou pós-operatória',
      'Correção de padrões posturais disfuncionais'
    ],
    durationMinutes: 50,
    featured: true,
    highlightTag: 'Cuidado Especializado',
    iconName: 'HeartPulse'
  },
  {
    id: 'pilates-solo',
    title: 'Pilates Solo (Mat Pilates)',
    category: 'pilates',
    shortDescription: 'Método focado no fortalecimento do core, ganho expressivo de flexibilidade e rejuvenescimento da coluna vertebral.',
    fullDescription: 'Prática de Pilates realizada no tatame com uso de bola suíça, anéis e peso do próprio corpo. Sob orientação próxima da fisioterapeuta, os alunos aprendem o padrão correto de movimento, restabelecendo a curvatura natural da coluna, ganhando mobilidade lombar e rejuvenescendo a capacidade funcional do corpo.',
    benefits: [
      'Ganho visível de flexibilidade e comprimento muscular em poucas semanas',
      'Fortalecimento profundo dos músculos abdominais e estabilizadores da coluna',
      'Melhora expressiva da postura no trabalho e no dia a dia',
      'Diminuição de sobrecargas vertebrais e prevenção de desgastes'
    ],
    indications: [
      'Pessoas com encurtamento muscular severo e pouca mobilidade',
      'Quem sofre com dores nas costas ao ficar sentado ou em pé',
      'Indivíduos de todas as idades buscando condicionamento seguro',
      'Usuários Wellhub buscando atividade preventiva orientada'
    ],
    durationMinutes: 50,
    featured: true,
    highlightTag: 'Resultados Comprovados',
    iconName: 'Zap'
  },
  {
    id: 'massagem-relaxante-liberacao',
    title: 'Massagem Relaxante & Liberação Miofascial',
    category: 'massoterapia',
    shortDescription: 'Toque terapêutico preciso para soltar aderências na fáscia muscular e proporcionar alívio imediato.',
    fullDescription: 'Combina técnicas manuais suaves e pressões pontuais em ambiente acolhedor, com lençóis limpos, toalhas macias e cromoterapia. Dissolve contraturas provocadas por posturas inadequadas ou sobrecarga emocional, renovando sua disposição.',
    benefits: [
      'Alívio da rigidez muscular matinal ou pós-trabalho',
      'Estímulo à circulação sanguínea periférica',
      'Redução da tensão na nuca, trapézio e região escapular',
      'Sensação de leveza e acolhimento em espaço privativo'
    ],
    indications: [
      'Sensação constante de peso nos ombros',
      'Dores de cabeça tensionais',
      'Jornadas de trabalho intensas em computador',
      'Busca por equilíbrio físico e mental'
    ],
    durationMinutes: 50,
    iconName: 'ShieldCheck'
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-broska',
    name: '30. Broska',
    role: 'Local Guide Google • 4 avaliações • 15 fotos',
    avatarInitials: '3B',
    avatarBgColor: 'bg-emerald-600',
    rating: 5,
    timeAgo: 'Avaliação recente',
    comment: 'Super recomendo, em 30 dias a idade da minha coluna regrediu de 110 para 60 anos. Atendimento de excelência, super profissional, prescreve os exercícios conforme a necessidade individual. Ambiente limpo e arejado.',
    highlightPhrase: 'Em 30 dias a idade da minha coluna regrediu de 110 para 60 anos.',
    verifiedLocalGuide: true,
  },
  {
    id: 'rev-nathaly',
    name: 'Nathaly Beleti',
    role: 'Cliente verificada • 3 avaliações',
    avatarInitials: 'NB',
    avatarBgColor: 'bg-cyan-600',
    rating: 5,
    timeAgo: 'Avaliação recente',
    comment: 'Fabi muito atenciosa, cuidadosa com a minha lesão. Profissional competente. Confio e indico.',
    highlightPhrase: 'Muito atenciosa, cuidadosa com a minha lesão. Confio e indico.',
    verifiedLocalGuide: false,
  },
  {
    id: 'rev-antonielle',
    name: 'Antonielle Baldissera',
    role: 'Local Guide Google • 12 avaliações',
    avatarInitials: 'AB',
    avatarBgColor: 'bg-indigo-600',
    rating: 5,
    timeAgo: '5 meses atrás',
    comment: 'Excelente profissional!! A Fabíola trabalha com muito carinho e dedicação com seus pacientes, recomendo!',
    highlightPhrase: 'Trabalha com muito carinho e dedicação com seus pacientes!',
    verifiedLocalGuide: true,
  },
  {
    id: 'rev-karin',
    name: 'Karin Costa',
    role: 'Cliente verificada • 3 avaliações',
    avatarInitials: 'KC',
    avatarBgColor: 'bg-teal-600',
    rating: 5,
    timeAgo: '5 meses atrás',
    comment: 'Super Recomendo!',
    highlightPhrase: 'Super Recomendo!',
    verifiedLocalGuide: false,
  },
  {
    id: 'rev-jaime',
    name: 'Jaime Korobinski',
    role: 'Cliente verificado • 3 avaliações',
    avatarInitials: 'JK',
    avatarBgColor: 'bg-amber-600',
    rating: 5,
    timeAgo: '5 meses atrás',
    comment: 'Muito boa.',
    highlightPhrase: 'Muito boa.',
    verifiedLocalGuide: false,
  }
];

export const STUDIO_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'parcerias',
    question: 'O Studio Fabíola Alves aceita Wellhub (antigo Gympass)?',
    answer: 'Sim! Somos parceiros oficiais do Wellhub (Gympass). Você pode realizar o check-in através do aplicativo para as modalidades disponíveis (como sessões de Pilates Solo e atendimentos integrados conforme seu plano). Entre em contato no nosso WhatsApp para reservar seu horário com antecedência.',
  },
  {
    id: 'faq-2',
    category: 'procedimentos',
    question: 'Como funciona a sessão de Ventosaterapia? Dói ou deixa marcas?',
    answer: 'A ventosaterapia é uma técnica confortável e indolor. Você sentirá uma leve sucção e aquecimento na área tratada que promove relaxamento imediato. É comum que fiquem marcas circulares avermelhadas ou arroxeadas nos pontos com maior estagnação de sangue e tensão; essas marcas são temporárias e costumam desaparecer naturalmente em poucos dias.',
  },
  {
    id: 'faq-3',
    category: 'procedimentos',
    question: 'O que levar para a aula de Pilates Solo?',
    answer: 'Recomendamos o uso de roupas leves e confortáveis que permitam boa mobilidade (como calça legging, bermuda ou moletom) e meias antiderrapantes. O Studio fornece tatame limpo, bolas suíças e todos os acessórios necessários para a execução dos exercícios.',
  },
  {
    id: 'faq-4',
    category: 'agendamento',
    question: 'Como é feito o primeiro atendimento e a avaliação fisioterapêutica?',
    answer: 'Na primeira sessão, a Fisioterapeuta Fabíola Alves realiza uma conversa detalhada para entender seu histórico de dores, lesões prévias, rotina de trabalho e objetivos. É feito um teste postural e de mobilidade para definir a conduta terapêutica mais segura e eficiente para você.',
  },
  {
    id: 'faq-5',
    category: 'geral',
    question: 'O espaço é acessível para pessoas com deficiência ou mobilidade reduzida?',
    answer: 'Sim! O Studio Fabíola Alves conta com estrutura acessível para pessoas com deficiência (PcD) e cadeirantes, garantindo conforto e segurança no acesso ao local e à sala de atendimento.',
  },
  {
    id: 'faq-6',
    category: 'agendamento',
    question: 'Qual o endereço e os horários de funcionamento?',
    answer: 'Estamos localizados na Rua Luiz Parigot de Souza, 356 – Bairro Portão, Curitiba/PR (CEP 81070-050). Atendemos de Segunda a Sexta das 08h às 19h, e aos Sábados em horários especiais mediante agendamento prévio pelo WhatsApp (41) 99136-9885.',
  }
];
