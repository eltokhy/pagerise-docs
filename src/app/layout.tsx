import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Pagerise Docs',
    template: '%s · Pagerise Docs',
  },
  description:
    'Documentation for Pagerise — the agency SEO & AI-visibility platform. Guides for every tool plus end-to-end workflows.',
  metadataBase: new URL('https://docs.pagerise.io'),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
