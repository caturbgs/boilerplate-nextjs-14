import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email().nullable(),
  nrp: z.string(),
  role: z.string(),
  nip: z.string().nullable(),
  position: z.string().nullable(),
  avatarPath: z.string().nullable(),
  permission: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string(),
      name: z.string(),
    })
  ),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const userSetPermissionSchema = z.object({
  userLoginId: z.string().uuid(),
  institutionId: z.array(z.string().uuid()),
  admin: z.boolean().optional(),
});
