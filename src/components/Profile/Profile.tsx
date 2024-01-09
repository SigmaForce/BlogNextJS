'use client';
import { Site } from '@/models/index';
import React from 'react';
import * as S from './styles';

type ProfileProps = {
  items: Site;
};

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div>
      <S.Image
        src="/assets/images/profile.jpg"
        alt="Profile Image"
        width={80}
        height={80}
        title="Profile Image"
        className=""
        priority
      />
      <S.Title className="">{items.title} </S.Title>
      <S.Subtitle className="">{items.subtitle}</S.Subtitle>
    </div>
  );
};
