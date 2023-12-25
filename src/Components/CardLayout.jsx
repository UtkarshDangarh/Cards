import React, { useEffect } from "react";

function CardLayout({ image, ram, name }) {
  return (
    <>
      <div className="w-80 rounded-md border shadow-md bg-gray-300">
        <img
          src={image}
          alt="Laptop"
          className="h-48 w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg text-black font-semibold">{name}</h1>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {ram}
          </span>
          <p className="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => delItem(id)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default CardLayout;
