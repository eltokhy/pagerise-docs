import { redirect } from 'next/navigation';

// Docs-only subdomain: send the root straight to the documentation.
export default function HomePage() {
  redirect('/docs');
}
