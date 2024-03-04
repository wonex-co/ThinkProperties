import React from "react";
import { Heading, Button, Input, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function ResetPassword({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <div className="flex flex-col items-center justify-start w-full p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full mt-2.5 mb-[5px] gap-8">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-col items-center justify-start w-full gap-2">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                    Redefinir senha
                  </Heading>
                  <Button size="sm" shape="square" className="w-[30px]">
                    <Img src="images/img_icon_24px_close.svg" />
                  </Button>
                </div>
                <Text as="p" className="!text-gray-900">
                  Digite o endereço de e-mail associado à sua conta e enviaremos um link para redefinir sua senha.
                </Text>
              </div>
              <Input
                name="email"
                placeholder="usuário / email"
                prefix={
                  <div className="flex justify-center items-center w-[20px] h-[7px]">
                    <Img src="images/img_vector_gray_600_02_7x20.svg" alt="Vector" />
                  </div>
                }
                className="w-full gap-[15px] border-blue_gray-100_01 border border-solid"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button size="4xl" className="w-full font-bold">
              Obter OTP
            </Button>
            <Button color="white_A700" size="4xl" className="w-full font-bold border-gray-600_02 border border-solid">
              Voltar para fazer login
            </Button>
          </div>
          <div className="h-px w-full border-black-900 border-[0.5px] border-solid bg-blue_gray-100_01" />
          <div className="flex flex-row justify-center w-full gap-2">
            <Heading size="2xl" as="h2" className="!text-gray-600_02 tracking-[-0.40px] text-center">
              Não tem uma conta?
            </Heading>
            <Heading size="2xl" as="h3" className="tracking-[-0.40px]">
              Criar uma conta
            </Heading>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
