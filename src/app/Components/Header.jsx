import Image from "next/image";
import LogoPage from '@/../public/LogoPage/LogoPage.png';

export default function Header() {
  return (
    <header className="flex items-center justify-center border-1 sticky top-0 w-[100%] bg-white border-gray-200 p-2 shadow-xl z-50">
       <Image className="h-10 w-10 object-contain"  src={LogoPage}/>
    </header>
  )
}
