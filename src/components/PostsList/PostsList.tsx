import React from 'react';
import { Grid } from '../Grid';
import { PostCard } from '../PostCard';
import { BlogPost } from '@/models/BlogPost';

import * as S from './styles';

type PostsListProps = {
  posts: BlogPost[];
};

export const PostsList = ({ posts }: PostsListProps) => {
  const firstPost = posts[0];

  const restPosts = posts.slice(1);

  return (
    <S.Container>
      {firstPost && <PostCard post={firstPost} isMain />}
      <Grid sm={1} md={2} lg={3} gap={10}>
        {restPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
