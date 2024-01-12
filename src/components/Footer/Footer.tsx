import React from 'react';
import { Layout } from '@/components/Layout';
import { Logo } from '../Logo';
import { siteConfig, socialLinkConfig } from '@/config';
import { NavItem } from '@/models/index';
import Link from 'next/link';
import * as S from './styles';
import { List, ListItem } from '@/components/List';
import { SocialMedia } from '../SocialMedia';

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
            <Logo width={256} />
            <S.Title className="text-bold text-xl ">{siteConfig.title}</S.Title>
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Redes</S.Title>
            <SocialMedia items={socialLinkConfig.mainNav} />
          </S.Section>
          <S.Section>
            <S.Title>Sitemap</S.Title>
            <List className="flex-col">
              {items.map((item) => (
                <ListItem key={item.href}>
                  {' '}
                  <Link href={item.href}>{item.title}</Link>
                </ListItem>
              ))}
            </List>
          </S.Section>
        </S.Content>
        <S.CopyrightContainer className="">
          <S.Copyright className="mb-2 max-w-[18rem] text-center text-gray-500 sm:max-w-fit ">
            Todos os direitos reseverdos © Leonardo Lucas {fullYear}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
