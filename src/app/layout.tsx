import type { Metadata } from "next";
import Script from "next/script";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

// componentes
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Paulo Designer e Desenvolvedor - Portfolio",
  description:
    "Bem-vindo ao meu portfólio! Sou João Paulo, um designer e desenvolvedor apaixonado por criar experiências digitais incríveis. Aqui você encontrará uma seleção dos meus melhores trabalhos, incluindo projetos de design gráfico, desenvolvimento web e muito mais. Explore meu portfólio para conhecer minhas habilidades e ver como posso ajudar a transformar suas ideias em realidade.",
  keywords: [
    "João Paulo",
    "Designer",
    "Desenvolvedor",
    "Portfólio",
    "Design Gráfico",
    "Desenvolvimento Web",
    "Identidade Visual",
    "UI/UX Design",
    "Designer Freelancer",
    "Desenvolvedor Freelancer",
    "Design de Interfaces",
    "Design de Experiência do Usuário",
    "Desenvolvimento Front-end",
    "Desenvolvimento Back-end",
    "Design Responsivo",
    "Design de Logotipos",
    "Design para Mídias Sociais",
    "Gestão de Trafego Pago",
    "Design para Criativos Digitais",
    "Experiências Digitais",
    "Projetos de Design",
    "Projetos de Desenvolvimento",
  ],
  authors: [
    {
      name: "João Paulo",
      url: "https://www.linkedin.com/in/joaopaulodacostasantos/",
    },
  ],
  creator: "João Paulo Santos | Designer e Desenvolvedor",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "João Paulo Designer e Desenvolvedor - Portfolio",
    title: "João Paulo Designer e Desenvolvedor - Portfolio",
    description:
      "Bem-vindo ao meu portfólio! Sou João Paulo, um designer e desenvolvedor apaixonado por criar experiências digitais incríveis. Aqui você encontrará uma seleção dos meus melhores trabalhos, incluindo projetos de design gráfico, desenvolvimento web e muito mais. Explore meu portfólio para conhecer minhas habilidades e ver como posso ajudar a transformar suas ideias em realidade.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${funnelDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* GTM - Head */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NCWN5F83');`,
          }}
        />
        {/* GTM - Head */}
      </head>
      <body suppressHydrationWarning>
        {/* GTM - Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCWN5F83"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* GTM - Body */}

        {/* Project */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
