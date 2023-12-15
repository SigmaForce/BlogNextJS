'use client';
import React from 'react';
import * as S from './styles';
import { useBackToTop } from './hooks/useBackToTop';

export const BackToTop = () => {
  const { show } = useBackToTop();

  return (
    <>
      {show && (
        <S.Container>
          <S.Button
            title="Voltar ao Topo"
            onClick={() => window.scrollTo(0, 0)}
            aria-label="Voltar ao Topo"
          >
            <S.Icon />
          </S.Button>
        </S.Container>
      )}
    </>
  );
};
