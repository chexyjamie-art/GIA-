import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"
import ProductCard from "../components/ProductCard"
import {products} from "../data/products"

export default function Home(){
  return(
    <div>

      <Navbar/>

      <SearchBar/>

      <div className="text-center mt-10">
        <h1 className="text-4xl font-semibold">
          Curated luxury for you
        </h1>
        <p className="text-gray-500 mt-2">
          Smart choices recommended by AI
        </p>
      </div>

      <Tabs/>

      <div className="flex flex-wrap gap-8 justify-center mt-10 pb-20">
        {products.map(p=>
          <ProductCard p={p}/>
        )}
      </div>

    </div>
  )
}