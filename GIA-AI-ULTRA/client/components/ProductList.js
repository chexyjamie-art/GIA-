import {useEffect,useState} from "react"
import axios from "axios"
import Card from "./ProductCard"

export default function(){
 const[p,set]=useState([])
 useEffect(()=>{axios.get("http://localhost:5000/products")
 .then(r=>set(r.data))},[])
 return p.map(x=><Card p={x} key={x.id}/>)
}