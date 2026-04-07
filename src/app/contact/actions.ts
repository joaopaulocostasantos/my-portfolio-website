"use server";

import { redirect } from "next/navigation";
import { salvarContato } from "@/lib/supabase/mutations/lead";
import {
  hasLeadFieldErrors,
  initialLeadFormValues,
  normalizeLeadFormData,
  validateLeadForm,
  type LeadFieldErrors,
} from "./validation";

export type SubmitLeadState = {
  error: string;
  fieldErrors: LeadFieldErrors;
  values: typeof initialLeadFormValues;
};

const initialState: SubmitLeadState = {
  error: "",
  fieldErrors: {},
  values: initialLeadFormValues,
};

export async function submitLead(
  prevState: SubmitLeadState = initialState,
  formData: FormData,
): Promise<SubmitLeadState> {
  void prevState;

  const data = normalizeLeadFormData(formData);
  const fieldErrors = validateLeadForm(data);

  if (hasLeadFieldErrors(fieldErrors)) {
    return {
      error: "Revise os campos destacados e tente novamente.",
      fieldErrors,
      values: data,
    };
  }

  try {
    await salvarContato(data);
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar sua mensagem agora.",
      fieldErrors: {},
      values: data,
    };
  }

  redirect("/obrigado");
}
