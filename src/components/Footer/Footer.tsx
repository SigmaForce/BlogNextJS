import React from 'react';
import { Layout } from '@/components/Layout';
import { Logo } from '../Logo';
import { siteConfig } from '@/config';
import { NavItem } from '@/models';
import Link from 'next/link';
import * as S from './styles';

type FooterProps = {
  items: NavItem[];
};

export const Footer = ({ items }: FooterProps) => {
  const fullYear = new Date().getFullYear();
  return (
    <Layout>
      <S.Container>
        <S.Content className="">
          <S.Section role="contentinfo">
            <Logo />
            <S.Title className="text-bold text-xl ">{siteConfig.title}</S.Title>
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Redes</S.Title>
          </S.Section>
          <S.Section>
            <S.Title>Sitemap</S.Title>
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  {' '}
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </S.Section>
        </S.Content>
        <S.CopyrightContainer className="">
          <S.Copyright className="mb-2 max-w-[18rem] text-center text-gray-500 sm:max-w-fit ">
            Todos os direitos reseverdos © Junior Alves {fullYear}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
