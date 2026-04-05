import styles from "./Footer.module.scss";

// icons
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

// next
import Link from "next/link";
import { Container } from "@/components/container/Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_icons}>
          <div className={styles.footer_icon}>
            <FaInstagram size={16} />
          </div>
          <div className={styles.footer_icon}>
            <FaLinkedin size={16} />
          </div>
          <div className={styles.footer_icon}>
            <FaYoutube size={16} />
          </div>
        </div>

        <h5 className={styles.footer_copyright}>
          <span>©Copyright 2026 - Todos os direitos reservados.</span> CNPJ:
          56.143.010/0001-30
        </h5>

        <div className={styles.footer_links}>
          <Link href="/termos-e-condicoes-de-uso">
            Termos e Condição de Uso
          </Link>
          <Link href="/politica-de-privacidade">Políticas de Privacidade</Link>
        </div>
      </Container>
    </footer>
  );
}
