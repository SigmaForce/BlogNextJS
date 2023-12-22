import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { paginationPages } from '@/functions';
import { PostService } from '@/services';

export default function Page({ params }: { params: { page: string } }) {
  const currentPage = +params.page;
  const { posts, numbPages } = PostService.getAll({ currentPage });
  const { prevPage, nextPage } = paginationPages(currentPage);

  if (!posts.length) {
    return (
      <div>
        <h2>Não Há Posts!</h2>
      </div>
    );
  }

  return (
    <>
      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numbPages={numbPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
}
