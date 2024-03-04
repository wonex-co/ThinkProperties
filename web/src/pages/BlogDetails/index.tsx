import React from "react";
import { Helmet } from "react-helmet";
import { RatingBar, Heading, Button, Img, Text } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
];

type TableRowType = { fullname: string; title: string; emailaddress: string; phonenumber: string };

export default function BlogDetailsPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("fullname", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Full Name
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("title", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Title
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("emailaddress", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Email
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Phone Number
          </Heading>
        ),
        meta: { width: "214px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[110px] bg-gray-50_01">
        <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-[110px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full gap-10 max-w-[1150px]">
              <Heading size="6xl" as="h1" className="w-[87%] tracking-[-0.72px]">
                10 tendências deliciosas de decoração de salas de jantar para a primavera
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <div className="flex flex-col items-center justify-start w-[87%] gap-6">
                    <Img
                      src="images/img_rectangle_5618_550x996.png"
                      alt="image"
                      className="w-full object-cover rounded-[10px]"
                    />
                    <Text as="p">
                      Que época estamos vivendo! Muitas coisas estão voltando, trazendo de volta a nostalgia. Quer saber
                      por que estou falando sobre nostalgia e tudo? Principalmente quando deveria ser um artigo em
                      sites! Bem, porque algumas tecnologias antigas e famosas de sites também estão voltando. Sim,
                      estou falando de sites estáticos.
                      <br />
                      Há muito tempo, quase todos os sites eram sites estáticos durante os primeiros dias da Internet.
                      Então os sites dinâmicos surgiram e explodiram o espaço. Muitos sites mudaram para ele.
                      Obviamente, sites dinâmicos têm suas vantagens. Mas os sites estáticos estão de volta. E está
                      vindo mais forte do que antes. Neste artigo, você abordará os conceitos básicos de sites
                      estáticos, como o que é um site estático, quais são as vantagens e quando você deve usar um site
                      estático. Vamos começar.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[12%]">
                    <div className="flex flex-col items-start justify-start w-full gap-4">
                      <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[32px] w-[32px]" />
                      <div className="flex flex-row justify-start items-center w-full gap-1">
                        <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[32px] w-[32px]" />
                        <div className="flex flex-row justify-start w-[74%]">
                          <div className="flex flex-col items-center justify-start w-full gap-0.5">
                            <Img src="images/img_union.svg" alt="union_one" className="h-[25px]" />
                            <Heading size="xs" as="h2">
                              Compartilhar isso
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <Img src="images/img_twitte.svg" alt="twitte_one" className="h-[32px] w-[32px]" />
                      <Img src="images/img_reddit.svg" alt="reddit_one" className="h-[32px] w-[32px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[87%] gap-12">
                  <div className="flex flex-col items-start justify-center w-full gap-[17px] py-0.5">
                    <Heading size="5xl" as="h3" className="mt-px tracking-[-0.56px]">
                      Blockquotes
                    </Heading>
                    <Text as="p">
                      {`Blockquotes podem ser aninhados. Adicione um >> na frente do parágrafo que deseja aninhar.`}
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center w-full gap-[17px] p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <Heading size="2xl" as="h4" className="mt-0.5 tracking-[-0.40px]">
                      Desempenho: velocidade de carregamento mais rápida
                    </Heading>
                    <div className="flex flex-col items-center justify-start gap-5">
                      <Text as="p">
                        Sites estáticos são muito mais rápidos que os dinâmicos. Por não possuírem sistema back-end, não
                        há perda de tempo devido à conexão com o banco de dados. Em vez disso, os arquivos HTML leves e
                        pré-renderizados carregam incrivelmente rápido.
                      </Text>
                      <Text as="p">
                        Mas por que o carregamento rápido é importante? De acordo com Neil Patel, 47% das pessoas na
                        internet esperam que uma página carregue em menos de 2 segundos.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-10 p-[39px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start justify-start w-[98%] pt-0.5 gap-[17px] mx-auto">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Desempenho: velocidade de carregamento mais rápida
                      </Heading>
                      <div className="flex flex-col items-center justify-start gap-5">
                        <Text as="p">
                          Sites estáticos são muito mais rápidos que os dinâmicos. Por não possuírem sistema back-end,
                          não há perda de tempo devido à conexão com o banco de dados. Em vez disso, os arquivos HTML
                          leves e pré-renderizados carregam incrivelmente rápido.
                        </Text>
                        <Text as="p">
                          Mas por que o carregamento rápido é importante? De acordo com Neil Patel, 47% das pessoas na
                          internet esperam que uma página carregue em menos de 2 segundos.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[98%] pt-0.5 gap-[17px] mx-auto">
                      <Heading size="2xl" as="h6" className="tracking-[-0.40px]">
                        Desempenho: velocidade de carregamento mais rápida
                      </Heading>
                      <div className="flex flex-col items-center justify-start gap-5">
                        <Text as="p">
                          CMS de sites dinâmicos como o WordPress têm uma dependência maior. Eles exigem um sistema
                          operacional como Linux
                        </Text>
                        <Text as="p">
                          Ao contrário dos sites dinâmicos, você não precisa depender de plug-ins para adicionar
                          funcionalidades ao seu site estático. Em vez disso, você pode criar ou incluir recursos
                          diretamente nos arquivos. Ou você pode inserir widgets usando um snippet.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[87%] gap-6">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                    <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                      Imagens
                    </Heading>
                    <Text as="p">
                      Por ser um site de carregamento rápido e mais seguro, você pode escolher um site estático para
                      cargas de trabalho de nível iniciante a médio. Esperançosamente, você tem a resposta sobre o que é
                      um site estático e por que deve usá-lo. Decida com cuidado se os sites estáticos são suficientes
                      para sua necessidade.
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle_5619_532x996.png"
                    alt="image_one"
                    className="w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[87%] gap-[60px]">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-col items-start justify-start w-full gap-3.5">
                      <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                        Listas
                      </Heading>
                      <Text as="p">
                        Por ser um site de carregamento rápido e mais seguro, você pode escolher um site estático para
                        cargas de trabalho de nível iniciante a médio. Esperançosamente, você tem a resposta sobre o que
                        é um site estático e por que deve usá-lo. Decida com cuidado se os sites estáticos são
                        suficientes para sua necessidade.
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="lg" as="h6" className="mt-[3px] !text-gray-600_02 !font-semibold">
                          Desempenho: velocidade de carregamento mais rápida
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="lg" as="h6" className="mt-[3px] !text-gray-600_02 !font-semibold">
                          Menos dependências do lado do servidor
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="lg" as="h6" className="mt-1 !text-gray-600_02 !font-semibold">
                          Flexibilidade: Mais liberdade para desenvolver sites
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="lg" as="h6" className="mt-1 !text-gray-600_02 !font-semibold">
                          Segurança: um site mais seguro
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="lg" as="h6" className="mt-[3px] !text-gray-600_02 !font-semibold">
                          Escalabilidade: capacidade de lidar com tráfego massivo
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="lg" as="h6" className="mt-1 !text-gray-600_02 !font-semibold">
                          Hospedagem e preços: economiza seu orçamento para sempre
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    <div className="flex flex-row justify-start gap-[15px] py-0.5">
                      <Heading size="lg" as="h6" className="h-[25px] mt-0.5 mb-px !text-gray-600_02">
                        01.
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        Desempenho: velocidade de carregamento mais rápida
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start gap-[13px] py-0.5">
                      <Heading size="lg" as="h6" className="mt-0.5 mb-px !text-gray-600_02">
                        02.
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        Menos dependências do lado do servidor
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start gap-3">
                      <Heading size="lg" as="h6" className="mt-0.5 mb-px !text-gray-600_02">
                        03.
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        Flexibilidade: Mais liberdade para desenvolver sites
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start gap-3">
                      <Heading size="lg" as="h6" className="mt-0.5 mb-px !text-gray-600_02">
                        04.
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        Segurança: um site mais seguro
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start gap-3 py-0.5">
                      <Heading size="lg" as="h6" className="mt-0.5 mb-px !text-gray-600_02">
                        05.
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        Escalabilidade: capacidade de lidar com tráfego massivo
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start gap-[11px]">
                      <Heading size="lg" as="h6" className="mb-px !text-gray-600_02">
                        06.
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        Hospedagem e preços: economiza seu orçamento para sempre
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3.5">
                  <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                    Link
                  </Heading>
                  <Text as="p">
                    Sim, um site estático pode ter todos os seus benefícios, mas será adequado para você? Essa é uma
                    grande questão. Depende do motivo pelo qual você vai construir um site, qual a finalidade que ele
                    servirá. É por isso que você deve fazer isso quando usar um site estático.
                    <br />A seguir estão os aplicativos comuns em que usar o site estático é a melhor escolha. - Sites
                    de blogs- - Sites de pequenas empresas - Sites em desenvolvimento - Sites de portfólio pessoal -
                    Sites que contêm informações básicas
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[87%] gap-10">
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                      Tabelas
                    </Heading>
                    <Text as="p">
                      A seguir estão os aplicativos comuns em que usar o site estático é a melhor escolha. - Sites de
                      blogs- - Sites de pequenas empresas.
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-full p-10 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <ReactTable
                      size="xs"
                      bodyProps={{ className: "" }}
                      headerProps={{ className: "" }}
                      rowDataProps={{ className: "border-blue_gray-100_01 border border-solid" }}
                      className="w-[916px] my-2.5"
                      columns={tableColumns}
                      data={tableData}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[87%] pt-0.5 gap-[21px]">
                  <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                    Escrito por
                  </Heading>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start items-center w-[84%]">
                      <Img
                        src="images/img_profile_picture.png"
                        alt="profilepicture"
                        className="h-[100px] w-[100px] rounded-[50%]"
                      />
                      <div className="flex flex-row justify-start w-[21%] ml-6">
                        <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                          <div className="flex flex-row justify-start items-center w-full">
                            <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                              Kristin Watson
                            </Heading>
                            <div className="h-[8px] w-[8px] ml-[-4px] bg-blue_gray-100_01 rounded-[50%]" />
                          </div>
                          <Heading as="h6" className="!text-gray-600_02">
                            Co-founder and CDO
                          </Heading>
                        </div>
                      </div>
                      <Heading as="h6" className="ml-1.5 !text-gray-600_02">
                        20 de julho/2022
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[41px] max-w-[1200px]">
              <Heading size="6xl" as="h2" className="tracking-[-0.72px]">
                Notícias recentes
              </Heading>
              <div className="flex flex-row w-full gap-6">
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <Img
                      src="images/img_rectangle_5617_350x384.png"
                      alt="image"
                      className="w-full object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Button
                        color="blue_gray_100_01"
                        size="md"
                        variant="outline"
                        className="font-semibold min-w-[91px]"
                      >
                        Negócios
                      </Button>
                      <div className="flex flex-col items-center justify-start w-full gap-4">
                        <Heading size="4xl" as="h3" className="tracking-[-0.48px] !leading-8">
                          10 tendências deliciosas de decoração de salas de jantar para a primavera
                        </Heading>
                        <div className="flex flex-row justify-start w-full gap-1">
                          <div className="flex flex-row justify-start items-start w-[29%] pt-0.5 gap-1.5">
                            <div className="h-[5px] w-[5px] mt-1 bg-blue_gray-100_01 rounded-sm" />
                            <Heading size="xs" as="h4" className="!text-gray-600_02">
                              20 de julho/2022
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[26%] gap-1.5">
                            <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                            <Heading size="xs" as="h5" className="!text-gray-600_02">
                              7 min de leitura
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Heading size="lg" as="h6" className="mt-px !text-gray-600_02">
                      Continue lendo
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#191919"
                      activeColor="#191919"
                      size={24}
                      starCount={2}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <Img
                      src="images/img_rectangle_5617_350x384.png"
                      alt="image"
                      className="w-full object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Button
                        color="blue_gray_100_01"
                        size="md"
                        variant="outline"
                        className="font-semibold min-w-[91px]"
                      >
                        Negócios
                      </Button>
                      <div className="flex flex-col items-center justify-start w-full gap-4">
                        <Heading size="4xl" as="h4" className="tracking-[-0.48px] !leading-8">
                          10 tendências deliciosas de decoração de salas de jantar para a primavera
                        </Heading>
                        <div className="flex flex-row justify-start w-full gap-1">
                          <div className="flex flex-row justify-start items-start w-[29%] pt-0.5 gap-1.5">
                            <div className="h-[5px] w-[5px] mt-1 bg-blue_gray-100_01 rounded-sm" />
                            <Heading size="xs" as="p" className="!text-gray-600_02">
                              20 de julho/2022
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[26%] gap-1.5">
                            <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                            <Heading size="xs" as="p" className="!text-gray-600_02">
                              7 min de leitura
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Heading size="lg" as="h6" className="mt-px !text-gray-600_02">
                      Continue lendo
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#191919"
                      activeColor="#191919"
                      size={24}
                      starCount={2}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <Img
                      src="images/img_rectangle_5617_350x384.png"
                      alt="image"
                      className="w-full object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Button
                        color="blue_gray_100_01"
                        size="md"
                        variant="outline"
                        className="font-semibold min-w-[91px]"
                      >
                        Negócios
                      </Button>
                      <div className="flex flex-col items-center justify-start w-full gap-4">
                        <Heading size="4xl" as="h4" className="tracking-[-0.48px] !leading-8">
                          10 tendências deliciosas de decoração de salas de jantar para a primavera
                        </Heading>
                        <div className="flex flex-row justify-start w-full gap-1">
                          <div className="flex flex-row justify-start items-start w-[29%] pt-0.5 gap-1.5">
                            <div className="h-[5px] w-[5px] mt-1 bg-blue_gray-100_01 rounded-sm" />
                            <Heading size="xs" as="p" className="!text-gray-600_02">
                              20 de julho/2022
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[26%] gap-1.5">
                            <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                            <Heading size="xs" as="p" className="!text-gray-600_02">
                              7 min de leitura
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Heading size="lg" as="h6" className="mt-px !text-gray-600_02">
                      Continue lendo
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#191919"
                      activeColor="#191919"
                      size={24}
                      starCount={2}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
