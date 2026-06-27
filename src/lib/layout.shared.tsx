import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, appUrl, siteUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <span className="font-semibold tracking-tight">{appName}</span>,
      transparentMode: 'top',
    },
    links: [
      { text: 'Open app', url: appUrl, external: true },
      { text: 'pagerise.io', url: siteUrl, external: true },
    ],
  };
}
