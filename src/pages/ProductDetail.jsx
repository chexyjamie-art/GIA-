import { useParams } from "react-router-dom"
import { products } from "../data/products"

export default function ProductDetail(){

  const {id} = useParams()
  const product = products[id]

  if(!product){
    return <h1 className="text-center mt-20 text-2xl">Product Not Found</h1>
  }

  return(
    <div className="min-h-screen bg-[#F7F8FB] p-6">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

        {/* Image */}
        <img
          src={product.img}
          className="rounded-2xl w-full"
        />

        {/* Info */}
        <div>

          <h1 className="text-4xl font-semibold mb-3">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-4">
            ₹{product.price_min} - ₹{product.price_max}
          </p>

          <div className="text-yellow-400 text-xl mb-6">
            {"★".repeat(product.rating)}
          </div>

          {/* AI Score */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-xl mb-6">
            <p className="font-semibold text-lg">
              AI Confidence Score: {product.ai_score || 87}%
            </p>
            <ul className="text-sm mt-2 list-disc ml-5">
              <li>Matches your budget</li>
              <li>High durability</li>
              <li>Trending choice</li>
            </ul>
          </div>

          {/* Buy Button */}
          <a href={product.link} target="_blank">
            <button className="w-full py-4 rounded-full text-white text-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 transition">
              Buy Now →
            </button>
          </a>

        </div>

      </div>

    </div>
  )
}