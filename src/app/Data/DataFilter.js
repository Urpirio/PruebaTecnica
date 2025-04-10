import { ClickFilter } from "../func/ClickFilter";

export const DataFilter = [
    {
        key: 0,
        Brand: 'Toyota',
        className: 'p-1 hover:bg-gray-300 rounded-md hover:text-white cursor-pointer',
        FuncionClick: (Brand)=>{ClickFilter(Brand)},
    },
    {
        key: 1,
        Brand: 'Hyundai',
        className: 'p-1 hover:bg-gray-300 rounded-md hover:text-white cursor-pointer',
        FuncionClick: (Brand)=>{ClickFilter(Brand)},
    },
    {
        key: 2,
        Brand: 'Kia',
        className: 'p-1 hover:bg-gray-300 rounded-md hover:text-white cursor-pointer',
        FuncionHover: ()=>{
            
        },
        FuncionClick: (Brand)=>{ClickFilter(Brand)},
    },
    {
        key: 3,
        Brand: 'Ford',
        className: 'p-1 hover:bg-gray-300 rounded-md hover:text-white cursor-pointer',
        FuncionHover: ()=>{
            
        },
        FuncionClick: (Brand)=>{ClickFilter(Brand)},
    },
    {
        key: 4,
        Brand: 'BMW',
        className: 'p-1 hover:bg-gray-300 rounded-md hover:text-white cursor-pointer',
        FuncionHover: ()=>{
            
        },
        FuncionClick: (Brand)=>{ClickFilter(Brand)},
    },
    {
        key: 5,
        Brand: 'Porsche',
        className: 'p-1 hover:bg-gray-300 rounded-md hover:text-white cursor-pointer',
        FuncionHover: ()=>{
            
        },
        FuncionClick: (Brand)=>{ClickFilter(Brand)},
    },
];