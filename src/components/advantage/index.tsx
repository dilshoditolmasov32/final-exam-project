import { check, check2, aksiya, taksi } from "@images"
import Image from "next/image"
const Index = () => {
    const boxs=[
        {
            id:1,
            title:"Доставка по всему Узбекистану",
            image:taksi
        },
        {
            id:2,
            title:"Доставка по всему Узбекистану",
            image:check
        },
        {
            id:3,
            title:"Скидки и акции",
            image:aksiya
        },
        {
            id:4,
            title:"Широкий ассортимент товаров",
            image:check2
        },
    ]
  return (
    <>
    <div className="my-20">
        <div className="container">
            <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-9">Примущества</h2>
            <div className="flex gap-6 ">
                {
                    boxs?.map((item)=>(
                        <div key={item.id} className="bg-white rounded-[8px] w-[292px] pl-10 pt-16 pr-[70px]">
                            <Image src={item.image} alt="icon" className="mb-[30px]"/>
                            <p className="mb-20">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Index