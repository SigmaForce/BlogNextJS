import { LinkedinIcon, InstagramIcon, GithubIcon } from '@/components/Icons';
import { MainNavType } from '@/models/index';

export const socialLinkConfig: MainNavType = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/sigmaforc3/',
      icon: <LinkedinIcon size={28} />
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/sigmaforc3/',
      icon: <InstagramIcon size={28} />
    },
    {
      title: 'Github',
      href: 'https://github.com/SigmaForce',
      icon: <GithubIcon size={28} />
    }
  ]
};
