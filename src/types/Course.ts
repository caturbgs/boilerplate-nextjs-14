import { Activity, CourseMaterial, Data3DAsset, Institution } from '@/types';

export interface Course {
  id: string;
  name: string;
  target: string;
  goal: string;
  imagePath: string;
  institutionId?: string;
  institution?: Institution;
  userActivities: Activity[];
  courseMaterials: CourseMaterial[];
  data3dAsset?: string;
  courseAsset: Data3DAsset[];
  createdAt: string;
  updatedAt: string;
}
