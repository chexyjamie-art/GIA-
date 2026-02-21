import axios from "axios"
import {useState} from "react"

export default()=>{
 const[i,set]=useState("")
 const run=async()=>{
 const r=await axios.post("http://localhost:5000/tryon",
 {user:"me",product:"shirt.png"})
 set(r.data.preview)
 }
 return<>
 <button onClick={run}>Try</button>
 {i&&<img src={i} width="120"/>}
 </>
}