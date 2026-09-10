'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  Download,
  FileText,
  Handshake,
  HeartHandshake,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Users,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/EhCp05cObuO6lLlOOhEmK5?s=sw&p=a&mlu=4&ilr=4';

const navLinks = [
  { href: '#candidata', label: 'Candidata' },
  { href: '#compromisos', label: 'Compromisos' },
  { href: '#plan', label: 'Plan' },
  { href: '#documentos', label: 'Documentos' },
];

const actions = [
  {
    number: '280',
    title: 'cámaras apagadas denunciadas',
    text: 'Elizabeth expuso públicamente que Ate tuvo cámaras sin conectividad durante seis meses.',
  },
  {
    number: '7',
    title: 'zonas del distrito',
    text: 'Trabajo con juntas vecinales, organizaciones sociales y comunidades de base en todo Ate.',
  },
  {
    number: '40k',
    title: 'atenciones veterinarias',
    text: 'Meta del plan para una clínica veterinaria municipal con atención básica y campañas.',
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: 'Seguridad que funciona',
    text: 'Cámaras encendidas, serenazgo coordinado con PNP y tablero semanal de incidentes atendidos.',
  },
  {
    icon: Building2,
    title: 'Municipalidad que atiende',
    text: 'Trámites con plazo claro, responsable identificado, trato digno y cero "vuelva mañana".',
  },
  {
    icon: HeartHandshake,
    title: 'Barrio vivo en toda Ate',
    text: 'Ruta de limpieza publicada, parques recuperados y gestión visible en cada cuadra.',
  },
];

const planAxes = [
  {
    icon: Users,
    title: 'Dimensión social',
    text: 'Seguridad ciudadana, salud, infancia, educación, deporte, cultura, adulto mayor e inclusión.',
  },
  {
    icon: TrendingUp,
    title: 'Dimensión económica',
    text: 'Formalización, empleo juvenil, fortalecimiento de MYPE y simplificación municipal.',
  },
  {
    icon: MapPin,
    title: 'Dimensión ambiental',
    text: 'Limpieza pública, áreas verdes, recuperación de espacios públicos y ribera del río Rímac.',
  },
  {
    icon: FileText,
    title: 'Dimensión institucional',
    text: 'Ejecución presupuestal, transparencia, digitalización y rendición de cuentas ciudadana.',
  },
];

const proposals = [
  'Cuatro centrales de monitoreo inteligente en Salamanca, Vitarte, Santa Clara y Huaycán.',
  'Pistas, veredas, escaleras, muros de contención, parques, losas deportivas y locales comunales.',
  'Centro Municipal de empleabilidad juvenil y programa "Mi Primera Chamba".',
  'Policlínico, farmacia municipal, cuna municipal y veterinaria municipal.',
  'Tablero de control ciudadano y audiencias públicas dos veces al año.',
  'Gestión de agua potable, alcantarillado, avenidas principales y obras de alto impacto.',
];

const zones = [
  { number: '1', areas: 'Valdiviezo, Sauces y Salamanca' },
  { number: '2', areas: '27 de Abril y Mayorazgo' },
  { number: '3', areas: 'Zavaleta, Los Ángeles, Virgen del Carmen, Micaela y Barbadillo' },
  { number: '4', areas: 'Vitarte Central, San Gregorio y Amauta' },
  { number: '5', areas: 'Santa Clara Central, Manylsa, Gloria e Hijos de Apurímac' },
  { number: '6', areas: 'Horacio Zevallos y Pariachi' },
  { number: '7', areas: 'Huaycán' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-accent px-5 py-2 text-center text-xs font-black uppercase tracking-wide text-accent-foreground sm:px-8 sm:text-sm">
        Elecciones Municipales y Regionales 2026 — 04 de octubre. Marca &quot;R&quot; en Provincial y &quot;R&quot; en Distrital.
      </div>

      <header className="sticky top-0 z-30 border-b border-border bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Renovación Popular Ate">
            <img
              src="/logo-renovacion-popular.png"
              alt="Renovación Popular"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden border-l border-border pl-3 text-sm font-bold text-primary sm:block">
              Ate
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-slate-700 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} className="transition hover:text-primary" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://www.facebook.com/ElizabethNancyCabezasFlores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Elizabeth Cabezas"
              className="text-slate-500 transition hover:text-primary"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href="https://www.tiktok.com/@elizabeth.nancy.cabezas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Elizabeth Cabezas"
              className="text-slate-500 transition hover:text-primary"
            >
              <TiktokIcon className="size-5" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
                Afíliate
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-slate-700 transition hover:border-primary hover:text-primary lg:hidden"
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div id="menu-movil" className="border-t border-border bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-5 border-t border-border px-3 pt-3">
                <a
                  href="https://www.facebook.com/ElizabethNancyCabezasFlores"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Elizabeth Cabezas"
                  className="text-slate-500 transition hover:text-primary"
                >
                  <FacebookIcon className="size-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@elizabeth.nancy.cabezas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok de Elizabeth Cabezas"
                  className="text-slate-500 transition hover:text-primary"
                >
                  <TiktokIcon className="size-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,156,212,0.96),rgba(0,99,181,0.95))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-2 text-xs font-black uppercase">
              <MapPin className="size-4" aria-hidden="true" />
              Ate en buenas manos
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Elizabeth Cabezas
            </h1>
            <p className="mt-3 text-2xl font-black uppercase text-accent sm:text-3xl">Alcaldesa de Ate</p>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-blue-50">
              Licenciada en Administración, regidora de Ate 2023-2026 y candidata de Renovación Popular
              para recuperar el orden, la seguridad y la decencia en el distrito.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 bg-accent px-5 text-base text-accent-foreground hover:bg-accent/90">
                <a href="#plan">
                  Ver plan 2027-2030
                  <BookOpen aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 border-white/35 bg-white/10 px-5 text-base text-white hover:bg-white hover:text-primary">
                <a href="#documentos">Descargar documentos</a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-white/20 bg-white shadow-[0_26px_80px_rgba(0,0,0,0.24)]">
            <img
              src="/elizabeth-cabezas.jpg"
              alt="Elizabeth Cabezas, candidata a alcaldesa de Ate"
              className="aspect-[1.18/1] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section id="candidata" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
            <img
              src="/elizabeth-cabezas-porky.jpg"
              alt="Elizabeth Cabezas junto a Rafael López Aliaga en pieza de campaña"
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-primary">Nuestra candidata</p>
            <h2 className="mt-3 text-3xl font-black text-primary sm:text-5xl">
              Elizabeth Nancy Cabezas Flores
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Vecina arraigada en Ate, con raíces andahuaylinas, experiencia municipal y una trayectoria
              construida desde la fiscalización, la comunidad y el servicio público.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Regidora de Ate 2023-2026',
                'Licenciada en Administración de Empresas por USIL',
                'Programa especializado en Gestión Pública por USIL',
                'Fundadora de la Asociación de Mujeres Emprendedoras de Lima Este',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-white px-4 py-3 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase text-primary">Hechos verificables</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Fiscalización con coraje</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {actions.map((action) => (
              <article key={action.title} className="rounded-md border border-border bg-card p-6 shadow-sm">
                <p className="text-4xl font-black text-primary">{action.number}</p>
                <h3 className="mt-3 text-lg font-black text-card-foreground">{action.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{action.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compromisos" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-primary">Tres compromisos para Ate</p>
            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">Resultados, no promesas</h2>
          </div>
          <p className="max-w-xl leading-7 text-muted-foreground">
            El mensaje de campaña se concentra en seguridad operativa, atención municipal y barrios vivos en todo el distrito.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {commitments.map((commitment) => (
            <article key={commitment.title} className="rounded-md border border-border bg-card p-6 shadow-sm">
              <commitment.icon className="mb-6 size-10 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-black text-card-foreground">{commitment.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{commitment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase text-primary">Trabajo territorial</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Ate se organiza por zonas</h2>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {zones.map((zone) => (
                <div key={zone.number} className="rounded-md border border-primary/15 bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm font-black text-primary">Zona {zone.number}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">{zone.areas}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-semibold text-muted-foreground">
              Fuente: Municipalidad Distrital de Ate (MDA), Ordenanza N.° 035-MDA y Ordenanza N.° 433-MDA.
            </p>
          </div>
        </div>
      </section>

      <section id="plan" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-primary">Plan de Gobierno Municipal 2027-2030</p>
            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
              Ate: volver a creer en un distrito con orden, seguridad y decencia
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              El plan identifica problemas de inseguridad, servicios básicos, limpieza pública, congestión,
              informalidad y baja ejecución presupuestal. La ruta propone gestión técnica, transparente y de puertas abiertas.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {planAxes.map((axis) => (
              <article key={axis.title} className="rounded-md border border-border bg-white p-5 shadow-sm">
                <axis.icon className="mb-5 size-9 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-black text-card-foreground">{axis.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{axis.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-primary">Inversión y obras</p>
            <h2 className="mt-3 text-3xl font-black text-primary">S/ 710 millones proyectados para inversiones</h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              El plan plantea ejecutar S/ 510 millones de presupuesto municipal y gestionar S/ 200 millones adicionales
              para obras de alto impacto durante 2027-2030.
            </p>
          </div>
          <div className="space-y-3">
            {proposals.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-border bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="documentos" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8">
          <p className="text-sm font-black uppercase text-primary">Documentos oficiales</p>
          <h2 className="mt-3 text-3xl font-black text-primary">Lee el CV y el plan completo</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/hoja-de-vida-elizabeth-cabezas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-primary/40 hover:bg-secondary"
          >
            <FileText className="mb-5 size-9 text-primary" aria-hidden="true" />
            <h3 className="text-xl font-black text-primary">Hoja de vida</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Formación, trayectoria laboral, liderazgo social y antecedentes de Elizabeth Cabezas.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary">
              Descargar PDF <Download className="size-4" aria-hidden="true" />
            </span>
          </a>
          <a
            href="/plan-gobierno-municipal-ate-2027-2030.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-primary/40 hover:bg-secondary"
          >
            <BookOpen className="mb-5 size-9 text-primary" aria-hidden="true" />
            <h3 className="text-xl font-black text-primary">Plan de gobierno 2027-2030</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Diagnóstico territorial, objetivos estratégicos, propuestas, presupuesto y rendición de cuentas.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary">
              Descargar PDF <Download className="size-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      <section id="participa" className="bg-primary text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-xs font-black uppercase text-accent">
              <Megaphone className="size-4" aria-hidden="true" />
              Convocatoria abierta
            </p>
            <h2 className="mt-5 text-3xl font-black sm:text-5xl">Súmate a Renovación Popular Ate</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Afiliación, personeros, voluntariado, reuniones vecinales y defensa del voto para que Ate vuelva a estar en buenas manos.
            </p>
          </div>
          <div className="rounded-md border border-white/15 bg-white p-6 text-slate-900 shadow-2xl">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md bg-accent px-5 py-4 text-accent-foreground transition hover:bg-accent/90"
            >
              <WhatsappIcon className="size-7 shrink-0" />
              <span>
                <span className="block font-black">Únete al grupo de WhatsApp</span>
                <span className="block text-sm font-semibold">Afiliación, voluntariado y novedades de la campaña</span>
              </span>
            </a>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:contacto@renovacionpopularate.org.pe?subject=Quiero%20afiliarme%20a%20Renovaci%C3%B3n%20Popular%20Ate"
                className="group rounded-md border border-border p-5 transition hover:border-primary/35 hover:bg-secondary"
              >
                <MessageCircle className="mb-4 size-7 text-primary" aria-hidden="true" />
                <p className="font-black text-primary">Contacto</p>
                <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                  contacto@renovacionpopularate.org.pe
                </p>
              </a>
              <a href="#documentos" className="group rounded-md border border-border p-5 transition hover:border-primary/35 hover:bg-secondary">
                <CalendarDays className="mb-4 size-7 text-primary" aria-hidden="true" />
                <p className="font-black text-primary">Documentos</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Plan de gobierno y hoja de vida para revisar.</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
