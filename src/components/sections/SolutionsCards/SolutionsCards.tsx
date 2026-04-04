import type { LucideIcon } from "lucide-react";
import styles from "./SolutionsCards.module.scss";

type SolutionsCardsProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function SolutionsCards({
  icon: Icon,
  title,
  description,
}: SolutionsCardsProps) {
  return (
    <div className={styles.solutionsCards}>
      <div className={styles.solutionsCards__icons}>
        <Icon />
      </div>
      <div className={styles.solutionsCards__content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
