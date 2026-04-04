import { Container } from "@/components/container/Container";
import { SolutionsCards } from "../SolutionsCards/SolutionsCards";
import styles from "./Solutions.module.scss";

// data
import { services } from "@/components/data/services";

export function Solutions() {
  return (
    <section className={styles.solutions}>
      <Container>
        <div className={styles.solutions__grid} id="solutions">
          {services.map((service) => (
            <SolutionsCards
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
