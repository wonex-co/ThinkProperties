import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, RatingBar, Img } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
            <div className="flex flex-row justify-between items-center w-full pl-[50px] py-[50px] overflow-auto bg-yellow-50">
              <div className="flex flex-col items-center justify-start w-[44%] ml-[70px] gap-10">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Heading size="7xl" as="h1" className="tracking-[-0.92px] !leading-[64px]">
                    Encontre um imóvel perfeito
                    <br />
                    Onde você vai adorar morar
                  </Heading>
                  <Text size="lg" as="p" className="!text-gray-700 !leading-9">
                    Ajudamos as empresas a personalizar, automatizar e ampliar a produção e entrega de anúncios.
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-full p-6 bg-white-A700 rounded-[16px]">
                  <Tabs
                    className="flex flex-col items-center justify-start w-full gap-[38px]"
                    selectedTabClassName="!text-white-A700 bg-gray-900 rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                  >
                    <TabList className="flex flex-row justify-between w-full gap-[123px] p-[9px]">
                      <Tab className="mt-[5px] ml-10 text-white-A700 text-lg font-bold">Comprar</Tab>
                      <Tab className="mb-0.5 text-gray-900 text-lg font-bold">Vender</Tab>
                      <Tab className="mr-[45px] text-gray-900 text-lg font-bold">Aluguel</Tab>
                    </TabList>
                    {[...Array(3)].map((_, index) => (
                      <TabPanel key={`tab-panel${index}`} className="items-center w-full absolute">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-6">
                            <div className="flex flex-col items-center justify-start w-full gap-5">
                              <Input
                                name="icon_20px_map"
                                placeholder="Cidade/Rua"
                                suffix={<Img src="images/img_icon_20px_map.svg" alt="icon / 20px / map" />}
                                className="w-full gap-[35px] border-blue_gray-100_01 border border-solid"
                              />
                              <Input
                                name="icon20pxupdowna"
                                placeholder="Tipo de Propriedade"
                                suffix={
                                  <Img src="images/img_icon_20px_updown_arrow.svg" alt="icon / 20px / up-down arrow" />
                                }
                                className="w-full gap-[35px] border-blue_gray-100_01 border border-solid"
                              />
                              <Input
                                name="icon20pxupdowna"
                                placeholder="Faixa de preço"
                                suffix={
                                  <Img src="images/img_icon_20px_updown_arrow.svg" alt="icon / 20px / up-down arrow" />
                                }
                                className="w-full gap-[35px] border-blue_gray-100_01 border border-solid"
                              />
                            </div>
                            <Button size="4xl" className="w-full font-bold">
                              Buscar
                            </Button>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                </div>
              </div>
              <div className="flex flex-row justify-start">
                <Img src="images/img_image_503x610.png" alt="image_one" className="w-[89%] object-cover" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full gap-6 max-w-[1200px]">
            <div className="flex flex-col items-start justify-start w-[49%] gap-[50px] p-[46px] bg-red-100 rounded-[20px]">
              <div className="flex flex-col items-center justify-start ml-[3px] gap-4">
                <Heading size="6xl" as="h2" className="tracking-[-0.72px]">
                  Maneira simples e fácil de encontrar o compromisso dos seus sonhos
                </Heading>
                <Text as="p" className="!text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                </Text>
              </div>
              <Button className="ml-[3px] font-semibold min-w-[95px]">Iniciar</Button>
            </div>
            <div className="w-[49%] gap-6 grid-cols-2 grid">
              <div className="h-[200px] w-full bg-deep_orange-50 rounded-[20px]" />
              <div className="flex flex-col items-start justify-center w-full gap-[23px] p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Button size="sm" shape="square" className="w-[30px] mt-[26px]">
                  <Img src="images/img_eye.svg" />
                </Button>
                <Heading size="5xl" as="h3" className="mb-[21px] tracking-[-0.56px]">
                  Agendar Visita
                </Heading>
              </div>
              <div className="h-[200px] w-full bg-deep_orange-50 rounded-[20px]" />
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Button size="sm" shape="square" className="w-[30px] mt-[7px]">
                  <Img src="images/img_emoji_happy.svg" />
                </Button>
                <Heading size="5xl" as="h4" className="mb-[7px] tracking-[-0.56px] !leading-[37px]">
                  Aproveite seu compromisso
                </Heading>
              </div>
            </div>
          </div>
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
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[53px] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-[22px]">
              <div className="flex flex-row justify-between items-center w-full gap-[708px]">
                <Heading size="6xl" as="h2" className="w-[29%] tracking-[-0.72px]">
                  Propriedades em destaque
                </Heading>
                <div className="flex flex-row justify-start items-center w-[13%] gap-2">
                  <Heading size="lg" as="h3" className="mt-0.5 !text-orange-A700">
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
              <div className="flex flex-row justify-between w-full pr-[109px]">
                <Button size="xs" shape="square" className="text-gray-900 font-bold min-w-[199px]">
                  Propriedade Residente
                </Button>
                <Button size="xs" shape="square" className="text-gray-400 font-bold min-w-[196px]">
                  Propriedade comercial
                </Button>
                <Button size="xs" shape="square" className="text-gray-400 font-bold min-w-[194px]">
                  Propriedade Industrial
                </Button>
                <Button size="xs" shape="square" className="text-gray-400 font-bold min-w-[182px]">
                  Propriedade Agrícola
                </Button>
              </div>
            </div>
            <div className="justify-center w-full gap-6 grid-cols-3 grid">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_image.png"
                  alt="image_one"
                  className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
                  <div className="flex flex-row justify-start items-center w-full mt-2.5 gap-3">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={1}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                    <Heading as="h4">2861 62nd Ave, Oakland, CA 94605</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon.svg" alt="3_quartos_one" className="h-[20px] w-[20px]" />
                        <Heading as="h5" className="!text-gray-700">
                          3 Quartos
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700.svg" alt="1_banheiro_one" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            1 Banheiro
                          </Heading>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img
                          src="images/img_icon_gray_700_20x20.svg"
                          alt="1032_sqft_one"
                          className="h-[20px] w-[20px]"
                        />
                        <Heading as="h6" className="!text-gray-700">
                          1,032 sqft
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_iocn_menu_13.svg" alt="família_one" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            Família
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mb-2.5 pr-[47px]">
                    <Button className="font-semibold min-w-[156px]">Ver detalhes</Button>
                    <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                      $649,900
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[260px] w-full relative">
                    <Button size="sm" shape="square" className="w-[30px] bottom-[40%] right-[31%] m-auto absolute">
                      <Img src="images/img_search_status.svg" />
                    </Button>
                    <Img
                      src="images/img_image_260x384.png"
                      alt="image_one"
                      className="justify-center h-[260px] w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[10px] rounded-tl-[10px] object-cover absolute"
                    />
                  </div>
                  <div className="h-[252px] w-full relative">
                    <Button size="sm" shape="square" className="w-[30px] right-[31%] top-[13%] m-auto absolute">
                      <Img src="images/img_wallet.svg" />
                    </Button>
                    <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-5 m-auto rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01 absolute">
                      <div className="flex flex-col items-start justify-start w-full mt-3 mb-2.5 gap-[23px]">
                        <div className="flex flex-row justify-start items-center gap-3">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={24}
                            starCount={1}
                            className="flex justify-between h-[24px] w-[24px] mb-px"
                          />
                          <Heading as="h6">2861 62nd Ave, Oakland, CA 94605</Heading>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <div className="flex flex-row justify-start items-center gap-3">
                            <Img src="images/img_icon.svg" alt="icon_one" className="h-[20px] w-[20px]" />
                            <Heading as="h6" className="!text-gray-700">
                              3 Quartos
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-start items-center gap-3">
                            <Img src="images/img_icon_gray_700.svg" alt="icon_three" className="h-[20px] w-[20px]" />
                            <a href="#">
                              <Heading as="h6" className="!text-gray-700">
                                1 Banheiro
                              </Heading>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="flex flex-row justify-start items-center gap-3">
                            <Img
                              src="images/img_icon_gray_700_20x20.svg"
                              alt="icon_five"
                              className="h-[20px] w-[20px]"
                            />
                            <Heading as="h6" className="!text-gray-700">
                              1,032 sqft
                            </Heading>
                          </div>
                          <div className="flex flex-row justify-start items-center gap-3">
                            <Img src="images/img_iocn_menu_14.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
                            <a href="#">
                              <Heading as="h6" className="!text-gray-700">
                                Família
                              </Heading>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full pr-[47px]">
                          <Button className="font-semibold min-w-[156px]">Ver detalhes</Button>
                          <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                            $649,900
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_image.png"
                  alt="image_one"
                  className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
                  <div className="flex flex-row justify-start items-center w-full mt-2.5 gap-3">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={1}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                    <Heading as="h6">2861 62nd Ave, Oakland, CA 94605</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon.svg" alt="icon_one" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          3 Quartos
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700.svg" alt="icon_three" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            1 Banheiro
                          </Heading>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700_20x20.svg" alt="icon_five" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          1,032 sqft
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_iocn_menu_15.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            Família
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mb-2.5 pr-[47px]">
                    <Button className="font-semibold min-w-[156px]">Ver detalhes</Button>
                    <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                      $649,900
                    </Heading>
                  </div>
                </div>
              </div>
              <Heading size="5xl" as="h3" className="w-full tracking-[-0.56px] !leading-[37px]">
                Buscar <br />
                your location
              </Heading>
              <Heading size="5xl" as="h3" className="w-full tracking-[-0.56px] !leading-[37px]">
                Get your <br />
                dream house
              </Heading>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_image_1.png"
                  alt="image_one"
                  className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
                  <div className="flex flex-row justify-start items-center w-full mt-2.5 gap-3">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={1}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                    <Heading as="h6">2861 62nd Ave, Oakland, CA 94605</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon.svg" alt="icon_one" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          3 Quartos
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700.svg" alt="icon_three" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            1 Banheiro
                          </Heading>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700_20x20.svg" alt="icon_five" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          1,032 sqft
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_iocn_menu_16.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            Família
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mb-2.5 pr-[47px]">
                    <Button className="font-semibold min-w-[156px]">Ver detalhes</Button>
                    <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                      $649,900
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_image_2.png"
                  alt="image_one"
                  className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
                  <div className="flex flex-row justify-start items-center w-full mt-2.5 gap-3">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={1}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                    <Heading as="h6">2861 62nd Ave, Oakland, CA 94605</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon.svg" alt="icon_one" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          3 Quartos
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700.svg" alt="icon_three" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            1 Banheiro
                          </Heading>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700_20x20.svg" alt="icon_five" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          1,032 sqft
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_iocn_menu_17.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            Família
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mb-2.5 pr-[47px]">
                    <Button className="font-semibold min-w-[156px]">Ver detalhes</Button>
                    <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                      $649,900
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_image_3.png"
                  alt="image_one"
                  className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
                  <div className="flex flex-row justify-start items-center w-full mt-2.5 gap-3">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={1}
                      className="flex justify-between h-[24px] w-[24px]"
                    />
                    <Heading as="h6">2861 62nd Ave, Oakland, CA 94605</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon.svg" alt="icon_one" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          3 Quartos
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700.svg" alt="icon_three" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            1 Banheiro
                          </Heading>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_icon_gray_700_20x20.svg" alt="icon_five" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
                          1,032 sqft
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Img src="images/img_iocn_menu_18.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
                        <a href="#">
                          <Heading as="h6" className="!text-gray-700">
                            Família
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full mb-2.5 pr-[47px]">
                    <Button className="font-semibold min-w-[156px]">Ver detalhes</Button>
                    <Heading size="4xl" as="h4" className="tracking-[-0.48px]">
                      $649,900
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-14 py-[120px] bg-gray-50_01">
          <div className="flex flex-col items-center justify-start w-full gap-[150px] max-w-[1200px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start justify-start w-[47%] gap-[60px]">
                <div className="flex flex-col items-center justify-start gap-5">
                  <Heading size="6xl" as="h2" className="tracking-[-0.72px]">
                    Maneira simples e fácil de encontrar o compromisso dos seus sonhos
                  </Heading>
                  <Text as="p" className="!text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our
                    power of choice is untrammelled and when nothing prevents our being able to do what we like best,
                    every pleasure is to be welcomed.
                  </Text>
                </div>
                <Button className="font-semibold min-w-[95px]">Iniciar</Button>
              </div>
              <div className="flex flex-row justify-start w-[47%] gap-5">
                <div className="flex flex-col items-center justify-start w-[49%] gap-4">
                  <Img
                    src="images/img_rectangle_18.png"
                    alt="image_two"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_21.png"
                    alt="image_three"
                    className="w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] gap-4">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image_four"
                    className="w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_20.png"
                    alt="image_five"
                    className="w-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <Img
                src="images/img_rectangle_20_589x521.png"
                alt="image_six"
                className="w-[44%] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-start justify-start h-[521px] w-[521px] gap-[60px]">
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <Heading size="6xl" as="h3" className="tracking-[-0.72px]">
                      Anfitrião com melhor classificação em sites de aluguel populares
                    </Heading>
                    <Text as="p" className="!text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when
                      our power of choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 py-[3px]">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#000000"
                        activeColor="#191919"
                        size={24}
                        starCount={2}
                        className="flex justify-between h-[24px] w-[24px]"
                      />
                      <Heading size="lg" as="h4" className="!font-semibold">
                        Encontre excelentes ofertas
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5 py-0.5">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#000000"
                        activeColor="#191919"
                        size={24}
                        starCount={2}
                        className="flex justify-between h-[24px] w-[24px]"
                      />
                      <Heading size="lg" as="h5" className="mt-[3px] !font-semibold">
                        Anfitrião amigável e suporte rápido
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-3.5">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#000000"
                        activeColor="#191919"
                        size={24}
                        starCount={2}
                        className="flex justify-between h-[24px] w-[24px]"
                      />
                      <Heading size="lg" as="h6" className="mt-1 !font-semibold">
                        Sistema de pagamento seguro
                      </Heading>
                    </div>
                  </div>
                </div>
                <Button className="font-semibold min-w-[134px]">Saber mais</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[23px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full max-w-[1010px]">
              <div className="flex flex-row justify-between items-center w-full">
                <Img
                  src="images/img_rectangle_5591.png"
                  alt="image_seven"
                  className="w-[46%] object-cover rounded-lg"
                />
                <div className="flex flex-row justify-center w-[46%]">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col items-start justify-start gap-0.5 py-[3px]">
                        <Heading size="5xl" as="h2" className="tracking-[-0.56px]">
                          Taylor Wilson
                        </Heading>
                        <Heading size="lg" as="h3" className="!font-semibold">
                          Gerente de Produto - Mania Estática
                        </Heading>
                      </div>
                      <Img src="images/img_shape.svg" alt="shape_one" className="h-[51px]" />
                    </div>
                    <Heading size="4xl" as="h4" className="!text-gray-700 !font-semibold !leading-[39px]">
                      Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                      porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full pl-14 pr-[215px] gap-[254px]">
            <div className="flex flex-row justify-start items-center w-[9%] gap-2">
              <RatingBar
                value={1}
                isEditable={true}
                color="#000000"
                activeColor="#191919"
                size={24}
                starCount={2}
                className="flex justify-between h-[24px] w-[24px]"
              />
              <Heading size="lg" as="h2" className="!text-gray-600">
                Prévios
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-[9%] gap-2">
              <Heading size="lg" as="h3" className="!text-orange-A700">
                Próximo
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
        <div className="flex flex-row justify-center w-full px-14 py-[119px] bg-gray-900">
          <div className="flex flex-col items-center justify-start w-full gap-[116px] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-[60px]">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="6xl" as="h2" className="!text-white-A700 tracking-[-0.72px]">
                  Notícias e Consultas
                </Heading>
                <div className="flex flex-row justify-start items-center w-[13%] gap-2">
                  <Heading size="lg" as="h3" className="mt-0.5 !text-orange-A700">
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
                  <Img src="images/img_image_349x384.png" alt="image" className="w-full object-cover rounded-[10px]" />
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <Heading size="4xl" as="h4" className="!text-white-A700 tracking-[-0.48px] !leading-8">
                      9 projetos DIY fáceis e ambiciosos para melhorar sua casa
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="lg" as="h5" className="mt-0.5 !text-deep_orange-400">
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
                    <Heading size="4xl" as="h6" className="!text-white-A700 tracking-[-0.48px] !leading-8">
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
                  <Img src="images/img_image_4.png" alt="image_one" className="w-full object-cover rounded-[10px]" />
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
                <Heading size="5xl" as="h3" className="tracking-[-0.56px] text-center">
                  Para atualizações recentes, notícias.
                </Heading>
                <Text as="p" className="!text-gray-900 text-center">
                  Ajudamos as empresas a personalizar, automatizar e ampliar a produção e entrega de anúncios.
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[54%] gap-2">
                <Input color="gray_50_02" size="xs" name="email" placeholder="Digite seu e-mail" className="w-[78%]" />
                <Button className="font-semibold min-w-[126px]">Inscrever</Button>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
