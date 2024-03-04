import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, RatingBar, SelectBox, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AgentListPage() {
  const [searchBarValue5, setSearchBarValue5] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-14">
          <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-1 gap-5 max-w-[1200px]">
              <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                Alguns bons agentes próximos
              </Heading>
              <div className="flex flex-row justify-start items-center gap-4">
                <Input
                  name="search"
                  placeholder="Digite seu endereço "
                  value={searchBarValue5}
                  onChange={(e: string) => setSearchBarValue5(e)}
                  suffix={
                    <div className="flex justify-center items-center w-[17px] h-[17px]">
                      {searchBarValue5?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue5("")} height={17} width={17} />
                      ) : (
                        <Img src="images/img_vector_gray_600_02.svg" alt="Vector" className="cursor-pointer" />
                      )}
                    </div>
                  }
                  className="w-[76%] gap-[35px] border-blue_gray-100_01 border border-solid"
                />
                <SelectBox
                  indicator={<Img src="images/img_vector_gray_600_02_10x17.svg" alt="Vector" />}
                  name="active"
                  placeholder="Review"
                  options={dropDownOptions}
                  className="w-[12%] gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                />
                <Button
                  size="4xl"
                  rightIcon={<Img src="images/img_icon_20px_search.svg" alt="icon / 20px / search" />}
                  className="gap-2.5 font-bold min-w-[128px]"
                >
                  Buscar
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[60px]">
            <div className="justify-center w-full gap-6 grid-cols-4 grid max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5615.png"
                  alt="bruno_fernandes"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h2" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h3">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5616_282x282.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-start w-full gap-2 p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[96%] gap-[7px]">
                    <Heading size="2xl" as="h4" className="tracking-[-0.40px]">
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
                      <Heading as="h5">4.5 review</Heading>
                    </div>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5614.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-start w-full gap-2 p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[96%] gap-[7px]">
                    <Heading size="2xl" as="h6" className="tracking-[-0.40px]">
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
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5614_282x282.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-center justify-start w-full gap-2 p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[96%] gap-[7px]">
                    <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
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
                      <Heading as="h6">4.5 review</Heading>
                    </div>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5617.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5618.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5619.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5620.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5621.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5622.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5623.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_5615_282x282.png"
                  alt="image"
                  className="w-[282px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[7px] p-3.5 rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                  <Heading size="2xl" as="h5" className="ml-1.5 tracking-[-0.40px]">
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center ml-1.5 gap-3.5 py-0.5">
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#000000"
                      activeColor="#191919"
                      size={16}
                      className="flex justify-between w-[96px]"
                    />
                    <Heading as="h6">4.5 review</Heading>
                  </div>
                  <Button color="blue_gray_100_01" variant="outline" className="ml-1.5 font-semibold min-w-[242px]">
                    Ver perfil
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full max-w-[1200px]">
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
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700" />
      </div>
    </>
  );
}
