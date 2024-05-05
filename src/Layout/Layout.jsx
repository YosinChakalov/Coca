import { Link, Outlet } from "react-router-dom";
import Logo from "/src/assets/Logo (2).svg";
import Logo_2 from "/src/assets/Logo (3).svg";
import { ArrowForward } from "@mui/icons-material";
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
      <header className="w-[1519px] m-auto">
        <nav className="w-[90%] m-auto flex justify-between items-center h-[90px]">
          <img src={Logo} alt="" />
          <div className="flex justify-between w-[43%]">
            <Switcher />
            <select
              name=""
              id=""
              onChange={(e) => TranslateClick(e.target.value)}
              className="mb-[10px]"
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="tj">TJ</option>
            </select>
            <Link className="text-[17px]">{t("header.nav.home")}</Link>
            <Link to={"/About"} className="text-[17px]">
              {t("header.nav.about")}
            </Link>
            <Link to={"/Blog"} className="text-[17px]">
              {t("header.nav.blog")}
            </Link>
            <Link to={"/Pricing"} className="text-[17px]">
              {t("header.nav.pricing")}
            </Link>
            <Link
              to={"/Contacts"}
              className="text-[17px] font-[700] border-b-2 border-black pb-[5px] ml-[30px]"
            >
              {t("header.nav.contacts")} <ArrowForward />
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="w-[1519px] bg-[#1D1E25] m-auto">
        <div className="text-[#eeeeee] w-[90%] m-auto flex justify-between items-center h-[500px]">
          <div>
            <h1 className="text-[65px] font-[600] mb-[15px]">{t("footer.top.h1")}</h1>
            <p className="w-[55%] text-[20px] text-[#AFB3BB]">{t("footer.top.paragraph")}</p>
          </div>
          <div>
            <Button variant="contained" style={{backgroundColor: "white", color: "black", borderRadius: 40,paddingLeft: 30,paddingRight: 30,paddingBottom: 10,paddingTop: 10}}>{t('footer.top.btn')}</Button>
          </div>
        </div>
        <div className="w-[90%] m-auto border-b-2 border-[#606060] pb-[30px] ">
            <div className="flex justify-between items-center">
                <div>
                    <img src={Logo_2} alt="" />
                    <h1 className="text-[#7E8492] text-[18px] w-[50%] mt-[15px]">We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</h1>
                </div>
                <div className="flex justify-between items-center w-[80%] text-[#eeeeee]">
                    <div>
                        <h1 className="text-[20px] mb-[10px]">{t("footer.bottom.ul1.h1")}</h1>
                        <ul className="text-[#7E8492]">
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li1")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li2")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li3")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul1.li4")}</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[20px] mb-[10px]">{t("footer.bottom.ul2.h1")}</h1>
                        <ul className="text-[#7E8492]">
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li1")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li2")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li3")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul2.li4")}</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[20px] mb-[10px]">{t("footer.bottom.ul3.h1")}</h1>
                        <ul className="text-[#7E8492]">
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li1")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li2")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li3")}</li>
                            <li className="mb-[10px]">{t("footer.bottom.ul3.li4")}</li>
                        </ul>
                    </div>
                    <div>
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
          <div className="flex justify-between items-center text-[#eeeeee]">
          <div className="flex justify-between items-center w-[50%]">
            <div className="flex items-center gap-5">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
            <h1>{t("footer.bottom.ul5.h1")}</h1>
            <h1>{t("footer.bottom.ul5.h2")}</h1>
            <h1>{t("footer.bottom.ul5.h3")}</h1>
          </div>
          <h1>© Copyright 2023,t All Rights Reserved</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
