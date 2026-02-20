import {useState} from "react"
export default()=>{
 const[t,set]=useState("")
 const start=()=>{
 const r=new webkitSpeechRecognition()
 r.onresult=e=>set(e.results[0][0].transcript)
 r.start()
 }
 return<>
 <button onClick={start}>🎤</button>
 <p>{t}</p>
 </>
}