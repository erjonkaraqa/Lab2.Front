import React from "react";
import WrappingCard from "@/ui/WrappingCard";
import { faChain, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const Wishlist = () => {
  return (
    <>
      <WrappingCard marginBtm="20px" padding="12px">
        <div className="d-flex justify-content-between w-100 align-items-center  account-details-container tablet:mb-6">
          <span className="page-title pointer-events-none w-100 text-left account-details-page-title ">
            Wishlist{" "}
          </span>
          <div className="d-flex s  align-items-center cursor-pointer position-relative text-xs whitespace-nowrap mr-2 group hover:cursor-pointer hover:text-primary">
            <span className=" tablet:block group-hover:text-primary">
              SHARE
            </span>
            <input
              size={1}
              id="wishlistUrl"
              style={{ fontSize: "14px" }}
              className="hidden"
              value="http://gjirafa50.com/wishlist/42e684cf-7488-4874-8722-6e08b382fee2"
            />
            <i className="icon-link-url text-sm cursor-pointer ml-2 group-hover:text-primary">
              <FontAwesomeIcon className="" icon={faChain} />
            </i>
            <span
              id="copyToClipBoard"
              className="position-absolute z-0 right-6 top-0 p-2 bg-white rounded opacity-0 shadow-sm text-xs"
            >
              Linku është kopjuar
            </span>
          </div>
          <button
            type="button"
            style={{ border: "none" }}
            className="text-xs d-flex w-25 text-end align-items-center md:whitespace-nowrap focus:outline-none hover:text-primary"
          >
            <span className="hidden tablet:block w-100">
              FSHIJ LISTËN E DËSHIRAVE
            </span>
            <i className="icon-delete-trash text-sm pl-2 hover:text-primary">
              <FontAwesomeIcon icon={faTrash} />
            </i>
          </button>
        </div>
      </WrappingCard>
      <WrappingCard padding="12px">
        <div className="wishlist-content">Wishlist content</div>
      </WrappingCard>
    </>
  );
};

export default Wishlist;
