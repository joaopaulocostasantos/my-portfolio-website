// components
import { About } from "@/components/sections/About/About";
import { Hero } from "@/components/sections/Hero/Hero";
import { Portfolio } from "@/components/sections/Portfolio/Portfolio";
import { Solutions } from "@/components/sections/Solutions/Solutions";

// pages
import ContatoPage from "./contato/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Portfolio />
      <About />
      <ContatoPage />
    </main>
  );
}
