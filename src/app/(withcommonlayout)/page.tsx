import TrendingSlider from "../../components/Slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashSaleProduct from "@/components/FlashSaleProduct";
import Categories from "@/components/Categories";

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

const page = async () => {
  const result = await fetch("http://localhost:5000/all-gadgets");
  const products = await result.json();
  const NotFlashProducts = products.filter(
    (prod: FormValues) => String(prod.flashSale).toLowerCase() === "false"
  );
  const flashProducts = products.filter(
    (prod: FormValues) => String(prod.flashSale).toLowerCase() === "true"
  );

  console.log(flashProducts);
  return (
    <div>
      <div className="bg-stone-600 pb-20">
        <div className="mx-6 md:mx-16 text-white">
          <h1 className="text-1xl pt-16 md:text-3xl lg:text-5xl font-semibold text-center">
            Unleash the Power of Technology <br /> Explore Our Latest Gadgets!
          </h1>
          <p className="text-center text-xs md:text-sm md:mx-18 lg:mx-60 my-12">
            Welcome to our digital playground, where innovation meets
            excitement! Explore our vast array of cutting-edge gadgets designed
            to enhance every facet of your life. From sleek smartphones to
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            immersive VR experiences, we're your one-stop destination for all
            things tech. Step into the future with us and unlock a world of
            endless possibilities.
          </p>
          <TrendingSlider />
        </div>
      </div>
      <div className="mx-20 sm:mx-12 md:mx-24 lg:mx-32 my-20">
        <FlashSaleProduct
          link={"/products"}
          title={"FlashSale Products"}
          products={flashProducts.slice(0, 4)}
        />
      </div>
      <div className="mx-20 sm:mx-12 md:mx-24 lg:mx-32 my-20">
        <Categories />
      </div>
      <div className="mx-20 sm:mx-12 md:mx-24 lg:mx-32 my-20">
        <FlashSaleProduct
          link={"/trending-products"}
          title={"Popular Products"}
          products={NotFlashProducts.slice(0, 4)}
        />
      </div>
    </div>
  );
};

export default page;
