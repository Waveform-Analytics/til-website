import TIL from '@/components/TIL';
import { headers } from 'next/headers';

export default async function Page() {
  // Get the host from headers
  const headersList = headers();
  const host = headersList.get('host') || 'localhost:3001';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const res = await fetch(`${protocol}://${host}/api/til`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  const data = await res.json();
  const posts = data.posts;
  
  return <TIL initialPosts={posts} />;
}