'use server';

import { getTokenHeaders } from '@/utils/auth';

export async function getAllUser() {
  const { headers } = getTokenHeaders();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/user`, {
    headers,
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to fetch all users');
  }

  return resp;
}

export async function setPermissionUser(formData: string) {
  const { headers } = getTokenHeaders(true);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/user/set-permission`, {
    method: 'POST',
    headers,
    body: formData,
  });
  const resp = await res.json();

  if (!res.ok) {
    throw new Error(resp.message ?? 'Failed to set permission');
  }

  return resp;
}
