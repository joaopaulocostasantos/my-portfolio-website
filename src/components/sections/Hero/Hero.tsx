import styles from "./Hero.module.scss";

// componentes
import { Bagde } from "@/components/ui/Bagde/Bagde";
import { Highlights } from "@/components/ui/Highlights/Highlights";
import { Container } from "@/components/container/Container";
import { Cta } from "@/components/sections/Cta/Cta";

// Icons
import { ArrowDownToLine } from "lucide-react";
import { BriefcaseBusiness, PanelsTopLeft, FolderCode } from "lucide-react";

// next
import Link from "next/link";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__badge}>
          <Bagde
            tag="Design & Tech"
            description="Para marcas inovadores e fortes"
          />
        </div>
        <h1 className={styles.hero__title}>
          Soluções completas em{" "}
          <span className={styles.hero__title__highlight}>
            design e desenvolvimento web
          </span>
        </h1>

        <div className={styles.hero__ctas}>
          <Cta />
          <Link href="#portfolio" className={styles.hero__cta__seePortfolio}>
            <span className={styles.hero__cta__seePortfolio__text}>
              Veja o Portfólio
            </span>
            <div className={styles.hero__cta__seePortfolio__icon}>
              <ArrowDownToLine />
            </div>
          </Link>
        </div>

        <div className={styles.hero__highlightsContainer}>
          <Highlights
            icon={<BriefcaseBusiness />}
            content="+3 anos de experiência"
          />
          <Highlights
            icon={<PanelsTopLeft />}
            content="+26 projetos desenvolvidos"
          />
          <Highlights
            icon={<FolderCode />}
            content="Stack moderna de design e tecnologia"
          />
        </div>
      </Container>
    </section>
  );
}
