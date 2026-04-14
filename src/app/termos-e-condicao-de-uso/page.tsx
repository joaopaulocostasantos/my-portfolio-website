import { Container } from "@/components/container/Container";
import styles from "./TermosECondicaoDeUso.module.scss";
import { TermsConsentBlock } from "@/components/ui/TermsConsentBlock/TermsConsentBlock";
import { Bagde } from "@/components/ui/Bagde/Bagde";

export default function TermosECondicaoDeUso() {
  return (
    <div>
      <Container>
        <div className={styles.TermosECondicaoDeUso}>
          {/* header */}
          <div className={styles.TermosECondicaoDeUso__header}>
            <h1>
              Termos e <span>Condição de Uso</span>
            </h1>
            <p>
              Estes Termos regulam a relação entre mim, como prestador autônomo
              de serviços, e você, contratante. Leia com atenção antes de
              contratar ou utilizar meus serviços.
            </p>
          </div>

          <div className={styles.TermosECondicaoDeUso__main}>
            {/* Aceitação dos termos */}
            <div className={styles.TermosECondicaoDeUso__acceptance__of__terms}>
              <Bagde tag="01" description="Aceitação dos termos" />
              <p>
                Ao contratar meus serviços, acessar meu site ou me enviar
                qualquer solicitação de trabalho, você declara ter lido,
                compreendido e concordado integralmente com estes Termos e
                Condições de Uso.
              </p>

              <p>
                Estes Termos se aplicam a todos os serviços prestados por João
                Paulo Santos, inscrito sob o CNPJ nº 56.143.010/0001-30, com
                sede em Natal, Rio Grande do Norte - RN, no âmbito de design
                gráfico, UX/UI e desenvolvimento web.
              </p>

              <TermsConsentBlock innerText="Caso não concorde com algum ponto destes Termos, não prossiga com a contratação. Estou à disposição para esclarecer qualquer dúvida antes de iniciarmos o projeto." />
            </div>

            {/* Serviços prestados */}
            <div className={styles.TermosECondicaoDeUso__services__provided}>
              <Bagde tag="02" description="Serviços prestados" />
              <p>Atuo como prestador autônomo nas seguintes áreas:</p>

              <ul>
                <li>
                  Design Gráfico — identidade visual, logotipos, peças gráficas
                  e materiais institucionais
                </li>
                <li>
                  UX/UI Design— prototipação, wireframes, interfaces digitais e
                  design de experiência
                </li>
                <li>
                  Desenvolvimento Front-end — sites, landing pages, blogs, lojas
                  virtuais e interfaces com React.js, Next.js, WordPress,
                  Elementor Pro, Woocommerce
                </li>
                <li>
                  Consultoria — análise, estratégia e orientação em projetos de
                  design e desenvolvimento web
                </li>
              </ul>

              <p>
                O escopo exato de cada serviço é definido individualmente em
                proposta comercial ou contrato firmado antes do início do
                projeto.
              </p>
            </div>

            {/* Contratação */}
            <div className={styles.TermosECondicaoDeUso__hiring}>
              <Bagde tag="03" description="Contratação" />
              <p>
                A contratação se formaliza mediante aprovação da proposta
                comercial enviada por mim e confirmação do pagamento do sinal
                (entrada). Todo projeto será acompanhado de um briefing
                detalhado, que serve como referência para a execução do
                trabalho.
              </p>

              <ul>
                <li>
                  A proposta comercial tem validade de 7 dias corridos a partir
                  do envio
                </li>
                <li>
                  O início do projeto ocorre após a confirmação do pagamento da
                  entrada acordada
                </li>
                <li>
                  Alterações significativas no escopo original estão sujeitas a
                  novo orçamento
                </li>
                <li>
                  Solicitações fora do escopo acordado são tratadas como um novo
                  projeto
                </li>
              </ul>

              <TermsConsentBlock innerText="O briefing é o documento que orienta todo o projeto. Informações incompletas ou alterações frequentes podem impactar prazos e custos." />
            </div>

            {/* Pagamento */}
            <div className={styles.TermosECondicaoDeUso__payment}>
              <Bagde tag="04" description="Pagamento" />
              <p>
                As condições de pagamento são definidas na proposta comercial.
                Como regra geral:
              </p>

              <p>
                50% do valor total, pago antes do início do projeto, 50%
                restantes na entrega final, antes da liberação dos arquivos.
              </p>

              <ul>
                <li>
                  Pagamentos via Pix, transferência bancária ou boleto, conforme
                  acordado
                </li>
                <li>
                  Atrasos no pagamento implicam na suspensão do projeto até a
                  regularização
                </li>
                <li>
                  Valores em aberto por mais de 15 dias corridos, serão
                  acrescidos de multa de 2% e juros de 1% ao mês{" "}
                </li>
                <li>
                  Os arquivos e entregáveis finais só serão liberados após a
                  quitação integral
                </li>
              </ul>

              <TermsConsentBlock innerText="Todos os serviços e ferramentas utilizados são escolhidos com critério e devem oferecer o mesmo nível de segurança e confidencialidade que aplico no tratamento dos seus dados." />
            </div>

            {/* Entrega e prazos */}
            <div
              className={styles.TermosECondicaoDeUso__delivery__and__deadlines}
            >
              <Bagde tag="05" description="Entrega e prazos" />
              <p>
                Os prazos de entrega são estabelecidos na proposta comercial e
                começam a contar a partir da confirmação do pagamento da entrada
                e do recebimento completo do briefing e materiais necessários.
              </p>
              <ul>
                <li>
                  O prazo pode ser revisto caso o contratante demore mais de 3
                  dias úteis para enviar feedbacks ou materiais solicitados
                </li>
                <li>
                  Cada projeto inclui até 2 rodadas de revisão no escopo
                  acordado; revisões adicionais são cobradas separadamente
                </li>
                <li>
                  Revisões solicitadas após a aprovação final são consideradas
                  um novo serviço
                </li>
                <li>
                  Prazos urgentes ou entregas em final de semana estão sujeitos
                  a acréscimo no valor
                </li>
              </ul>

              <TermsConsentBlock innerText="A pontualidade nas entregas depende da colaboração de ambas as partes. Feedbacks claros e ágeis garantem o projeto dentro do prazo." />
            </div>

            {/* Propriedade intelectual */}
            <div
              className={styles.TermosECondicaoDeUso__intellectual__property}
            >
              <Bagde tag="07" description="Propriedade intelectual" />
              <p>
                Todo o material produzido durante o projeto permanece de minha
                propriedade até a quitação integral do pagamento. Após o
                pagamento completo, os direitos patrimoniais sobre o produto
                final são transferidos ao contratante, nos termos da Lei nº
                9.610/1998 (Lei de Direitos Autorais).
              </p>

              <ul>
                <li>
                  Os direitos morais de autoria permanecem comigo, mesmo após a
                  transferência dos direitos patrimoniais
                </li>
                <li>
                  Posso utilizar o projeto no meu portfólio e materiais de
                  divulgação, salvo acordo de confidencialidade específico
                </li>
                <li>
                  Fontes, plugins e recursos de terceiros seguem as licenças
                  próprias de cada fornecedor
                </li>
                <li>
                  O contratante é responsável por garantir que os materiais
                  fornecidos não infrinjam direitos de terceiros
                </li>
              </ul>
            </div>

            {/* Responsabilidades */}
            <div className={styles.TermosECondicaoDeUso__responsiveness}>
              <div
                className={styles.TermosECondicaoDeUso__responsiveness__topics}
              >
                <div className={styles.my__responsibilities}>
                  <h3>Minhas responsabilidades</h3>
                  <p>
                    Executar o projeto conforme escopo acordado, com qualidade e
                    dentro dos prazos definidos
                  </p>
                </div>
                <div className={styles.your__responsibilities}>
                  <h3>Suas responsabilidades</h3>
                  <p>
                    Fornecer informações, materiais e feedbacks de forma clara e
                    dentro dos prazos combinados
                  </p>
                </div>
              </div>

              <ul>
                <li>
                  Não me responsabilizo por resultados de negócio, vendas ou
                  retorno financeiro decorrentes do material produzido
                </li>
                <li>
                  Não me responsabilizo por problemas causados por alterações
                  feitas pelo contratante após a entrega
                </li>
                <li>
                  Não me responsabilizo por falhas em serviços de terceiros
                  (hospedagem, domínios, plataformas externas)
                </li>
                <li>
                  Erros decorrentes de informações incorretas no briefing são de
                  responsabilidade do contratante
                </li>
              </ul>
            </div>

            {/* Cancelamento e reembolso */}
            <div
              className={styles.TermosECondicaoDeUso__cancellation_and_refund}
            >
              <Bagde tag="08" description="Cancelamento e reembolso" />
              <p>
                O cancelamento deve ser solicitado formalmente por escrito. As
                condições de reembolso variam conforme o estágio de execução:
              </p>

              <ul>
                <li>
                  Antes do início — reembolso integral do valor pago,
                  descontando eventuais custos administrativos
                </li>
                <li>
                  Durante a execução — cobrança proporcional ao trabalho já
                  realizado; saldo restante devolvido
                </li>
                <li>
                  Após a entrega final — não há reembolso; ajustes são
                  realizados como novo serviço
                </li>
              </ul>

              <TermsConsentBlock innerText="O sinal (entrada) é não reembolsável após o início do projeto, pois cobre o tempo de planejamento e a reserva de agenda já dedicados." />
            </div>

            {/* Confidencialidade */}
            <div className={styles.TermosECondicaoDeUso__confidentiality}>
              <Bagde tag="09" description="Confidencialidade" />
              <p>
                Comprometo-me a manter sigilo sobre todas as informações
                confidenciais compartilhadas durante o projeto, incluindo dados
                estratégicos, financeiros, técnicos ou comerciais.
              </p>

              <ul>
                <li>
                  As informações confidenciais não serão divulgadas a terceiros
                  sem autorização expressa do contratante
                </li>
                <li>
                  A obrigação de sigilo permanece válida por 2 anos após o
                  encerramento do projeto
                </li>
                <li>
                  Projetos que exijam NDA específico devem ser acordados antes
                  do início dos trabalhos
                </li>
                <li>
                  Informações de domínio público não se enquadram nesta cláusula
                </li>
              </ul>
            </div>

            {/* Alterações nestes termos */}
            <div
              className={styles.TermosECondicaoDeUso__changes__to__these__terms}
            >
              <p>
                Estes Termos podem ser atualizados a qualquer momento. A versão
                vigente estará sempre disponível nesta página com a data de
                atualização indicada.
              </p>
              <p>
                Projetos em andamento seguem os Termos vigentes na data de
                assinatura da proposta. A continuidade da contratação dos meus
                serviços implica na aceitação dos Termos mais recentes.
              </p>

              <TermsConsentBlock innerText="Recomendo que você salve uma cópia destes Termos na data de contratação do seu projeto para referência futura." />
            </div>

            {/* Contato e foro */}
            <div className={styles.TermosECondicaoDeUso__contact__and__forum}>
              <p>
                Para dúvidas ou questões relacionadas a estes Termos, entre em
                contato diretamente comigo. Fica eleito o foro da comarca
                de Natal/RN para dirimir quaisquer conflitos decorrentes destes
                Termos, com renúncia a qualquer outro, por mais privilegiado que
                seja.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
