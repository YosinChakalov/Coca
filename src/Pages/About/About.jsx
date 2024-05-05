import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import line from "/src/assets/Line 69.png";
import clocklike from "/src/assets/clocklike.png"
import mantyping from "/src/assets/mantyping.png"
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import chinese from "/src/assets/chinese.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '/src/App.css';
import manimg from '/src/assets/Rectangle 4.png'
import womanimg from '/src/assets/Rectangle 5.png'
import manimg_2 from '/src/assets/Rectangle 6.png'
import twitter_2 from '/src/assets/Social Icons.png'
import linkedin_2 from '/src/assets/Social Icons (1).png'
import instagram_2 from '/src/assets/Social Icons (2).png'
import { Pagination } from 'swiper/modules';
import Card_6 from "../../Components/Card_6/Card_6";


const About = () => {
  const { t, i18n } = useTranslation();

  const TranslateClick = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="w-[1519px] m-auto">
      <section className="w-[90%] m-auto">
        <h1 className="text-[70px] font-[600] w-[55%]">{t("main_2.section_1.h1")}</h1>
        <div className="flex justify-between items-center">
        <div className="flex items-start gap-5 my-[80px]">
          <img src={line} alt="" className="pt-[10px]"/>
          <h1 className="text-[30px] font-[600] w-[55%]">{t("main_2.section_1.h2")}</h1>
        </div>
        <img src={clocklike} alt="" />
        </div>
      </section>
      <section className="w-[90%] m-auto">
        <div className="flex justify-between">
        <img src={mantyping} alt="" />
        <div className="w-[40%]">
          <img src={chinese} alt="" />
          <h1 className="w-[50%] text-[30px] font-[600] my-[20px]">{t("main_2.section_2.h1")}</h1>
          <h1 className="w-[70%] text-[#7E8492] mb-[20px]">{t("main_2.section_2.p")}</h1>
          <Button variant="contained" style={{backgroundColor: "black", color: "white", borderRadius: 20, paddingLeft: 20}}>{t("main_2.section_2.btn")} <ArrowForward  className="ml-[10px]"/></Button>
        </div>
        </div>
      </section>
      <section className="w-[90%] m-auto my-[70px]">
        <div className="py-[50px] border-t-2 border-b-2 flex justify-between items-center">
          <h1 className="text-[60px] w-[45%] font-[700]">{t("main_2.section_3.h1")}</h1>
          <h1 className="text-[20px] w-[30%] font-[700]">{t("main_2.section_3.p")}</h1>
        </div>
      </section>
      <section className="w-[90%] m-auto my-[100px]">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <SwiperSlide>
            <Card_6 img={manimg} name={t('main_2.section_4.name1')} statis={t('main_2.section_4.pos1')} twitter={twitter_2} linkedin={linkedin_2} instagram={instagram_2} />
          </SwiperSlide>
          <SwiperSlide>
          <Card_6 img={womanimg} name={t('main_2.section_4.name2')} statis={t('main_2.section_4.pos2')} twitter={twitter_2} linkedin={linkedin_2} instagram={instagram_2} />
          </SwiperSlide>
          <SwiperSlide>
          <Card_6 img={manimg_2} name={t('main_2.section_4.name3')} statis={t('main_2.section_4.pos3')} twitter={twitter_2} linkedin={linkedin_2} instagram={instagram_2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card_6 img={manimg} name={t('main_2.section_4.name1')} statis={t('main_2.section_4.pos1')} twitter={twitter_2} linkedin={linkedin_2} instagram={instagram_2} />
          </SwiperSlide>
          <SwiperSlide>
          <Card_6 img={womanimg} name={t('main_2.section_4.name2')} statis={t('main_2.section_4.pos2')} twitter={twitter_2} linkedin={linkedin_2} instagram={instagram_2} />
          </SwiperSlide>
          <SwiperSlide>
          <Card_6 img={manimg_2} name={t('main_2.section_4.name3')} statis={t('main_2.section_4.pos3')} twitter={twitter_2} linkedin={linkedin_2} instagram={instagram_2} />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="w-[90%] m-auto my-[100px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[60px] font-[600] w-[50%]">{t("main_2.section_5.h1")}</h1>
          <div className="w-[40%]">
            <h1 className="text-[20px] text-[#7E8492] w-[100%] my-[40px]">{t("main_2.section_5.p")}</h1>
            <Button style={{color: "black",marginTop: 10}}>{t("main_2.section_5.btn")} <ArrowForward  className="ml-[10px]"/></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
