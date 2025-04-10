import Cards from "./SubComponents/Cards";

export default function ContainerCards() {
  return (
    <section className="flex flex-col gap-5 w-[90%] py-5">
        {/* <div className="px-5">
            <h2 className="text-blue-900 text-4xl font-bold italic">The most rented cars</h2>
        </div> */}
        <div className="flex flex-wrap gap-5 justify-around" id="ContainerCards">
            <Cards/>
        </div>
    </section>
  )
}
