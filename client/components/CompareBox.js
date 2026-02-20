import axios from "axios"
import {useState} from "react"

export default()=>{
 const[w,set]=useState("")

 const run=async()=>{
 const r=await axios.post("http://localhost:5000/compare",{
  p1:{price:7,rating:4.8,reviews:900,name:"A"},
  p2:{price:6,rating:4.5,reviews:1500,name:"B"}
 })
 set(r.data.name)
 }

 return<>
 <button onClick={run}>Compare</button>
 <p>{w}</p>
 </>
}