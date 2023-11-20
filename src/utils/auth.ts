import { Permission } from '@/types/Permission';
import { checkToken } from '@/repositories/auth';
import { cookies } from 'next/headers';

type HeadersAuth = {
  headers: {
    Authorization: string;
    userLoginId: string;
    'Content-Type'?: string;
  };
};

export function getTokenHeaders(postMethod?: boolean): HeadersAuth {
  const token = cookies().get('Authorization')?.value!;
  const userLoginId = cookies().get('userLoginId')?.value!;

  if (postMethod) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        userLoginId: userLoginId,
      },
    };
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      userLoginId: userLoginId,
    },
  };
}

export async function isAuthenticated(): Promise<boolean> {
  const token = cookies().get('Authorization');

  if (token) {
    return await checkToken();
  }

  return false;
}

export function isRole(role: 'super admin' | 'admin' | 'teacher'): boolean {
  const token = cookies().get('Authorization');

  if (token) {
    const tokenDecoded = JSON.parse(atob(token.value.split('.')[1]));

    return tokenDecoded.role.toLowerCase() === role;
  }

  return false;
}

export function getUserPermissions(): Permission[] {
  const token = cookies().get('userPermissions');

  if (token) {
    const tokenDecoded = JSON.parse(token.value);

    return tokenDecoded;
  }

  return [];
}
