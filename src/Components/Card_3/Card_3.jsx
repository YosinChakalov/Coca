export default function Card_3 ({number,desc}) {
    return (
        <div className="border-r-2 text w-[20%]">
            <h1 className="text-[50px] font-[700]">{number}</h1>
            <p className="text-[#7E8492] w-[65%]">{desc}</p>
        </div>
    )
}