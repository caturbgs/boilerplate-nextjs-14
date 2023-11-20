'use server';

import { setPermissionUser } from '@/repositories/user';
import { userSetPermissionSchema } from '@/validations/user';
import { revalidatePath } from 'next/cache';
import { type z } from 'zod';
import { ActionResponse } from '../types/Action';

export async function setPermissionUserAction(input: z.infer<typeof userSetPermissionSchema>): Promise<ActionResponse> {
  try {
    const payload = JSON.stringify(input);
    const res = await setPermissionUser(payload);

    revalidatePath('/dashboard/user');

    return {
      status: true,
      message: res.message,
    };
  } catch (error) {
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
