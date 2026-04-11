import { Bagde } from "@/components/ui/Bagde/Bagde";
import styles from "./privacy-policy.module.scss";
import { Container } from "@/components/container/Container";
import { TermsConsentBlock } from "@/components/ui/TermsConsentBlock/TermsConsentBlock";

export default function PrivacyPolicy() {
  return (
    <div>
      <Container>
        <div className={styles.privacy__policy}>
          <div className={styles.privacy__policy__header}>
            <h1>
              Política de <span>Privacidade</span>
            </h1>
            <p>
              Sua privacidade é fundamental para mim. Este documento descreve
              com transparência como coleto, utilizo e protejo suas informações
              pessoais ao usar meus serviços.
            </p>
          </div>

          <main className={styles.privacy__policy__main}>
            {/* Introdução */}
            <div className={styles.privacy__policy__intro}>
              <Bagde tag="01" description="Introdução" />
              <p>
                João Paulo Santos, prestador autônomo de serviços, inscrito sob
                o CPF/CNPJ nº 56.143.010/0001-30, com sede em Natal, Rio Grande
                do Norte, é o responsável pelo tratamento dos seus dados
                pessoais no contexto dos serviços de design gráfico, UX/UI e
                desenvolvimento web prestados. Esta Política de Privacidade está
                em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei
                nº 13.709/2018) e tem como objetivo garantir total transparência
                sobre o tratamento das suas informações.
              </p>

              <TermsConsentBlock innerText="Ao utilizar meu site ou contratar meus serviços, você concorda com os termos desta Política. Caso não concorde, por favor, não prossiga com a utilização dos meus serviços." />
            </div>

            {/* Dados que coletamos */}
            <div className={styles.privacy__policy__We__collect__data}>
              <Bagde tag="02" description="Dados que coletamos" />
              <p>
                Coletamos apenas os dados necessários para a prestação dos meus
                serviços e para manter um relacionamento de qualidade com meus
                clientes:
              </p>

              <ul>
                <li>
                  Dados de identificação — nome completo, e-mail, telefone e
                  empresa
                </li>
                <li>
                  Dados de navegação — endereço IP, tipo de dispositivo, páginas
                  visitadas e tempo de sessão
                </li>
                <li>
                  Dados de comunicação — mensagens enviadas via formulário de
                  contato ou e-mail
                </li>
                <li>
                  Dados de contratação — CNPJ ou CPF, endereço de cobrança e
                  informações de projeto
                </li>
                <li>
                  Dados de navegação via cookies — conforme descrito na seção de
                  Cookies
                </li>
              </ul>
            </div>

            {/* Como usamos seus dados */}
            <div className={styles.privacy__policy__How__we__use__your__data}>
              <Bagde tag="03" description="Como usamos seus dados" />
              <p>Utilizo seus dados com finalidade clara e determinada:</p>

              <ul>
                <li>
                  Prestar e gerenciar os serviços contratados com qualidade e
                  atenção personalizada
                </li>
                <li>
                  Enviar propostas comerciais, orçamentos e comunicações sobre
                  seu projeto
                </li>
                <li>
                  Emitir notas fiscais e documentos legais relacionados à
                  contratação
                </li>
                <li>
                  Aprimorar continuamente meus serviços com base em feedbacks e
                  análises de uso
                </li>
                <li>
                  Enviar conteúdos relevantes e novidades sobre design e
                  desenvolvimento web (mediante consentimento)
                </li>
                <li>Cumprir obrigações legais e regulatórias aplicáveis</li>
              </ul>

              <p>
                Não utilizo seus dados para fins de marketing de terceiros, nem
                os compartilho sem sua autorização explícita.
              </p>
            </div>

            {/* Compartilhamento de dados */}
            <div className={styles.privacy__policy__data__sharing}>
              <Bagde tag="04" description="Compartilhamento de dados" />
              <p>
                Seus dados pessoais não são vendidos, alugados ou cedidos a
                terceiros. Em situações específicas e necessárias, podemos
                compartilhá-los com:
              </p>

              <ul>
                <li>
                  Ferramentas de tecnologia— plataformas de hospedagem,
                  ferramentas de análise (ex.: Google Analytics) e sistemas de
                  e-mail
                </li>
                <li>
                  Profissionais de apoio— contador e demais profissionais que me
                  auxiliam na operação dos serviços
                </li>
                <li>
                  Autoridades competentes— quando exigido por lei, ordem
                  judicial ou necessidade lega
                </li>
              </ul>

              <TermsConsentBlock innerText="Todos os serviços e ferramentas utilizados são escolhidos com critério e devem oferecer o mesmo nível de segurança e confidencialidade que aplico no tratamento dos seus dados." />
            </div>

            {/* Cookies */}
            <div className={styles.privacy__policy__cookies}>
              <Bagde tag="05" description="Cookies" />
              <p>
                Meu site utiliza cookies para melhorar sua experiência de
                navegação. Cookies são pequenos arquivos de texto armazenados no
                seu dispositivo que me ajudam a entender como você interage com
                o site.
              </p>

              <ul>
                <li>
                  Cookies essenciais — necessários para o funcionamento básico
                  do site; não podem ser desativados
                </li>
                <li>
                  Cookies de desempenho — me ajudam a entender como os
                  visitantes usam o site (ex.: Google Analytics)
                </li>
                <li>
                  Cookies de preferência — lembram suas configurações e
                  preferências de navegação
                </li>
              </ul>

              <p>
                Você pode gerenciar ou desabilitar cookies nas configurações do
                seu navegador. Observe que desabilitar cookies pode afetar
                algumas funcionalidades do site.
              </p>
            </div>

            {/* Retenção dos dados */}
            <div className={styles.privacy__policy__data__retention}>
              <Bagde tag="06" description="Retenção dos dados" />
              <p>
                Mantenho seus dados apenas pelo tempo necessário para as
                finalidades descritas nesta Política ou conforme exigido por
                lei:
              </p>

              <ul>
                <li>
                  Dados de clientes ativos — durante todo o período de
                  relacionamento
                </li>
                <li>
                  Dados contratuais e fiscais — por até5 anos, conforme
                  legislação tributária vigente
                </li>
                <li>
                  Dados de comunicações e contatos — por até 2 anos após o
                  último contato
                </li>
                <li>
                  Dados de navegação — conforme configuração do cookie,
                  geralmente até 13 meses
                </li>
              </ul>

              <p>
                Após os prazos acima, seus dados são eliminados de forma segura
                e permanente.
              </p>
            </div>

            {/* Seus direitos (LGPD) */}
            <div className={styles.privacy__policy__lgpd}>
              <Bagde tag="07" description="Seus direitos (LGPD)" />
              <p>
                A Lei Geral de Proteção de Dados garante a você os seguintes
                direitos, que podem ser exercidos a qualquer momento:
              </p>

              <ul>
                <li>
                  Confirmar a existência de tratamento dos seus dados pessoais
                </li>
                <li>Acessar os dados que tenho sobre você</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>
                  Solicitar a anonimização, bloqueio ou eliminação dos seus
                  dados
                </li>
                <li>
                  Revogar seu consentimento quando o tratamento for baseado nele
                </li>
                <li>
                  Solicitar a portabilidade dos seus dados para outro fornecedor
                </li>
                <li>
                  Opor-se ao tratamento que não esteja em conformidade com a
                  LGPD
                </li>
                <li>
                  Obter informações sobre as entidades com quem compartilhamos
                  seus dados
                </li>
              </ul>

              <p>
                Para exercer qualquer um desses direitos, entre em contato pelos
                canais indicados na seção de Contato.
              </p>
            </div>

            {/* Segurança */}
            <div className={styles.privacy__policy__security}>
              <Bagde tag="08" description="Segurança" />
              <p>
                Adoto medidas técnicas adequadas para proteger seus dados contra
                acesso não autorizado, perda, alteração ou divulgação indevida.
                Entre as práticas que utilizo:
              </p>

              <ul>
                <li>
                  Criptografia SSL/TLS em todas as transmissões de dados no site
                </li>
                <li>
                  Acesso aos dados restrito exclusivamente a mim, como prestador
                  responsável
                </li>
                <li>
                  Revisão periódica das minhas práticas de segurança e
                  privacidade
                </li>
                <li>
                  Armazenamento de dados em servidores seguros e com backups
                  regulares
                </li>
              </ul>

              <TermsConsentBlock innerText="Em caso de incidente de segurança que possa afetar seus dados, notificaremos você e a Autoridade Nacional de Proteção de Dados (ANPD) nos prazos previstos em lei." />
            </div>

            {/* Segurança */}
            <div className={styles.privacy__policy__contact}>
              <Bagde tag="09" description="Contato" />
              <p>
                Se você tiver dúvidas sobre esta Política, quiser exercer seus
                direitos ou tiver qualquer solicitação relacionada aos seus
                dados pessoais, entre em contato diretamente comigo:
                contatoprofissionaljps@gmail.com
              </p>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
