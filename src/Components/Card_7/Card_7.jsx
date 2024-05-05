import React from 'react'
import { useTranslation } from 'react-i18next';

const Card_7 = ({img,title,desc,price,what,check,quetion,quetion1,quetion2,quetion3,quetion4,quetion5,quetion6,quetion7,line,check1}) => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  return (
    <div className='border border-solid border-[#EDEDED] h-[801px] rounded-[16px] p-[0_24px] flex flex-col justify-center mt-[76px]'>
      <div className='bg-[#F5F5F5] w-[40px] h-[40px] rounded-[100px] flex items-center justify-center mb-[16px]'>
        <img src={img} alt="" />
      </div>
      <div>
        <div>
        <h4 className='text-[24px] text-[#1D1E25] font-[semibold] mb-[8px]'>{title}</h4>
        <p className='text-[#7E8492] text-[16px] leading-[26px] font-[medium]'>{desc}</p>
        <h1 className='text-[#7E8492] text-[16px] leading-[26px] font-[medium] m-[34px_0]'><span className='text-[#1D1E25] text-[56px] font-[semibold]'>{price}</span>/mo</h1>
        </div>
        <div>
            <h3 className='text-[#1D1E25] text-[16px] font-[bold] mb-[16px]'>{what}</h3>
            <div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p>{quetion}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p>{quetion1}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p>{quetion2}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p>{quetion3}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check1} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p className={`${line}`}>{quetion4}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check1} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p className={`${line}`}>{quetion5}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check1} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p className={`${line}`}>{quetion6}</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[10px]'>
                    <img src={check1} alt="" />
                </div>
                <div className='text-[#1D1E25] text-[16px] font-[medium] mb-[16px]'>
                    <p className={`${line}`}>{quetion7}</p>
                </div>
            </div>
            </div>
        </div>
        <div className='mt-[40px] flex justify-center'>
            <button className='border border-solid border-[#CED1D8] text-[#101010] text-[16px] font-[semibold] h-[56px] w-[160px] rounded-[100px]'>{t("main_3.section_2.card_1.btn")}</button>
        </div>
      </div>
    </div>
  )
}

export default Card_7
