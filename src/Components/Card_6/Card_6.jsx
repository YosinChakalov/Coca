export default function Card_6({img,name,statis}) {
    return (
        <div className="w-[30%]">
            <img src={img} alt="" />
            <h3 className="text-[30px] font-[600]">{name}</h3>
            <p className="text-[#7E8492]">{statis}</p>
        </div>
    )
}