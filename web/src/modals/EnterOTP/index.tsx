import React from "react";
import { Heading, Button, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function EnterOTP({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <div className="flex flex-col items-center justify-start w-full p-0.5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-[89%] mt-[37px] gap-8">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-6">
              <div className="flex flex-col items-center justify-start w-full gap-2">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="6xl" as="h1" className="tracking-[-0.72px]">
                    Enter OTP
                  </Heading>
                  <Button size="sm" shape="square" className="w-[30px]">
                    <Img src="images/img_icon_24px_close.svg" />
                  </Button>
                </div>
                <Text as="p" className="!text-gray-900">
                  Por favor, verifique seu e-mail, enviamos um código OTP
                </Text>
              </div>
              <div className="flex flex-row justify-start gap-3">
                <Button color="gray_600_02" size="4xl" variant="outline" className="font-bold min-w-[60px]">
                  0
                </Button>
                <Button color="gray_600_02" size="4xl" variant="outline" className="font-bold min-w-[60px]">
                  0
                </Button>
                <Button color="gray_600_02" size="4xl" variant="outline" className="font-bold min-w-[60px]">
                  0
                </Button>
                <Button color="gray_600_02" size="4xl" variant="outline" className="font-bold min-w-[60px]">
                  0
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button size="4xl" className="w-full font-bold">
              Confirme
            </Button>
            <Button color="white_A700" size="4xl" className="w-full font-bold border-gray-600_02 border border-solid">
              Solicite OTP novamente
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
