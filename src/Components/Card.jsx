import React, { useState } from "react";
import items from "./data";
import CardLayout from "./CardLayout";

function Card() {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 ">
        {items.map((item) => {
          return <CardLayout key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default Card;
