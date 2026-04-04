import styles from "./Highlights.module.scss";

// interfaces
interface HighlightsProps {
  icon: React.ReactNode;
  content: string;
}

export function Highlights({ icon, content }: HighlightsProps) {
  return (
    <div className={styles.highlights}>
      <div className={styles.highlights__icon}>{icon}</div>
      <div className={styles.highlights__content}>{content}</div>
    </div>
  );
}
