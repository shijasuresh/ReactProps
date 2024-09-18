function Card({desc, img, title, type, ratings, price}){
    return(
        <>
            <div className="border w-[260px] p-2 rounded-xl " onClick={()=>{
                alert(`${title} is ordered!`)
            }}>
                <div className="relative">
                    <img src={img} className="rounded-xl" alt="" />
                    {
                        ratings >= 4.5 ? <div className="absolute bottom-0 m-2 px-3 py-[2px] rounded-full bg-green-50 text-green-800 text-sm">Best Seller</div> : ""
                    }
                    {
                        price >= 250 ? <div className="absolute top-0 right-0 m-2 px-3 py-[2px] rounded-full bg-orange-100 text-orange-800 text-sm">Free Delivery!</div> : ""
                    }
                    
                </div>
                <div className="flex justify-between items-center">
                    <p className="mt-2">{title}</p>
                    <span className={type=='veg' ? 'h-3 w-3 rounded-full bg-green-600' : "h-3 w-3 rounded-full bg-red-600"}></span>
                </div>
                <p className=" text-sm text-neutral-600">{desc}</p>
            </div>
        </>
    )
}
export default Card;