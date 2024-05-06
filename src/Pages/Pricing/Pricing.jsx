import React from "react";
import { useTranslation } from "react-i18next";
import icons from "../../assets/Icon (5).svg";
import icon1 from "../../assets/Icon (6).svg";
import check1 from "../../assets/Icon (7).svg";
import check2 from "../../assets/Icon (8).svg";
import icons2 from "../../assets/Icon (9).svg";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import Card_7 from "../../Components/Card_7/Card_7";

const Pricing = () => {
  const { t, i18n } = useTranslation();

  const TranslateClick = (language) => {
    i18n.changeLanguage(language);
  };

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 56,
    paddingBottom: 32,
    borderRadius: "0",
    borderBottom: "1px solid #EDEDED",
    height: "68px",
  };

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: (
        <p className="text-[24px] text-[#1D1E25] font-[semibold] dark:text-[#eeee]">
          {t("main_3.section_3.text1")}
        </p>
      ),
      children: (
        <p className="text-[#7E8492] w-[490px] bg-transparent  ">
          {t("main_3.section_3.desc")}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: (
        <p className="text-[24px] text-[#1D1E25] font-[semibold] dark:text-[#eeee]">
          {t("main_3.section_3.text2")}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: (
        <p className="text-[24px] text-[#1D1E25] font-[semibold] dark:text-[#eeee]">
          {t("main_3.section_3.text3")}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: (
        <p className="text-[24px] text-[#1D1E25] font-[semibold] dark:text-[#eeee]">
          {t("main_3.section_3.text4")}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "5",
      label: (
        <p className="text-[24px] text-[#1D1E25] font-[semibold] dark:text-[#eeee]">
          {t("main_3.section_3.text3")}
        </p>
      ),
      style: panelStyle,
    },
  ];

  return (
    <div className="max-w-[1198px] m-auto">
      <div className="h-[1306px] flex flex-col justify-center">
        <div className="flex justify-center mb-[112px]">
          <div className="w-[903px] text-center flex flex-col items-center">
            <p className="text-[#1463FF] text-[16px] font-[semibold] bg-[#1463FF1A] w-[144px] h-[32px] flex justify-center items-center rounded-[16px]">
              {t("main_3.section_1.p")}
            </p>
            <h1 className="text-[#1D1E25] text-[72px] mt-[24px] font-[bold] leading-[86.4px] tracking-[-3px] dark:text-[#eeee]">
              {t("main_3.section_1.h1")}
            </h1>
          </div>
        </div>

        <div className="h-[865px]  ">
          <div className="grid grid-cols-[repeat(auto-Fill,378px)] gap-[32px]">
            <Card_7
              img={icon1}
              title={t("main_3.section_2.card_1.title")}
              desc={t("main_3.section_2.card_1.desc")}
              price={"$100"}
              what={t("main_3.section_2.card_1.included")}
              quetion={t("main_3.section_2.card_1.text_1")}
              quetion1={t("main_3.section_2.card_1.text_2")}
              quetion2={t("main_3.section_2.card_1.text_3")}
              quetion3={t("main_3.section_2.card_1.text_4")}
              quetion4={t("main_3.section_2.card_1.text_5")}
              quetion5={t("main_3.section_2.card_1.text_6")}
              quetion6={t("main_3.section_2.card_1.text_7")}
              quetion7={t("main_3.section_2.card_1.text_8")}
              line={"line-through decoration-1 text-[#7E8492]"}
              check={check1}
              check1={check2}
            />

            <div>
              <div className="border border-solid border-[#1463FF] mb-[70px] bg-[#161A34] h-[801px] rounded-[16px] p-[0_24px] flex flex-col justify-center">
                <div className="mb-[16px] flex justify-between items-center">
                  <div className="bg-[#1463FF] w-[40px] h-[40px] rounded-[100px] flex items-center justify-center">
                    <img src={icons} alt="" />
                  </div>

                  <div>
                    <p className="text-[white] bg-[#1463FF] rounded-[100px] h-[32px] w-[118px] flex justify-center items-center text-[14px] font-[medium]">
                      {t(t("main_3.section_2.card_2.offer"))}
                    </p>
                  </div>
                </div>

                <div className="text-[white]">
                  <div>
                    <h4 className="text-[24px] font-[semibold] mb-[8px] ">
                      {t("main_3.section_2.card_2.title")}
                    </h4>
                    <p className="text-[#7E8492] text-[16px] leading-[26px] font-[medium]">
                      {t("main_3.section_2.card_2.desc")}
                    </p>
                    <h1 className="text-[16px] leading-[26px] font-[medium] m-[34px_0]">
                      <span className="text-[56px] font-[semibold]">$1400</span>
                      /mo
                    </h1>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-[bold] mb-[16px]">
                      {t("main_3.section_2.card_2.included")}
                    </h3>
                    <div>
                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check1} alt="" />
                        </div>

                        <div className="text-[16px] font-[medium] mb-[16px]">
                          <p>{t("main_3.section_2.card_2.text_1")}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check1} alt="" />
                        </div>

                        <div className=" text-[16px] font-[medium] mb-[16px]">
                          <p>{t("main_3.section_2.card_2.text_2")}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check1} alt="" />
                        </div>

                        <div className="text-[16px] font-[medium] mb-[16px]">
                          <p>{t("main_3.section_2.card_2.text_3")}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check1} alt="" />
                        </div>

                        <div className=" text-[16px] font-[medium] mb-[16px]">
                          <p>{t("main_3.section_2.card_2.text_4")}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check2} alt="" />
                        </div>

                        <div className="text-[16px] font-[medium] mb-[16px]">
                          <p className="line-through decoration-1 text-[#7E8492]">
                            {t("main_3.section_2.card_2.text_5")}
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check1} alt="" />
                        </div>

                        <div className="text-[16px] font-[medium] mb-[16px]">
                          <p>{t("main_3.section_2.card_2.text_6")}</p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check2} alt="" />
                        </div>

                        <div className="text-[16px] font-[medium] mb-[16px]">
                          <p className="line-through decoration-1 text-[#7E8492]">
                            {t("main_3.section_2.card_2.text_7")}
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-[10px]">
                          <img src={check2} alt="" />
                        </div>

                        <div className=" text-[16px] font-[medium] mb-[16px]">
                          <p className="line-through decoration-1 text-[#7E8492]">
                            {t("main_3.section_2.card_2.text_8")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[40px] flex justify-center">
                    <button className="bg-[white] text-[#1D1E25] text-[16px] font-[semibold] h-[56px] w-[160px] rounded-[100px]">
                      {t("main_3.section_2.card_2.btn")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Card_7
              img={icons2}
              title={t("main_3.section_2.card_3.title")}
              desc={t("main_3.section_2.card_3.desc")}
              price={"$2100"}
              what={t("main_3.section_2.card_3.included")}
              quetion={t("main_3.section_2.card_1.text_1")}
              quetion1={t("main_3.section_2.card_1.text_2")}
              quetion2={t("main_3.section_2.card_1.text_3")}
              quetion3={t("main_3.section_2.card_1.text_4")}
              quetion4={t("main_3.section_2.card_1.text_5")}
              quetion5={t("main_3.section_2.card_1.text_6")}
              quetion6={t("main_3.section_2.card_1.text_7")}
              quetion7={t("main_3.section_2.card_1.text_8")}
              check={check1}
              check1={check1}
            />
          </div>
        </div>
      </div>

      <div className="sm:mt-[2000px] md:mt-[1850px] lg:mt-[1000px] xl:mt-[1000px] ">
        <div className="text-center">
          <h1 className="text-[#1D1E25] text-[56px] font-[semibold] tracking-[-2px] mb-[24px] dark:text-[#eeee]">
            {t("main_3.section_3.h1")}
          </h1>
          <p className="text-[#7E8492] text-[18px] font-[medium]">
            {t("main_3.section_3.p")}
          </p>
        </div>

        <div className="mt-[80px]">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: "transparent",
            }}
            items={getItems(panelStyle)}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
