import Image from "next/image";
import React from "react";

const page = async () => {
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
      <p className="my-6 text-3xl text-gray-500 font-semibold">All Products</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="px-16 py-3">
                No.
              </th>
              <th scope="col" className="px-16 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: FormValues, i: number) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b hover:bg-gray-50 text-center"
                >
                  {" "}
                  <td>{i + 1}</td>
                  <td className="p-4 flex justify-center">
                    <Image
                      src={product?.image}
                      className="h-16 w-20"
                      alt="Apple Watch"
                      height={10}
                      width={10}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-400">
                    {product?.gadgetName}
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {product?.category}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-400">
                    {product?.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
