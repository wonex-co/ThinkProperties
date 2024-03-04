import React from "react";
import { Heading, Button, Input, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function NewPassword({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <div className="flex flex-col items-center justify-end w-full p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full mt-2.5 mb-0.5 gap-8">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-3.5">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                    Nova Senha
                  </Heading>
                  <Button size="sm" shape="square" className="w-[30px]">
                    <Img src="images/img_icon_24px_close.svg" />
                  </Button>
                </div>
                <Text as="p" className="!text-gray-900">
                  Digite sua Nova Senha
                </Text>
              </div>
              <div className="flex flex-col w-full gap-6">
                <Input
                  name="vector"
                  placeholder="Senha"
                  prefix={
                    <div className="flex justify-center items-center w-[20px] h-[20px]">
                      <Img src="images/img_vector_gray_600_02.svg" alt="Vector" />
                    </div>
                  }
                  suffix={
                    <div className="flex justify-center items-center w-[20px] h-[6px]">
                      <Img src="images/img_vector_gray_600_02_6x20.svg" alt="Vector" />
                    </div>
                  }
                  className="w-full gap-[15px] border-blue_gray-100_01 border border-solid"
                />
                <Input
                  name="vector"
                  placeholder="Repita a Nova Senha"
                  prefix={
                    <div className="flex justify-center items-center w-[20px] h-[20px]">
                      <Img src="images/img_vector_gray_600_02.svg" alt="Vector" />
                    </div>
                  }
                  suffix={
                    <div className="flex justify-center items-center w-[20px] h-[6px]">
                      <Img src="images/img_vector_gray_600_02_6x20.svg" alt="Vector" />
                    </div>
                  }
                  className="w-full gap-[15px] border-blue_gray-100_01 border border-solid"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <Button size="4xl" className="w-full font-bold">
              Atualizar senha
            </Button>
          </div>
          <div className="h-px w-full border-black-900 border-[0.5px] border-solid bg-blue_gray-100_01" />
          <div className="flex flex-row justify-center w-full gap-2">
            <Heading size="2xl" as="h2" className="mb-px !text-gray-600_02 tracking-[-0.40px] text-center">
              Lembra da senha?
            </Heading>
            <a href="#">
              <Heading size="2xl" as="h3" className="tracking-[-0.40px]">
                Log in
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
