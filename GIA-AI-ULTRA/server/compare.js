export function compareProducts(a,b){
 let A=0,B=0
 if(a.price<b.price)A++; else B++
 if(a.rating>b.rating)A++; else B++
 if(a.reviews>b.reviews)A++; else B++
 return A>B?a:b
}