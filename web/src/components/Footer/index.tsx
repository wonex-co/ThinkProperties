import React from "react";
import { Heading, Img, Text } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center items-center w-full mt-[5px] mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-start w-[29%] gap-[43px]">
          <div className="flex flex-row justify-start items-start w-full gap-[11px]">
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
            <div className="flex flex-row justify-start w-full gap-3">
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
              </div>
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
              </div>
              <Img src="images/img_icon_instragram.svg" alt="iconinstragram" className="h-[30px] w-[30px]" />
              <div className="h-[30px] w-[30px] relative">
                <Img
                  src="images/img_vector_orange_a700.svg"
                  alt="vector_one"
                  className="h-[25px] w-[25px] bottom-[2%] right-[1%] m-auto absolute"
                />
                <div className="flex flex-col items-start justify-start h-[15px] w-[14px] gap-0.5 bottom-[21%] right-[21%] m-auto absolute">
                  <div className="h-[3px] w-[3px] bg-orange-A700 rounded-[1px]" />
                  <div className="flex flex-row justify-end">
                    <Img src="images/img_vector_orange_a700_10x2.svg" alt="vector_five" className="h-[10px]" />
                    <Img
                      src="images/img_vector_orange_a700_10x2.svg"
                      alt="vector_seven"
                      className="h-[10px] ml-px z-[1]"
                    />
                    <Img
                      src="images/img_vector_orange_a700_10x9.svg"
                      alt="vector_nine"
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
  );
}
