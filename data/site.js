// Central site configuration. Update values here and they propagate everywhere.
export const site = {
  name: 'Doctors at Farm Gate',
  shortName: 'Farm Gate Medical',
  tagline: 'Modern family GP practice dedicated to patient-centred care',
  description:
    'Doctors at Farm Gate is a modern family GP practice delivering compassionate, evidence-based healthcare across Australia — general check-ups, women’s and men’s health, kid’s health, travel medicine, iron infusions, immunisations, pathology, telehealth and chronic care plans.',
  url: 'https://www.doctorsatfarmgate.com.au',
  email: 'info@doctorsatfarmgate.com.au',
  phone: '(00) 0000 0000',
  phoneHref: 'tel:+61000000000',
  emergency: '000',
  address: {
    line1: '[Insert Practice Address]',
    line2: 'Australia',
  },
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 4:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
    { day: 'Sunday & Public Holidays', time: '9:00 AM – 4:00 PM' },
  ],
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Our Doctors', href: '/team' },
    { label: 'Patient Info', href: '/patient-information' },
    { label: 'Policies', href: '/practice-policies' },
    { label: 'Vacancies', href: '/vacancies' },
    { label: 'Contact', href: '/contact' },
  ],
};
