import React from 'react';

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <h1>Restful Soul</h1>
      </div>
      <div>
        <a href="#/cart">
          🛍️{' '}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>
      </div>
    </header>
  );
}
