import React from "react";
import { Outlet } from "react-router-dom";
import { CryptoProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main
            className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-black font-nunito
    "
          >
            <div className="w-screen h-screen bg-gray-500 fixed -z-10" />
            <Outlet />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
