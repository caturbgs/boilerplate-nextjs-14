'use server';

import { getTokenHeaders } from '@/utils/auth';

export async function getCurrentUser() {
  const { headers } = getTokenHeaders();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/user/my-profile`, {
    headers,
    cache: 'no-store',
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to fetch current user data');
  }

  return resp;
}

export async function login(formData: string) {
  const { headers } = getTokenHeaders(true);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/auth/login`, {
    method: 'POST',
    headers,
    body: formData,
    cache: 'no-store',
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to login');
  }

  return resp;
}

export async function logout() {
  const { headers } = getTokenHeaders(true);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/auth/logout`, {
    method: 'POST',
    headers,
    cache: 'no-store',
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to logout');
  }

  return resp;
}

export async function checkToken(): Promise<boolean> {
  try {
    const { headers } = getTokenHeaders();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/auth/check-token`, {
      headers,
    });
    const { data } = await res.json();

    if (!res.ok) {
      return false;
    }

    return data;
  } catch {
    return false;
  }
}
