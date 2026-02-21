import fs from "fs"
const file="./memory.json"

export function saveMemory(user,data){
 let db=JSON.parse(fs.readFileSync(file))
 if(!db[user])db[user]={}
 db[user]={...db[user],...data}
 fs.writeFileSync(file,JSON.stringify(db))
 return db[user]
}

export const getMemory=u=>
 JSON.parse(fs.readFileSync(file))[u]||{}