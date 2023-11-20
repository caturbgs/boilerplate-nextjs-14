import { CourseMaterialField } from '@/types';

export interface CourseMaterial {
  id: string;
  name: string;
  fields: CourseMaterialField[];
  order: number;
  type: string;
  courseId: string;
  createdAt: string;
  updatedAt: string;
}
