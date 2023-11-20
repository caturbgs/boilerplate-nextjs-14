import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().nonempty('Username is required'),
  password: z.string().min(6, { message: 'Password should be at least 6 characters long' }),
});
