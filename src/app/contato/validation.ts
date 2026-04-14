export type LeadFormValues = {
  nome_completo: string;
  nome_empresa: string;
  email: string;
  whatsapp: string;
  servico: string;
};

export type LeadFieldErrors = Partial<Record<keyof LeadFormValues, string>>;

export const initialLeadFormValues: LeadFormValues = {
  nome_completo: "",
  nome_empresa: "",
  email: "",
  whatsapp: "",
  servico: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getWhatsappDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function normalizeLeadFormData(formData: FormData): LeadFormValues {
  return {
    nome_completo: String(formData.get("nome_completo") ?? "").trim(),
    nome_empresa: String(formData.get("nome_empresa") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    whatsapp: String(formData.get("whatsapp") ?? "").trim(),
    servico: String(formData.get("servico") ?? "").trim(),
  };
}

export function validateLeadForm(values: LeadFormValues): LeadFieldErrors {
  const errors: LeadFieldErrors = {};
  const whatsappDigits = getWhatsappDigits(values.whatsapp);

  if (!values.nome_completo) {
    errors.nome_completo = "Informe seu nome completo.";
  }

  if (!values.nome_empresa) {
    errors.nome_empresa = "Informe o nome da empresa.";
  }

  if (!values.email) {
    errors.email = "Informe seu e-mail.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Digite um e-mail valido.";
  }

  if (!values.whatsapp) {
    errors.whatsapp = "Informe seu WhatsApp com DDD.";
  } else if (whatsappDigits.length < 10 || whatsappDigits.length > 11) {
    errors.whatsapp = "Digite um numero com DDD valido.";
  }

  if (!values.servico) {
    errors.servico = "Selecione o servico desejado.";
  }

  return errors;
}

export function hasLeadFieldErrors(errors: LeadFieldErrors) {
  return Object.keys(errors).length > 0;
}
