import React from 'react';

export interface SidebarMenuProps {
  group?: string;
  data: SidebarMenuContentProps[];
}

export interface SidebarMenuContentProps {
  title: string;
  href: string;
  icon?: React.ReactNode;
  children?: SidebarMenuContentProps[];
  hidden?: boolean;
}
