import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, RatingBar, TextArea, Radio, RadioGroup, GoogleMap } from "../../components";
import Header from "../../components/Header";

export default function PropertyDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-10">
              <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
              <div className="flex flex-col items-center justify-start w-full max-w-[1200px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-start items-start w-full gap-6">
                    <Img
                      src="images/img_rectangle_5610.png"
                      alt="image"
                      className="w-[66%] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-center justify-start w-[32%] gap-6">
                      <Img
                        src="images/img_rectangle_5611.png"
                        alt="image_one"
                        className="w-full object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-end justify-start w-full">
                        <Img
                          src="images/img_rectangle_5612.png"
                          alt="image_two"
                          className="w-full object-cover rounded-[10px]"
                        />
                        <div className="flex flex-row justify-center items-center w-[32%] gap-1.5 p-2 bg-white-A700 rounded-[10px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#191919"
                            activeColor="#191919"
                            size={24}
                            starCount={3}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                          <Heading size="lg" as="h1">
                            3 Mais
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[-4px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-start items-start w-full gap-6">
                      <div className="flex flex-col items-center justify-start w-[66%] gap-6">
                        <div className="flex flex-col items-center justify-start w-full gap-11 p-10 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                          <div className="flex flex-col items-center justify-start w-full gap-[22px]">
                            <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                              <Heading size="5xl" as="h2" className="tracking-[-0.56px] !leading-[37px]">
                                Plano Trovilla em Sereno Canyon - Estate Collection by Toll BrOutros
                              </Heading>
                              <Heading size="2xl" as="h3" className="tracking-[-0.40px]">
                                2861 62nd Ave, Oakland, CA 94605
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start w-full gap-4">
                              <div className="flex flex-col items-start justify-start w-[37%] gap-1.5 p-[7px] border-gray-600_02 border border-solid bg-white-A700 rounded-[10px]">
                                <Heading size="4xl" as="h4" className="ml-4 tracking-[-0.48px]">
                                  R$649,900
                                </Heading>
                                <Heading size="xs" as="h5" className="ml-4 !text-gray-600_02">
                                  Pagamento on-line/em dinheiro
                                </Heading>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[37%] gap-1.5 p-1.5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                                <Heading size="4xl" as="h6" className="ml-[17px] tracking-[-0.48px]">
                                  R$850 / mês
                                </Heading>
                                <Heading size="xs" as="p" className="ml-[17px] !text-gray-600_02">
                                  0% EMI por 6 Mês
                                </Heading>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full gap-4">
                            <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                              Uma casa bem construída de 1.562 pés quadrados agora está sendo oferecida a você em Uttara
                              para venda
                            </Heading>
                            <Text as="p">
                              Um controle deslizante é uma ótima maneira de exibir uma apresentação de slides com
                              imagens ou vídeos, geralmente na sua página inicial.
                              <br />
                              Adicionar controles deslizantes ao seu site não é mais difícil. Você não precisa mais
                              saber codificação. Basta usar um widget de controle deslizante e ele inserirá
                              automaticamente o controle deslizante em sua página da web.
                              <br />
                              Portanto, o controle deslizante Elementor seria uma ótima ferramenta para trabalhar ao
                              construir um site WordPress.
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full gap-6">
                            <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-5">
                              <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                                Local Informação
                              </Heading>
                              <div className="flex flex-row justify-start gap-3">
                                <a
                                  href="#"
                                  className="pt-[13px] pb-2 px-[35px] border-blue_gray-100_01 border border-solid rounded-[10px]"
                                >
                                  <Heading as="h6" className="text-center">
                                    Mapa
                                  </Heading>
                                </a>
                                <a
                                  href="#"
                                  className="flex justify-center items-center w-[119px] h-[44px] px-[30px] py-[11px] bg-gray-900 rounded-[10px]"
                                >
                                  <Heading as="h6" className="!text-white-A700">
                                    Escolas
                                  </Heading>
                                </a>
                                <a
                                  href="#"
                                  className="px-[35px] py-[11px] border-blue_gray-100_01 border border-solid rounded-[10px]"
                                >
                                  <Heading as="h6">Crime</Heading>
                                </a>
                                <a
                                  href="#"
                                  className="px-[21px] py-[11px] border-blue_gray-100_01 border border-solid rounded-[10px]"
                                >
                                  <Heading as="h6">Mercados</Heading>
                                </a>
                              </div>
                            </div>
                            <GoogleMap showMarker={false} className="h-[454px] w-full" />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full gap-0.5 p-6 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                          <Heading size="5xl" as="h3" className="mt-[19px] ml-[15px] tracking-[-0.56px]">
                            Destaques iniciais
                          </Heading>
                          <div className="flex flex-row justify-between items-start w-[96%] ml-[15px]">
                            <div className="flex flex-col items-center justify-start w-[40%]">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-center items-center w-[41%] gap-2.5">
                                  <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                                  <Text as="p" className="w-[85%]">
                                    Estacionamento
                                  </Text>
                                </div>
                                <Heading size="lg" as="h6" className="text-right !font-semibold">
                                  Sem info
                                </Heading>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-start w-[31%] gap-2.5">
                                  <div className="h-[8px] w-[8px] mt-[7px] bg-gray-600_02 rounded-[50%]" />
                                  <Text as="p">Outdoor</Text>
                                </div>
                                <Heading size="lg" as="h6" className="text-right !font-semibold">
                                  Sem info
                                </Heading>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full mt-[17px]">
                                <div className="flex flex-row justify-start items-center w-[18%] gap-2.5">
                                  <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                                  <Text as="p">A/C</Text>
                                </div>
                                <Heading size="lg" as="h6" className="text-right !font-semibold">
                                  Sem info
                                </Heading>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full mt-[-1px]">
                                <div className="flex flex-row justify-center items-center w-[43%] gap-2.5">
                                  <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                                  <Text as="p" className="w-[85%]">
                                    Ano de construção
                                  </Text>
                                </div>
                                <Heading size="lg" as="h6" className="text-right !font-semibold">
                                  2021
                                </Heading>
                              </div>
                            </div>
                            <div className="flex flex-col w-[40%] mt-4 gap-2.5">
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[36%] gap-2.5 py-[3px]">
                                  <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                                  <Text as="p">HOA</Text>
                                </div>
                                <Heading size="lg" as="h6" className="text-right !font-semibold">
                                  Nenhum
                                </Heading>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[45%] gap-2.5">
                                  <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                                  <Text as="p" className="mt-1">
                                    Preço/Sqft
                                  </Text>
                                </div>
                                <Heading size="lg" as="h6" className="text-right !font-semibold">
                                  R$560
                                </Heading>
                              </div>
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-[39%] gap-2.5 py-[3px]">
                                  <div className="h-[8px] w-[8px] bg-gray-600_02 rounded-[50%]" />
                                  <Text as="p">Listado</Text>
                                </div>
                                <Heading size="lg" as="h6" className="text-right !font-semibold">
                                  Sem info
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[294px] w-full pr-10 py-10 border-blue_gray-100_01 border border-solid bg-white-A700 relative rounded-[10px]">
                          <Heading
                            size="5xl"
                            as="h3"
                            className="bottom-[19%] left-0 m-auto tracking-[-0.56px] absolute"
                          >
                            Últimas Listagens de Imóveis
                          </Heading>
                          <div className="flex flex-col items-start justify-start w-[51%] h-max gap-[21px] left-[5%] bottom-0 top-0 m-auto absolute">
                            <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                              Agent Informação
                            </Heading>
                            <div className="flex flex-row justify-start items-center w-full gap-6">
                              <Img
                                src="images/img_rectangle_5599.png"
                                alt="image_three"
                                className="w-[150px] object-cover rounded-[10px]"
                              />
                              <div className="flex flex-col items-start justify-start w-[57%]">
                                <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                                  Bruno Fernandes
                                </Heading>
                                <div className="flex flex-row justify-start items-center mt-0.5 gap-3.5 py-0.5">
                                  <RatingBar
                                    value={4}
                                    isEditable={true}
                                    color="#191919"
                                    activeColor="#191919"
                                    size={16}
                                    className="flex justify-between w-[96px]"
                                  />
                                  <Heading as="h6">4 review</Heading>
                                </div>
                                <div className="flex flex-row justify-start items-center mt-[7px] gap-2.5">
                                  <Img
                                    src="images/img_icon_20px_email.svg"
                                    alt="icon20pxemail"
                                    className="h-[20px] w-[20px]"
                                  />
                                  <Text size="s" as="p">
                                    bruno@think imoveis .com
                                  </Text>
                                </div>
                                <div className="flex flex-row justify-start items-center mt-[9px] gap-2.5">
                                  <Img
                                    src="images/img_icon_20px_call.svg"
                                    alt="icon20pxcall"
                                    className="h-[20px] w-[20px]"
                                  />
                                  <Text size="s" as="p">
                                    +65 0231 965 965
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start w-[32%] gap-[1177px]">
                        <div className="flex flex-col items-center justify-start w-full gap-9 p-6 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                          <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                            <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                              Pedido de Visita
                            </Heading>
                            <div className="flex flex-col items-center justify-start w-full gap-3">
                              <RadioGroup name="pedidode" className="flex flex-col">
                                <Radio
                                  value="nomecompleto1"
                                  label="Nome completo"
                                  className="pt-5 pb-[15px] pl-[18px] pr-[35px] gap-[18px] text-gray-600_02 font-semibold"
                                />
                                <Radio
                                  value="emailendereo"
                                  label="Email Endereço"
                                  className="mt-3 pt-5 pb-[15px] pl-[15px] pr-[35px] gap-[15px] text-gray-600_02 font-semibold"
                                />
                                <Radio
                                  value="numerodetelefone"
                                  label="Numero de telefone"
                                  className="mt-3 pl-[15px] pr-[35px] gap-[15px] py-[18px] text-gray-600_02 font-semibold"
                                />
                                <Radio
                                  value="data"
                                  label="Data"
                                  className="mt-3 pl-[15px] pr-[35px] gap-[15px] py-[18px] text-gray-600_02 font-semibold"
                                />
                              </RadioGroup>
                              <TextArea
                                name="inputbox_one"
                                placeholder="Mensagem"
                                className="w-full text-gray-600_02 font-semibold"
                              />
                            </div>
                          </div>
                          <Button size="2xl" className="w-full font-semibold">
                            Enviar pedido
                          </Button>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[63%]">
                          <Img src="images/img_icon_arrow.svg" alt="iconarrow_one" className="h-px w-px" />
                          <Heading size="lg" as="h6" className="!text-orange-A700">
                            Explorar tudo
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full mt-[-17px] gap-6 z-[1] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-[32%]">
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
                      color="#191919"
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
                        <Img src="images/img_icon.svg" alt="3_quartos_one" className="h-[20px] w-[20px]" />
                        <Heading as="h6" className="!text-gray-700">
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
                        <Img src="images/img_iocn_menu_28.svg" alt="família_one" className="h-[20px] w-[20px]" />
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
              <div className="flex flex-col items-center justify-start w-[32%]">
                <Img
                  src="images/img_image_260x384.png"
                  alt="image_one"
                  className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
                  <div className="flex flex-row justify-start items-center w-full mt-2.5 gap-3">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#191919"
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
                        <Img src="images/img_iocn_menu_29.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
              <div className="flex flex-col items-center justify-start w-[32%]">
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
                      color="#191919"
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
                        <Img src="images/img_iocn_menu_30.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
        <footer className="flex w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700">
          <div className="flex flex-row justify-center items-center w-full mt-[5px] mx-auto max-w-[1200px]">
            <div className="flex flex-col items-start justify-start w-[29%] gap-[43px]">
              <div className="flex flex-row justify-start items-start gap-2.5">
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
              <div className="flex flex-col items-start justify-start w-[19%] gap-3.5">
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
