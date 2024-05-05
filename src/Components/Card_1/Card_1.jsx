export default function Card_1({img,title,desc}) {
    return (
        <div className="text-[#eeeeee] w-[40%]">
            <img src={img} alt="" />
            <h3 className="text-[30px] w-[50%] font-[600] my-[20px]">{title}</h3>
            <p className="text-[#7E8492] w-[70%]">{desc}</p>
        </div> 
    )
}