import React from 'react'
import SideBar from './SideBar';
import ProductList from './productList';

const MainContent = () => {
  return (
    <section className='px-4 py-5'>
        <div className="flex gap-4">
            <SideBar/>
            <ProductList/>
        </div>
    </section>
  )
}

export default MainContent
