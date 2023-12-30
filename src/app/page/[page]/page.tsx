import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { siteConfig } from '@/config';
import { paginationPages } from '@/functions';
import { PostService } from '@/services';

type PageProps = {
  params: { page: string };
};

export function generateStaticParams() {
  const { posts } = PostService.getAll();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const currentPage = +params.page;
  const { posts } = PostService.getAll({ currentPage });

  if (!posts.length) {
    return {
      title: 'Não há posts!'
    };
  }

  return {
    title: `Página ${currentPage}`,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/page/${currentPage}`,
      title: `Página ${currentPage}`,
      description: 'Lista de Posts',
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${posts[0].frontmatter.image}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Página ${currentPage}`,
      description: 'Lista de Posts',
      images: [`${siteConfig.url}${posts[0].frontmatter.image}`]
    }
  };
}

export default function Page({ params }: PageProps) {
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
