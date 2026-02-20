import fs from "fs"
const file="./referrals.json"

export function create(user){
 let db=JSON.parse(fs.readFileSync(file))
 let code=Math.random().toString(36).slice(2,8)
 db[code]=user
 fs.writeFileSync(file,JSON.stringify(db))
 return code
}