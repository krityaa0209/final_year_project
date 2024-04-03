import React, { useContext, useRef } from "react";
import Search from "./Search";
import Searchicon from "../assets/search.png";

import { CryptoContext } from "./../context/CryptoContext";

const Filters = () => {
  let { setCurrency, setSortBy, resetFunction } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  return (
    <div
      className="w-full h-12  rounded-lg
    flex items-center justify-between relative 
    " 
    style={{
      boxShadow: "inset 0px 0px 6px 3px rgb(0 0 0 / 0.1)"
    }}
    >
      <Search />
      <div className="flex mr-7">
        <form
          className="relative flex items-center font-nunito
          mr-12
          "
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center
          mr-2 font-bold
          "
          >
            currency:{" "}
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            placeholder="usd"
            className="w-16 rounded bg-gray-800 placeholder:text-gray-100
     pl-2 required outline-0 border border-transparent leading-4
     "
          />
          <button type="submit" className="ml-1 cursor-pointer">
            <img src={Searchicon} alt="submit" className="w-[20px] h-auto" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filters;
