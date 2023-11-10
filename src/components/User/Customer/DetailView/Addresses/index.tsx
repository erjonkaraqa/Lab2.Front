import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WrappingCard from "@/ui/WrappingCard";

const Addresses = () => {
  return (
    <>
      <WrappingCard marginBtm="20px" padding="12px">
        <div className="d-flex align-items-center  justify-content-between account-details-container">
          <div className="text-base font-medium">Adresat</div>
          <button
            type="button"
            className="add-address-button text-primary text-xs font-semibold"
          >
            <FontAwesomeIcon icon={faPlus} className="pr-1" />
            Shto një të re
          </button>
        </div>
      </WrappingCard>
      <WrappingCard padding="12px">Address content</WrappingCard>
    </>
  );
};

export default Addresses;
