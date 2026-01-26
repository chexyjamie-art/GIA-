const aiOverlay = document.getElementById("aiOverlay");
const aiInput = document.getElementById("aiSearch");

if(aiInput){
  aiInput.addEventListener("focus",()=>aiOverlay.classList.add("active"));
}

function closeAI(){
  aiOverlay.classList.remove("active");
}

function sendMsg(){
  const input=document.getElementById("userMsg");
  const chat=document.getElementById("chatBox");
  if(!input.value) return;

  chat.innerHTML+=`<div class="msg user">${input.value}</div>`;
  setTimeout(()=>{
    chat.innerHTML+=`<div class="msg ai">GIA AI is analyzing...</div>`;
  },600);
  input.value="";
}

function goProducts(){
  location.href="products.html";
}

function applyFilter(){
  const c=document.getElementById("color").value;
  const t=document.getElementById("type").value;

  document.querySelectorAll(".product-card").forEach(p=>{
    p.style.display =
      (!c || p.dataset.color===c) &&
      (!t || p.dataset.type===t)
      ? "block":"none";
  });
}

function openProduct(id){
  location.href="product.html?id="+id;
}

let affiliateLink="";

const data={
  "blue-jeans":{
    title:"Blue Jeans",
    img:"https://picsum.photos/300/400?11",
    link:"https://affiliate-link"
  }
};

const params=new URLSearchParams(location.search);
const pid=params.get("id");
if(pid && data[pid]){
  document.getElementById("title").innerText=data[pid].title;
  document.getElementById("image").src=data[pid].img;
  affiliateLink=data[pid].link;
}

function buyNow(link){
  window.open(link,"_blank");
}