import { Heart, Star } from 'lucide-react'

const Product = () => {
  return (
    <div className="flex flex-col gap-3">
          <img src="https://media.e-valy.com/cms/products/images/27eba057-798a-4556-841a-57aaa810bf73" alt="" className="w-full mx-auto"/>
          <h3 className="font-semibold text-xl">Ultraboos Light Running Shoes</h3>
          <p className="italic">Running Shoes</p>
          <div className="flex justify-between">
            <span className="flex items-center gap-3">
              <Star color="yellow"/>
              100 Reviews</span>
            <span className="text-green-500">In Stock</span>
        </div>
        <span className="font-bold text-2xl">$100</span>
        <div className="flex justify-between items-center gap-3">
          <button className="flex-grow bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          + Add to Cart
        </button>
        <button className="py-3 bg-gray-300 px-3">
          <Heart />
        </button>
        </div>
        </div>
  )
}

export default Product
