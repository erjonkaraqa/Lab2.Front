import React, { useState } from "react";
import "./costumer.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/User/Customer/Sidebar";
import UserInfo from "../../components/User/Customer/DetailView/UserInfo";
import Addresses from "../../components/User/Customer/DetailView/Addresses";
import Orders from "../../components/User/Customer/DetailView/Orders";
import WrapperWIthSpacing from "../../ui/WrapperWIthSpacing";
import WrappingCard from "../../ui/WrappingCard";
import OrderDetails from "../../components/User/Customer/DetailView/Orders/OrderDetails";
import ReturnRequests from "@/components/User/Customer/DetailView/ReturnRequests";
import ReturnedProducts from "@/components/User/Customer/DetailView/ReturnedProducts";
import Wishlist from "@/components/User/Customer/DetailView/Wishlist";
import ProductReview from "@/components/User/Customer/DetailView/ProductReview";

const Costumer = () => {
  const { type } = useParams();
  console.log("type", type);
  const [activeLink, setActiveLink] = useState<string>(type ?? "");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  let contentComponent;

  switch (type) {
    case "info":
      contentComponent = <UserInfo />;
      break;
    case "addresses":
      contentComponent = <Addresses />;
      break;
    case "orders":
      contentComponent = <Orders />;
      break;
    case "orderdetails":
      contentComponent = <OrderDetails />;
      break;
    case "wishlist":
      contentComponent = <Wishlist />;
      break;
    case "return-requests":
      contentComponent = <ReturnRequests />;
      break;
    case "productreviews":
      contentComponent = <ProductReview />;
      break;
    case "returned-products":
      contentComponent = <ReturnedProducts />;
      break;
    default:
      contentComponent = <div>Invalid type</div>;
  }
  return (
    <WrapperWIthSpacing>
      <div className="costumer-sidebar__container shadow-md">
        <WrappingCard padding="12px">
          <Sidebar onLinkClick={handleLinkClick} activeLink={activeLink} />
        </WrappingCard>
      </div>
      <div className="costumer-main ">
        {contentComponent.type.name === "Orders" ||
        contentComponent.type.name === "Addresses" ||
        contentComponent.type.name === "OrderDetails"
          ? contentComponent
          : contentComponent}
      </div>
    </WrapperWIthSpacing>
  );
};

export default Costumer;
