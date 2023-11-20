import { AssessmentOption } from '@/types';

export interface Assessment {
  id: string;
  question: string;
  assessmentOption: AssessmentOption[];
  order: number;
  imagePath: string;
  courseId: string;
  createdAt: string;
  updatedAt: string;
}
