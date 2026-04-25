import { Container } from "@/components/container/Container";
import styles from "./Header.module.scss";

// Icons
import IconArrow from "@/assets/icon_arrow.svg";

// NextJs
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <ul className={styles.nav__menu__desktop}>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="#solutions">Soluções</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#about">Quem somos</Link>
            </li>
          </ul>

          <ul className={styles.nav__menu__mobile}>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="#solutions">Soluções</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#about">Quem somos</Link>
            </li>
          </ul>

          <Link href={"#contact"} className={styles.nav__contact}>
            <span className={styles.nav__contact__text}>Entre em contato</span>
            <div className={styles.nav__contact__icon}>
              <Image src={IconArrow} alt="Ícone de seta" />
            </div>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
