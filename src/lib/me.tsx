import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Me = {
  nome: 'Thiago Magno',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus laudantium pariatur minus, quia nobis sed obcaecati repudiandae at, earum non asperiores! Quos cum nulla dolor, recusandae ea aperiam eius?',
    },
    {
      title: 'Habilidades não técnicas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus laudantium pariatur minus, quia nobis sed obcaecati repudiandae at, earum non asperiores! Quos cum nulla dolor, recusandae ea aperiam eius?',
    },
    {
      title: 'Habilidades técnicas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus laudantium pariatur minus, quia nobis sed obcaecati repudiandae at, earum non asperiores! Quos cum nulla dolor, recusandae ea aperiam eius?',
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
