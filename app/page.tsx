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
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const actions = [
  {
    number: '280',
    title: 'camaras apagadas denunciadas',
    text: 'Elizabeth expuso publicamente que Ate tuvo camaras sin conectividad durante seis meses.',
  },
  {
    number: '7',
    title: 'zonas del distrito',
    text: 'Trabajo con juntas vecinales, organizaciones sociales y comunidades de base en todo Ate.',
  },
  {
    number: '40k',
    title: 'atenciones veterinarias',
    text: 'Meta del plan para una clinica veterinaria municipal con atencion basica y campanas.',
  },
];

const commitments = [
  {
    icon: ShieldCheck,
    title: 'Seguridad que funciona',
    text: 'Camaras encendidas, serenazgo coordinado con PNP y tablero semanal de incidentes atendidos.',
  },
  {
    icon: Building2,
    title: 'Municipalidad que atiende',
    text: 'Tramites con plazo claro, responsable identificado, trato digno y cero "vuelva manana".',
  },
  {
    icon: HeartHandshake,
    title: 'Barrio vivo en toda Ate',
    text: 'Ruta de limpieza publicada, parques recuperados y gestion visible en cada cuadra.',
  },
];

const planAxes = [
  {
    icon: Users,
    title: 'Dimension social',
    text: 'Seguridad ciudadana, salud, infancia, educacion, deporte, cultura, adulto mayor e inclusion.',
  },
  {
    icon: TrendingUp,
    title: 'Dimension economica',
    text: 'Formalizacion, empleo juvenil, fortalecimiento de MYPE y simplificacion municipal.',
  },
  {
    icon: MapPin,
    title: 'Dimension ambiental',
    text: 'Limpieza publica, areas verdes, recuperacion de espacios publicos y ribera del rio Rimac.',
  },
  {
    icon: FileText,
    title: 'Dimension institucional',
    text: 'Ejecucion presupuestal, transparencia, digitalizacion y rendicion de cuentas ciudadana.',
  },
];

const proposals = [
  'Cuatro centrales de monitoreo inteligente en Salamanca, Vitarte, Santa Clara y Huaycan.',
  'Pistas, veredas, escaleras, muros de contencion, parques, losas deportivas y locales comunales.',
  'Centro Municipal de empleabilidad juvenil y programa "Mi Primera Chamba".',
  'Policlinico, farmacia municipal, cuna municipal y veterinaria municipal.',
  'Tablero de control ciudadano y audiencias publicas dos veces al ano.',
  'Gestion de agua potable, alcantarillado, avenidas principales y obras de alto impacto.',
];

const zones = ['Ate Centro', 'Salamanca', 'Mayorazgo', 'Santa Clara', 'Huaycan', 'Vitarte'];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Renovacion Popular Ate">
            <img
              src="/logo-renovacion-popular.png"
              alt="Renovacion Popular"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden border-l border-border pl-3 text-sm font-bold text-primary sm:block">
              Ate
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-slate-700 lg:flex">
            <a className="transition hover:text-primary" href="#candidata">
              Candidata
            </a>
            <a className="transition hover:text-primary" href="#compromisos">
              Compromisos
            </a>
            <a className="transition hover:text-primary" href="#plan">
              Plan
            </a>
            <a className="transition hover:text-primary" href="#documentos">
              Documentos
            </a>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#participa">
              Afiliate
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </nav>
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
              Licenciada en Administracion, regidora de Ate 2023-2026 y candidata de Renovacion Popular
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
              alt="Elizabeth Cabezas junto a Rafael Lopez Aliaga en pieza de campana"
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-primary">Nuestra candidata</p>
            <h2 className="mt-3 text-3xl font-black text-primary sm:text-5xl">
              Elizabeth Nancy Cabezas Flores
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Vecina arraigada en Ate, con raices andahuaylinas, experiencia municipal y una trayectoria
              construida desde la fiscalizacion, la comunidad y el servicio publico.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Regidora de Ate 2023-2026',
                'Licenciada en Administracion de Empresas por USIL',
                'Programa especializado en Gestion Publica por USIL',
                'Fundadora de la Asociacion de Mujeres Emprendedoras de Lima Este',
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
            <h2 className="mt-3 text-3xl font-black text-primary">Fiscalizacion con coraje</h2>
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
            El mensaje de campana se concentra en seguridad operativa, atencion municipal y barrios vivos en todo el distrito.
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {zones.map((zone) => (
              <div key={zone} className="rounded-md border border-primary/15 bg-white px-4 py-3 text-sm font-bold text-primary shadow-sm">
                {zone}
              </div>
            ))}
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
              El plan identifica problemas de inseguridad, servicios basicos, limpieza publica, congestion,
              informalidad y baja ejecucion presupuestal. La ruta propone gestion tecnica, transparente y de puertas abiertas.
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
            <p className="text-sm font-black uppercase text-primary">Inversion y obras</p>
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
          <a href="/hoja-de-vida-elizabeth-cabezas.pdf" className="group rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-primary/40 hover:bg-secondary">
            <FileText className="mb-5 size-9 text-primary" aria-hidden="true" />
            <h3 className="text-xl font-black text-primary">Hoja de vida</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Formacion, trayectoria laboral, liderazgo social y antecedentes de Elizabeth Cabezas.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary">
              Descargar PDF <Download className="size-4" aria-hidden="true" />
            </span>
          </a>
          <a href="/plan-gobierno-municipal-ate-2027-2030.pdf" className="group rounded-md border border-border bg-white p-6 shadow-sm transition hover:border-primary/40 hover:bg-secondary">
            <BookOpen className="mb-5 size-9 text-primary" aria-hidden="true" />
            <h3 className="text-xl font-black text-primary">Plan de gobierno 2027-2030</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Diagnostico territorial, objetivos estrategicos, propuestas, presupuesto y rendicion de cuentas.
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
            <h2 className="mt-5 text-3xl font-black sm:text-5xl">Sumate a Renovacion Popular Ate</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Afiliacion, personeros, voluntariado, reuniones vecinales y defensa del voto para que Ate vuelva a estar en buenas manos.
            </p>
          </div>
          <div className="rounded-md border border-white/15 bg-white p-6 text-slate-900 shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:contacto@renovacionpopularate.org.pe" className="group rounded-md border border-border p-5 transition hover:border-primary/35 hover:bg-secondary">
                <MessageCircle className="mb-4 size-7 text-primary" aria-hidden="true" />
                <p className="font-black text-primary">Contacto</p>
                <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                  contacto@renovacionpopularate.org.pe
                </p>
              </a>
              <a href="#documentos" className="group rounded-md border border-border p-5 transition hover:border-primary/35 hover:bg-secondary">
                <CalendarDays className="mb-4 size-7 text-primary" aria-hidden="true" />
                <p className="font-black text-primary">Campana</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Actividades, recorridos y reuniones por zona.</p>
              </a>
            </div>
            <p className="mt-5 rounded-md bg-accent px-4 py-3 text-sm font-bold text-accent-foreground">
              Dominio sugerido: renovacionpopularate.org.pe
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
