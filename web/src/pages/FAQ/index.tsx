import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Input, Img } from "../../components";
import Header from "../../components/Header";

export default function FAQPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Felipe's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[254px] gap-[68px] bg-gray-50_01">
        <Header className="flex justify-center items-center w-full p-[19px] bg-white-A700" />
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full pt-[5px] gap-9 max-w-[1200px]">
              <Heading size="7xl" as="h1" className="tracking-[-0.92px] text-center">
                Pesquisar imóveis ou outras informações
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                <Input
                  name="search"
                  placeholder="Pesquisar propriedade / qualquer coisa"
                  value={searchBarValue}
                  onChange={(e: string) => setSearchBarValue(e)}
                  prefix={
                    <Img src="images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />
                  }
                  suffix={
                    searchBarValue?.length > 0 ? (
                      <Img
                        src="images/img_frame_1000001689.svg"
                        alt="Frame 1000001689"
                        onClick={() => setSearchBarValue("")}
                        className="cursor-pointer"
                      />
                    ) : null
                  }
                  className="w-full gap-3.5 border-blue_gray-100_01 border border-solid"
                />
                <div className="flex flex-col items-start justify-center w-full gap-[19px] p-[26px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-[64%] ml-[3px] gap-3.5">
                    <Heading size="2xl" as="h2" className="tracking-[-0.40px]">
                      Você está visualizando resultados de amostra.
                    </Heading>
                    <div className="flex flex-col items-start justify-start w-full gap-1">
                      <Heading as="h3" className="!text-gray-600_02">
                        https://think imoveis.com
                      </Heading>
                      <Text size="xs" as="p" className="!leading-[21px]">
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa
                        perspiciatis. Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                  <div className="h-px w-full ml-[3px] bg-blue_gray-100_01" />
                  <div className="flex flex-col items-center justify-start w-full ml-[3px] gap-5">
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                      <Heading size="2xl" as="h4" className="tracking-[-0.40px]">
                        Adicione CMS ou Business Hosting e indexe seu site para ver resultados de pesquisa reais!
                      </Heading>
                      <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                        <Heading as="h5" className="!text-gray-600_02">
                          https://think imoveis.com
                        </Heading>
                        <Text size="xs" as="p">
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa
                          perspiciatis. Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                    <div className="h-px w-full bg-blue_gray-100_01" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full ml-[3px] gap-3.5">
                    <Heading size="2xl" as="h6" className="tracking-[-0.40px]">
                      Você está visualizando resultados de amostra.
                    </Heading>
                    <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                      <Heading as="h6" className="!text-gray-600_02">
                        https://think imoveis.com
                      </Heading>
                      <Text size="xs" as="p">
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa
                        perspiciatis. Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
