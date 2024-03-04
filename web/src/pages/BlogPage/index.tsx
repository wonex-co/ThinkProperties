import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Text, Button, RatingBar, SelectBox, Input } from "../../components";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function BlogPagePage() {
  const [searchBarValue11, setSearchBarValue11] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[68px]">
          <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[59px] max-w-[1200px]">
              <div className="flex flex-col items-start justify-start w-full pt-1 gap-5">
                <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                  Notícias e blogs imobiliários
                </Heading>
                <div className="flex flex-row justify-start gap-4">
                  <Input
                    name="search"
                    placeholder="Digite seu endereço"
                    value={searchBarValue11}
                    onChange={(e: string) => setSearchBarValue11(e)}
                    suffix={
                      <div className="flex justify-center items-center w-[17px] h-[17px]">
                        {searchBarValue11?.length > 0 ? (
                          <CloseSVG onClick={() => setSearchBarValue11("")} height={17} width={17} />
                        ) : (
                          <Img src="images/img_vector_gray_600_02.svg" alt="Vector" className="cursor-pointer" />
                        )}
                      </div>
                    }
                    className="w-[33%] gap-[35px] border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_vector_gray_600_02_10x17.svg" alt="Vector" />}
                    name="active"
                    placeholder="Categoria"
                    options={dropDownOptions}
                    className="w-[33%] gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={<Img src="images/img_vector_gray_600_02_10x17.svg" alt="Vector" />}
                    name="active_one"
                    placeholder="Popular"
                    options={dropDownOptions}
                    className="w-[33%] gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 grid">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                          <Heading size="4xl" as="h2" className="tracking-[-0.48px] !leading-8">
                            10 tendências deliciosas de decoração de salas de jantar para a primavera
                          </Heading>
                          <div className="flex flex-row justify-start w-full gap-1">
                            <div className="flex flex-row justify-start items-start w-[29%] pt-0.5 gap-1.5">
                              <div className="h-[5px] w-[5px] mt-1 bg-blue_gray-100_01 rounded-sm" />
                              <Heading size="xs" as="h3" className="!text-gray-600_02">
                                20 de julho/2022
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start items-center w-[26%] gap-1.5">
                              <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                              <Heading size="xs" as="h4" className="!text-gray-600_02">
                                7 min de leitura
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="lg" as="h5" className="mt-px !text-gray-600_02">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                          <Heading size="4xl" as="h6" className="tracking-[-0.48px] !leading-8">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
                  <div className="flex flex-col items-center justify-start w-full gap-6">
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
              <div className="flex flex-row justify-between w-full">
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
