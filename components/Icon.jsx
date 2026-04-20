import {
  HeartPulse, Shield, Baby, Plane, Droplet, Syringe, Stethoscope,
  FlaskConical, Scale, ClipboardList, Video, Activity,
} from 'lucide-react';

const map = {
  HeartPulse, Shield, Baby, Plane, Droplet, Syringe, Stethoscope,
  FlaskConical, Scale, ClipboardList, Video, Activity,
};

export default function Icon({ name, className = 'h-6 w-6' }) {
  const Cmp = map[name] || Activity;
  return <Cmp className={className} aria-hidden="true" />;
}
