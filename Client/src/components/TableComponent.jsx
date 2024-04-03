import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CryptoContext } from "./../context/CryptoContext";
import Pagination from "./Pagination";
import { StorageContext } from "./../context/StorageContext";

const TableComponent = () => {
  let { cryptoData, currency,error } = useContext(CryptoContext);

  return (
    <>
      <div className="flex flex-col mt-9 border border-black rounded text-black w-[50%]">
        {cryptoData ? (
          <table className="w-full table-auto">
            <thead
              className="capitalize text-base text-black 
            font-medium border-b border-black
            "
            >
              <tr>
                <th className="py-1">asset</th>
                <th className="py-1">name</th>
                <th className="py-1">price</th>
                <th className="py-1">total volume</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="text-center text-base border-b border-black 
            hover:bg-gray-800 last:border-b-0
            "
                  >
                    <td className="py-4 flex items-center uppercase">
                      {/* <SaveBtn data={data} /> */}
                      <img
                        className="w-[1.2rem] h-[1.2rem] mx-1.5"
                        src={data.image}
                        alt={data.name}
                      />
                      <span>
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.symbol}
                        </Link>
                      </span>
                    </td>
                    <td className="py-4">
                      <Link to={`/${data.id}`} className="cursor-pointer">
                        <a target="_blank" href="https://www.google.com">
                          {data.name}
                        </a>
                      </Link>
                    </td>
                    <td className="py-4">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                      }).format(data.current_price)}
                    </td>
                    <td className="py-4">{data.total_volume}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (!error.data && !error.search) ? (
          <div className="w-full min-h-[50vh] flex justify-center items-center">
            <div
              className="w-8 h-8 border-4 border-solid border-cyan rounded-full border-b-gray-200 animate-spin"
              role="status"
            />
            <span className="text-base ml-2">please wait...</span>
          </div>
        ) : error.data || error.search ? (
          <h1 className="min-h-[60vh] text-lg text-red flex items-center justify-center ">
            {error.data
              ? error.data
              : error.search
              ? error.search
              : "Something unexpected happened!"}
          </h1>
        ) : null}
      </div>
    </>
  );
};

export default TableComponent;
