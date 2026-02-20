import {priceAgent} from "./priceAgent.js"
import {dealAgent} from "./dealAgent.js"
import {advisorAgent} from "./advisorAgent.js"

export async function route(q){
 q=q.toLowerCase()
 if(q.includes("price")) return priceAgent(q)
 if(q.includes("deal")) return dealAgent(q)
 return advisorAgent(q)
}