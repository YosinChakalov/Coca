import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import line from "/src/assets/Line 69.png";
import sales from "/src/assets/Sales - Light.png";
import salesStatis from "/src/assets/Statistic - Light.png";
import salesCust from "/src/assets/Customer Growth - Light.png";
import { useTranslation } from "react-i18next";
import Card_1 from "../../Components/Card_1/Card_1";
import icon_1 from "/src/assets/Icon.svg";
import icon_2 from "/src/assets/Icon (1).svg";
import icon_3 from "/src/assets/Icon (2).svg";
import icon_4 from "/src/assets/Icon (3).svg";
import workImg from "/src/assets/Image (20).png";
import workImgStatis from "/src/assets/Bar Chart.png";
import check from "/src/assets/Icon (4).svg";
import Card_2 from "../../Components/Card_2/Card_2";
import Card_3 from "../../Components/Card_3/Card_3";
import teamImg from "/src/assets/Image (21).png";
import Card_4 from "../../Components/Card_4/Card_4";
import airbnb from "/src/assets/Airbnb.png";
import amazon from "/src/assets/Amazon.png";
import fedex from "/src/assets/FedEx.png";
import microsoft from "/src/assets/Microsoft.png";
import google from "/src/assets/Google.png";
import ola from "/src/assets/OLA.png";
import walmart from "/src/assets/Walmart.png";
import oyo from "/src/assets/OYO.png";
import Card_5 from "../../Components/Card_5/Card_5";
import workers from "/src/assets/workers.png";
import hands from "/src/assets/hands.png";
import meeting from "/src/assets/meeting.png";
import peoples from "/src/assets/peoples.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "/src/App.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import manWriting from "/src/assets/manWriting.png";
import manWriting2 from "/src/assets/manWriting2.png";
import "aos/dist/aos.css";
import Aos from "aos";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import avatar from "/src/assets/avatar.svg";
import { ArrowBack, ArrowForward } from "@mui/icons-material";




const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Home = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const { t, i18n } = useTranslation();

  const TranslateClick = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <main className="w-[1519px] m-auto">
        <section className="w-[90%] m-auto">
          <div className="flex justify-between items-center h-[900px] ">
            <div className="flex flex-col justify-between items-start h-[600px] ">
              <h1 className="text-[70px] font-[700] w-[80%] text-[#1D1E25]">
                {t("main.section_1.h1")}
              </h1>
              <div className="flex items-start">
                <img src={line} alt="" className="pt-[25px] pr-[20px]" />
                <p className="text-[30px] w-[65%] font-[700]">
                  {t("main.section_1.p")}
                </p>
              </div>
              <div>
                <TextField label="Enter your email" variant="standard" />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 40,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingBottom: 10,
                    paddingTop: 10,
                  }}
                >
                  {t("footer.top.btn")}
                </Button>
              </div>
            </div>
            <div className="w-[70%] relative">
              <img
                src={sales}
                alt=""
                className="h-[100%]"
                data-aos="fade-right"
              />
              <img
                src={salesCust}
                alt=""
                className="absolute top-[-80px] left-[300px]"
                data-aos="fade-up"
              />
              <img
                src={salesStatis}
                alt=""
                className="w-[420px] ml-[50px]"
                data-aos="fade-left"
              />
            </div>
          </div>
        </section>
        <section className="w-[100%] bg-[#1D1E25] m-[auto]">
          <div className="w-[90%] m-auto py-[100px]">
            <h1 className="text-[#eeeeee] text-[50px] font-[700] w-[50%]">
              {t("main.section_2.h1")}
            </h1>
            <p className="text-[#7E8492] text-[20px] w-[50%] mt-[20px]">
              {t("main.section_2.p")}
            </p>
            <div className="flex justify-between flex-wrap gap-10 mt-[100px]">
              <Card_1
                img={icon_1}
                title={t("main.section_2.h2")}
                desc={t("main.section_2.p2")}
              />
              <Card_1
                img={icon_2}
                title={t("main.section_2.h2")}
                desc={t("main.section_2.p2")}
              />
              <Card_1
                img={icon_3}
                title={t("main.section_2.h2")}
                desc={t("main.section_2.p2")}
              />
              <Card_1
                img={icon_4}
                title={t("main.section_2.h2")}
                desc={t("main.section_2.p2")}
              />
            </div>
          </div>
        </section>
        <section className="w-[90%] m-auto py-[70px]">
          <div className="relative flex justify-center items-center">
            <div className="w-[70%]">
              <img src={workImg} alt="" />
              <img
                src={workImgStatis}
                alt=""
                className="absolute top-[320px] left-[260px]"
              />
            </div>
            <div className="w-[70%]">
              <h1 className="text-[60px] font-[600] w-[90%]">
                {t("main.section_3.h1")}
              </h1>
              <p className="text-[#7E8492] my-[20px]">
                {t("main.section_3.p")}
              </p>
              <div data-aos="fade-down">
                <Card_2 img={check} desc={t("main.section_3.p1")} />
                <Card_2 img={check} desc={t("main.section_3.p2")} />
                <Card_2 img={check} desc={t("main.section_3.p3")} />
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-[90%] m-auto flex justify-between items-center mb-[100px]"
          data-aos="fade-up-right"
        >
          <Card_3 number={"17k"} desc={t("main.section_4.h1")} />
          <Card_3 number={"15+"} desc={t("main.section_4.h2")} />
          <Card_3 number={"50+"} desc={t("main.section_4.h3")} />
          <Card_3 number={"100+"} desc={t("main.section_4.h4")} />
        </section>
        <section className="w-[90%] m-auto py-[100px] border-b-2">
          <img src={teamImg} alt="" className="w-[100%]" />
          <div className="flex mt-[50px]">
            <h1 className="text-[50px] font-[700] w-[50%]">
              {t("main.section_5.h1")}
            </h1>
            <p className="text-[#7E8492] text-[20px] pt-[30px] w-[50%]">
              {t("main.section_5.p")}
            </p>
          </div>
        </section>
        <section className="w-[90%] m-auto py-[80px] border-b-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[50px] font-[600]">890+</h1>
              <p className="text-[18px] text-[#7E8492] mt-[10px] w-[60%]">
                {t("main.section_6.h1")}
              </p>
            </div>
            <div className="flex justify-center items-center gap-10 flex-wrap w-[70%]">
              <Card_4 img={airbnb} />
              <Card_4 img={amazon} />
              <Card_4 img={fedex} />
              <Card_4 img={microsoft} />
              <Card_4 img={google} />
              <Card_4 img={ola} />
              <Card_4 img={walmart} />
              <Card_4 img={oyo} />
            </div>
          </div>
        </section>
        <section className="w-[90%] m-auto">
          <h1 className="text-[50px] font-[600] w-[45%]">
            {t("main.section_7.h1")}
          </h1>
          <p className="text-[20px] text-[#7E8492] w-[35%] my-[30px]">
            {t("main.section_7.p")}
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <Card_5
              img={workers}
              title={t("main.section_7.h2")}
              desc={t("main.section_7.p2")}
            />
            <Card_5
              img={hands}
              title={t("main.section_7.h2")}
              desc={t("main.section_7.p2")}
            />
            <Card_5
              img={meeting}
              title={t("main.section_7.h2")}
              desc={t("main.section_7.p2")}
            />
            <Card_5
              img={peoples}
              title={t("main.section_7.h2")}
              desc={t("main.section_7.p2")}
            />
          </div>
        </section>
        <section className="w-[90%] m-auto p-[50px]">
          <h1 className="text-[60px] text-center">{t("main.section_8.h1")}</h1>
          <p className="text-[20px] text-[#7E8492] text-center mt-[10px]">
            {t("main.section_8.p")}
          </p>
          <div className="mt-[20px]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={manWriting} />
                <div className="flex justify-between text-[#7E8492] mt-[10px]">
                  <p>{t("main.section_8.published")}</p>
                  <p>{t("main.section_8.artist")}</p>
                </div>
                <h1 className="text-[30px] font-[700] my-[20px]">
                  {t("main.section_8.h2")}
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <img src={manWriting2} />
                <div className="flex justify-between text-[#7E8492] mt-[10px]">
                  <p>{t("main.section_8.published")}</p>
                  <p>{t("main.section_8.artist")}</p>
                </div>
                <h1 className="text-[30px] font-[700] my-[20px]">
                  {t("main.section_8.h3")}
                </h1>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="w-[90%] m-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-[700] w-[30%]">
              {t("main.section_9.h1")}
            </h1>
            <p className="text-[#7E8492] w-[32%] text-[20px]">
              {t("main.section_9.p")}
            </p>
          </div>
          <div className="m-auto w-[60%] my-[100px]">
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <h1 className="text-[30px] w-[84%] font-[600] mt-[10px] mb-[50px]">{t('main.section_9.h2')}</h1>
            <div className="my-[30px] flex justify-between">
              <div className="flex items-center gap-5">
                <img src={avatar} alt="" />
                <div>
                <h1 className="text-[20px] font-[700]">Renee Wells</h1>
                <h1 className="text-[#7E8492]">Product Designer, Quotient</h1>
                </div>
              </div>
              <div className="flex gap-5">
              <Button variant="outlined" style={{width: 60, height: 60, borderRadius: "50%", backgroundColor: "transparent", color: "gray", borderColor: "gray"}}><ArrowBack /></Button>
              <Button variant="contained" style={{width: 60, height: 60, borderRadius: "50%", backgroundColor: "black", color: "white"}}><ArrowForward /></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
