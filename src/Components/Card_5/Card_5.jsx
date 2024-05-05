export default function Card_5({img,title,desc}) {
    return (
        <div className="flex justify-between items-center w-[45%] gap-10 mb-[40px]">
            <img src={img} alt="" />
            <div>
            <h3 className="text-[33px] font-[600] w-[90%]">{title}</h3>
            <p className="text-[19px] w-[95%] text-[#7E8492]">{desc}</p>
            </div>
        </div>
    )
}