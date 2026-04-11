import styles from "./TermsConsentBlock.module.scss";

interface TermsConsentBlockProps {
  innerText: string;
}

export function TermsConsentBlock({ innerText }: TermsConsentBlockProps) {
  return (
    <div className={styles.TermsConsentBlock}>
      <p>{innerText}</p>
    </div>
  );
}
