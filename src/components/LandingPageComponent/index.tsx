import React from "react";
import { API_ENDPOINTS } from "environments";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../common/ButtonComponent";
import "./landing-page-component.scss";

export default function LandingPageComponent() {
  const history = useHistory();

  console.log(API_ENDPOINTS);

  return (
    <div>
      Landing Page Component
      <br />
      <ButtonComponent
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </ButtonComponent>
    </div>
  );
}
