import styles from "./PortfolioCards.module.scss";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface PortfolioCardsProps {
  img: string | StaticImageData;
  link: string;
}

export function PortfolioCards({ img, link }: PortfolioCardsProps) {
  return (
    <div className={styles.portfolioCards}>
      <div className={styles.portfolioCards__card}>
        <Image src={img} alt="Portfolio" width={416} height={362} />
        <Link
          href={link}
          className={styles.portfolioCards__link}
          target="_blank"
        >
          Ver projeto
        </Link>
      </div>
    </div>
  );
}
