"use client";

import {
  useActionState,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useFormStatus } from "react-dom";
import { Container } from "@/components/container/Container";
import { Bagde } from "@/components/ui/Bagde/Bagde";
import type { SubmitLeadState } from "@/app/contato/actions";
import {
  initialLeadFormValues,
  validateLeadForm,
  type LeadFieldErrors,
} from "@/app/contato/validation";
import styles from "./Form.module.scss";

// types
type FormProps = {
  action: (
    state: SubmitLeadState,
    formData: FormData,
  ) => Promise<SubmitLeadState>;
};

// state
const initialState: SubmitLeadState = {
  error: "",
  fieldErrors: {},
  values: initialLeadFormValues,
};

// funciton que renderiza o botao de submit, mostrando um estado de "Enviando..." quando o form estiver sendo submetido
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? "Enviando..." : "Enviar a mensagem agora"}
    </button>
  );
}

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) {
    return "";
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
}

export function Form({ action }: FormProps) {
  const [state, formAction] = useActionState(action, initialState);
  const [clientErrors, setClientErrors] = useState<LeadFieldErrors>({});

  const fieldErrors = useMemo(() => {
    return {
      ...state.fieldErrors,
      ...clientErrors,
    };
  }, [clientErrors, state.fieldErrors]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const values = {
      nome_completo: String(formData.get("nome_completo") ?? "").trim(),
      nome_empresa: String(formData.get("nome_empresa") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      servico: String(formData.get("servico") ?? "").trim(),
    };

    const errors = validateLeadForm(values);

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setClientErrors(errors);
      return;
    }

    setClientErrors({});
  }

  function clearFieldError(fieldName: keyof LeadFieldErrors) {
    setClientErrors((currentErrors) => {
      const mergedErrors = {
        ...state.fieldErrors,
        ...currentErrors,
      };

      if (!mergedErrors[fieldName]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      nextErrors[fieldName] = undefined;
      return nextErrors;
    });
  }

  function handleWhatsappChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = formatWhatsapp(event.target.value);
    clearFieldError("whatsapp");
  }

  return (
    <section className={styles.form__container}>
      <Container>
        <div className={styles.form__wrapper} id="contact">
          <div className={styles.form__content}>
            <Bagde tag="Formulario" description="Preencha com dados validos" />
            <h4>
              Preencha o formulario para{" "}
              <span>agendar uma reuniao on-line</span>
            </h4>
          </div>

          <form
            className={styles.form}
            action={formAction}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.form__field}>
              <input
                name="nome_completo"
                type="text"
                placeholder="Nome completo"
                autoComplete="name"
                defaultValue={state.values.nome_completo}
                aria-invalid={Boolean(fieldErrors.nome_completo)}
                aria-describedby={
                  fieldErrors.nome_completo ? "nome_completo-error" : undefined
                }
                onChange={() => clearFieldError("nome_completo")}
                required
              />
              {fieldErrors.nome_completo ? (
                <p
                  className={styles.form__error}
                  id="nome_completo-error"
                  role="alert"
                >
                  {fieldErrors.nome_completo}
                </p>
              ) : null}
            </div>

            <div className={styles.form__field}>
              <input
                name="nome_empresa"
                type="text"
                placeholder="Nome da empresa"
                autoComplete="organization"
                defaultValue={state.values.nome_empresa}
                aria-invalid={Boolean(fieldErrors.nome_empresa)}
                aria-describedby={
                  fieldErrors.nome_empresa ? "nome_empresa-error" : undefined
                }
                onChange={() => clearFieldError("nome_empresa")}
                required
              />
              {fieldErrors.nome_empresa ? (
                <p
                  className={styles.form__error}
                  id="nome_empresa-error"
                  role="alert"
                >
                  {fieldErrors.nome_empresa}
                </p>
              ) : null}
            </div>

            <div className={styles.form__field}>
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="email"
                defaultValue={state.values.email}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                onChange={() => clearFieldError("email")}
                required
              />
              {fieldErrors.email ? (
                <p className={styles.form__error} id="email-error" role="alert">
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>

            <div className={styles.form__field}>
              <input
                name="whatsapp"
                type="tel"
                placeholder="WhatsApp com DDD"
                autoComplete="tel"
                defaultValue={formatWhatsapp(state.values.whatsapp)}
                aria-invalid={Boolean(fieldErrors.whatsapp)}
                aria-describedby={
                  fieldErrors.whatsapp ? "whatsapp-error" : undefined
                }
                inputMode="numeric"
                maxLength={16}
                onChange={handleWhatsappChange}
                required
              />
              {fieldErrors.whatsapp ? (
                <p
                  className={styles.form__error}
                  id="whatsapp-error"
                  role="alert"
                >
                  {fieldErrors.whatsapp}
                </p>
              ) : null}
            </div>

            <div className={styles.form__field}>
              <select
                name="servico"
                defaultValue={state.values.servico}
                aria-invalid={Boolean(fieldErrors.servico)}
                aria-describedby={
                  fieldErrors.servico ? "servico-error" : undefined
                }
                onChange={() => clearFieldError("servico")}
                required
              >
                <option value="" disabled>
                  Selecione o servico desejado
                </option>
                <option value="sites-institucionais">
                  Sites Institucionais
                </option>
                <option value="landing-pages-vendas">
                  Landing Pages e Páginas de Vendas
                </option>
                <option value="ecommerces">E-commerces</option>
                <option value="ux-ui-design">
                  UX/UI Design para Sistemas e Apps
                </option>
                <option value="gestao-trafego-pago">
                  Gestão de Tráfego Pago (Meta Ads, Google Ads)
                </option>
                <option value="seo-cro">SEO e CRO</option>
              </select>
              {fieldErrors.servico ? (
                <p
                  className={styles.form__error}
                  id="servico-error"
                  role="alert"
                >
                  {fieldErrors.servico}
                </p>
              ) : null}
            </div>

            {state.error ? (
              <p className={styles.form__error} role="alert">
                {state.error}
              </p>
            ) : null}

            <SubmitButton />
          </form>
        </div>
      </Container>
    </section>
  );
}
