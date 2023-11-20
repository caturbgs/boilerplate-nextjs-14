export interface CourseMaterialField {
  id: string;
  type: string;
  order: number;
  value?: string;
  courseMaterialId: string;
  parentId?: string;
}
