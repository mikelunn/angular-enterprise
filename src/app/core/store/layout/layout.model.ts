/**
 * Created by complunm on 5/22/2017.
 */
export interface NavItem {
  name: string;
  icon: string;
  route: string;
  children?: NavItem[];
};

export interface Layout {
  navButtonActive: boolean;
  navMenuTitle: string;
  defaultNavItems: NavItem[];
  initialNavItems: NavItem[];
  currentNavItems?: NavItem[];
  previousNavItems?: any[];
}

export const initialLayout: Layout = {
  navButtonActive: false,
  navMenuTitle: 'Main Menu',
  defaultNavItems: [
    {
      name: 'Home',
      icon: 'fa-home',
      route: '/'
    }
  ],
  initialNavItems: [],
  currentNavItems: [],
  previousNavItems: []
};
