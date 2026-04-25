import {
  LayoutPanelLeft,
  ShoppingCart,
  Zap,
  Palette,
  Rocket,
  Search,
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
    title: "Sites Institucionais",
    description:
      "Desenvolvimento de sites modernos e responsivos para apresentar sua empresa com profissionalismo, foco em performance e experiência do usuário.",
  },
  {
    icon: Zap,
    title: "Landing Pages e Páginas de Vendas",
    description:
      "Criação de páginas otimizadas para conversão, com design persuasivo e estratégias de CRO para maximizar seus resultados e vendas.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces",
    description:
      "Desenvolvimento de lojas virtuais completas, integradas a meios de pagamento e sistemas de gestão, para potencializar suas vendas online.",
  },
  {
    icon: Palette,
    title: "UX/UI Design para Sistemas e Apps",
    description:
      "Design estratégico de interfaces para web apps e aplicativos, focando em usabilidade, acessibilidade e experiência do usuário.",
  },
  {
    icon: Rocket,
    title: "Gestão de Tráfego Pago",
    description:
      "Gestão profissional de campanhas em Meta Ads e Google Ads com estratégias data-driven para gerar leads e vendas com ROI otimizado.",
  },
  {
    icon: Search,
    title: "SEO e CRO",
    description:
      "Otimização para buscas (SEO) e otimização de taxas de conversão (CRO) para aumentar visibilidade, tráfego orgânico e resultados reais.",
  },
];
