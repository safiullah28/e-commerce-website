import React, { useState } from "react";
import "./App.css";
import Header from "./common/header/Header";
import { Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/FlashDeals/Data";
import Cart from "./common/cart/Cart";
import Sdata from "./components/Shop/Sdata";
import Footer from "./common/Footer/Footer";
function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? {
                ...productExit,
                qty: productExit.qty - 1,
              }
            : item
        )
      );
    }
  };
  return (
    <>
      <Header cartItem={cartItem} />

      <Switch>
        <Route path="/" exact>
          <Pages
            productItems={productItems}
            addToCart={addToCart}
            cartItem={cartItem}
            shopItems={shopItems}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItem={cartItem}
            addToCart={addToCart}
            decreaseQty={decreseQty}
          />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
