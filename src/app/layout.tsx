import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/Header';

import { Layout } from '@/components/Layout';
import { MainNav } from '@/components/MainNav';
import { mainNavConfig } from '@/config';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: '%s | Leonardo Lucas',
    default: 'Leonardo Lucas'
  },
  description: 'Leonardo Lucas - Software Engineer',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        async
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />
      <body className="bg-primary text-gray-100">
        <Header>
          <MainNav items={mainNavConfig.mainNav} />
        </Header>

        <Layout>
          <div className="py-20">{children} </div>
        </Layout>
        <BackToTop />
        <Footer items={mainNavConfig.mainNav} />
      </body>
    </html>
  );
}
