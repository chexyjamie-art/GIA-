export function rankProducts(list){
 return list.sort((a,b)=>
 (b.rating*2+b.reviews/100-b.price/10000)-
 (a.rating*2+a.reviews/100-a.price/10000))
}