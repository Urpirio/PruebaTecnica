import { DataFilter } from "@/app/Data/DataFilter";


// export let ClassContainerOptions = '';

export const BrandOptions = () =>{
    const list = DataFilter.map(DF => {
        return(<span onClick={()=>{DF.FuncionClick(DF.Brand)}} key={DF.key} className={DF.className}>{DF.Brand}</span>)
    })
    return(list)
};