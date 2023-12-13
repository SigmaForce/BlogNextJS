import React from 'react';
import * as S from './styles';

import { NavItem } from '@/models/Index';
import { List, ListItem } from '@/components/List';

type SocialMediaProps = {
  items: NavItem[];
};

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <List className="flex-col">
      {items.map((item) => (
        <ListItem key={item.title}>
          <S.Link href={item.href}>
            {item?.icon}
            <S.Text>{item.title}</S.Text>
          </S.Link>
        </ListItem>
      ))}
    </List>
  );
};
