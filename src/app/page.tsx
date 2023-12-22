import { Profile } from '@/components/Profile';
import { siteConfig } from '@/config';
import { PostService } from '@/services';
import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { paginationPages } from '@/functions';

export default function Home() {
  const { posts, currentPage, numbPages } = PostService.getAll();
  const { prevPage, nextPage } = paginationPages(currentPage);
  console.log(prevPage, nextPage);
  return (
    <main>
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>
      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numbPages={numbPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </main>
  );
}
