import { formatPosts, paginationPosts } from '@/functions';
import { allPosts } from '../../../.contentlayer/generated';

type GetPostAllParams = {
  limit?: number;
  currentPage?: number;
};

export const PostService = {
  getAll: ({ limit = 7, currentPage = 1 }: GetPostAllParams = {}) => {
    const formattedPosts = formatPosts(allPosts);
    const numbPages = Math.ceil(formattedPosts.length / limit);
    const paginatePosts = paginationPosts(formattedPosts, limit, currentPage);
    return {
      posts: paginatePosts,
      numbPages,
      currentPage
    };
  },
  getBySlug: (slug: string) => {
    const formattedPosts = formatPosts(allPosts);
    const post = formattedPosts.find((post) => post.slug === slug);
    return {
      post: post
    };
  }
};
