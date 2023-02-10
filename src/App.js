import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: './pics/art.jpg',
      name: 'Picasso',
      category: 'art',
      seller: 'Pathak Group of Companies',
      price: 500
    },
    {
      url: './pics/art2.jpg',
      name: 'Felacia',
      category: 'art',
      seller: 'Pathak Group of Companies',
      price: 600
    },
    {
      url: './pics/art3.jpg',
      name: 'Vincent',
      category: 'art',
      seller: 'Pathak Group of Companies',
      price: 800
    },
    {
      url: './pics/art4.jpg',
      name: 'Madhubani',
      category: 'art',
      seller: 'Pathak Group of Companies',
      price: 900
    },
    {
      url: './pics/art5.jpg',
      name: 'Mandla',
      category: 'art',
      seller: 'Pathak Group of Companies',
      price: 1000
    },
    {
      url: './pics/art6.jpg',
      name: 'Old school',
      category: 'art',
      seller: 'Pathak Group of Companies',
      price: 2100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
