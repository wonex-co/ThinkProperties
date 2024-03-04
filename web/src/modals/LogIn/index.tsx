import React from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function LogIn({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <div className="flex flex-col items-center justify-center w-full gap-[29px] p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full mt-2.5 gap-[13px]">
          <div className="flex flex-col items-center justify-start w-full gap-6">
            <div className="flex flex-row justify-between items-start w-full pt-[5px]">
              <a href="#">
                <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                  Log in
                </Heading>
              </a>
              <Button size="sm" shape="square" className="w-[30px] mt-[5px]">
                <Img src="images/img_icon_24px_close.svg" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-3">
              <Input
                name="email"
                placeholder="usuário / email"
                prefix={
                  <div className="flex justify-center items-center w-[14px] h-[14px]">
                    <Img src="images/img_vector_gray_600_02.svg" alt="Vector" />
                  </div>
                }
                className="w-full gap-[18px] border-blue_gray-100_01 border border-solid"
              />
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
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <CheckBox name="lembrar" label="Lembrar" className="mb-0.5 gap-2 text-left font-bold" />
            <Heading size="lg" as="h2" className="text-right">
              Esqueceu sua senha
            </Heading>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[18px]">
          <a
            href="#"
            className="flex justify-center items-center w-[420px] h-[58px] pt-[19px] pb-[13px] px-[35px] bg-gray-900 rounded-[10px]"
          >
            <Heading size="lg" as="h2" className="!text-white-A700 text-center">
              Log in
            </Heading>
          </a>
          <Button
            color="white_A700"
            size="4xl"
            leftIcon={<Img src="images/img_icon_20px_google.svg" alt="icon / 20px / google" />}
            className="w-full gap-2.5 font-bold border-gray-600_02 border border-solid"
          >
            Faça login com o Google
          </Button>
        </div>
        <div className="h-px w-full border-black-900 border-[0.5px] border-solid bg-blue_gray-100_01" />
        <div className="flex flex-row justify-center w-full mb-[5px] gap-2">
          <Heading size="2xl" as="h2" className="!text-gray-600_02 tracking-[-0.40px] text-center">
            Não tem uma conta?
          </Heading>
          <Heading size="2xl" as="h2" className="tracking-[-0.40px]">
            Criar uma conta
          </Heading>
        </div>
      </div>
    </ModalProvider>
  );
}
