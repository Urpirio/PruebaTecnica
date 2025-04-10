'use client';

import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { BrandOptions } from "./SubComponents/SubSearch";
import { SearchInput } from "../func/Search";


export default function Search() {
    const [DeployFilter, setDeployFiltar] = useState(false)
    
  return (
    <section className="flex justify-center items-center py-5 w-[100%] ">
        <div className={`flex justify-center items-center w-[50%] min-w-80 shadow-xl border-1 border-gray-300 transition-all duration-300 
            ${DeployFilter ? 'rounded-t-xl rounded-br-xl' : 'rounded-xl'}`} id="SearchConatainer">

                <div className="relative">

                    <button onClick={()=>{setDeployFiltar(!DeployFilter)}} 
                        className={`flex items-center justify-around  bg-gray-200 h-12 sm:w-30 w-20 px-1 transition-all duration-300  
                            ${DeployFilter ? 'rounded-tl-xl' : 'rounded-l-xl'} cursor-pointer `}>

                        <span className="text-xl text-gray-600">Filter </span>

                        <i className={`text-2xl text-gray-600 transition-all duration-300 ${DeployFilter ? 'rotate-90' : 'rotate-0'}`}>
                                <IoIosArrowForward/>
                        </i>
                    </button>
                    
                    <div onClick={()=>{setDeployFiltar(!DeployFilter)}} className={`${DeployFilter ? 'flex' : 'hidden'} flex-col p-1  border-1 border-gray-300 absolute bg-white w-[100%] rounded-b-xl z-30`}>
                        {DeployFilter ? <BrandOptions/> : ''}
                    </div>

                </div>

                <div className=" w-[100%] relative">
                    <input onInput={SearchInput} className={`w-[100%] min-w-60 py-2 px-1 outline-none `} type="text" placeholder={'Search'} id="BarSearch" />
                    <div className="hidden flex-col gap-1 p-1  border-1  border-gray-200 shadow-xl absolute bg-white w-[100%] rounded-b-xl z-30 mt-1" id="OptionSearch">
                    </div>
                </div>
                {/* <button className="flex justify-center items-center text-2xl h-12 w-20 rounded-r-xl rounded-br-xl text-white bg-[#1c398e] hover:opacity-75"><IoSearch/></button> */}
        </div>
    </section>
  )
}
