export default function Card_5({img,title,desc}) {
    return (
        <div className="flex justify-between items-center w-[45%] gap-10 mb-[40px] sm:w-[100%] md:w-[100%] lg:w-[50%]">
            <img src={img} alt="" className="sm:w-[50%] md:w-[100%] lg:w-[50%]"/>
            <div>
            <h3 className="text-[33px] font-[600] w-[90%] sm:text-[15px] md:text-[20px] lg:text-[25px] sm:w-[100%] md:w-[100%] lg:w-[50%] dark:text-[#eeee]">{title}</h3>
            <p className="text-[19px] w-[95%] text-[#7E8492] sm:text-[11px] md:text-[15px] lg:text-[20px] sm:w-[100%] md:w-[100%] lg:w-[50%] mt-[15px] dark:text-[#eeee]">{desc}</p>
            </div>
        </div>
    )
}