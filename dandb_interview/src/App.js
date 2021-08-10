import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const cItems = [...cartItems];

    const item = cItems.find(item => item._id === product._id);

    item ? item.count++ : cItems.push({ count: 1, ...product });

    setCartItems([...cItems]);
  };

  const removeFromCart = (product) => {
    const cItems = [...cartItems]
    //implement subtracting from count not just completely removing
    setCartItems([...cItems.filter(item => item._id !== product._id)])
  }

  const sortProducts = (event) => {
    const s = event.target.value;
    console.log(s);
    setSort(s);
    setProducts(products.slice().sort((a, b) => (
      // if a is cheaper than b, keep it's position (ret -1)
      // but if b is cheaper, sort b before a (ret 1)
      s === 'lowest' ? (a.price < b.price ? -1 : 1)
        : s === 'highest' ? (a.price > b.price ? -1 : 1)
          : (a._id > b._id ? 1 : -1)
    )));
  };

  const filterProducts = (event) => {
    console.log(event.target.value);
    setSize(event.target.value);
    event.target.value === "" ? setProducts(data.products) :
      setProducts(data.products.filter(product => product.availableSizes.includes(event.target.value)));
  };

  return (
    <div className='grid-container'>
      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts} />
            <Products
              products={products}
              addToCart={addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
          </div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
