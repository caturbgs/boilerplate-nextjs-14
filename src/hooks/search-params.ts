'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useSetSearchParams = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const setSearchParams = (key: string, value: string, refresh = false) => {
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);

    if (refresh) {
      router.refresh();
    }
  };

  return { setSearchParams, searchParams };
};
