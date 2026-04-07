import { Form } from "@/components/sections/Form/Form";
import { submitLead } from "./actions";

export default function ContatoPage() {
  return (
    <main>
      <Form action={submitLead} />
    </main>
  );
}
