import express from "express"
import cors from "cors"

import products from "./database/products.js"
import {askAIReal} from "./aiOpen.js"
import {rankProducts} from "./rank.js"
import {compareProducts} from "./compare.js"
import {register,login} from "./auth.js"
import {saveMemory,getMemory} from "./memory.js"
import {makeAffiliate} from "./affiliate.js"
import {tryOn} from "./tryon.js"
import {track,stats} from "./analytics.js"
import {create} from "./referral.js"
import {savePrice,predict} from "./priceTracker.js"
import {notify} from "./notify.js"

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{track();res.send("API running")})

app.get("/products",(req,res)=>{
 const list=products.map(p=>({...p,link:makeAffiliate(p.name)}))
 res.json(rankProducts(list))
})

app.post("/ai",async(req,res)=>{
 res.json({answer:await route(req.body.query)})
})

app.post("/compare",(req,res)=>{
 res.json(compareProducts(req.body.p1,req.body.p2))
})

app.post("/register",(req,res)=>res.json(register(req.body)))
app.post("/login",(req,res)=>res.json(login(req.body)))

app.post("/memory/save",(req,res)=>
 res.json(saveMemory(req.body.user,req.body.data)))

app.get("/memory/:user",(req,res)=>
 res.json(getMemory(req.params.user)))

app.post("/tryon",(req,res)=>
 res.json(tryOn(req.body.user,req.body.product)))

app.get("/stats",(req,res)=>res.json(stats()))

app.get("/ref/:user",(req,res)=>res.json({code:create(req.params.user)}))

app.post("/price",(req,res)=>{
 savePrice(req.body.name,req.body.price)
 res.send("saved")
})

app.get("/predict/:name",(req,res)=>res.json(predict(req.params.name)))

app.get("/notify/:msg",(req,res)=>res.send(notify(req.params.msg)))

app.listen(5000,()=>console.log("SERVER LIVE"))