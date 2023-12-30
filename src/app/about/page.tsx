import React from 'react';
import { siteConfig } from '@/config';
import * as S from './styles';
import { Link } from '@/components/Link';

export const metadata = {
  title: 'Sobre Mim',
  description: 'Conheça um pouco mais sobre mim',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: 'Sobre Mim',
    url: '/about',
    description: 'Conheça um pouco mais sobre mim',
    siteName: 'Sobre Mim',
    images: [
      {
        url: `${siteConfig.url}/assets/images/download.png`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Mim',
    description: 'Conheça um pouco mais sobre mim',
    images: [`${siteConfig.url}/assets/images/download.png`]
  },
  robots: 'all'
};

export default function About() {
  return (
    <main>
      <S.Title>Sobre Mim</S.Title>
      <S.Subtitle>Primeiramente, agradeço por estar aqui.</S.Subtitle>

      <S.ImageContainer>
        <S.Image src="/assets/images/profile.jpg" alt="Foto de Perfil" fill />
      </S.ImageContainer>

      <S.Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
        obcaecati, libero aliquam magni fuga molestias at nostrum sapiente
        perferendis autem sunt consectetur ex eum quisquam et quia enim
        voluptatibus sit.
      </S.Paragraph>

      <S.Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
        obcaecati, libero aliquam magni fuga molestias at nostrum sapiente
        perferendis autem sunt consectetur ex eum quisquam et quia enim
        voluptatibus sit.
      </S.Paragraph>
      <S.Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
        obcaecati, libero aliquam magni fuga molestias at nostrum sapiente
        perferendis autem sunt consectetur ex eum quisquam et quia enim
        voluptatibus sit.
        <Link
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </Link>
      </S.Paragraph>
      <S.Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
        obcaecati, libero aliquam magni fuga molestias at nostrum sapiente
        perferendis autem sunt consectetur ex eum quisquam et quia enim
        voluptatibus sit.
      </S.Paragraph>
    </main>
  );
}
