import { Bagde } from "@/components/ui/Bagde/Bagde";
import styles from "./Form.module.scss";
import { Container } from "@/components/container/Container";

export function Form() {
  return (
    <section className={styles.form__container}>
      <Container>
        <div className={styles.form__wrapper}>
          <div className={styles.form__content}>
            <Bagde tag="Formulário" description="Preencha com dados válidos" />
            <h4>
              Preencha o formulário para{" "}
              <span>agendar uma reunião on-line</span>
            </h4>
          </div>

          <form className={styles.form}>
            <input type="text" placeholder="Nome Completo" required />
            <input type="text" placeholder="Nome da empresa" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="WhatsApp" required />
            <select required>
              <option value="">Selecione o serviço desejado</option>
              <option value="landing-page">Landing Page</option>
              <option value="site-institucional">Site Institucional</option>
              <option value="site-institucional-com-blog">
                Site Institucional com blog
              </option>
              <option value="blog">Blog</option>
              <option value="loja-virtual">Loja Virtual</option>
              <option value="cardapio-digital">Cardápio Digital</option>
              <option value="cardapio-digital">
                Design para Social Media e Criativos
              </option>
              <option value="design-ui-ux">Design UI/UX</option>
              <option value="sistemas-web-sob-demanda">
                Sistemas Web Sob Demanda
              </option>
              <option value="identidade-visual-completa">
                Identidade Visual Completa
              </option>
              <option value="gestao-de-trafego-pago-e-criativos">
                Gestão de Tráfego Pago + Criativos
              </option>
            </select>
            <button type="submit">Enviar a mensagem agora</button>
          </form>
        </div>
      </Container>
    </section>
  );
}
