import fs from "fs"
const file="./prices.json"

export function savePrice(n,p){
 let db=JSON.parse(fs.readFileSync(file))
 if(!db[n])db[n]=[]
 db[n].push(p)
 fs.writeFileSync(file,JSON.stringify(db))
}

export function predict(n){
 let db=JSON.parse(fs.readFileSync(file))
 let a=db[n]||[]
 if(a.length<2)return"no data"
 return a[a.length-1]<a[0]?"dropping":"rising"
}