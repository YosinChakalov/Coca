export default function Card_6({img,name,statis,twitter,linkedin,instagram}) {
    return (
        <div className="w-[90%] m-auto">
            <img src={img} alt="" className="w-[100%]" />
            <div className="flex justify-between items-center my-[10px]">
            <h3 className="text-[30px] font-[600] sm:text-[15px] md:text-[20px] lg:text-[25px]">{name}</h3>
            <div className="flex items-center justify-center gap-5">
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
            </div>
            </div>
            <p className="text-[#7E8492] text-[20px] sm:text-[10px] md:text-[15px] lg:text-[20px]">{statis}</p>
        </div>
    )
}