import Branbs from "./SubComponents/Branbs";

export default function SectionBranbs() {
  return (
    <section className="p-10">
        <div className="text-center">
            <h2 className="text-3xl text-blue-600 font-semibold">Choose your favorite brand</h2>
            <p className="text-[16px] text-gray-600">Behind every brand is an engineering that speaks for itself. Find the one that aligns with your lifestyle and your needs.</p>
        </div>
        <div className="flex flex-wrap justify-around gap-5 p-5">
            <Branbs/>
        </div>
    </section>
  )
}
