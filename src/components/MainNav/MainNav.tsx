'use client';

import * as S from './styles';
import { NavItem } from '@/models';
import Link from 'next/link';
import { ToggleButton } from './components';
import { useMainNav } from './hooks';

type MainNavProps = {
  items: NavItem[];
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();
  return (
    <>
      <S.Nav className="">
        <S.List>
          {items.map((item) => (
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

      {isOpenMenu && (
        <S.ContainerMobile>
          <S.NavMobile>
            <S.ListMobile>
              {items.map((item) => (
                <S.ListItemMobile key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </S.ContainerMobile>
      )}
    </>
  );
};
