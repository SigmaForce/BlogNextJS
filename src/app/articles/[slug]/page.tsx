import { Post } from '@/components/Post';
import { PostService } from '@/services';

export default function PostPage({ params }: { params: { slug: string } }) {
  const { post } = PostService.getBySlug(params.slug);

  if (!post) {
    return null;
  }

  //TODO: checar se o post existe

  return (
    <div>
      <Post post={post} />
    </div>
  );
}
