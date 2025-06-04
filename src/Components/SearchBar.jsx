import { ShoppingCart, Search  } from 'lucide-react';

const SearchBar = () => {
  return (
    <section className='px-4 py-5'>
    <div className="container mx-w-7xl mx-auto">
        <div className="flex justify-between gap-4 itmes-center">
            <div className="flex justify-between w-10/12 items-center">
                <input type="text"
            placeholder="Search.." 
            className="w-full bg-gray-200 text-black px-4 py-3 rounded-sm"/>
            <Search/>
            </div>
            <button className="w-2/12 text-right bg-yellow-500 rounded-sm px-4 flex justify-center items-center gap-4">
            <ShoppingCart /> View Cart
            </button>
        </div>
        
    </div>
    </section> 
  )
}

export default SearchBar
