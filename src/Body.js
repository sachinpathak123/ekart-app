import React, { useState } from 'react'
import ProdCard from './components/ProdCard'
import pdcard from '../src/utils/productcard';
import '../src/Body.css';
function Body() {
  const [list,setlist] = useState(pdcard);
  return (
    <div>
      <div className="products">
        {list.map((item,index) => {
           return (
            <ProdCard key={index} name={item.name} IMG_URL={item.IMG_URL} price={item.price} item={item}/>
           )
        })}
      </div>
    </div>
  )
}

export default Body
