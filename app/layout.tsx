import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Elizabeth Cabezas | Renovación Popular Ate',
  description:
    'Elizabeth Cabezas, candidata a alcaldesa de Ate por Renovación Popular. Plan de Gobierno Municipal 2027-2030 y convocatoria vecinal.',
  openGraph: {
    title: 'Elizabeth Cabezas | Renovación Popular Ate',
    description:
      'Ate en buenas manos: seguridad, orden, decencia y participación vecinal.',
    url: 'https://renovacionpopularate.org.pe',
    siteName: 'Renovación Popular Ate',
    images: [
      {
        url: 'https://renovacionpopularate.org.pe/og.png',
        width: 1667,
        height: 1667,
        alt: 'Elizabeth Cabezas, candidata a alcaldesa de Ate',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elizabeth Cabezas | Renovación Popular Ate',
    description:
      'Ate en buenas manos: seguridad, orden, decencia y participación vecinal.',
    images: ['https://renovacionpopularate.org.pe/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
