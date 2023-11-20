'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Undo2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GlobalErrorPage({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex h-screen w-screen items-center justify-center p-10">
        <div className="min-w-screen-md mx-auto min-h-screen bg-secondary">
          <div className="flex flex-col items-center justify-center gap-y-2 p-10 md:container">
            <div>
              <h1 className="text-2xl font-bold text-black md:text-4xl">Oops,</h1>
              <h1 className="text-2xl font-bold text-black md:text-4xl">Something went wrong...</h1>

              <p className="mt-4 text-gray-500 md:text-lg">
                Try going back to previous page, going to dashboard page, or Contact us for more information.
              </p>
            </div>

            <div className="mt-8 flex justify-around gap-x-4">
              <Button variant="outline" onClick={() => router.back()}>
                <Undo2 className="mr-2 h-4 w-4" /> Go Back
              </Button>
              <Button asChild>
                <Link href="/dashboard">
                  <ArrowRight className="mr-2 h-4 w-4" /> Go to Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
