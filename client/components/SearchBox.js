import {useState} from "react"
import axios from "axios"

export default function(){
 const[q,setQ]=useState("")
 const[r,setR]=useState("")

 const ask=async()=>{
  const res=await axios.post("http://localhost:5000/ai",{query:q})
  setR(res.data.answer)
 }

 return(
 <>
  <input onChange={e=>setQ(e.target.value)}/>
  <button onClick={ask}>Ask AI</button>
  <p>{r}</p>
 </>
 )
}