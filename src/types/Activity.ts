import { BuildApp, Course, Data3DAsset, User } from '@/types';
import { Institution } from './Institution';

export interface Activity {
  id: string;
  description: string;
  institution: Institution | null;
  asset3d: Data3DAsset | null;
  buildApp: BuildApp | null;
  course: Course | null;
  userLoginId: string | null;
  userLogin: User | null;
  createdAt: string;
  updatedAt: string;
}
