import SearchBox from "../components/SearchBox"
import ProductList from "../components/ProductList"
import Login from "../components/Login"
import CompareBox from "../components/CompareBox"
import VoiceSearch from "../components/VoiceSearch"
import TryOn from "../components/TryOn"
import Dashboard from "../components/Dashboard"

export default function Home(){
 return(
  <div style={{padding:40}}>
   <h1>GIA AI</h1>
   <Login/>
   <SearchBox/>
   <VoiceSearch/>
   <CompareBox/>
   <TryOn/>
   <Dashboard/>
   <ProductList/>
  </div>
 )
}