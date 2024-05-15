"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  gadgetName: string;
  category: string;
  email: string;
  flashSale: boolean;
  flashSalePercentage: number;
  price: number;
  image: string;
};

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(
      "https://api.imgbb.com/1/upload?key=05fbc4fab725b315451139c5df8d0130",
      {
        method: "post",
        // headers: { "content-type": "multipart/form-data" },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then(async (res) => {
        const img = res.data.display_url;
        data.image = img;
        let result = await fetch("http://localhost:5000/add-gadget", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        result = await result.json();
        console.log(result);
      });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Gadget Name</p>
      <input
        type="text"
        {...register("gadgetName")}
        className="border-2 border-gray-300 h-12 w-2/3"
      />
      <p>Category</p>
      <select
        className="border-2 border-gray-300 h-12 w-2/3"
        {...register("category")}
      >
        <option value="led">LED</option>
        <option value="lcd">LCD</option>
        <option value="amoled">AMOLED</option>
        <option value="oled">OLED</option>
        <option value="qled">QLED</option>
      </select>
      <p>Price</p>
      <input
        className="border-2 border-gray-300 h-12 w-2/3"
        {...register("price")}
        type="number"
      />

      <p>Gadget Image</p>
      <input
        type="file"
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        {...register("image")}
      />

      <p>Flash Sale</p>
      <select
        className="border-2 border-gray-300 h-12 w-2/3"
        {...register("flashSale")}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <br />
      <p>Flash Sale discount percentage</p>
      <input
        className="border-2 border-gray-300 h-12 w-2/3"
        {...register("flashSalePercentage")}
        type="number"
      />
      <br />
      <input
        className="my-6 text-white bg-blue-500 px-4 py-2 rounded"
        type="submit"
      />
    </form>
  );
}
