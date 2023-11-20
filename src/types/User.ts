export interface User {
  id: string;
  name: string;
  email: string;
  nrp: string;
  role: string;
  nip?: string;
  position?: string;
  avatar?: string;
  permission: UserPermission[];
  createdAt: string;
  updatedAt: string;
}

export interface UserPermission {
  id: string;
  title: string;
  name: string;
}
