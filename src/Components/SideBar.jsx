import { ChevronUp, Funnel } from 'lucide-react'


const SideBar = () => {
  return (
    <div className="flex flex-col gap-3 w-4/12">
        <div className="flex items-center gap-2 border-b-2 border-gray-400 border-opacity-45 pb-4">
          <Funnel/><h3 className="text-xl">Filters</h3>
        </div>
        <div className="flex items-center gap-2 border-b-2 border-gray-400 border-opacity-45 pb-4">
            <div className="flex justify-between items-center gap-2">
                <div>Applied Filters</div>
                <div><button href="" className="underline">Clear All</button></div>
            </div>
        </div>
        <div className="flex justify-between">
          <h4>Category</h4>
          <ChevronUp/>
        </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <input id="men's" type="checkbox" value={"men's clothing"}/>
              <label htmlFor="mens-clothing">Men's Clothing</label>
            </div>
            <div className="flex items-center gap-2">
              <input id="men's" type="checkbox" value={"men's clothing"}/>
              <label htmlFor="mens-clothing">Men's Clothing</label>
            </div>
            <div className="flex items-center gap-2">
              <input id="men's" type="checkbox" value={"men's clothing"}/>
              <label htmlFor="mens-clothing">Men's Clothing</label>
            </div>
          </div>
        <div>4</div>
    </div>
  )
}

export default SideBar
