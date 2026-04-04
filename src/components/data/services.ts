import {
  LayoutPanelLeft,
  ShoppingCart,
  PenTool,
  Palette,
  Rocket,
  FolderCode,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: LayoutPanelLeft,
    title: "Site Institucional e Landing Page",
    description:
      "Desenvolvimento de sites modernos, rápidos e responsivos para apresentar sua empresa e gerar contatos ou vendas com foco em conversão.",
  },
  {
    icon: ShoppingCart,
    title: "Loja Virtual e Cardápio Digital",
    description:
      "Criação de e-commerces e cardápios online integrados a pagamento e WhatsApp, facilitando pedidos, vendas e gestão do seu negócio.",
  },
  {
    icon: PenTool,
    title: "Design para Redes Sociais e Criativos",
    description:
      "Artes profissionais e consistentes para posts, stories e anúncios que fortalecem sua marca e aumentam o engajamento.",
  },
  {
    icon: Palette,
    title: "Identidade Visual Completa",
    description:
      "Criação estratégica da identidade da sua marca com logo, cores, tipografia e materiais visuais para transmitir profissionalismo e consistência em todos os pontos de contato.",
  },
  {
    icon: Rocket,
    title: "Gestão de Tráfego Pago + Criativos",
    description:
      "Criação de automações estratégicas para captar, organizar e qualificar leads automaticamente, conectando formulários, páginas e canais de contato para aumentar conversões e otimizar seu processo comercial.",
  },
  {
    icon: FolderCode,
    title: "Sistemas Web Sob Demanda",
    description:
      "Desenvolvimento de sistemas personalizados para atender necessidades específicas do seu negócio, com foco em eficiência, controle e escalabilidade.",
  },
];
