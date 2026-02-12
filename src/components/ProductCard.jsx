export default function ProductCard({p}){
  return(
    <div className="bg-white w-[260px] rounded-2xl shadow-md p-4 hover:shadow-xl transition">

      <img src={p.img} className="rounded-xl mb-3"/>

      <h3 className="font-semibold text-lg">{p.name}</h3>

      <p className="text-gray-500 text-sm mb-2">
        ₹{p.price_min} - ₹{p.price_max}
      </p>

      <div className="text-yellow-400 mb-3">
        {"★".repeat(p.rating)}
      </div>

      <button className="w-full py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white">
        Buy Now →
      </button>

    </div>
  )
}