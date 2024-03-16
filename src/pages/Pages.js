import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import TopCate from "../components/Top/TopCate";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/Shop/Shop";
import Annu from "../components/Announcements/Annu";
import Wrapper from "../Wrapper/Wrapper";

const Pages = ({ productItems, addToCart, cartItem, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
    </>
  );
};

export default Pages;
