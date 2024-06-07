export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [{ href: '/all-articles', title: 'Blog' }],
  },
  {
    columnName: 'Product',
    links: [
      { href: '/pdf-datei', title: 'PDF Datei' },
      { href: '/kalender-datei', title: 'Kalender Datei' },
    ],
  },
  { columnName: 'Docs', links: [] },
  {
    columnName: 'Support',
    links: [
      { href: '/terms', title: 'Terms of Service' },
      { href: '/privacy', title: 'Privacy Policy' },
    ],
  },
];
