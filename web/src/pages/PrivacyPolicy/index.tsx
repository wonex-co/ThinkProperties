import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, RatingBar } from "../../components";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <header className="flex justify-center items-center w-full p-[19px] bg-white-A700">
            <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1200px]">
              <div className="flex flex-row justify-start items-start gap-[11px]">
                <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
                <Text size="lg" as="p" className="mt-1 !text-orange-A700 !font-markoone">
                  Think Imóveis
                </Text>
              </div>
              <ul className="flex flex-row justify-center">
                <li>
                  <a href="#" className="cursor-pointer hover:text-gray-900 hover:font-semibold">
                    <Text />
                  </a>
                </li>
                <li>
                  <a href="#" className="ml-[41px] cursor-pointer hover:text-gray-900 hover:font-semibold">
                    <Text />
                  </a>
                </li>
                <li>
                  <a href="#" className="ml-3.5 cursor-pointer hover:text-gray-900 hover:font-semibold">
                    <Text />
                  </a>
                </li>
                <li>
                  <a href="#" className="ml-[22px]">
                    <Heading as="h6" className="text-center">
                      Propriedades{" "}
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="ml-[31px]">
                    <Heading as="h6">Blog</Heading>
                  </a>
                </li>
              </ul>
              <div className="flex flex-row justify-between items-center w-[19%]">
                <div className="flex flex-row justify-start items-center w-[42%] gap-2">
                  <RatingBar
                    value={1}
                    isEditable={true}
                    color="#191919"
                    activeColor="#191919"
                    size={24}
                    starCount={2}
                    className="flex justify-between h-[24px] w-[24px]"
                  />
                  <Heading size="lg" as="h6">
                    Buscar
                  </Heading>
                </div>
                <a
                  href="#"
                  className="flex justify-center items-center w-[94px] h-[42px] pt-3 pb-[7px] px-6 bg-gray-900 rounded-[10px]"
                >
                  <Heading as="h6" className="!text-white-A700 text-center">
                    Log in
                  </Heading>
                </a>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-start justify-start w-full pl-[120px] pr-14">
            <div className="flex flex-col items-center justify-start w-full gap-[60px] mx-auto max-w-[1054px]">
              <div className="flex flex-col items-center justify-start w-full gap-10">
                <div className="flex flex-col items-start justify-center w-full gap-2 py-0.5">
                  <Heading size="7xl" as="h1" className="mt-[3px] tracking-[-0.92px]">
                    Política de privacidade
                  </Heading>
                  <Text as="p">Ultima atualização: Janeiro 2020</Text>
                </div>
                <Text as="p">
                  Olá, bem-vindo à nossa política de privacidade que se aplica aos nossos clientes. Esta política
                  estabelece como, se você for um usuário Think imóveis.com ou visitante de nosso site, trataremos suas
                  informações pessoais.
                  <br />
                  Última atualização em 01 de março de 2020.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[21px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.48px]">
                    1. O tipo de informações pessoais que coletamos
                  </Heading>
                  <Text as="p">
                    Olá, bem-vindo à nossa política de privacidade que se aplica aos nossos clientes. Esta política
                    estabelece como, se você for um usuário Think imóveis.com ou visitante de nosso site, trataremos
                    suas informações pessoais.
                    <br />
                    Última atualização em 01 de março de 2020.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-6">
                  <Heading size="4xl" as="h3" className="tracking-[-0.48px]">
                    2. Cookies e análises da web
                  </Heading>
                  <Text as="p">
                    Utilizamos cookies para reconhecer e monitorizar os utilizadores, o seu comportamento no site e as
                    suas preferências de acesso ao seu site. Estes cookies incluem o IP e o tempo de visita dos
                    visitantes. Os visitantes da Think Imóveis que não desejam que cookies sejam colocados em seus
                    navegadores devem configurá-los para rejeitar cookies antes de usar o site da Think imóveis.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                  <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                    3. Quando precisamos atualizar esta política?
                  </Heading>
                  <Text as="p">
                    Precisaremos atualizar esta política de tempos em tempos para garantir que ela permaneça atualizada
                    com os requisitos legais mais recentes e quaisquer melhorias em nossas práticas de gestão de
                    privacidade.
                    <br />
                    Quando alterarmos a política, garantiremos que informaremos você, se houver, sobre tais alterações.
                    Uma cópia da versão mais recente desta política estará sempre disponível nesta página.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-8">
                  <Heading size="4xl" as="h5" className="tracking-[-0.48px]">
                    4. Cadastro
                  </Heading>
                  <Text as="p">
                    Para utilizar nosso Serviço você precisará criar uma conta e concluir o processo de registro em
                    https://Think imoveis.com/signup (Registro).
                    <br />
                    No Registro, você selecionará credenciais de logon para cada usuário do Serviço, que pode ser um
                    funcionário do Assinante ou outras pessoas autorizadas pelo Assinante a usar o Serviço (Usuário
                    Autorizado). Os detalhes de login devem ser usados ​​apenas pelo Usuário Autorizado ao qual foram
                    atribuídos e não podem ser compartilhados com terceiros (incluindo outro Usuário Autorizado). Você é
                    o único responsável pela confidencialidade e uso de todos os detalhes de login da sua conta e
                    daqueles atribuídos aos Usuários Autorizados, bem como por qualquer uso ou uso indevido do Serviço
                    usando os detalhes de login do Assinante ou de quaisquer Usuários Autorizados. Você deverá nos
                    notificar imediatamente se tomar conhecimento de qualquer perda, roubo ou uso não autorizado de
                    quaisquer detalhes de login, e nos reservamos o direito de excluí-los ou alterá-los a qualquer
                    momento e por qualquer motivo.
                    <br />
                    Você garante e declara que os detalhes que você nos fornece durante o Registro são precisos,
                    completos e atualizados. Manteremos e trataremos essas informações de acordo com os termos da nossa
                    Política de Privacidade.
                    <br />
                    Se você ou seus Participantes usarem um telefone celular para acessar nosso Serviço, poderemos
                    precisar enviar mensagens SMS. Você pode cancelar este serviço respondendo STOP à mensagem SMS ou
                    entrando em contato conosco pelo e-mail support@Think imóveis.com.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[21px]">
                  <Heading size="4xl" as="h6" className="tracking-[-0.48px]">
                    5. Opções de marketing relacionadas aos seus dados pessoais
                  </Heading>
                  <Text as="p">
                    Quando tivermos sua permissão para fazê-lo (por exemplo, se você se inscreveu em uma de nossas
                    listas de e-mail ou indicou que está interessado em receber ofertas ou informações nossas),
                    enviaremos mensagens de marketing por e-mail sobre produtos e serviços que achamos que podem ser de
                    interesse para você. Você pode optar por não receber tais comunicações se preferir não recebê-las no
                    futuro, usando o recurso de “cancelar assinatura” fornecido na própria comunicação.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700">
          <div className="flex flex-row justify-center items-center w-full mt-[5px] mx-auto max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-[29%] gap-[43px]">
              <div className="flex flex-row justify-start items-start w-full gap-[11px]">
                <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
                <Text size="lg" as="p" className="mt-1 !text-orange-A700 !font-markoone">
                  Think Imóveis
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-7">
                <div className="flex flex-row justify-start w-full">
                  <ul className="flex flex-col items-start justify-start w-full gap-[52px]">
                    <li>
                      <a href="#">
                        <Heading as="h6">59 Bervely Hill Ave, Brooklyn Town,</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">New York, NY 5630, CA, US</Heading>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                  <Heading as="h6" className="mt-px">
                    +(123) 456-7890
                  </Heading>
                  <Heading as="h6">info@mail.com</Heading>
                </div>
                <div className="flex flex-row justify-between w-[59%]">
                  <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                    <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                    <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
                  </div>
                  <div className="h-[30px] w-[30px] relative">
                    <div className="flex flex-row justify-end items-start w-[44%] bottom-[23%] right-[20%] m-auto absolute">
                      <Img src="images/img_vector.svg" alt="vector_one" className="h-[12px] w-[12px] mt-[3px] z-[1]" />
                      <div className="h-[3px] w-[3px] ml-[-2px] bg-orange-A700 rounded-[1px]" />
                    </div>
                    <Img
                      src="images/img_vector_orange_a700.svg"
                      alt="vector_five"
                      className="h-[25px] w-[25px] bottom-[2%] right-[1%] m-auto absolute"
                    />
                  </div>
                  <div className="h-[30px] w-[30px] relative">
                    <Img
                      src="images/img_vector_orange_a700.svg"
                      alt="vector_seven"
                      className="h-[25px] w-[25px] bottom-[2%] right-[1%] m-auto absolute"
                    />
                    <div className="flex flex-col items-start justify-start h-[15px] w-[14px] gap-0.5 bottom-[21%] right-[21%] m-auto absolute">
                      <div className="h-[3px] w-[3px] bg-orange-A700 rounded-[1px]" />
                      <div className="flex flex-row justify-end">
                        <Img src="images/img_vector_orange_a700_10x2.svg" alt="vector_eleven" className="h-[10px]" />
                        <Img
                          src="images/img_vector_orange_a700_10x2.svg"
                          alt="vector_thirteen"
                          className="h-[10px] ml-px z-[1]"
                        />
                        <Img
                          src="images/img_vector_orange_a700_10x9.svg"
                          alt="vector_fifteen"
                          className="h-[10px] w-[9px] ml-[-2px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                    <Img src="images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-start w-[72%]">
              <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
                <Heading size="lg" as="h6">
                  Features
                </Heading>
                <div className="flex flex-col items-start justify-start w-full">
                  <ul className="flex flex-col items-start justify-start gap-4">
                    <li>
                      <a href="#">
                        <Heading as="h6">Home v1</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Home v2</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Sobre</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Contatos</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Busca</Heading>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-3.5">
                <Heading size="lg" as="h6">
                  Informação
                </Heading>
                <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                  <a href="#">
                    <Heading as="h6">Listagem v1</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Listagem v2</Heading>
                  </a>
                  <Heading as="h6" className="!leading-6">
                    Detalhes da propriedade
                  </Heading>
                  <a href="#">
                    <Heading as="h6">Lista de Agentes</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Perfil do agente</Heading>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-3.5">
                <Heading size="lg" as="h6">
                  Documentação{" "}
                </Heading>
                <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                  <a href="#">
                    <Heading as="h6">Blog</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">FAQ</Heading>
                  </a>
                  <Heading as="h6" className="!leading-6">
                    Política de privacidade
                  </Heading>
                  <a href="#">
                    <Heading as="h6">Licença</Heading>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
                <Heading size="lg" as="h6">
                  Outros
                </Heading>
                <div className="flex flex-col items-start justify-center w-full">
                  <ul className="flex flex-col items-start justify-start mt-0.5 gap-[15px]">
                    <li>
                      <a href="#">
                        <Heading as="h6">Log in</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Enter OTP</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Nova Senha</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Redefinir senha</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6">Criar uma conta</Heading>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Heading as="h6" className="ml-[45px]">
            © 2022. All rights reserved.
          </Heading>
        </footer>
      </div>
    </>
  );
}
