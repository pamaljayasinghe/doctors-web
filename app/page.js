'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Heart,
  Shield,
  Users,
  Award,
  Star,
  Stethoscope,
  Activity,
  ArrowRight,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

/* ───────────────── DATA ───────────────── */

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    qualifications: 'MBBS, MD, FACC',
    image: '/doctors/doctor-1.jpg',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    qualifications: 'MBBS, MD, DM',
    image: '/doctors/doctor-2.jpg',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    qualifications: 'MBBS, DCH, MD',
    image: '/doctors/doctor-3.jpg',
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    qualifications: 'MBBS, MS Ortho',
    image: '/doctors/doctor-4.jpg',
  },
  {
    name: 'Dr. Amara De Silva',
    specialty: 'Dermatologist',
    qualifications: 'MBBS, MD Derm',
    image: '/doctors/doctor-5.jpg',
  },
  {
    name: 'Dr. Ravi Patel',
    specialty: 'General Physician',
    qualifications: 'MBBS, MRCP',
    image: '/doctors/doctor-6.jpg',
  },
];

const stats = [
  { number: '25+', label: 'Years of Service', icon: Award },
  { number: '50+', label: 'Expert Doctors', icon: Stethoscope },
  { number: '100K+', label: 'Happy Patients', icon: Heart },
  { number: '15+', label: 'Specialties', icon: Activity },
];

const navLinks = [
  'Home',
  'About Us',
  'Doctors',
  'Services',
  'Facilities',
  'Contact Us',
];

/* ───────────────── COMPONENTS ───────────────── */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="gradient-teal hidden text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +94 11 234 5678
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> info@medicarecenter.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} /> Mon – Sat: 8:00 AM – 9:00 PM
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-teal">
            <Stethoscope className="text-white" size={22} />
          </div>
          <div>
            <span className="font-heading text-xl font-bold text-medical-dark">
              MediCare
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[2px] text-primary-500">
              Channeling Center
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`text-sm font-medium transition-colors hover:text-medical-teal ${
                  link === 'About Us'
                    ? 'text-medical-teal'
                    : 'text-medical-dark'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="gradient-teal hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-transform hover:scale-105 md:inline-block"
        >
          Make Appointment
        </a>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-medical-dark" />
            <span className="block h-0.5 w-6 bg-medical-dark" />
            <span className="block h-0.5 w-6 bg-medical-dark" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`block text-sm font-medium ${
                    link === 'About Us'
                      ? 'text-medical-teal'
                      : 'text-medical-dark'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="gradient-teal mt-2 inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              >
                Make Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-medical-dark py-20 md:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
        <div className="gradient-teal h-full w-full skew-x-[-12deg] translate-x-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="animate-fade-in-up">
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <ChevronRight size={14} />
            <span className="text-primary-400">About Us</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-300">
            Delivering compassionate, world-class healthcare to our community
            for over 25 years.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title mt-3">
              Providing Our Patients With The Highest Standard Of Care
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-medical-text">
              <p>
                At MediCare Channeling Center, we are dedicated to delivering
                excellence in healthcare. Our state-of-the-art facility brings
                together a team of over 50 highly qualified specialist doctors,
                all committed to providing comprehensive and compassionate
                medical services to every patient who walks through our doors.
              </p>
              <p>
                Established with a vision to bridge the gap between patients and
                quality healthcare, we have grown into one of the most trusted
                medical channeling centers in the region. Our commitment to
                patient care, combined with cutting-edge medical technology and a
                warm, welcoming environment, sets us apart.
              </p>
            </div>
            <a
              href="#"
              className="gradient-teal mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:gap-3 hover:shadow-xl"
            >
              Our Services <ArrowRight size={16} />
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              {/* Replace this image later */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 via-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center">
                  <Stethoscope
                    size={64}
                    className="mx-auto text-medical-teal opacity-40"
                  />
                  <p className="mt-3 text-sm text-primary-600">
                    Replace with facility image
                  </p>
                </div>
              </div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-5 shadow-xl md:-bottom-8 md:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
                  <Award className="text-medical-teal" size={24} />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-medical-dark">
                    25+
                  </span>
                  <span className="text-xs text-gray-500">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="gradient-teal py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ number, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <Icon className="text-white" size={26} />
              </div>
              <span className="block font-heading text-3xl font-bold text-white md:text-4xl">
                {number}
              </span>
              <span className="mt-1 block text-sm text-white/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount =
    typeof window !== 'undefined'
      ? window.innerWidth >= 1024
        ? 4
        : window.innerWidth >= 768
          ? 3
          : 1
      : 4;

  const maxIndex = Math.max(0, doctors.length - visibleCount);

  const goNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="bg-medical-gray py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="section-subtitle">Meet Our Team</span>
            <h2 className="section-title mt-3">The Dedicated Doctors</h2>
            <p className="mt-3 max-w-lg text-[15px] text-medical-text">
              Our team of experienced specialist doctors are committed to
              providing exceptional medical care, ensuring the best possible
              outcomes for every patient.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-medical-teal text-medical-teal transition-all hover:bg-medical-teal hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-medical-teal text-medical-teal transition-all hover:bg-medical-teal hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
            >
              <ChevronRight size={20} />
            </button>
            <a
              href="#"
              className="ml-2 rounded-full border-2 border-medical-teal px-6 py-2 text-sm font-semibold text-medical-teal transition-all hover:bg-medical-teal hover:text-white"
            >
              View All Doctors
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-3 md:w-1/3 lg:w-1/4"
              >
                <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Doctor image placeholder */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <Users
                          size={48}
                          className="mx-auto text-medical-teal opacity-30"
                        />
                        <p className="mt-2 text-xs text-primary-500">
                          Replace image
                        </p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-medical-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="w-full p-5">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-2.5 text-sm font-semibold text-medical-teal transition-colors hover:bg-medical-teal hover:text-white"
                        >
                          View Profile <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-heading text-lg font-semibold text-medical-dark">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-medical-teal">
                      {doctor.specialty}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      {doctor.qualifications}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 via-accent-50 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <Heart
                    size={64}
                    className="mx-auto text-medical-teal opacity-40"
                  />
                  <p className="mt-3 text-sm text-primary-600">
                    Replace with patient care image
                  </p>
                </div>
              </div>
            </div>
            {/* Accent shape */}
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-2xl border-2 border-primary-200" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="section-subtitle">What Drives Us</span>
            <h2 className="section-title mt-3">
              Positive Outcomes For Patients
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-medical-text">
              We are committed to ensuring every patient receives personalized,
              evidence-based care that leads to the best possible health
              outcomes.
            </p>

            {/* Mission */}
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                  <Shield className="text-medical-teal" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-medical-dark">
                    Our Mission
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-medical-text">
                    To provide accessible, high-quality healthcare services by
                    connecting patients with the best specialist doctors in a
                    caring and efficient environment, ensuring every individual
                    receives the treatment they deserve.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                  <Star className="text-medical-teal" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-medical-dark">
                    Our Vision
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-medical-text">
                    To become the most trusted and preferred medical channeling
                    center in the region, known for excellence in patient care,
                    innovation, and community wellness programs.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                  <Heart className="text-medical-teal" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-medical-dark">
                    Our Values
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-medical-text">
                    Compassion, integrity, excellence, and respect form the
                    cornerstone of our practice. We believe in treating every
                    patient with dignity, transparency, and the highest
                    professional standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Expert Specialists',
      desc: 'Access to over 50 highly qualified doctors across 15+ medical specialties.',
    },
    {
      icon: Clock,
      title: 'Convenient Scheduling',
      desc: 'Easy appointment booking with flexible timing to suit your schedule.',
    },
    {
      icon: Shield,
      title: 'Patient Safety First',
      desc: 'Strict adherence to international healthcare safety standards and protocols.',
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      desc: 'A warm, supportive environment where every patient feels valued and heard.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      desc: '25+ years of trusted service with over 100,000 satisfied patients.',
    },
    {
      icon: Activity,
      title: 'Modern Facilities',
      desc: 'State-of-the-art medical equipment and comfortable patient spaces.',
    },
  ];

  return (
    <section className="bg-medical-gray py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title mt-3">
            What Makes Us Different
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-medical-text">
            We go above and beyond to ensure you receive the finest medical care
            experience possible.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-medical-teal">
                <Icon
                  size={26}
                  className="text-medical-teal transition-colors group-hover:text-white"
                />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-medical-dark">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-medical-text">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="gradient-teal relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Ready to Experience Better Healthcare?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Book an appointment today and take the first step towards better
          health. Our team is ready to provide you with exceptional care.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-medical-teal shadow-lg transition-transform hover:scale-105"
          >
            Book Appointment <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-medical-teal"
          >
            <Phone size={16} /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="gradient-dark text-gray-300">
      {/* Contact bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
              <MapPin className="text-primary-400" size={20} />
            </div>
            <div>
              <span className="block text-sm font-semibold text-white">
                Visit Us
              </span>
              <span className="text-sm text-gray-400">
                123 Medical Avenue, Colombo 07
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
              <Phone className="text-primary-400" size={20} />
            </div>
            <div>
              <span className="block text-sm font-semibold text-white">
                Call Us
              </span>
              <span className="text-sm text-gray-400">+94 11 234 5678</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
              <Mail className="text-primary-400" size={20} />
            </div>
            <div>
              <span className="block text-sm font-semibold text-white">
                Email Us
              </span>
              <span className="text-sm text-gray-400">
                info@medicarecenter.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medical-teal">
                <Stethoscope className="text-white" size={20} />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white">
                  MediCare
                </span>
                <span className="block text-[9px] font-medium uppercase tracking-[2px] text-primary-400">
                  Channeling Center
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Providing compassionate, high-quality healthcare services for over
              25 years. Your health is our priority.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-medical-teal"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {['Home', 'About Us', 'Our Doctors', 'Services', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-400"
                    >
                      <ChevronRight size={14} className="text-primary-500" />
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                'General Practice',
                'Specialist Channeling',
                'Laboratory Services',
                'Health Screenings',
                'Emergency Care',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    <ChevronRight size={14} className="text-primary-500" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Opening Hours
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="text-white">8:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">9:00 AM – 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Public Holidays</span>
                <span className="text-primary-400">By Appointment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MediCare Channeling Center. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── PAGE ───────────────── */

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <StatsSection />
      <DoctorsCarousel />
      <MissionVisionValues />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
}
