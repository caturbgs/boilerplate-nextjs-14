'use server';

import { login, logout } from '@/repositories/auth';
import { isAuthenticated } from '@/utils/auth';
import { loginFormSchema } from '@/validations/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { ActionResponse } from '../types/Action';

export async function loginAction(
  input: z.infer<typeof loginFormSchema>,
  saveLogin: boolean = true
): Promise<ActionResponse> {
  const payload = JSON.stringify(input);

  try {
    const resp = await login(payload);
    const expiresValue = saveLogin ? new Date(new Date().getTime() + 9 * 60 * 60 * 1000) : undefined;

    cookies().set('Authorization', resp.data.token, {
      // set cookie for 9 hours
      expires: expiresValue,
    });
    cookies().set('userLoginId', resp.data.user_id, {
      expires: expiresValue,
    });
    cookies().set('userPermissions', JSON.stringify(resp.data.permission), {
      expires: expiresValue,
    });

    return {
      status: true,
      message: 'Logged in successfully',
    };
  } catch (error) {
    console.error('Error loginAction', error);

    if (error instanceof Error) {
      return {
        status: false,
        message: error.message,
      };
    } else {
      return {
        status: false,
        message: 'Something went wrong, please try again later.',
      };
    }
  }
}

export async function logoutAction() {
  await logout();

  cookies().delete('Authorization');
  cookies().delete('userLoginId');
  cookies().delete('userPermissions');
}

export async function checkAuthenticationAction() {
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    await logoutAction();

    redirect('/login');
  }
}
