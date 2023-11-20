export interface Institution {
  id: string;
  name: string;
  title: string;
  description: string;
  bgImagePath?: string;
  thumbImagePath?: string;
  duration?: string;
  successorId: string | null;
  successor?: Institution;
  predecessor?: Institution[];
  createdAt: string;
  updatedAt: string;
}
