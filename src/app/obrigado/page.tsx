"use client";

import { useEffect } from "react";
import styles from "./obrigado.module.scss";

import { Container } from "@/components/container/Container";
import { Cta } from "@/components/sections/Cta/Cta";
import { Bagde } from "@/components/ui/Bagde/Bagde";

export default function Obrigado() {
  // redirecionar para whatsapp
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=558499690703";
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.obrigado}>
      <Container>
        <div className={styles.obrigado__container}>
          <Bagde tag="Enviado" description="Solicitacao feita com sucesso" />

          <div className={styles.obrigado__title}>
            <h3 className={styles.title}>Obrigado!</h3>
            <p className={styles.description}>
              Tudo certo! Entraremos em contato em breve ou voce sera
              redirecionado ao WhatsApp em 1 minuto.
            </p>
          </div>

          <Cta url="/" innerText="Voltar para a pagina inicial" />
        </div>
      </Container>
    </div>
  );
}
