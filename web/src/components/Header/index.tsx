import React from "react";
import { Heading, RatingBar, Text, Img } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
          <Text size="lg" as="p" className="mt-1 !text-orange-A700 !font-markoone">
            Think imóveis
          </Text>
        </div>
        <ul className="flex flex-row justify-center">
          <li>
            <a href="#" className="cursor-pointer hover:text-gray-900 hover:font-semibold">
              <Text />
            </a>
          </li>
          <li>
            <a href="#" className="ml-[41px] cursor-pointer hover:text-gray-900 hover:font-semibold">
              <Text />
            </a>
          </li>
          <li>
            <a href="#" className="ml-3.5 cursor-pointer hover:text-gray-900 hover:font-semibold">
              <Text />
            </a>
          </li>
          <li>
            <a href="#" className="ml-[22px]">
              <Heading as="h6" className="text-center">
                Propriedades{" "}
              </Heading>
            </a>
          </li>
          <li>
            <a href="#" className="ml-[31px]">
              <Heading as="h6">Blog</Heading>
            </a>
          </li>
        </ul>
        <div className="flex flex-row justify-between items-center w-[19%]">
          <div className="flex flex-row justify-start items-center w-[42%] gap-2">
            <RatingBar
              value={1}
              isEditable={true}
              color="#191919"
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
  );
}
