import ContainerCards from "./ContainerCards"
import Search from "./Search"
import SectionBranbs from "./SectionBranbs"
export default function Main() {
  return (
    <main className="flex flex-col justify-center items-center">
          <Search/>
          <ContainerCards/>
          <SectionBranbs/>
    </main>
  )
}
