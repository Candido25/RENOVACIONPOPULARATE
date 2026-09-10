import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Renovacion Popular Ate',
  description:
    'Pagina oficial de Renovacion Popular Ate para convocar vecinos, presentar prioridades y organizar trabajo politico local.',
  openGraph: {
    title: 'Renovacion Popular Ate',
    description:
      'Vecinos organizados por seguridad, orden y participacion ciudadana en Ate.',
    url: 'https://renovacion-popular-ate.oalcantara33.chatgpt.site',
    siteName: 'Renovacion Popular Ate',
    images: [
      {
        url: 'https://renovacion-popular-ate.oalcantara33.chatgpt.site/og.png',
        width: 1200,
        height: 630,
        alt: 'Renovacion Popular Ate',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renovacion Popular Ate',
    description:
      'Vecinos organizados por seguridad, orden y participacion ciudadana en Ate.',
    images: ['https://renovacion-popular-ate.oalcantara33.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
