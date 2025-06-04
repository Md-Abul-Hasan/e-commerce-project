import React from 'react'
import SideBar from './SideBar';

const MainContent = () => {
  return (
    <section className='px-4 py-5'>
        <div className="flex gap-4">
            <SideBar/>
            <div className="flex-grow">ProductList</div>
        </div>
    </section>
  )
}

export default MainContent
