import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import WrappingCard from "@/ui/WrappingCard";
import UserInfoHeader from "@/components/User/Customer/DetailView/Header/UserInfoHeader";

const UserInfo = () => {
  return (
    <div className="account-page">
      <WrappingCard padding="12px" marginBtm="20px">
        <UserInfoHeader />
      </WrappingCard>
      <WrappingCard marginBtm="20px" padding="12px">
        Personal info content
      </WrappingCard>
    </div>
  );
};

export default UserInfo;
