import styles from "./Bagde.module.scss";

interface BagdeProps {
  tag: string;
  description: string;
}

export function Bagde({ tag, description }: BagdeProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.badge__tag}>{tag}</span>
      <p>{description}</p>
    </div>
  );
}
