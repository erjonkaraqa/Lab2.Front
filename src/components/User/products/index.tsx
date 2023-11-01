import React from "react";
import ProductItem from "./productItem/ProductItem";
import "./style.css";

function ProductList() {
  return (
    <div className="master-wrapper-content mx-auto p-0">
      <div
        className="item-grid grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 position-relative w-100 p-0"
        style={{ marginLeft: "1px" }}
      >
        <ProductItem
          id={"asdsadasd"}
          category={"category"}
          title={"title"}
          stock={12}
          brand={"apple"}
          ratingsQuantity={"quantity"}
          description={"description"}
          price={144}
          priceDiscount={123}
          summary={"summary"}
          ratingsAverage={4}
          discount={15}
          tfTransport={true}
          warranty={"1 year"}
        />
        <ProductItem
          id={"asdsadasd"}
          category={"category"}
          title={"title"}
          stock={12}
          brand={"apple"}
          ratingsQuantity={"quantity"}
          description={"description"}
          price={144}
          priceDiscount={123}
          summary={"summary"}
          ratingsAverage={4}
          discount={15}
          tfTransport={true}
          warranty={"1 year"}
        />
        <ProductItem
          id={"asdsadasd"}
          category={"category"}
          title={"title"}
          stock={12}
          brand={"apple"}
          ratingsQuantity={"quantity"}
          description={"description"}
          price={144}
          priceDiscount={123}
          summary={"summary"}
          ratingsAverage={4}
          discount={15}
          tfTransport={true}
          warranty={"1 year"}
        />
        <ProductItem
          id={"asdsadasd"}
          category={"category"}
          title={"title"}
          stock={12}
          brand={"apple"}
          ratingsQuantity={"quantity"}
          description={"description"}
          price={144}
          priceDiscount={123}
          summary={"summary"}
          ratingsAverage={4}
          discount={15}
          tfTransport={true}
          warranty={"1 year"}
        />
      </div>
    </div>
  );
}

export default ProductList;
