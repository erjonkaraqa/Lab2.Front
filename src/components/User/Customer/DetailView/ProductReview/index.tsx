import WrappingCard from "@/ui/WrappingCard";
import React from "react";

const ProductReview = () => {
  return (
    <div>
      <WrappingCard marginBtm="20px" padding="12px">
        <div className="d-flex justify-content-between orders-header">
          <p className="text-lg">My ratings</p>
        </div>
      </WrappingCard>
      <WrappingCard marginBtm={"20px"} padding="12px">
        Product review content
      </WrappingCard>
    </div>
  );
};

export default ProductReview;
