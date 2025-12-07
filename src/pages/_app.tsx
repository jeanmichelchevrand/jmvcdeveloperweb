import { useState } from "react";
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
//import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
