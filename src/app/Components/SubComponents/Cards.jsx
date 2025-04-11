import { DataCard } from "@/app/Data/DataCard";
import Image from "next/image";

export default function Cards() {

    const ListCard =  DataCard.map( DC => {
        return(
            <article key={DC.key} className=' flex flex-col border-1 border-gray-200 shadow-xl w-70 rounded-xl z-10' id={DC.id}>
                    <header className=' flex justify-baseline items-baseline-last relative px-2'>
                        <div className="w-[100%]">
                            <Image className='w-[100%] object-cover' src={DC.Image} alt={DC.Modelo} />
                        </div>
                        <div className='flex justify-center items-center absolute border-2 border-white bg-[#EAEAEA] text-[#5B5B5B] font-bold rounded-3xl p-2'>
                            <span className=' text-[16px] rounded-2xl '>{DC.price}</span>
                        </div>
                    </header>
                    <main className="px-2">
                        <div className="">
                            <h2 className='text-2xl font-bold'>{DC.Modelo}</h2>
                            <div className='flex text-amber-400'>
                            {DC.Stars.map(ST => {
                                return(ST.star)
                            })}
                            </div>
                        </div>
                    <p className='font-light flex flex-col p-1 '>{DC.descripcion}</p>
                    </main>
                    <footer className=' px-2 pb-2 flex justify-center items-baseline-last gap-5 flex-grow basis-0 '>
                      <button className=' bg-[#0040FF] text-xl text-white font-semibold border-1 rounded-xl h-10 w-30 hover:opacity-75 transition-all duration-300 cursor-pointer'>Save</button>
                      <button className=' bg-[#03DA2B] text-xl text-white font-semibold border-1 rounded-xl h-10 w-30 hover:opacity-75 transition-all duration-300 cursor-pointer'>Rent</button>
                   </footer>
            </article>
        )
    })


  return (ListCard)
}
