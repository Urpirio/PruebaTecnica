import { DataCard } from "../Data/DataCard";

export const ClickFilter = (Brand) => {
    document.getElementById('ContainerCards').style.justifyContent = 'center';
    DataCard.map(DC => {
        if(Brand === DC.Marca){
            document.getElementById(DC.id).style.display = 'flex';
        }else{
            document.getElementById(DC.id).style.display = 'none';
        }
    
    })
};