import { OutputBlockData } from '@/editorjs/editorjs';
import { Data3DAsset } from './Data3DAsset';

export interface CourseMaterial {
  id: string;
  name: string;
  order: number;
  type: string;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CourseMaterialDetail {
  id: string;
  name: string;
  order: number;
  type: 'panel' | '3d';
  courseId: string;
  courseMaterialField: OutputBlockData<string, any>[];
  data3DOnCourseMaterial: Data3DAsset[];
  data3dAsset: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CourseMaterialField {
  id: string;
  type: string;
  order: number;
  value: string | null;
  courseMaterialId: string;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
