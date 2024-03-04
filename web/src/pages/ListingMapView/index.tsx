import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, RatingBar, GoogleMap, SelectBox, Input } from "../../components";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ListingMapViewPage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[19px] max-w-[1200px]">
              <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                Encontrar propriedade
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <div className="flex flex-row justify-start w-full gap-5">
                  <Input
                    name="vector"
                    placeholder="Digite seu endereço "
                    suffix={
                      <div className="flex justify-center items-center w-[17px] h-[17px]">
                        <Img src="images/img_vector_gray_700.svg" alt="Vector" />
                      </div>
                    }
                    className="w-[32%] gap-[35px] !text-gray-700 border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_vector_gray_700_10x17.svg" alt="Vector" />}
                    name="active"
                    placeholder="Comprar"
                    options={dropDownOptions}
                    className="w-[13%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_vector_gray_700_10x17.svg" alt="Vector" />}
                    name="price"
                    placeholder="$15000 - $18000"
                    options={dropDownOptions}
                    className="w-[18%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <div className="flex flex-row justify-start w-[22%]">
                    <div className="flex flex-row justify-start w-full gap-1">
                      <Button
                        color="white_A700"
                        size="4xl"
                        className="!text-gray-700 font-bold border-blue_gray-100_01 border border-solid min-w-[120px]"
                      >
                        Quartos - 3
                      </Button>
                      <div className="flex flex-row justify-start w-[53%]">
                        <div className="flex flex-row justify-start items-center w-full">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#000000"
                            activeColor="#191919"
                            size={24}
                            starCount={1}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                          <SelectBox
                            indicator={<Img src="images/img_vector_gray_700_2x19.svg" alt="Vector" />}
                            name="pressed"
                            placeholder="Mais"
                            options={dropDownOptions}
                            className="w-[89%] ml-[-8px] gap-px font-bold border-blue_gray-100_01 border border-solid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="4xl"
                    rightIcon={<Img src="images/img_icon_20px_search.svg" alt="icon / 20px / search" />}
                    className="gap-2.5 font-bold min-w-[123px]"
                  >
                    Buscar
                  </Button>
                </div>
                <div className="flex flex-row justify-start w-full gap-2.5">
                  <div className="flex flex-row justify-start items-center w-[13%] gap-2 p-2 border-blue_gray-100 border border-solid rounded-[10px]">
                    <Heading size="s" as="h2" className="ml-[5px] !text-gray-700">
                      Banheiro 2+
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      starCount={2}
                      className="flex justify-between h-[16px] w-[16px]"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center w-[21%] gap-2 p-1.5 border-blue_gray-100 border border-solid rounded-[10px]">
                    <Heading size="s" as="h3" className="mt-1 ml-[7px] !text-gray-700">
                      Square Feet 750 - 2000 sq. ft
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      starCount={2}
                      className="flex justify-between h-[16px] w-[16px] mr-[7px]"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center w-[18%] gap-2 p-1.5 border-blue_gray-100 border border-solid rounded-[10px]">
                    <Heading size="s" as="h4" className="mt-[3px] ml-[7px] !text-gray-700">
                      Ano de construção 5 - 15
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      starCount={2}
                      className="flex justify-between h-[16px] w-[16px] mr-[7px]"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center w-[15%] gap-2 p-2 border-blue_gray-100 border border-solid rounded-[10px]">
                    <Heading size="s" as="h5" className="ml-[5px]">
                      À venda por agente
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      starCount={2}
                      className="flex justify-between h-[16px] w-[16px] mr-[5px]"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center w-[14%] gap-2 p-1.5 border-blue_gray-100 border border-solid rounded-[10px]">
                    <Heading size="s" as="h6" className="mt-[3px] ml-[7px]">
                      Nova construção
                    </Heading>
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      starCount={2}
                      className="flex justify-between h-[16px] w-[16px] mr-[7px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-full overflow-auto">
            <div className="flex flex-col items-start justify-start w-full gap-[60px]">
              <div className="flex flex-col items-end justify-start w-full">
                <Img src="images/img_point.svg" alt="point_one" className="h-[3px] mr-[302px]" />
                <div className="flex flex-row justify-start w-[20%] mt-[-2px]">
                  <div className="flex flex-row justify-start items-start w-full gap-[25px] mx-auto max-w-[258px]">
                    <div className="h-[190px] w-[66%] relative">
                      <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="flex flex-row justify-between items-center w-full">
                          <div className="h-[190px] w-[21%] relative">
                            <div className="justify-center h-[190px] w-full left-0 bottom-0 right-0 top-0 m-auto border-gray-600_02 border border-solid bg-white-A700 absolute rounded-lg" />
                            <div className="flex flex-col items-start justify-start w-[49%] gap-5 right-[10%] top-[14%] m-auto absolute">
                              <Img src="images/img_icon_map_2.svg" alt="iconmaptwo_one" className="h-[19px] w-[19px]" />
                              <RatingBar
                                value={1}
                                isEditable={true}
                                color="#000000"
                                activeColor="#191919"
                                size={16}
                                starCount={1}
                                className="flex justify-between h-[16px] w-[16px]"
                              />
                              <RatingBar
                                value={1}
                                isEditable={true}
                                color="#000000"
                                activeColor="#191919"
                                size={16}
                                starCount={1}
                                className="flex justify-between h-[16px] w-[16px]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[9%] gap-4">
                            <RatingBar
                              value={1}
                              isEditable={true}
                              color="#000000"
                              activeColor="#191919"
                              size={16}
                              starCount={1}
                              className="flex justify-between h-[16px] w-[16px]"
                            />
                            <RatingBar
                              value={1}
                              isEditable={true}
                              size={16}
                              starCount={undefined}
                              className="flex justify-between h-[16px] w-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center w-max h-max gap-[19px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="flex flex-col items-start justify-start ml-[25px] gap-[19px]">
                          <Heading size="xs" as="h2" className="ml-[3px] !text-[12.83px]">
                            2861 62nd Ave, Oakland, CA 94605
                          </Heading>
                          <Heading size="xs" as="h3" className="!text-gray-700 !text-[12.83px]">
                            3 Quartos
                          </Heading>
                          <Heading size="xs" as="h4" className="!text-gray-700 !text-[12.83px]">
                            1,032 sqft
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start">
                          <Heading size="xl" as="h5" className="tracking-[-0.38px] !text-[19.25px]">
                            $649,900
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Heading size="xs" as="h6" className="mt-[71px] !text-gray-700 !text-[12.83px]">
                      1 Banheiro
                    </Heading>
                  </div>
                </div>
                <GoogleMap showMarker={false} className="h-[4px] w-[11%] mt-[232px] mr-[1283px] rounded-sm" />
              </div>
              <div className="flex flex-col items-center justify-start w-full mx-auto max-w-[1200px]">
                <div className="justify-center w-full gap-6 grid-cols-3 grid">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      src="images/img_image.png"
                      alt="image_one"
                      className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_19.svg" alt="família_one" className="h-[20px] w-[20px]" />
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
                      src="images/img_image_260x384.png"
                      alt="image_one"
                      className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_20.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
                      src="images/img_image_260x384.png"
                      alt="image_one"
                      className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_21.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
                      src="images/img_image_1.png"
                      alt="image_one"
                      className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_22.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_23.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_24.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_25.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
                      src="images/img_image.png"
                      alt="image_one"
                      className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                            <Img src="images/img_iocn_menu_26.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
                      src="images/img_image.png"
                      alt="image_one"
                      className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-[25px] p-5 rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-white-A700">
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
                        <div className="flex flex-row justify-between w-full pr-[41px]">
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
                            <Img src="images/img_iocn_menu_27.svg" alt="iocnmenu_one" className="h-[20px] w-[20px]" />
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
              <div className="flex flex-row justify-between w-full mx-auto max-w-[1200px]">
                <div className="flex flex-row justify-start gap-[5px]">
                  <Button color="gray_700" variant="outline" className="font-semibold min-w-[48px]">
                    1
                  </Button>
                  <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                    2
                  </Button>
                  <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                    3
                  </Button>
                  <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                    4
                  </Button>
                  <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                    5
                  </Button>
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
        <footer className="flex w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700">
          <div className="flex flex-row justify-center items-center w-full mt-[5px] mx-auto max-w-[1200px]">
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
                <div className="flex flex-row justify-between w-[59%]">
                  <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                    <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                    <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
                  </div>
                  <div className="h-[30px] w-[30px] relative">
                    <div className="flex flex-row justify-end items-start w-[44%] bottom-[23%] right-[20%] m-auto absolute">
                      <Img src="images/img_vector.svg" alt="vector_two" className="h-[12px] w-[12px] mt-[3px] z-[1]" />
                      <div className="h-[3px] w-[3px] ml-[-2px] bg-orange-A700 rounded-[1px]" />
                    </div>
                    <Img
                      src="images/img_vector_orange_a700.svg"
                      alt="vector_six"
                      className="h-[25px] w-[25px] bottom-[2%] right-[1%] m-auto absolute"
                    />
                  </div>
                  <div className="h-[30px] w-[30px] relative">
                    <Img
                      src="images/img_vector_orange_a700.svg"
                      alt="vector_eight"
                      className="h-[25px] w-[25px] bottom-[2%] right-[1%] m-auto absolute"
                    />
                    <div className="flex flex-col items-start justify-start h-[15px] w-[14px] gap-0.5 bottom-[21%] right-[21%] m-auto absolute">
                      <div className="h-[3px] w-[3px] bg-orange-A700 rounded-[1px]" />
                      <div className="flex flex-row justify-end">
                        <Img src="images/img_vector_orange_a700_10x2.svg" alt="vector_twelve" className="h-[10px]" />
                        <Img
                          src="images/img_vector_orange_a700_10x2.svg"
                          alt="vector_fourteen"
                          className="h-[10px] ml-px z-[1]"
                        />
                        <Img
                          src="images/img_vector_orange_a700_10x9.svg"
                          alt="vector_sixteen"
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
          <Heading as="h6" className="ml-[45px]">
            © 2022. All rights reserved.
          </Heading>
        </footer>
      </div>
    </>
  );
}
