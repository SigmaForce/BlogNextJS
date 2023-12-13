import { PostCard } from '@/components/PostCard';
import { Grid } from '@/components/Grid';
import { Profile } from '@/components/Profile';
import { siteConfig } from '@/config';
import { PostService } from '@/services';

export default function Home() {
  const { posts } = PostService.getAll();
  return (
    <main>
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>

      <Grid sm={1} md={2} lg={3} gap={10}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </main>
  );
}
