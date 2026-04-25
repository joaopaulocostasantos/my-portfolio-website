import Image from "next/image";
import styles from "./About.module.scss";

// componentes
import { Bagde } from "@/components/ui/Bagde/Bagde";

// images
import profileImage from "@/assets/profile__image.webp";
import { Container } from "@/components/container/Container";

export function About() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__container} id="about">
          <div className={styles.about__image}>
            <Image src={profileImage} alt="João Paulo Santos" />
          </div>
          <div className={styles.about__content}>
            <Bagde tag="Sobre mim" description="Me conheça jornada" />
            <h3>João Paulo Santos</h3>
            <h4>
              Especialista em Web Design e <br /> Desenvolvimento Full-Stack{" "}
            </h4>

            <div className={styles.about__description}>
              <p>
                Com mais de 3 anos de experiência e mais de 30 empresas
                atendidas em todo o Brasil, uno estratégia digital com
                desenvolvimento front-end para criar soluções web que geram
                resultado real. Atuo como Especialista em UX/UI e Desenvolvedor
                Full-Stack — entregando desde o design até o produto final em
                código, com foco em conversão e performance.
              </p>

              <p>
                Trabalho com empresas que querem crescer sua presença digital,
                converter mais e construir uma marca que impõe respeito. Minha
                stack: Figma, Photoshop, Illustrator, React.js, Next.js e
                Node.js.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
