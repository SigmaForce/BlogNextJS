import { notFound } from 'next/navigation';
import { Post } from '@/components/Post';
import { PostService } from '@/services';

export default function PostPage({ params }: { params: { slug: string } }) {
  const { post } = PostService.getBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Post post={post} />
    </div>
  );
}
