import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, RatingBar, TextArea, Radio, RadioGroup } from "../../components";
import Header from "../../components/Header";

export default function ContactPagePage() {
  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-11 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Heading size="8xl" as="h1" className="tracking-[-1.08px] text-center">
                  Entrar em contato
                </Heading>
                <Text as="p" className="text-center">
                  Por outro lado, denunciamos com justa indignação e antipatia por homens que estão tão seduzidos e
                  desmoralizados pelos encantos do prazer do momento, tão cegos pelo desejo, que não conseguem prever a
                  dor e os problemas.
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-[50px] p-6 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[44%] ml-[26px] gap-10">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="5xl" as="h2" className="tracking-[-0.56px]">
                      Envie uma mensagem
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <RadioGroup name="envieuma" className="flex flex-col">
                        <Radio
                          value="nomecompleto"
                          label="Nome completo"
                          className="pt-5 pb-[15px] pl-[18px] pr-[35px] gap-[18px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                          value="endereodeemail"
                          label="Endereço de email"
                          className="mt-3 pt-5 pb-[15px] pl-[15px] pr-[35px] gap-[15px] text-gray-600_02 font-semibold"
                        />
                        <Radio
                          value="nmerodetelefone"
                          label="Número de telefone"
                          className="mt-3 pl-[15px] pr-[35px] gap-[15px] py-[18px] text-gray-600_02 font-semibold"
                        />
                      </RadioGroup>
                      <TextArea
                        name="inputbox_one"
                        placeholder="Mensagem"
                        className="w-full text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button size="2xl" className="w-full font-semibold">
                    Enviar pedido
                  </Button>
                </div>
                <div className="flex flex-row justify-between items-start w-[50%] my-[26px]">
                  <div className="h-[534px] w-px border-black-900 border-[0.5px] border-solid bg-blue_gray-100_01" />
                  <div className="flex flex-col items-center justify-start w-[92%] gap-10">
                    <div className="flex flex-col items-center justify-start w-[96%] gap-4">
                      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-px">
                        <Heading size="2xl" as="h3" className="tracking-[-0.40px]">
                          Endereço do escritório
                        </Heading>
                        <Heading size="lg" as="h4" className="!text-gray-600_02 !font-semibold !leading-8">
                          1421 San Pedro St, Los Angeles, <br />
                          CA 90015
                        </Heading>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-2.5">
                        <div className="flex flex-row justify-start items-center w-full gap-[13px] py-[3px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#191919"
                            activeColor="#191919"
                            size={24}
                            starCount={1}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                          <Heading size="lg" as="h5" className="!text-gray-600_02 !font-semibold">
                            (123) 456-7890
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-3 py-[3px]">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#191919"
                            activeColor="#191919"
                            size={24}
                            starCount={2}
                            className="flex justify-between h-[24px] w-[24px]"
                          />
                          <Heading size="lg" as="h6" className="!text-gray-600_02 !font-semibold">
                            info@mail.com
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-3">
                      <Heading size="2xl" as="h5" className="tracking-[-0.40px]">
                        Social
                      </Heading>
                      <div className="flex flex-row justify-start gap-4">
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_vector_gray_600_02.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_linkedin.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_twitter.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_youtube.svg" />
                        </Button>
                        <Button size="sm" shape="square" className="w-[30px]">
                          <Img src="images/img_social_icon_rss.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex w-full pl-[74px] pr-14 gap-[115px] py-[74px] bg-white-A700">
          <div className="flex flex-row justify-center items-center w-full mt-[5px] mx-auto max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-[29%] gap-[43px]">
              <div className="flex flex-row justify-start items-start w-full gap-[11px]">
                <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
                <Text size="lg" as="p" className="mt-1 !text-orange-A700 !font-markoone">
                  Think imóveis
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
                  <Img src="images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" />
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
                    <Heading as="h6">Lista de Agentes</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Perfil do Agente</Heading>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-3.5">
                <Heading size="lg" as="h6">
                  Documentação{" "}
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
