export default function Card_6({img,name,statis,twitter,linkedin,instagram,twitter2,linkedin2,instagram2}) {
    return (
        <div className="w-[90%] m-auto">
            <img src={img} alt="" className="w-[100%]" />
            <div className="flex justify-between items-center my-[10px]">
            <h3 className="text-[30px] font-[600] sm:text-[15px] md:text-[20px] lg:text-[25px] dark:text-[#eeee]">{name}</h3>
            <div className="flex items-center justify-center gap-5 dark:hidden">
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
            </div>
            <div className="items-center justify-center gap-5 hidden dark:flex">
                <img src={twitter2} alt="" />
                <img src={linkedin2} alt="" />
                <img src={instagram2} alt="" />
            </div>
            </div>
            <p className="text-[#7E8492] text-[20px] sm:text-[10px] md:text-[15px] lg:text-[20px]">{statis}</p>
        </div>
    )
}