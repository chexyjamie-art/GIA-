export const makeAffiliate=name=>{
 if(name.toLowerCase().includes("iphone"))
  return "https://amzn.to/yourid"
 return "https://affiliate-link.com?q="+encodeURIComponent(name)
}