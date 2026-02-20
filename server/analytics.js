import fs from "fs"
const file="./visits.json"

export function track(){
 let v=JSON.parse(fs.readFileSync(file))
 v.count++
 fs.writeFileSync(file,JSON.stringify(v))
}

export const stats=()=>JSON.parse(fs.readFileSync(file))