import React from "react";
import { useNavigate } from "react-router-dom";
import ProductsWeAreProudOf from "@/section/ProductsWeAreProudOf";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate("/categories", { state: { category } });
  };

  return (
    <>
      <div className="flex justify-center lg:justify-normal gap-4 flex-wrap mt-5 lg:mt-6 w-[87%] m-auto">
        <div
          className="relative group w-full sm:w-[45%] md:w-[33%] lg:w-[45%] hover:cursor-pointer h-52 lg:h-[550px]"
          onClick={() => handleCategoryClick("Furniture")}
        >
          <img
            src="https://images.pexels.com/photos/29252364/pexels-photo-29252364/free-photo-of-modern-scandinavian-style-kitchen-interior.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Live Comfortable"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-5xl bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-bg duration-700">
            Live Comfortable
          </span>
        </div>
        <div
          className="relative group w-full sm:w-[45%] md:w-[33%] lg:w-[25%] hover:cursor-pointer h-52 lg:h-[550px]"
          onClick={() => handleCategoryClick("Skin Care")}
        >
          <img
            src="https://images.pexels.com/photos/17656720/pexels-photo-17656720/free-photo-of-close-up-of-cosmetics.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Skincare"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-5xl bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-bg duration-700">
            Skincare
          </span>
        </div>
        <div className="flex gap-4 w-full sm:w-[45%] md:w-[33%] lg:flex-col lg:h-[550px] lg:w-[320px]">
          <div
            className="relative group w-full hover:cursor-pointer h-52 lg:h-[270px]"
            onClick={() => handleCategoryClick("Kitchen")}
          >
            <img
              src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Kitchen"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-5xl bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-bg duration-700">
              Kitchen
            </span>
          </div>
          <div
            className="relative group w-full hover:cursor-pointer h-52 lg:h-[263px]"
            onClick={() => handleCategoryClick("Electronics")}
          >
            <img
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Electronics"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-5xl bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-bg duration-700">
              Electronics
            </span>
          </div>
        </div>
      </div>
      <div>
        <ProductsWeAreProudOf />
      </div>
    </>
  );
};

export default HomePage;
