import { DataCard } from "../Data/DataCard";
import { ClickSearch } from "./ClickSearch";


export let Option_SearchIsDeploy = {
  Boolean: false,
};

export const  SearchInput = () =>{
  let HaveInformation;
  var Resultados = new Array;
  // Option_SearchIsDeploy.Boolean = false;
  document.getElementById('OptionSearch').style.display = 'none';



    let InputSearchValue = document.getElementById('BarSearch').value;
    if(InputSearchValue != ''){
      DataCard.filter((Data)=>{
        document.getElementById('OptionSearch').innerHTML = '';
        const Modelo =  Data.Modelo.toUpperCase().split('');
        const ArrayValueSearh = InputSearchValue.toUpperCase().split('');
  
        for(let x = 0; x < ArrayValueSearh.length; x++){

          const filter1 = ArrayValueSearh[0] === Modelo[0];
          const filter2 = filter1 && ArrayValueSearh[1] === Modelo[1];
          const filter3 = filter2 && ArrayValueSearh[2] === Modelo[2];
          const filter4 = filter3 && ArrayValueSearh[3] === Modelo[3];
          const filter5 = filter4 && ArrayValueSearh[4] === Modelo[4];
          const filter6 = filter5 && ArrayValueSearh[5] === Modelo[5];
          const filter7 = filter6 && ArrayValueSearh[6] === Modelo[6];

          switch (ArrayValueSearh.length){
            case 1:
              if(Data.IsShow === false && filter1 === true ){
                const Obj = new Object;
                Data.IsShow = true;
                Obj.Modelo = Data.Modelo;
                Obj.Id = Data.id;
                Resultados.push(Obj);
                HaveInformation = true;
              }
              
              break;
            case 2:
              if(Data.IsShow === false && filter2 === true ){
                const Obj = new Object;
                Data.IsShow = true;
                Obj.Modelo = Data.Modelo;
                Obj.Id = Data.id;
                Resultados.push(Obj);
                HaveInformation = true;
              }
              break;
            case 3:
              if(Data.IsShow === false && filter3 === true ){
                const Obj = new Object;
                Data.IsShow = true;
                Obj.Modelo = Data.Modelo;
                Obj.Id = Data.id;
                Resultados.push(Obj);
                HaveInformation = true;
             }
             break;
            case 4:
              if(Data.IsShow === false && filter4 === true ){
                const Obj = new Object;
                Data.IsShow = true;
                Obj.Modelo = Data.Modelo;
                Obj.Id = Data.id;
                Resultados.push(Obj);
                HaveInformation = true;
              }
              break;
            case 5:
              if(Data.IsShow === false && filter5 === true ){
                const Obj = new Object;
                Data.IsShow = true;
                Obj.Modelo = Data.Modelo;
                Obj.Id = Data.id;
                Resultados.push(Obj);
                HaveInformation = true;
              }
              break;
            case 6:
              if(Data.IsShow === false && filter6 === true ){
                const Obj = new Object;
                Data.IsShow = true;
                Obj.Modelo = Data.Modelo;
                Obj.Id = Data.id;
                Resultados.push(Obj);
                HaveInformation = true;
              }
              break;
            default:
              if(Data.IsShow === false && filter7 === true ){
                const Obj = new Object;
                Data.IsShow = true;
                Obj.Modelo = Data.Modelo;
                Obj.Id = Data.id;
                Resultados.push(Obj);
                HaveInformation = true;
              }
              break;
          }
        }
  
      })
  
      if(HaveInformation === true){
        document.getElementById('OptionSearch').innerHTML = '';
        HaveInformation = false;

        DataCard.filter(Data => {
          if(Data.IsShow === true){
            Data.IsShow = false;
          }
        });

         Resultados.map(R => {

          // const SearchConatainer = document.getElementById('SearchConatainer');

         const OptionSearch = document.getElementById('OptionSearch');
         OptionSearch.style.display = 'flex';
         const Span =  document.createElement('span');
        //  Option_SearchIsDeploy.Boolean = true;

         Span.addEventListener('mouseenter',()=>{
          Span.style.background = '#EAEAEA';
         });
         Span.addEventListener('mouseleave',()=>{
          Span.style.background = 'white';
         });
         
         Span.addEventListener('click',()=>{
          ClickSearch(R.Id)
         });

         Span.style.transition = '300ms'
         Span.style.borderRadius = '5px';
         Span.style.padding ='5px';
         Span.style.cursor = 'pointer';
         Span.innerText = R.Modelo;
         OptionSearch.append(Span);
        })

      }
    }else{
      document.getElementById('OptionSearch').innerHTML = '';
    }
}

