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
    </main>
  );
};

export default About;
