import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto p-10 px-2 lg:container lg:max-w-screen-xl">
      <div className="text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Page Not Found</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Sorry, we couldn't find the page you're looking for.</p>
        <Button className="mt-8" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
