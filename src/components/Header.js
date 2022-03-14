import React from 'react'

export default function Header(props) {
  return (
    <header className='row block center'>
      <div>
        <a href='#/'>
          <h1>Restful Soul</h1>
        </a>
      </div>
      <div>
        <a href='#/cart'>Cart</a>
      </div>
    </header>
  )
}
