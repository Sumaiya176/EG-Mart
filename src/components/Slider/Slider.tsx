"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// eslint-disable-next-line @next/next/no-async-client-component
const TrendingSlider = async () => {
  const result = await fetch("http://localhost:5000/all-gadgets");
  let products = await result.json();
  products = products.filter(
    (prod: FormValues) => String(prod.flashSale).toLowerCase() === "true"
  );
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const percentageCalculator = (price: number, discount: number): number => {
    const p = price * discount;
    const dp = p / 100;
    return price - dp;
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {products?.map((product: FormValues, index: number) => {
          return (
            <div key={index}>
              <Image
                src={product?.image}
                alt=""
                width={400}
                height={270}
                className="rounded-lg h-64"
              />
              <p className="my-2">{product?.gadgetName}</p>
              <p>
                {product?.flashSalePercentage ? (
                  <>
                    <span className="line-through">${product?.price}</span>{" "}
                    <span className="mx-1"></span> $
                    {percentageCalculator(
                      product?.price,
                      product?.flashSalePercentage
                    )}{" "}
                  </>
                ) : (
                  <span>${product?.price}</span>
                )}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default TrendingSlider;
