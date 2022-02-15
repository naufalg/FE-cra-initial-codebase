import React from "react";

type props = {
  children?: any;
  onClick?: any;
};

export default function ButtonComponent({ children, onClick }: props) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
