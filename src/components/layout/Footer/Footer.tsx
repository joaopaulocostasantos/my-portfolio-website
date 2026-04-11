import styles from "./Footer.module.scss";

// icons
import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

// next
import Link from "next/link";
import { Container } from "@/components/container/Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_icons}>
          <Link
            href={"https://www.instagram.com/joaopaulosantosoficial/"}
            target="_black"
            className={styles.footer_icon}
          >
            <FaInstagram size={16} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/joaopaulodacostasantos/"}
            target="_black"
            className={styles.footer_icon}
          >
            <FaLinkedin size={16} />
          </Link>
          <Link
            href={"https://www.tiktok.com/@joaopaulosantosoficial"}
            target="_black"
            className={styles.footer_icon}
          >
            <FaTiktok size={16} />
          </Link>
        </div>

        <h5 className={styles.footer_copyright}>
          <span>©Copyright 2026 - Todos os direitos reservados.</span> CNPJ:
          56.143.010/0001-30
        </h5>

        <div className={styles.footer_links}>
          <Link href="/termos-e-condicoes-de-uso">
            Termos e Condição de Uso
          </Link>
          <Link href="/privacy-policy">Políticas de Privacidade</Link>
        </div>
      </Container>
    </footer>
  );
}
