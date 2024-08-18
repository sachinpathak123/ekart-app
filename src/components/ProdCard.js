import React from 'react';
import '../components/ProdCard.css';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';

function ProdCard(props) {
  const { addItem } = useCart();

  return (
    <div className="prodcard">
      <img src={props.IMG_URL} alt={props.name} className='cardimg' />
      <h2>{props.name}</h2>
      <div className="rate">
        <p>Price: Rs.{props.price}</p>
        <p>Discount: 10% off</p>
      </div>
      <button
        className='btn'
        onClick={() => {
          addItem(props.item);
          toast.success("Item Added successfully.");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProdCard;
