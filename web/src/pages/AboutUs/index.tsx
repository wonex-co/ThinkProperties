import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input, RatingBar } from "../../components";
import Header from "../../components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-white-A700">
        <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-col items-center justify-start w-full gap-10 max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <Heading size="8xl" as="h1" className="tracking-[-1.08px] text-center !leading-[75px]">
                Reimaginando o setor imobiliário para
                <br />
                facilitar o desbloqueio.
              </Heading>
              <Text as="p" className="!text-gray-700 text-center">
                Por outro lado, denunciamos com justa indignação e antipatia por homens que estão tão seduzidos e
                desmoralizados pelos encantos do prazer do momento, tão cegos pelo desejo, que não conseguem prever a
                dor e os problemas.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row justify-start w-full gap-6">
                <Img src="images/img_rectangle_5592.png" alt="image" className="w-[66%] object-cover rounded-[10px]" />
                <Img
                  src="images/img_rectangle_5593.png"
                  alt="image_one"
                  className="w-[32%] object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-row justify-start w-full gap-6">
                <Img
                  src="images/img_rectangle_5595.png"
                  alt="image_two"
                  className="w-[32%] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_rectangle_5594.png"
                  alt="image_three"
                  className="w-[66%] object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[100px]">
            <div className="flex flex-row justify-center w-full p-[50px] bg-gray-50">
              <div className="flex flex-row w-full gap-[100px] max-w-[1200px]">
                <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                  <Button color="white_A700" size="3xl" shape="circle" className="w-[60px] shadow-xs">
                    <Img src="images/img_frame.svg" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Heading size="7xl" as="h2" className="tracking-[-0.92px]">
                      $15.4M
                    </Heading>
                    <Heading size="2xl" as="h3" className="!text-blue_gray-600 tracking-[-0.40px]">
                      Propriedade de
                      <br />
                      Transações de propriedades
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] mb-7 gap-[18px]">
                  <Button color="white_A700" size="3xl" shape="circle" className="w-[60px] shadow-xs">
                    <Img src="images/img_frame_orange_a700.svg" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Heading size="7xl" as="h4" className="tracking-[-0.92px]">
                      25K+
                    </Heading>
                    <Heading size="2xl" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                      Imóveis para comprar e vender com sucesso
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] mb-7 gap-[18px]">
                  <Img src="images/img_icon_white_a700.svg" alt="icon_one" className="h-[60px] w-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Heading size="7xl" as="h6" className="tracking-[-0.92px]">
                      500
                    </Heading>
                    <Heading size="2xl" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                      Transações concluídas diariamente
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[19%] mb-[54px] gap-[18px]">
                  <Img src="images/img_icon_white_a700_60x60.svg" alt="icon_one" className="h-[60px] w-[60px]" />
                  <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                    <Heading size="7xl" as="h1" className="tracking-[-0.92px]">
                      600+
                    </Heading>
                    <Heading size="2xl" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                      Clientes Regulares
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full pl-[120px] pr-14">
              <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1147px]">
                <div className="flex flex-col items-center justify-start w-[47%] gap-14">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                      Uma nota dos nossos fundadores.
                    </Heading>
                    <Text as="p" className="!text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour,
                    </Text>
                  </div>
                  <div className="flex flex-col w-full gap-8">
                    <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                        <Heading
                          size="2xl"
                          as="h5"
                          className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                        >
                          1
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[89%] pt-[3px] gap-[13px]">
                        <Heading size="3xl" as="h5" className="tracking-[-0.44px]">
                          Tudo começou em 1995
                        </Heading>
                        <Text as="p" className="!text-gray-700">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                          the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                        <Heading
                          size="2xl"
                          as="h5"
                          className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                        >
                          2
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[89%] pt-[3px] gap-[13px]">
                        <Heading size="3xl" as="h5" className="tracking-[-0.44px]">
                          Doe lançamentos em 2007
                        </Heading>
                        <Text as="p" className="!text-gray-700">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                          the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                        <Heading
                          size="2xl"
                          as="h5"
                          className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                        >
                          3
                        </Heading>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[89%] gap-[17px]">
                        <Heading size="3xl" as="h5" className="tracking-[-0.44px] !leading-[30px]">
                          Think imoveis realiza oferta pública inicial em 2008
                        </Heading>
                        <Text as="p" className="!text-gray-700">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                          the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle_20_589x531.png"
                  alt="image_four"
                  className="w-[47%] object-cover rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full max-w-[1150px]">
              <Img
                src="images/img_rectangle_20_589x496.png"
                alt="image_five"
                className="w-[44%] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-center justify-start w-[44%] gap-14">
                <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[17px]">
                  <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                    Nossa visão é simples.
                  </Heading>
                  <Text as="p" className="!text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the
                    other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                    demoralized by the charms of pleasure of the moment.
                    <br />
                    In a free hour, On the other hand, we denounce with righteous indignation and dislike men .
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                  <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                    Kausar Pial
                  </Heading>
                  <Heading size="lg" as="h6" className="mb-[3px] !text-gray-700 !font-semibold">
                    CEO at Static Mania
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-center justify-start w-full pt-[5px] gap-[55px] max-w-[1200px]">
                <Heading size="6xl" as="h1" className="tracking-[-0.72px] text-center">
                  Think imoveis Membros da equipe
                </Heading>
                <div className="justify-center w-full gap-6 grid-cols-4 grid">
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5596.png"
                      alt="kausar_pial_one"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Kausar Pial
                      </Heading>
                      <Text as="p" className="mb-[3px] !text-gray-700">
                        CEO
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5597.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-px py-[3px]">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Floyd Miles
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Presidente de Vendas
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5598.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Darlene Robertson
                      </Heading>
                      <Text as="p" className="mb-px !text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5599_282x282.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Guy Hawkins
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5600.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Jerome Bell
                      </Heading>
                      <Text as="p" className="mb-px !text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5601.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Ralph Edwards
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5602.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Arlene McCoy
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5603.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Devon Lane
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5604.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Courtney Henry
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5605.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Bessie Cooper
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5606.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Cody Fisher
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_rectangle_5607.png"
                      alt="image"
                      className="w-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Cody Fisher
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Coordenador de Marketing
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full px-14 py-[119px] bg-gray-900">
              <div className="flex flex-col items-center justify-start w-full gap-[116px] max-w-[1200px]">
                <div className="flex flex-col items-center justify-start w-full gap-[60px]">
                  <div className="flex flex-row justify-between items-center w-full">
                    <Heading size="6xl" as="h1" className="!text-white-A700 tracking-[-0.72px]">
                      Notícias e Consultas
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-[13%] gap-2">
                      <Heading size="lg" as="h6" className="mt-0.5 !text-orange-A700">
                        Explorar tudo
                      </Heading>
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#000000"
                        activeColor="#191919"
                        size={24}
                        starCount={2}
                        className="flex justify-between h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row w-full gap-6">
                    <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                      <Img
                        src="images/img_image_349x384.png"
                        alt="image"
                        className="w-full object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-center justify-start w-full gap-6">
                        <Heading size="4xl" as="h4" className="!text-white-A700 tracking-[-0.48px] !leading-8">
                          9 projetos DIY fáceis e ambiciosos para melhorar sua casa
                        </Heading>
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                          <Heading size="lg" as="h6" className="mt-0.5 !text-deep_orange-400">
                            Leia o artigo
                          </Heading>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={24}
                            starCount={2}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                      <Img
                        src="images/img_image_316x384.png"
                        alt="image_one"
                        className="w-full object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-center justify-start w-full gap-6">
                        <Heading size="4xl" as="h4" className="!text-white-A700 tracking-[-0.48px] !leading-8">
                          Lançamento da Série Shophouse em julho, oportunidade para investidores
                        </Heading>
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                          <Heading size="lg" as="h6" className="mt-0.5 !text-deep_orange-400">
                            Leia o artigo
                          </Heading>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={24}
                            starCount={2}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                      <Img
                        src="images/img_image_4.png"
                        alt="image_one"
                        className="w-full object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-center justify-start w-full gap-6">
                        <Heading size="4xl" as="h4" className="!text-white-A700 tracking-[-0.48px] !leading-8">
                          Procurando um novo lugar? Use este tempo para criar sua lista de desejos
                        </Heading>
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                          <Heading size="lg" as="h6" className="mt-0.5 !text-deep_orange-400">
                            Leia o artigo
                          </Heading>
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
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
                <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 bg-gray-400_01 rounded-[10px]">
                  <div className="flex flex-col items-center justify-start w-[54%] pt-0.5 gap-1.5">
                    <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                      Para atualizações recentes, notícias.
                    </Heading>
                    <Text as="p" className="!text-gray-900 text-center">
                      Ajudamos as empresas a personalizar, automatizar e ampliar a produção e entrega de anúncios.
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[54%] gap-2">
                    <Input
                      color="gray_50_02"
                      size="xs"
                      name="email"
                      placeholder="Digite seu e-mail"
                      className="w-[78%]"
                    />
                    <Button className="font-semibold min-w-[126px]">Inscrever</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full px-14 py-[74px] bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
            <div className="flex flex-row justify-start items-center w-full">
              <div className="flex flex-col items-start justify-start w-[29%] gap-[43px]">
                <div className="flex flex-row justify-start items-start gap-[11px]">
                  <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
                  <Text size="lg" as="p" className="mt-1 !text-orange-A700 !font-markoone">
                    Think imoveis
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
                  <div className="flex flex-row justify-start w-full gap-3">
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
                    </div>
                    <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                      <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
                    </div>
                    <div className="h-[30px] w-[30px] relative">
                      <div className="flex flex-row justify-end items-start w-[44%] bottom-[23%] right-[20%] m-auto absolute">
                        <Img
                          src="images/img_vector.svg"
                          alt="vector_one"
                          className="h-[12px] w-[12px] mt-[3px] z-[1]"
                        />
                        <div className="h-[3px] w-[3px] ml-[-2px] bg-orange-A700 rounded-[1px]" />
                      </div>
                      <Img
                        src="images/img_vector_orange_a700.svg"
                        alt="vector_five"
                        className="h-[25px] w-[25px] bottom-[1%] right-[1%] m-auto absolute"
                      />
                    </div>
                    <div className="h-[30px] w-[30px] relative">
                      <Img
                        src="images/img_vector_orange_a700.svg"
                        alt="vector_seven"
                        className="h-[25px] w-[25px] bottom-[1%] right-[1%] m-auto absolute"
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
              <div className="flex flex-row justify-between items-start w-[72%] z-[1]">
                <div className="flex flex-col items-start justify-start w-[9%] gap-[17px]">
                  <Heading size="lg" as="h6">
                    Features
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-[86%]">
                    <ul className="flex flex-col items-start justify-start w-full gap-4">
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
                          <Heading as="h6">Contato</Heading>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Heading as="h6">Buscar</Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[73%]">
                  <div className="flex flex-col items-start justify-start w-[25%] gap-3.5">
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
                        <Heading as="h6">
                          Lista de Agentes
                          <br />
                        </Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6">Perfil do Agente</Heading>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[25%] gap-3.5">
                    <Heading size="lg" as="h6">
                      Documentação
                    </Heading>
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                      <a href="#">
                        <Heading as="h6">Blog</Heading>
                      </a>
                      <a href="#">
                        <Heading as="h6">FAQ</Heading>
                      </a>
                      <Heading as="h6" className="!leading-6">
                        Política de Privacidade
                        <br />
                      </Heading>
                      <a href="#">
                        <Heading as="h6">Licença</Heading>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[25%] gap-[15px]">
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
            </div>
            <Heading as="h6">© 2022. All rights reserved.</Heading>
          </div>
        </footer>
      </div>
    </>
  );
}
