export type Item = {
  name: string;
  slug: string;
  icon: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Merchant',
    items: [
      {
        name: 'Dashboard',
        slug: 'Dashboard',
        icon: '/svg/Dashboard.svg',
      },
      {
        name: 'Shipment',
        slug: 'Shipment',
        icon: 'svg/Shipment.svg',
      },
      {
        name: 'Tracking',
        slug: 'Tracking',
        icon: 'svg/Tracking.svg',
      },
      {
        name: 'Add Shipment',
        slug: 'AddShipment',
        icon: 'svg/Addshipment.svg',
      },
         {
        name: 'History',
        slug: 'History',
        icon: 'svg/History.svg',
      },
      {
        name: 'Live Chat',
        slug: 'LiveChat',
        icon: 'svg/Live.svg',
      },
      {
        name: 'Settings',
        slug: 'Settings',
        icon: 'svg/Settings.svg',
      },
      {
        name: 'Log Out',
        slug: 'LogOut',
        icon: 'svg/Logout.svg',
      },
    ],
  },
];
