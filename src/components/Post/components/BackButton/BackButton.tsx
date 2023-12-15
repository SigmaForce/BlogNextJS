import React from 'react';
import * as S from './styles';

export const BackButton = () => {
  return (
    <S.Link href="/">
      <S.IconContainer>
        <S.Icon size={20} className="" />
      </S.IconContainer>
      <S.Text>Voltar a Listagem</S.Text>
    </S.Link>
  );
};
