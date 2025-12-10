export interface NavItem {
  label: string;
  href?: string;
  icon?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface MegaMenuItem {
  label: string;
  sections?: NavSection[];
  items?: NavItem[];
  layout?: 'list' | 'grid' | 'columns';
  columnCount?: number;
}

export const navigationData: MegaMenuItem[] = [
  {
    label: 'Scanner Types',
    layout: 'list',
    items: [
      {
        label: 'Car Diagnostic Tools for Smart Phones',
        href: '/scanners/smart-phone-tools',
      },
      {
        label: 'Hand-held Scanners (Built-in LCD Screen)',
        href: '/scanners/handheld-lcd',
      },
    ],
  },
  {
    label: 'Car Makes',
    layout: 'grid',
    items: [
      {
        label: 'Universal Car Diagnostic Tools & Scanners',
        href: '/car-makes/universal',
        icon: '/car-icon.png',
      },
      {
        label: 'Audi Diagnostic Tools & Scanners',
        href: '/car-makes/audi',
        icon: '/audi-logo.png',
      },
      {
        label: 'Bentley Diagnostic Tools & Scanners',
        href: '/car-makes/bentley',
        icon: '/car-icon.png',
      },
      {
        label: 'BMW / MINI / Rolls-Royce Diagnostic Tools & Scanners',
        href: '/car-makes/bmw',
        icon: '/bmw-logo.png',
      },
      {
        label: 'Bugatti Diagnostic Tools & Scanners',
        href: '/car-makes/bugatti',
        icon: '/car-icon.png',
      },
      {
        label: 'Volkswagen (VW) Diagnostic Tools & Scanners',
        href: '/car-makes/volkswagen',
        icon: '/vw-logo.png',
      },
      {
        label: 'Citroen Diagnostic Tools & Scanners',
        href: '/car-makes/citroen',
        icon: '/car-icon.png',
      },
      {
        label: 'Ford Diagnostic Tools & Scanners',
        href: '/car-makes/ford',
        icon: '/car-icon.png',
      },
      {
        label: 'Lamborghini Diagnostic Tools & Scanners',
        href: '/car-makes/lamborghini',
        icon: '/car-icon.png',
      },
      {
        label: 'Land Rover / Jaguar Diagnostic Tools & Scanners',
        href: '/car-makes/land-rover-jaguar',
        icon: '/jaguar-logo.png',
      },
      {
        label: 'Mercedes-Benz Diagnostic Tools & Scanners',
        href: '/car-makes/mercedes-benz',
        icon: '/car-icon.png',
      },
      {
        label: 'Renault Diagnostic Tools & Scanners',
        href: '/car-makes/renault',
        icon: '/car-icon.png',
      },
      {
        label: 'SAAB Diagnostic Tools & Scanners',
        href: '/car-makes/saab',
        icon: '/car-icon.png',
      },
      {
        label: 'SEAT Diagnostic Tools & Scanners',
        href: '/car-makes/seat',
        icon: '/seat-logo.png',
      },
      {
        label: 'Skoda Diagnostic Tools & Scanners',
        href: '/car-makes/skoda',
        icon: '/skoda-logo.png',
      },
      {
        label: 'Vauxhall / Opel Diagnostic Tools & Scanners',
        href: '/car-makes/vauxhall-opel',
        icon: '/car-icon.png',
      },
    ],
  },
  {
    label: 'Service Reset Tools',
    layout: 'columns',
    columnCount: 3,
    items: [
      {
        label: 'ABS Brake Bleeding Scan Tools',
        href: '/service-reset/abs-brake-bleeding',
      },
      {
        label: 'Adaptive Front Lighting System (AFS) Tools',
        href: '/service-reset/afs-tools',
      },
      {
        label: 'Fuel Adjustment Tools',
        href: '/service-reset/fuel-adjustment',
      },
      {
        label: 'Air Suspension Diagnostic Tools',
        href: '/service-reset/air-suspension',
      },
      {
        label: 'Airbag Reset Tools',
        href: '/service-reset/airbag-reset',
      },
      {
        label: 'Automatic Transmission (AT) Adaption Diagnostic Tools',
        href: '/service-reset/at-adaption',
      },
      {
        label: 'Car Battery Registration Tools',
        href: '/service-reset/battery-registration',
      },
      {
        label: 'Car Language Change Tools',
        href: '/service-reset/language-change',
      },
      {
        label: 'Change Tyre Size Diagnostic Tools',
        href: '/service-reset/tyre-size-change',
      },
      {
        label: 'Clutch Adaption Tools',
        href: '/service-reset/clutch-adaption',
      },
      {
        label: 'Diesel Particulate Filter (DPF) Reset Tools',
        href: '/service-reset/dpf-reset',
      },
      {
        label: 'EGR Reset',
        href: '/service-reset/egr-reset',
      },
      {
        label: 'Electronic Parking Brake Reset (EPB) Tools',
        href: '/service-reset/epb-reset',
      },
      {
        label: 'EVAP Test and Scan Tools',
        href: '/service-reset/evap-test',
      },
      {
        label: 'Gearbox Matching Tools',
        href: '/service-reset/gearbox-matching',
      },
      {
        label: 'Immobilizer Reset Tools',
        href: '/service-reset/immobilizer-reset',
      },
      {
        label: 'Headlights Testers',
        href: '/service-reset/headlights-testers',
      },
      {
        label: 'Injector Coding Tools and Scanners',
        href: '/service-reset/injector-coding',
      },
      {
        label: 'Odometer Diagnostic Tools',
        href: '/service-reset/odometer-diagnostic',
      },
      {
        label: 'Oil Service Reset Tools',
        href: '/service-reset/oil-service-reset',
      },
      {
        label: 'Prime Fuel Pump Diagnostic Tools',
        href: '/service-reset/fuel-pump-diagnostic',
      },
      {
        label: 'Seat Match Diagnostic Tools',
        href: '/service-reset/seat-match',
      },
      {
        label: 'Steering Angle Sensor Reset Tools',
        href: '/service-reset/steering-angle-reset',
      },
      {
        label: 'Sun Roof Diagnostic Tools',
        href: '/service-reset/sunroof-diagnostic',
      },
      {
        label: 'TCM Oil Reset Tools',
        href: '/service-reset/tcm-oil-reset',
      },
      {
        label: 'Throttle Position Sensor Adjustment Tools',
        href: '/service-reset/throttle-position-adjustment',
      },
      {
        label: 'Tooth/Gear Learning Diagnostic Tools',
        href: '/service-reset/tooth-gear-learning',
      },
      {
        label: 'Car Turbo Diagnostic Tools',
        href: '/service-reset/turbo-diagnostic',
      },
      {
        label: 'Tyre Pressure Sensor Tools',
        href: '/service-reset/tyre-pressure-sensor',
      },
      {
        label: 'Car Window / Door Diagnostic Tools',
        href: '/service-reset/window-door-diagnostic',
      },
    ],
  },
  {
    label: 'Other Tools & Accessories',
    layout: 'list',
    items: [
      {
        label: 'Fuel Leak Detectors',
        href: '/other-tools/fuel-leak-detectors',
      },
      {
        label: 'Car Battery Testers',
        href: '/other-tools/battery-testers',
      },
      {
        label: 'Car Battery Chargers',
        href: '/other-tools/battery-chargers',
      },
      {
        label: 'Phone Holders',
        href: '/other-tools/phone-holders',
      },
      {
        label: 'Tyre Pressure Sensors',
        href: '/other-tools/tyre-pressure-sensors',
      },
    ],
  },
];
