export default function Card_3 ({number,desc}) {
    return (
        <div className="border-r-2 text w-[20%] ">
            <h1 className="text-[50px] font-[700] sm:text-[15px] md:text-[20px] lg:text-[30px]">{number}</h1>
            <p className="text-[#7E8492] w-[65%] sm:text-[10px] md:text-[15px] lg:text-[20px] sm:w-[100%] md:w-[100%] lg:w-[65%]">{desc}</p>
        </div>
    )
}