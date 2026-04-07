import { Container } from "@/components/container/Container";
import styles from "./obrigado.module.scss";

// components
import { Cta } from "@/components/sections/Cta/Cta";
import { Bagde } from "@/components/ui/Bagde/Bagde";

export default function Obrigado() {
  return (
    <div className={styles.obrigado}>
      <Container>
        <div className={styles.obrigado__container}>
          <Bagde tag="Enviado" description="Solicitação feita com sucesso" />

          <div className={styles.obrigado__title}>
            <h3 className={styles.title}>Obrigado!</h3>
            <p className={styles.description}>
              Tudo certo! Entraremos em contato em breve ou você será
              redirecionado ao WhatsApp em 1 minuto.
            </p>
          </div>
          <Cta url="/" innerText="Voltar para a página inicial" />
        </div>
      </Container>
    </div>
  );
}
