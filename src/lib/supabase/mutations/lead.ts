import { createClient } from "@/lib/supabase/server";

type ContatoData = {
  nome_completo: string;
  nome_empresa: string;
  email: string;
  whatsapp: string;
  servico: string;
};

export async function salvarContato(data: ContatoData) {
  const supabase = await createClient();
  const payload = {
    nome_completo: data.nome_completo,
    nome_empresa: data.nome_empresa,
    email: data.email,
    whatsapp: data.whatsapp,
    servico: data.servico,
  };

  const { error } = await supabase.from("leads").insert([payload]);

  if (error) throw new Error(error.message);
}
