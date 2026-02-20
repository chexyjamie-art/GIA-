import fs from "fs"
const file="./users.json"

export function register(u){
 const db=JSON.parse(fs.readFileSync(file))
 db.push(u)
 fs.writeFileSync(file,JSON.stringify(db))
 return "registered"
}

export function login(u){
 const db=JSON.parse(fs.readFileSync(file))
 return db.find(x=>x.email==u.email&&x.password==u.password)
 ?"success":"invalid"
}