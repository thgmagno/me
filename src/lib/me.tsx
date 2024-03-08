import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Me = {
  name: 'Thiago Magno',
  bio: 'Programador e Desenvolvedor Web',
  imageURL: '/image/img_profile_2.jpeg',
  socialMedia: [
    {
      icon: <FaGithub />,
      link: 'https://github.com/thgmagno',
      label: 'Github',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/in/thgmagno',
      label: 'Linkedin',
    },
    {
      icon: <FaInstagram />,
      link: 'https://instagram.com/thgmagno',
      label: 'Instagram',
    },
    { icon: <FaEnvelope />, link: 'mailto:thgmgn@gmail.com', label: 'E-mail' },
  ],
  mainContent: [
    {
      title: 'Sobre mim',
      description:
        'E aí, pessoal! Tranquilo? Sou o Thiago Magno, tô na casa dos 20 e poucos anos e tô morando em Palhoça, SC, um lugarzinho massa demais! Comecei nessa parada de informática com um curso técnico e tô curtindo a brincadeira. Curto desafios tecnológicos e sou apaixonado pelo minimalismo - menos é mais, sempre! Na área profissional, busco eficiência e estilo. Fora isso, adoro caminhar e ouvir música. Bora trocar uma ideia sobre tecnologia?',
    },
    {
      title: 'Habilidades não técnicas',
      description:
        'No trampo, sou daqueles que leva a sério: horários, prazos, tudo no esquema. Curto seguir padrões, mantendo a qualidade do trabalho. Gosto de deixar tudo organizado.',
    },
    {
      title: 'Habilidades técnicas',
      description:
        'Agora, tecnicamente falando, tô na área de JavaScript e TypeScript, mandando bem em React, Next.js, Node.js, Nest.js, e botando estilo com Tailwind CSS. Tudo isso faz parte da minha pegada de criar soluções modernas e eficientes. Se precisar de alguém que não deixa nada pra depois e manda bem nos códigos, tamo junto!',
    },
  ],
  projects: [
    {
      link: 'https://aluno-connect.vercel.app/',
      title: 'Aluno Connect',
      description:
        'O Aluno Connect é uma ferramenta para escolas que buscam uma gestão eficiente da frequência dos alunos. Com recursos avançados, níveis de perfil com permissões diferenciadas e notificações em tempo real.',
      imageURL: '/image/aluno_connect.png',
    },
    {
      link: 'https://drag-and-drop-framer-motion.vercel.app/',
      title: 'Tune Flow',
      description:
        'Este aplicativo oferece uma experiência única de playlist, permitindo que você arraste e solte as músicas para criar a trilha sonora perfeita para cada momento.',
      imageURL: '/image/tune_flow.png',
    },
    {
      link: 'https://input-cartao-de-credito.vercel.app/',
      title: 'Card Canvas',
      description:
        'Este aplicativo oferece uma abordagem envolvente para o preenchimento de informações de cartão de crédito, transformando um processo rotineiro em uma experiência visualmente impressionante.',
      imageURL: '/image/card_canvas.png',
    },
    {
      link: 'https://toast-notification-tailwind.vercel.app/',
      title: 'Toast Messages',
      description:
        'Este projeto foi concebido para demonstrar a implementação de notificações toast, uma parte crucial da experiência do usuário em aplicativos modernos.',
      imageURL: '/image/toast_messages.png',
    },
    {
      link: 'https://gerenciador-habitos-next.vercel.app/',
      title: 'Meta Diária',
      description:
        'Este aplicativo foi projetado para ajudar você a desenvolver e manter hábitos positivos, promovendo uma vida equilibrada e saudável.',
      imageURL: '/image/meta_diaria.png',
    },
  ],
}
