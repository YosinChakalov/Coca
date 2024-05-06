export default function Card_1({img,title,desc}) {
    return (
        <div className="text-[#eeeeee] w-[40%]">
            <img src={img} alt="" />
            <h3 className="text-[30px] w-[50%] font-[600] my-[20px] sm:text-[15px] md:text-[20px] lg:text-[25px] dark:text-[#eeee]">{title}</h3>
            <p className="text-[#7E8492] w-[70%] sm:text-[10px] md:text-[15px] lg:text-[20px]">{desc}</p>
        </div> 
    )
}