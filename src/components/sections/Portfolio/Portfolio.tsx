import { Bagde } from "@/components/ui/Bagde/Bagde";
import styles from "./Portfolio.module.scss";
import { Container } from "@/components/container/Container";
import { PortfolioCards } from "../PortfolioCards/PortfolioCards";

import { projects } from "@/components/data/projects";
import { Cta } from "../Cta/Cta";

export function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <Container>
        <div className={styles.headline}>
          <Bagde tag="Portfolio" description="Cases de sucesso" />
          <h3>Projetos realizados</h3>
        </div>

        <div className={styles.projects} id="portfolio">
          {projects.map((project, index) => (
            <PortfolioCards key={index} img={project.img} link={project.link} />
          ))}
        </div>

        <div className={styles.cta}>
          <Cta url="#contact" innerText="Solicitar orçamento" />
        </div>
      </Container>
    </section>
  );
}
