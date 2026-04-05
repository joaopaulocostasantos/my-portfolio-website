import { Hero } from "@/components/sections/Hero/Hero";
import { Portfolio } from "@/components/sections/Portfolio/Portfolio";
import { Solutions } from "@/components/sections/Solutions/Solutions";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Portfolio />
    </main>
  );
}
