import {useState} from "react"
import axios from "axios"

export default function(){
 const[e,sE]=useState("")
 const[p,sP]=useState("")
 const[m,sM]=useState("")

 const go=async(path)=>{
  const r=await axios.post("http://localhost:5000/"+path,{email:e,password:p})
  sM(r.data)
 }

 return(
 <>
 <input placeholder="email"onChange={x=>sE(x.target.value)}/>
 <input placeholder="pass"onChange={x=>sP(x.target.value)}/>
 <button onClick={()=>go("login")}>Login</button>
 <button onClick={()=>go("register")}>Register</button>
 <p>{m}</p>
 </>
 )
}