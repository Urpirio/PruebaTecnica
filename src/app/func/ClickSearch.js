import { DataCard } from "../Data/DataCard";


export const ClickSearch = (id) => {
    document.getElementById('ContainerCards').style.justifyContent = 'center';
    document.getElementById('OptionSearch').style.display = 'none';
    DataCard.map( DC =>{
        if(DC.id === id){
            document.getElementById(DC.id).style.display = 'flex';
        }else{
            document.getElementById(DC.id).style.display = 'none';
        }
    })
};