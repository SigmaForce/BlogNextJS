import React from 'react';
import * as S from './styles';
import { Logo } from '@/components/Logo';

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo width={196} />
        {children}
      </S.Content>
    </S.Container>
  );
};
