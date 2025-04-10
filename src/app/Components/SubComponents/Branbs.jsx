import { DataBrands } from "@/app/Data/DataBrands";
import Image from "next/image";

export default function Branbs() {

    const list = DataBrands.map(DB => {
        return <article className=" w-60 p-5 border-1 border-gray-300 rounded-2xl shadow-xl">
            <Image className="object-contain" src={DB.Img} alt="Marcas" />
        </article>
    })

  return (list)
};
