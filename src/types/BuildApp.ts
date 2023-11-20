export interface BuildApp {
  id: string;
  name: string;
  filePath: string;
  type: string;
  version?: string;
  // isActive: boolean; // deprecated
  createdAt: string;
  updatedAt: string;
}
