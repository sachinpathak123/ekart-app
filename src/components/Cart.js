import React from 'react'
import { useCart } from 'react-use-cart'
import { FaArrowUp,FaArrowDown } from 'react-icons/fa';
import '../components/Cart.css';
const Cart = () => {
    const {
        totalUniqueItems,
        totalItems,
        cartTotal,
        isEmpty,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items,
    } = useCart();
  if(isEmpty) return <h1>Your Cart is Empty</h1>
  return (
    <section>
    <div>
      <div>
        <h3>Cart ({totalUniqueItems}) total Items: ({totalItems})</h3>
        <table className='tble'>
            <tbody>
                {items.map((item,index)=>{
                    return (
                    <tr key={index}>
                        <td>
                            <img src={item.IMG_URL} alt="" className='cardimg1' />
                        </td>
                        <td>{item.name}</td>
                        <td>Rs.{item.price}</td>
                        <td> Quantity: {item.quantity}</td>
                        <td>
                            <button className='btn' style={{margin:"0.3rem",borderRadius:"100%"}} onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}><FaArrowDown /></button>
                            <button className='btn' style={{backgroundColor:"red",margin:"0.3rem",borderRadius:"100%"}} onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}><FaArrowUp /></button>
                            <button className='btn' style={{backgroundColor:"azure",margin:"0.3rem",color:"black"}} onClick={()=> removeItem(item.id)}>Remove Item</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
      <div style={{display:"inline-flex",padding:"1rem",}}>
        <h1 style={{margin:'0.3rem',marginTop:"0.7rem"}}>Total Price: Rs. {cartTotal}</h1>
        <button className='btn' style={{margin:"0.5rem"}} onClick={()=>emptyCart()}>
            Clear Cart
        </button>
        <button className='btn' style={{margin:"0.5rem"}}>Buy Now</button>
      </div>
      <div>
      </div>
    </div>
    </section>
  )
}

export default Cart
