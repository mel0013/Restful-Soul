import React from 'react'

export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <img className='small' src={product.image} alt={product.name} height='200px' width='150px'></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
