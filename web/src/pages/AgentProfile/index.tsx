import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, RatingBar, Text } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";

export default function AgentProfilePage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img src="images/img_cover_image.png" alt="coverimage_one" className="w-full object-cover" />
              <div className="flex flex-col items-center justify-start w-full mt-[-46px] gap-14">
                <div className="flex flex-row justify-start items-center w-full gap-[30px] max-w-[1160px]">
                  <Img
                    src="images/img_rectangle_5599.png"
                    alt="image"
                    className="w-[150px] mb-0.5 object-cover rounded-[10px]"
                  />
                  <div className="flex flex-row justify-between items-center w-[85%]">
                    <div className="flex flex-row justify-start items-center w-[83%] gap-8">
                      <div className="flex flex-col items-start justify-start w-[49%] gap-[7px]">
                        <Heading size="4xl" as="h1" className="tracking-[-0.48px]">
                          Bruno Fernandes
                        </Heading>
                        <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                          <RatingBar
                            value={4}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={16}
                            className="flex justify-between w-[96px]"
                          />
                          <Heading as="h2">4.5 review</Heading>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[49%] gap-2">
                        <div className="flex flex-row justify-start items-center w-full gap-[13px] py-[3px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={24}
                            starCount={1}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                          <Heading size="lg" as="h3" className="!font-semibold">
                            (123) 456-7890
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-3 py-[3px]">
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
                            bruno@think imoveis .com
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Button className="font-semibold min-w-[112px]">Contato</Button>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-12 max-w-[1200px]">
                    <div className="flex flex-row justify-start w-full gap-3">
                      <Button size="lg" className="font-semibold min-w-[291px]">
                        Para alugar
                      </Button>
                      <Button color="gray_600_02" size="lg" variant="outline" className="font-semibold min-w-[291px]">
                        À venda
                      </Button>
                      <Button color="gray_600_02" size="lg" variant="outline" className="font-semibold min-w-[291px]">
                        Sobre
                      </Button>
                      <Button color="gray_600_02" size="lg" variant="outline" className="font-semibold min-w-[291px]">
                        Análise
                      </Button>
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
                            <Heading as="h5">2861 62nd Ave, Oakland, CA 94605</Heading>
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
                                <Img
                                  src="images/img_icon_gray_700.svg"
                                  alt="1_banheiro_one"
                                  className="h-[20px] w-[20px]"
                                />
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
                                <Img src="images/img_iocn_menu.svg" alt="familia_one" className="h-[20px] w-[20px]" />
                                <a href="#">
                                  <Heading as="h6" className="!text-gray-700">
                                    Familia
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
                          src="images/img_image_260x384.png"
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
                                <Img
                                  src="images/img_icon_gray_700.svg"
                                  alt="icon_three"
                                  className="h-[20px] w-[20px]"
                                />
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
                                <Img
                                  src="images/img_iocn_menu_20x20.svg"
                                  alt="iocnmenu_one"
                                  className="h-[20px] w-[20px]"
                                />
                                <a href="#">
                                  <Heading as="h6" className="!text-gray-700">
                                    Familia
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
                                <Img
                                  src="images/img_icon_gray_700.svg"
                                  alt="icon_three"
                                  className="h-[20px] w-[20px]"
                                />
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
                                <Img
                                  src="images/img_iocn_menu_1.svg"
                                  alt="iocnmenu_one"
                                  className="h-[20px] w-[20px]"
                                />
                                <a href="#">
                                  <Heading as="h6" className="!text-gray-700">
                                    Familia
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
                                <Img
                                  src="images/img_icon_gray_700.svg"
                                  alt="icon_three"
                                  className="h-[20px] w-[20px]"
                                />
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
                                <Img
                                  src="images/img_iocn_menu_2.svg"
                                  alt="iocnmenu_one"
                                  className="h-[20px] w-[20px]"
                                />
                                <a href="#">
                                  <Heading as="h6" className="!text-gray-700">
                                    Familia
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
                                <Img
                                  src="images/img_icon_gray_700.svg"
                                  alt="icon_three"
                                  className="h-[20px] w-[20px]"
                                />
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
                                <Img
                                  src="images/img_iocn_menu_3.svg"
                                  alt="iocnmenu_one"
                                  className="h-[20px] w-[20px]"
                                />
                                <a href="#">
                                  <Heading as="h6" className="!text-gray-700">
                                    Familia
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
                                <Img
                                  src="images/img_icon_gray_700.svg"
                                  alt="icon_three"
                                  className="h-[20px] w-[20px]"
                                />
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
                                <Img
                                  src="images/img_iocn_menu_4.svg"
                                  alt="iocnmenu_one"
                                  className="h-[20px] w-[20px]"
                                />
                                <a href="#">
                                  <Heading as="h6" className="!text-gray-700">
                                    Familia
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
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start gap-[5px]">
                        <a
                          href="#"
                          className="flex justify-center items-center h-[48px] border-gray-700 border border-solid rounded-[10px]"
                        >
                          <Heading as="h6" className="text-center">
                            1
                          </Heading>
                        </a>
                        <a
                          href="#"
                          className="flex justify-center items-center h-[48px] border-blue_gray-100_02 border border-solid rounded-[10px]"
                        >
                          <Heading as="h6" className="text-center">
                            2
                          </Heading>
                        </a>
                        <a
                          href="#"
                          className="flex justify-center items-center h-[48px] border-blue_gray-100_02 border border-solid rounded-[10px]"
                        >
                          <Heading as="h6" className="text-center">
                            3
                          </Heading>
                        </a>
                        <a
                          href="#"
                          className="flex justify-center items-center h-[48px] border-blue_gray-100_02 border border-solid rounded-[10px]"
                        >
                          <Heading as="h6" className="text-center">
                            4
                          </Heading>
                        </a>
                        <a
                          href="#"
                          className="flex justify-center items-center h-[48px] border-blue_gray-100_02 border border-solid rounded-[10px]"
                        >
                          <Heading as="h6" className="text-center">
                            5
                          </Heading>
                        </a>
                      </div>
                      <Button
                        color="blue_gray_100_02"
                        variant="outline"
                        rightIcon={<Img src="images/img_vector_gray_900.svg" alt="Vector" />}
                        className="gap-[9px] font-semibold min-w-[173px]"
                      >
                        Próxima página
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start w-full pl-[98px] pr-14">
          <div className="flex flex-row justify-start items-center w-full mx-auto max-w-[1222px]">
            <a href="#" className="z-[1]">
              <Heading as="h2" className="!text-white-A700">
                Contato
              </Heading>
            </a>
            <div className="flex flex-row justify-center w-[99%] ml-[-42px] p-[42px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start justify-start w-full gap-[57px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-center justify-start w-[48%] gap-6">
                    <div className="flex flex-row justify-start items-center w-full gap-[30px]">
                      <Img
                        src="images/img_rectangle_5616.png"
                        alt="image_one"
                        className="w-[182px] object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[60%] gap-1.5">
                        <Heading size="4xl" as="h3" className="tracking-[-0.48px]">
                          Bruno Fernandes
                        </Heading>
                        <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                          <RatingBar
                            value={4}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={16}
                            className="flex justify-between w-[96px]"
                          />
                          <Heading as="h4">4.5 review</Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-[13px] py-[3px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={24}
                            starCount={1}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                          <Heading size="lg" as="h5" className="!font-semibold">
                            (123) 456-7890
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-3 py-[3px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={24}
                            starCount={2}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                          <Heading size="lg" as="h6" className="!font-semibold">
                            bruno@think imoveis .com
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Text as="p">
                      Um controle deslizante é uma ótima maneira de exibir uma apresentação de slides com imagens ou
                      vídeos, geralmente na sua página inicial.
                      <br />
                      Adicionar controles deslizantes ao seu site não é mais difícil. Você não precisa mais saber
                      codificação. Basta usar um widget de controle deslizante e ele inserirá automaticamente o controle
                      deslizante em sua página da web.
                      <br />
                      Uma das melhores maneiras de adicionar lindos controles deslizantes com excelente capacidade de
                      resposta e opções avançadas.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[48%] gap-6">
                    <div className="flex flex-col items-start justify-start w-full gap-[7px] py-0.5">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Experiências
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        + 15 anos de experiência
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full gap-1.5">
                      <Heading size="2xl" as="h5" className="mt-px tracking-[-0.40px]">
                        Tipos de propriedade
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        Casa particular, vila, sobrado, apartamento
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-center w-full gap-2">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Area
                      </Heading>
                      <Heading size="lg" as="h6" className="mb-0.5 !font-semibold">
                        California, San Jose, Miami
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px] py-0.5">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Endereço
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                        59 Orchard, NY 5005, US
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-between w-full gap-[60px]">
                      <div className="flex flex-col items-start justify-center gap-[7px]">
                        <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                          License No
                        </Heading>
                        <Heading size="lg" as="h6" className="mb-[3px] !text-gray-600_02 !font-semibold">
                          BF-0535
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start justify-center gap-[7px]">
                        <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                          Website
                        </Heading>
                        <Heading size="lg" as="h6" className="mb-0.5 !text-gray-600_02 !font-semibold underline">
                          www.abc.com
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-3">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Social
                      </Heading>
                      <div className="flex flex-row justify-start gap-4">
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_vector_gray_600_02.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_linkedin.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_twitter.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_youtube.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_rss.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[48px] w-[48%] bg-gray-900 rounded-[10px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-10 py-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 max-w-[1200px] rounded-[10px]">
          <div className="flex flex-col items-center justify-start w-full gap-[22px]">
            <div className="flex flex-row justify-between items-center w-full px-[42px]">
              <Heading size="5xl" as="h2" className="tracking-[-0.56px]">
                Avaliação de clientes
              </Heading>
              <Button
                size="4xl"
                rightIcon={<Img src="images/img_icon_24px_plus.svg" alt="icon / 24px / plus" />}
                className="gap-2.5 font-bold min-w-[227px]"
              >
                Escreva um Reveiw
              </Button>
            </div>
            <div className="h-px w-full border-black-900 border-[0.5px] border-solid bg-blue_gray-100_01" />
          </div>
          <div className="flex flex-col w-[96%] gap-[25px]">
            <div className="flex flex-col items-center justify-center w-full gap-10 p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
              <Heading size="4xl" as="h2" className="mt-[9px] !text-gray-600_02 !font-semibold !leading-[39px]">
                Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
              </Heading>
              <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                <div className="flex flex-row justify-start w-full gap-[50px]">
                  <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                    <RatingBar
                      value={3}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={4}
                      className="flex justify-between w-[120px]"
                    />
                    <Heading size="2xl" as="h3" className="!text-gray-600_02 tracking-[-0.40px]">
                      4.5 review
                    </Heading>
                  </div>
                  <Heading size="2xl" as="h4" className="!text-gray-600_02 tracking-[-0.40px]">
                    02 Junho 2022
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img
                    src="images/img_ellipse_2695.png"
                    alt="taylor_wilson"
                    className="h-[80px] w-[80px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[92%] gap-0.5 py-[3px]">
                    <Heading size="5xl" as="h5" className="tracking-[-0.56px]">
                      Taylor Wilson
                    </Heading>
                    <Heading size="lg" as="h6" className="!font-semibold">
                      Gerente de Produto - Mania Estática
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-10 p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
              <Heading size="4xl" as="h4" className="mt-[9px] !text-gray-600_02 !font-semibold !leading-[39px]">
                Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
              </Heading>
              <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                <div className="flex flex-row justify-start w-full gap-[50px]">
                  <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                    <RatingBar
                      value={3}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={4}
                      className="flex justify-between w-[120px]"
                    />
                    <Heading size="2xl" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                      4.5 review
                    </Heading>
                  </div>
                  <Heading size="2xl" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                    02 Junho 2022
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img
                    src="images/img_ellipse_2695.png"
                    alt="circleimage"
                    className="h-[80px] w-[80px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[92%] gap-0.5 py-[3px]">
                    <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                      Taylor Wilson
                    </Heading>
                    <Heading size="lg" as="h6" className="!font-semibold">
                      Gerente de Produto - Mania Estática
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-10 p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
              <Heading size="4xl" as="h4" className="mt-[9px] !text-gray-600_02 !font-semibold !leading-[39px]">
                Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{" "}
              </Heading>
              <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                <div className="flex flex-row justify-start w-full gap-[50px]">
                  <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                    <RatingBar
                      value={3}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={24}
                      starCount={4}
                      className="flex justify-between w-[120px]"
                    />
                    <Heading size="2xl" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                      4.5 review
                    </Heading>
                  </div>
                  <Heading size="2xl" as="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                    02 Junho 2022
                  </Heading>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img
                    src="images/img_ellipse_2695.png"
                    alt="circleimage"
                    className="h-[80px] w-[80px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[92%] gap-0.5 py-[3px]">
                    <Heading size="5xl" as="h3" className="tracking-[-0.56px]">
                      Taylor Wilson
                    </Heading>
                    <Heading size="lg" as="h6" className="!font-semibold">
                      Gerente de Produto - Mania Estática
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <Button
              color="gray_600_02"
              variant="outline"
              rightIcon={<Img src="images/img_vector_gray_900_6x11.svg" alt="Vector" />}
              className="mr-[1029px] gap-[7px] font-semibold min-w-[121px]"
            >
              Ver mais
            </Button>
          </div>
        </div>
        <Footer1 className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
