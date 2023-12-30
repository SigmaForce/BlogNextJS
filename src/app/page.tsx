import { Profile } from '@/components/Profile';
import { siteConfig } from '@/config';
import { PostService } from '@/services';
import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { paginationPages } from '@/functions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/images/download.png'
      }
    ]
  },
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/assets/images/download.png`]
  }
};

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
