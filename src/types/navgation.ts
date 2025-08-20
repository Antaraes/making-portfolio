export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
  /** If true, active match will use startsWith instead of exact match */
  startsWith?: boolean;
};
