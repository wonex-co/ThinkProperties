import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, RatingBar, Text } from "../../components";

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[195px] gap-[116px] bg-gray-50_01">
        <header className="flex justify-center items-center w-full p-[19px] bg-white-A700">
          <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1160px]">
            <div className="flex flex-row justify-start items-start gap-[11px]">
              <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
              <Text size="lg" as="p" className="mt-1 !text-orange-A700 !font-markoone">
                Think imoveis
              </Text>
            </div>
            <ul className="flex flex-row justify-center">
              <li>
                <a href="#" className="cursor-pointer hover:text-gray-900 hover:font-semibold">
                  <Text />
                </a>
              </li>
              <li>
                <a href="#" className="ml-[43px] cursor-pointer hover:text-gray-900 hover:font-semibold">
                  <Text />
                </a>
              </li>
              <li>
                <a href="#" className="ml-[17px] cursor-pointer hover:text-gray-900 hover:font-semibold">
                  <Text />
                </a>
              </li>
              <li>
                <a href="#" className="ml-6">
                  <Heading as="h6" className="text-center">
                    Propriedade
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="ml-[33px]">
                  <Heading as="h6">Blog</Heading>
                </a>
              </li>
            </ul>
            <div className="flex flex-row justify-between items-center w-[20%]">
              <div className="flex flex-row justify-start items-center w-[42%] gap-2">
                <RatingBar
                  value={1}
                  isEditable={true}
                  color="#000000"
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
        <div className="flex flex-col items-center justify-start w-[34%]">
          <div className="flex flex-col items-center justify-start w-full gap-[30px]">
            <Img src="images/img_frame_1000001686.svg" alt="image" className="h-[480px]" />
            <div className="flex flex-col items-center justify-start w-[36%] pt-[3px] gap-[19px]">
              <Heading size="5xl" as="h1" className="tracking-[-0.56px] text-center">
                Algo errado!
              </Heading>
              <Button
                color="gray_600_02"
                size="4xl"
                variant="outline"
                rightIcon={<Img src="images/img_icon_24px_arrowright.svg" alt="icon / 24px / arrow-right" />}
                className="gap-2.5 font-bold min-w-[157px]"
              >
                Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
