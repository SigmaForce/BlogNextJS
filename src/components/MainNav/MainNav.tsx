import React from 'react';
import * as S from './styles';
import { MainNavType } from '@/models';
import Link from 'next/link';

type MainNavProps = {
  items: MainNavType;
};

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <S.Nav className="">
      <S.List>
        {items.mainNav.map((item) => (
          <S.ListItem key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  );
};
