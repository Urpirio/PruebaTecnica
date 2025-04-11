import HyundaiTucson from '@/../public/Vehicles/Hyundai/TucsonHyundai.jpg';
import LamboRevuelto from '@/../public/Vehicles/Lambo/RevueltoLAmbo.jpg';
import LandCruiser from '@/../public/Vehicles/Toyota/LandCruiser.jpg';
import P911 from '@/../public/Vehicles/Porshe/Porshe911.jpg';
import BMW_M3 from '@/../public/Vehicles/BMW/BmwM3.jpg';
import Kia_Sportage from '@/../public/Vehicles/Kia/Sportage-min.jpg';
import Ford_Ranger from '@/../public/Vehicles/Ford/Ranger-min.jpg';
import Toyota_Corolla from '@/../public/Vehicles/Toyota/Corolla-min.jpg';
// import Honda_Civic  from '@/../public/Vehicles/Honda/Civic.png';
// import Chevrolet_Camaro from '@/../public/Vehicles/Chevrolet/Camaro.png';
import { FaStar } from "react-icons/fa";


export const DataCard = [
    {
        key: 1,
        id: 'Tucson',
        Marca: 'Hyundai',
        price: 'US 10/day',
        Image: HyundaiTucson,
        Modelo: 'Hyundai Tucson',
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `Es un SUV moderno y elegante, con diseño audaz, eficiencia y confort, keyeal para quienes buscan segurkeyad y rendimiento en cada viaje.`,
    },
    {
        key: 2,
        id: 'Land Cruiser',
        Marca: 'Toyota',
        price: 'US 30/day',
        Image: LandCruiser,
        Modelo: 'Toyota Land Cruiser',
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `Es un 4x4 icónico, robusto y confiable, keyeal para aventuras off-road sin sacrificar confort ni segurkeyad.`,
    },
    {
        key: 3,
        id: 'Revuelto',
        Marca: 'Lamborghini',
        price: 'US 50/day',
        Image: LamboRevuelto,
        Modelo: 'Lamborghini Revuelto',
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `Es un superdeportivo híbrkeyo V12 que combina potencia extrema y diseño futurista.`,
    },
    {
        key: 4,
        id: 'Porsche',
        Marca: 'Porsche',
        price: 'US 30/day',
        Image: P911,
        Modelo: `Porsche 911`,
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `Es un clásico icónico que fusiona elegancia y alto rendimiento, con un diseño único y motor potente, keyeal para los entusiastas de la conducción.`,
    },
    {
        key: 5,
        id: 'M3_1',
        Marca: 'BMW',
        price: 'US 30/day',
        Image: BMW_M3,
        Modelo: 'BMW M3',
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `Es un sedán deportivo que combina lujo y potencia, con motor de alto rendimiento, tracción precisa y diseño agresivo para una conducción emocionante.`,
    },
    {
        key: 6,
        id: 'Sportage1',
        Marca: 'Kia',
        price: 'US 10/day',
        Image: Kia_Sportage,
        Modelo: 'Kia Sportage',
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `Un SUV moderno y elegante, con tecnología avanzada, confort y eficiencia, keyeal para la ciudad y aventuras al aire libre.`,
    },
    {
        key: 7,
        id: 'Ford1',
        Marca: 'Ford',
        price: 'US 30/day',
        Image: Ford_Ranger,
        Modelo: 'Ford Ranger',
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `Robusta y lista para todo, la Ford Ranger combina potencia, capackeyad de carga y tecnología avanzada, keyeal para trabajo y aventuras off-road.`,
    },
    {
        key: 8,
        id: 'Corolla1',
        Marca: 'Toyota',
        price: 'US 20/day',
        Image: Toyota_Corolla,
        Modelo: 'Toyota Corolla',
        IsShow: false,
        Stars: [
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            },
            {
                star: <FaStar/>
            }
        ],
        descripcion: `El Toyota Corolla es un sedán compacto, fiable y económico, keyeal para quienes buscan eficiencia de combustible y un manejo ágil, con un diseño cómodo y práctico.`,
    },
    // {
    //     price: 'US 20/day',
    //     Image: Honda_Civic,
    //     Modelo: 'Honda Civic',
    //     Stars: 5,
    //     descripcion: `Sedán compacto conockeyo por su fiabilkeyad, rendimiento y eficiencia de combustible. Con un diseño moderno, tecnología avanzada y un manejo ágil, es perfecto para quienes buscan un vehículo práctico y de bajo mantenimiento.`,
    // },
    // {
    //     price: 'US 30/day',
    //     Image: Chevrolet_Camaro,
    //     Modelo: 'Chevrolet Camaro',
    //     Stars: 5,
    //     descripcion: `Deportivo de alto rendimiento, con diseño audaz, potencia y estilo icónico, keyeal para quienes buscan velockeyad y emoción al conducir.`,
    // }

];