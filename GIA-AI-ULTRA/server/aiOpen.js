import fetch from "node-fetch"

export async function askAIReal(prompt){

 const res = await fetch("https://api.openai.com/v1/chat/completions",{
  method:"POST",
  headers:{
   "Content-Type":"application/json",
   "Authorization":`Bearer YOUR_OPENAI_API_KEY`
  },
  body:JSON.stringify({
   model:"gpt-4.1-mini",
   messages:[{role:"user",content:prompt}]
  })
 })

 const data = await res.json()

 return data.choices?.[0]?.message?.content || "AI error"
}