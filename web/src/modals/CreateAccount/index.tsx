import React from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function CreateAccount({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[680px]">
      <div className="flex flex-row justify-center w-full p-[30px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full mt-2.5 mb-[3px] gap-[29px]">
          <div className="flex flex-col items-start justify-start w-full gap-[15px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                  Criar uma conta
                </Heading>
                <Button size="sm" shape="square" className="w-[30px]">
                  <Img src="images/img_icon_24px_close.svg" />
                </Button>
              </div>
              <div className="flex flex-row justify-start w-full gap-5">
                <div className="flex flex-col items-center justify-start w-[49%] gap-5">
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
                <div className="flex flex-col items-center justify-start w-[49%] gap-5">
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
                    name="vector_one"
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
            </div>
            <CheckBox
              name="check_list"
              label="I agree to all Terms & Conditions"
              className="gap-2 !text-gray-600_02 text-left font-bold"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button size="4xl" className="w-full font-bold">
              Criar uma conta
            </Button>
            <Button
              color="white_A700"
              size="4xl"
              leftIcon={<Img src="images/img_icon_20px_google.svg" alt="icon / 20px / google" />}
              className="w-full gap-2.5 font-bold border-gray-600_02 border border-solid"
            >
              Criar uma conta with Google
            </Button>
          </div>
          <div className="h-px w-full border-black-900 border-[0.5px] border-solid bg-blue_gray-100_01" />
          <div className="flex flex-row justify-center w-full gap-2">
            <a href="#" className="mb-px">
              <Heading size="2xl" as="h2" className="!text-gray-600_02 tracking-[-0.40px] text-center">
                Have an account?
              </Heading>
            </a>
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
