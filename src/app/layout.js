import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "@/styles/globals.css";

import Navigation from '@/components/shared/navigation';
import Footer from '@/components/shared/footer';

export const metadata = {
  title: "Antimatter",
  description: "Report writing and vulnerability management platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
