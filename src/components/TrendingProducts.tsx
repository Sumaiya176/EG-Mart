// "use client";
import Image from "next/image";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const TrendingProducts = async () => {
  const result = await fetch("http://localhost:5000/all-gadgets");
  const products = await result.json();
  //console.log("products", products);

  type FormValues = {
    gadgetName: string;
    category: string;
    email: string;
    flashSale: boolean;
    flashSalePercentage: number;
    price: number;
    image: string;
  };

  return (
    <div>
      fgfhfg
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product: FormValues, index: number) => {
          return (
            <div
              key={index}
              className="w-full h-96 max-w-sm bg-white border border-gray-300 rounded-lg shadow"
            >
              <a href="#">
                <Image
                  className=" rounded-t-lg w-full h-52"
                  src={product?.image}
                  alt="product image"
                  height={270}
                  width={300}
                />

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-black mt-8">
                      {product?.gadgetName}
                    </h5>
                  </a>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-1xl font-bold text-gray-900 ">
                      ${product?.price}
                    </span>
                    {/* <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a> */}
                    <FaPlusCircle className="h-12 w-6" />
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingProducts;
