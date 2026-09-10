import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Handshake,
  MapPin,
  Megaphone,
  MessageCircle,
  ShieldCheck,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const priorities = [
  {
    icon: ShieldCheck,
    title: 'Seguridad barrial',
    text: 'Coordinacion con vecinos, juntas y autoridades para recuperar calles, parques y paraderos seguros.',
  },
  {
    icon: ClipboardList,
    title: 'Gestion transparente',
    text: 'Seguimiento publico de compromisos, propuestas y pedidos vecinales para que la politica rinda cuentas.',
  },
  {
    icon: Users,
    title: 'Participacion joven',
    text: 'Espacios de formacion, voluntariado y liderazgo para vecinos que quieren servir desde su zona.',
  },
];

const zones = ['Ate Centro', 'Salamanca', 'Mayorazgo', 'Santa Clara', 'Huaycan', 'Vitarte'];

const agenda = [
  'Escuchar prioridades por zona y organizar mesas vecinales.',
  'Promover limpieza, orden urbano y recuperacion de espacios publicos.',
  'Impulsar capacitacion civica para personeros, voluntarios y lideres locales.',
  'Canalizar propuestas hacia una agenda distrital seria y medible.',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Renovacion Popular Ate">
            <span className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <span className="text-base font-black">RP</span>
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black uppercase tracking-[0.08em] text-primary">
                Renovacion Popular
              </span>
              <span className="block text-sm font-semibold text-muted-foreground">Comite Ate</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition hover:text-primary" href="#prioridades">
              Prioridades
            </a>
            <a className="transition hover:text-primary" href="#agenda">
              Agenda
            </a>
            <a className="transition hover:text-primary" href="#participa">
              Participa
            </a>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/85">
            <a href="#participa">
              Sumate
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </nav>
      </header>

      <section id="inicio" className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#f6f8fb_0%,#ffffff_48%,#fff3bf_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-[repeating-linear-gradient(135deg,rgba(4,44,86,0.08)_0_2px,transparent_2px_18px)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-white/80 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-primary shadow-sm">
              <MapPin className="size-4" aria-hidden="true" />
              Renovacion Popular Ate .org.pe
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-primary sm:text-6xl lg:text-7xl">
              Renovacion Popular Ate
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Una pagina para convocar vecinos, presentar propuestas y organizar el trabajo politico local en
              Ate con orden, seguridad y servicio publico.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 bg-primary px-5 text-base hover:bg-primary/90">
                <a href="#participa">
                  Quiero participar
                  <Handshake aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 border-primary/25 bg-white/70 px-5 text-base">
                <a href="#prioridades">Ver prioridades</a>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-primary/15 bg-white shadow-[0_24px_80px_rgba(4,44,86,0.16)]">
            <div className="grid h-full min-h-[360px] grid-rows-[1fr_auto]">
              <div className="relative flex items-center justify-center bg-primary px-8 py-10 text-primary-foreground">
                <div className="absolute left-0 top-0 h-full w-4 bg-accent" />
                <div className="absolute right-8 top-8 rounded-lg border border-white/25 px-4 py-2 text-sm font-bold">
                  Ate
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-6 grid size-28 place-items-center rounded-lg border-4 border-accent bg-white text-primary">
                    <span className="text-5xl font-black">RP</span>
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-accent">Comite Distrital</p>
                  <p className="mt-3 text-3xl font-black">Vecinos organizados</p>
                </div>
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-3">
                {['Orden', 'Seguridad', 'Trabajo'].map((item) => (
                  <div key={item} className="bg-white px-5 py-4 text-center text-sm font-black uppercase tracking-[0.1em] text-primary">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prioridades" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-accent-foreground">Plan local</p>
            <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">Prioridades para Ate</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              La web comunica una linea clara de trabajo y permite convertir visitas en vecinos organizados.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {priorities.map((priority) => (
              <article key={priority.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <priority.icon className="mb-5 size-9 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-black text-card-foreground">{priority.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{priority.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/55">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-primary">Cobertura distrital</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Ate se trabaja por zonas</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {zones.map((zone) => (
              <div key={zone} className="rounded-lg border border-primary/15 bg-white px-4 py-3 text-sm font-bold text-primary shadow-sm">
                {zone}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-accent-foreground">Agenda vecinal</p>
            <h2 className="mt-3 text-3xl font-black text-primary">Trabajo politico con presencia en campo</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              La pagina queda lista para adaptar nombres, fotos, comunicados y eventos cuando el comite lo defina.
            </p>
          </div>
          <div className="space-y-3">
            {agenda.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="participa" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-accent">
              <Megaphone className="size-4" aria-hidden="true" />
              Convocatoria abierta
            </p>
            <h2 className="mt-5 text-3xl font-black sm:text-5xl">Sumate al equipo de Renovacion Popular Ate</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50">
              Inscribe voluntarios, organiza reuniones por zona y comparte el mensaje oficial desde un punto digital
              propio para el distrito.
            </p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white p-6 text-slate-900 shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:contacto@renovacionpopularate.org.pe" className="group rounded-lg border border-border p-5 transition hover:border-primary/35 hover:bg-secondary">
                <MessageCircle className="mb-4 size-7 text-primary" aria-hidden="true" />
                <p className="font-black text-primary">Contacto</p>
                <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                  contacto@renovacionpopularate.org.pe
                </p>
              </a>
              <a href="#agenda" className="group rounded-lg border border-border p-5 transition hover:border-primary/35 hover:bg-secondary">
                <CalendarDays className="mb-4 size-7 text-primary" aria-hidden="true" />
                <p className="font-black text-primary">Reuniones</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Agenda territorial, voceros y voluntariado.</p>
              </a>
            </div>
            <p className="mt-5 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-accent-foreground">
              Dominio sugerido: renovacionpopularate.org.pe
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
