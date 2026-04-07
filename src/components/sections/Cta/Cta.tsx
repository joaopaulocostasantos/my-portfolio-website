import styles from "./Cta.module.scss";

// images
import imgIconArrow from "@/assets/icon_arrow.svg";

// next
import Image from "next/image";
import Link from "next/link";

interface CtaProps {
  innerText: string;
  url: string;
}

export function Cta({ innerText, url }: CtaProps) {
  return (
    <Link href={url} className={styles.cta}>
      <span className={styles.cta__text}>{innerText}</span>
      <div className={styles.cta__iconArrow}>
        <Image src={imgIconArrow} alt="Seta para direita" />
      </div>
    </Link>
  );
}
