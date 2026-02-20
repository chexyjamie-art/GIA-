export default({p})=>(
<div style={{border:"1px solid",margin:10,padding:10}}>
<h3>{p.name}</h3>
<p>₹{p.price}</p>
<a href={p.link}>Buy</a>
</div>)