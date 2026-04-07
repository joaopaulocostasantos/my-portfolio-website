import styles from "./not-found.module.scss";

// components
import { Container } from "@/components/container/Container";
import { Bagde } from "@/components/ui/Bagde/Bagde";
import { Cta } from "@/components/sections/Cta/Cta";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <Container>
        <div className={styles.notfound_content}>
          <Bagde tag="404" description="Page not found" />
          <span className={styles.tag}>Oops!</span>
          <h1 className={styles.title}>Página não encontrada</h1>

          <p className={styles.description}>
            Parece que você chegou a um caminho que não existe mais. Mas não se
            preocupe, você pode voltar para a página inicial ou explorar o menu
            para encontrar o que procura.
          </p>
        </div>

        <div className={styles.cta}>
          <Cta url="/" innerText="Voltar para a pagina inicial" />
        </div>
      </Container>
    </div>
  );
}
