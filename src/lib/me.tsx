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
    { link: '#', title: 'Projeto 01', description: '', imageURL: '' },
    { link: '#', title: 'Projeto 02', description: '', imageURL: '' },
    { link: '#', title: 'Projeto 03', description: '', imageURL: '' },
  ],
}
