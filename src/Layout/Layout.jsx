import { Link, Outlet } from "react-router-dom";
import Logo from "/src/assets/Logo (2).svg";
import Logo_2 from "/src/assets/Logo (3).svg";
import { ArrowForward, Menu } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Switcher from "../Components/Switcher/Switcher.jsx";
import facebook from '/src/assets/facebook.svg'
import twitter from '/src/assets/Social icon (1).svg'
import linkedin from '/src/assets/Social icon (2).svg'
import instagram from '/src/assets/Social icon (3).svg'

const Layout = () => {
  const { t, i18n } = useTranslation();

  const TranslateClick = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <header className="w-[1519px] m-auto sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]">
        <nav className="w-[90%] m-auto flex justify-between items-center h-[90px] sm:w-[90%] md:w-[90%] lg:w-[90%]">
          <img src={Logo} alt="" className="dark:hidden"/>
          <img src={Logo_2} alt="" className="hidden dark:flex"/>
          <div className="flex justify-between w-[43%] sm:hidden md:hidden lg:hidden">
            <Switcher />
            <select
              name=""
              id=""
              onChange={(e) => TranslateClick(e.target.value)}
              className="mb-[10px] dark:bg-transparent dark:text-[#eeee]"
            >
              <option className="dark:text-[#000]" value="en">EN</option>
              <option className="dark:text-[#000]" value="ru">RU</option>
              <option className="dark:text-[#000]" value="tj">TJ</option>
            </select>
            <Link className="text-[17px] dark:text-[#eeee]">{t("header.nav.home")}</Link>
            <Link to={"/About"} className="text-[17px] dark:text-[#eeee]">
              {t("header.nav.about")}
            </Link>
            <Link to={"/Blog"} className="text-[17px] dark:text-[#eeee]">
              {t("header.nav.blog")}
            </Link>
            <Link to={"/Pricing"} className="text-[17px] dark:text-[#eeee]">
              {t("header.nav.pricing")}
            </Link>
            <Link
              to={"/Contacts"}
              className="text-[17px] dark:text-[#eeee] font-[700] border-b-2 border-black pb-[5px] ml-[30px] dark:border-white"
            >
              {t("header.nav.contacts")} <ArrowForward />
            </Link>
          </div>
          <div className="hidden sm:flex md:flex lg:flex ">
          <Button style={{color: "gray"}}><Menu/></Button>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="w-[1519px] bg-[#1D1E25] m-auto sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]">
        <div className="text-[#eeeeee] w-[90%] m-auto flex justify-between items-center h-[500px] sm:h-[300px] md:h-[300px] lg:h-[300px] sm:flex-wrap md:flex-wrap lg:flex-wrap">
          <div>
            <h1 className="text-[65px] font-[600] mb-[15px] sm:text-[30px] md:text-[30px] lg:text-[30px]">{t("footer.top.h1")}</h1>
            <p className="w-[55%] text-[20px] text-[#AFB3BB] sm:text-[12px] md:text-[12px] lg:text-[12px]">{t("footer.top.paragraph")}</p>
          </div>
          <div>
            <Button variant="contained" style={{backgroundColor: "white", color: "black", borderRadius: 40,paddingLeft: 30,paddingRight: 30,paddingBottom: 10,paddingTop: 10}}>{t('footer.top.btn')}</Button>
          </div>
        </div>
        <div className="w-[90%] m-auto border-b-2 border-[#606060] pb-[30px] ">
            <div className="flex justify-between items-center sm:flex-wrap md:flex-wrap lg:flex-wrap">
                <div>
                    <img src={Logo_2} alt="" />
                    <h1 className="text-[#7E8492] text-[18px] w-[50%] mt-[15px]">We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</h1>
                </div>
                <div className="flex justify-between items-center w-[80%] text-[#eeeeee] sm:flex-wrap md:flex-wrap lg:flex-wrap sm:gap-3 md:gap-3 lg:gap-3">
                    <div className='my-[20px]'>
                        <h1 className="text-[20px] mb-[10px]">{t("footer.bottom.ul1.h1")}</h1>
                        <ul className="text-[#7E8492]">
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li1")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li2")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li3")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li4")}</li>
                        </ul>
                    </div>
                    <div className='my-[20px]'>
                        <h1 className="text-[20px] mb-[10px]">{t("footer.bottom.ul2.h1")}</h1>
                        <ul className="text-[#7E8492]">
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li1")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li2")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li3")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li4")}</li>
                        </ul>
                    </div>
                    <div className='my-[20px]'>
                        <h1 className="text-[20px] mb-[10px]">{t("footer.bottom.ul3.h1")}</h1>
                        <ul className="text-[#7E8492]">
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li1")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li2")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li3")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li4")}</li>
                        </ul>
                    </div>
                    <div className='my-[20px]'>
                        <h1 className="text-[20px] mb-[10px]">{t("footer.bottom.ul4.h1")}</h1>
                        <ul className="text-[#7E8492]">
                            <li className="mb-[10px]">{t("footer.bottom.ul4.li1")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul4.li2")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul4.li3")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul4.li4")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[90%] m-auto py-[30px]">
          <div className="flex justify-between items-center text-[#eeeeee] sm:flex-wrap md:flex-wrap lg:flex-wrap">
          <div className="flex justify-between items-center w-[50%] sm:flex-wrap md:flex-wrap lg:flex-wrap">
            <div className="flex items-center gap-5 sm:flex-wrap md:flex-wrap lg:flex-wrap">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
            <h1 className="mb-[10px] mt-[10px]">{t("footer.bottom.ul5.h1")}</h1>
            <h1 className="mb-[10px]">{t("footer.bottom.ul5.h2")}</h1>
            <h1 className="mb-[10px]">{t("footer.bottom.ul5.h3")}</h1>
          </div>
          <h1>© Copyright 2023,t All Rights Reserved</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
