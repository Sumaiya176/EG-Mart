// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

type FormValues = {
  _id: string;
  gadgetName: string;
  category: string;
  email: string;
  flashSale: boolean;
  flashSalePercentage: number;
  price: number;
  image: string;
};

type TProp = {
  link: string;
  title: string;
  products: FormValues[];
};

const FlashSaleProduct = async ({ products, title, link }: TProp) => {
  const percentageCalculator = (price: number, discount: number): number => {
    const p = price * discount;
    const dp = p / 100;
    return price - dp;
  };

  return (
    <div>
      <div className="flex justify-between my-10">
        <p className="text-3xl font-semibold">{title}</p>
        <Link className="text-white bg-black px-10 py-4 rounded" href={link}>
          See More
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product: FormValues, index: number) => {
          return (
            <div
              key={index}
              className="w-full h-96 max-w-sm bg-white border border-gray-300 rounded-lg shadow"
            >
              <a href={`/product/${product?._id}`} className="relative">
                <Image
                  className=" rounded-t-lg w-full h-52"
                  src={product?.image}
                  alt="product image"
                  height={270}
                  width={300}
                />
                {product?.flashSalePercentage ? (
                  <span className="absolute top-0 left-0 m-2 rounded bg-red-500 px-2 text-center text-sm font-medium text-white">
                    {product?.flashSalePercentage}% OFF
                  </span>
                ) : null}

                {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  SALE
                </div> */}

                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-black mt-8">
                      {product?.gadgetName}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-1xl font-bold text-gray-900 ">
                      {product?.flashSalePercentage ? (
                        <>
                          <span className="line-through">
                            ${product?.price}
                          </span>{" "}
                          <span className="mx-1"></span> $
                          {percentageCalculator(
                            product?.price,
                            product?.flashSalePercentage
                          )}{" "}
                        </>
                      ) : (
                        <span>${product?.price}</span>
                      )}
                    </span>
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

export default FlashSaleProduct;
