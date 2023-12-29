import React from 'react';
import { Grid } from '../Grid';
import { PostService } from '@/services';
import { PostCard } from '../PostCard';

import * as S from './styles';
export const RecommendedPosts = () => {
  const { posts } = PostService.getAll();
  const postRecommended = posts.slice(0, 2);

  return (
    <S.Container>
      <Grid sm={1} md={2} lg={2} gap={2}>
        {postRecommended.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
