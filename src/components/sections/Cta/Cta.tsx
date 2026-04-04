import styles from "./Cta.module.scss";

// images
import imgIconArrow from "@/assets/icon_arrow.svg";

// next
import Image from "next/image";
import Link from "next/link";

export function Cta() {
  return (
    <Link href={"#contact"} className={styles.cta}>
      <span className={styles.cta__text}>Solicitar orçamento</span>
      <div className={styles.cta__iconArrow}>
        <Image src={imgIconArrow} alt="Seta para direita" />
      </div>
    </Link>
  );
}
