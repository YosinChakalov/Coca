export default function Card_2({img,desc}) {
    return (
        <div className="flex items-center gap-10 mb-[20px]">
            <img src={img} alt="" />
            <p className="text-[25px] font-[500] w-[66%] sm:text-[10px] md:text-[15px] lg:text-[20px] dark:text-[#eeee]">{desc}</p>
        </div>
    )
}