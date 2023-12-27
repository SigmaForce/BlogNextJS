import React from 'react';
import * as S from './styles';
import { Link } from '@/components/Link';

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
