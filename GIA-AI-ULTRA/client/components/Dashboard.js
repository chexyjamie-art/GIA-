import {useEffect,useState} from "react"
import axios from "axios"

export default()=>{
 const[d,set]=useState({})
 useEffect(()=>{
 axios.get("http://localhost:5000/stats")
 .then(r=>set(r.data))
 },[])
 return<h3>Visitors: {d.count}</h3>
}