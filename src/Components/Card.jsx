import React, { useState } from "react";
import items from "./data";
import CardLayout from "./CardLayout";

function Card() {
  const [cards, setCards] = useState(items);
  console.log(cards);
  const delItem = (id) => {
    const newList = cards.filter((item) => item.id !== id);
    setCards(newList);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 ">
        {cards.map((item) => {
          return <CardLayout key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default Card;
