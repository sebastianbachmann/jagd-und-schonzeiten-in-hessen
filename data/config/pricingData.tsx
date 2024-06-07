import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Auf Lebenszeit',
    id: 'tier-1',
    href: '/jagdundschonzeiten',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '10€', '2': '$0' },
    description:
      'Alle digitalen Downloads mit einer praktischen Einmalzahlung erwerben. ',
    features: ['Kalenderdatei', 'PDF Datei', 'Lebenslange Updates'],
    featured: false,
    highlighted: false,
    cta: 'Jetzt kaufen!',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '23f8a091-0677-4c40-90e1-4eb6756c4475',
    value: '1',
    label: 'Lifetime',
    priceSuffix: 'Einmalzahlung',
  },
];
