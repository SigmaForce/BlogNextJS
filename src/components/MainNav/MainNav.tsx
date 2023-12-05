'use client';

import * as S from './styles';
import { MainNavType } from '@/models';
import Link from 'next/link';
import { ToggleButton } from './components';
import { useMainNav } from './hooks';

type MainNavProps = {
  items: MainNavType;
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();
  return (
    <>
      <S.Nav className="">
        <S.List>
          {items.mainNav.map((item) => (
            <S.ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>
    </>
  );
};
