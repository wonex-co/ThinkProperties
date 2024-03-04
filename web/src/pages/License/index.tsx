import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LicensePage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-start w-full pl-[120px] pr-14">
            <div className="flex flex-col items-center justify-start w-full gap-[60px] mx-auto max-w-[996px]">
              <div className="flex flex-col items-center justify-start w-full gap-10">
                <div className="flex flex-col items-start justify-center w-full gap-1 py-[3px]">
                  <Heading size="7xl" as="h1" className="mt-[3px] tracking-[-0.92px]">
                    Licença
                  </Heading>
                  <Text as="p">Última atualização: janeiro de 2020</Text>
                </div>
                <Text as="p">
                  Seu conteúdo permanece seu, o que significa que você retém quaisquer direitos de propriedade
                  intelectual que possua sobre seu conteúdo. Por exemplo, você tem direitos de propriedade intelectual
                  sobre o conteúdo criativo que cria, como os comentários que escreve. Ou você pode ter o direito de
                  compartilhar o conteúdo criativo de outra pessoa, se ela lhe der permissão.
                  <br />
                  Precisamos da sua permissão se os seus direitos de propriedade intelectual restringirem o uso do seu
                  conteúdo. Você fornece essa permissão ao Google por meio desta licença.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <div className="flex flex-col items-start justify-start w-full gap-7">
                  <Heading size="4xl" as="h2" className="tracking-[-0.48px]">
                    O que está coberto
                  </Heading>
                  <Text as="p">
                    Esta licença cobre o seu conteúdo se esse conteúdo estiver protegido por direitos de propriedade
                    intelectual.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                  <Heading size="4xl" as="h3" className="tracking-[-0.48px]">
                    O que não está coberto
                  </Heading>
                  <Text as="p">
                    Utilizamos cookies para reconhecer e monitorizar os utilizadores, o seu comportamento no site e as
                    suas preferências de acesso ao seu site. Estes cookies incluem o IP e o tempo de visita dos
                    visitantes. Os visitantes da Think imoveis que não desejam a colocação de cookies em seus
                    navegadores devem configurar seus navegadores para rejeitar cookies antes de utilizar o site da
                    Think imoveis.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[21px]">
                  <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                    Atualizações de preços
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
                    Politica de reembolso
                  </Heading>
                  <Text as="p">
                    Mas por que o carregamento rápido é importante? De acordo com Neil Patel, 47% das pessoas na
                    internet esperam que uma página carregue em menos de 2 segundos.
                  </Text>
                  <Text as="p">
                    Sites estáticos são muito mais rápidos que os dinâmicos. Por não possuírem sistema back-end, não há
                    perda de tempo devido à conexão com o banco de dados. Em vez disso, os arquivos HTML leves e
                    pré-renderizados carregam incrivelmente rápido.
                  </Text>
                  <Text as="p">
                    Você não pode divulgar qualquer informação sobre seu pedido, incluindo, mas não se limitando a, ID
                    do pedido, conexão de download, etc.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
