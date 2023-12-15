import { formatDate } from '@/functions';
import { BlogPost } from '@/models/BlogPost';
import React from 'react';
import { Mdx } from '@/components/Mdx';
import * as S from './styles';
import { BackButton } from './components';

type PostProps = {
  post: BlogPost;
};

export const Post = ({ post }: PostProps) => {
  const { body, frontmatter, readingTime } = post;
  const { title, description, date, image } = frontmatter;
  const formattedDate = formatDate(date);
  return (
    <S.Container>
      <S.IconContainer>
        <BackButton />
      </S.IconContainer>
      <S.ImageContainer>
        <S.Image src={image} alt={title} fill priority />
      </S.ImageContainer>
      <S.Content>
        <S.DateContainer>
          <S.Date>
            {formattedDate} - {readingTime} minutos de Leitura
          </S.Date>
          <S.Title>{title} </S.Title>
          <S.Description>{description} </S.Description>
        </S.DateContainer>
      </S.Content>

      <Mdx code={body.code} />
    </S.Container>
  );
};
