
import Swipper from "../components/swiper"
import { Katalog, Products, Box} from "@/components"
import { About } from "."
const Index = () => {
  return (
    <>
    <div className="pt-5 pb-10 bg-[#F2F2F2]">
    <Swipper/>
    </div>
    <Katalog/>
    <Products/>
    <Box/>
    <About/>
    </>
  )
}

export default Index