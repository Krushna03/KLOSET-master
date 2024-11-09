import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/Context/CartContext";
import HomePageComponent from "@/components/HomePageComponent";
import CarouselComp from "@/components/CarouselComp";

const ProductsWeAreProudOf = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();
console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://backend-kloset-1.onrender.com/product");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/categories/product/${productId}`);
  };

  return (
    <>
      <div>
        <div className="w-[87%] m-auto mt-20 lg:mt-28 text-xl font-semibold mb-10 lg:text-2xl">
          Products We Are Proud Of
        </div>
        <div className="w-full">
          <div className="flex w-[87%] flex-wrap gap-5 m-auto">
            {products.map((product) => {
              const mainImage = product.images.find((image) => image.description === "main view");

              return (
                <div
                  key={product._id}
                  className="border-2 border-gray-300 hover:border-gray-600 duration-700 cursor-pointer w-[47%] h-[270px] flex flex-col justify-between lg:h-[350px] lg:w-[23.7%]"
                  onClick={() => handleProductClick(product._id)}
                >
                  <div className="w-full">
                    <img
                      src={mainImage ? mainImage.url : "default-image-url.jpg"}
                      alt={product.productName}
                      className="lg:w-[80%] m-auto object-contain"
                    />
                  </div>
                  <div className="ml-2 mb-2">
                    <h2 className="text-lg mb-1 font-bold">{product.productName}</h2>
                    <p className="lg:text-2xl  font-semibold text-gray-500">₹{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <HomePageComponent
          heading={"Comfortable & Elegante Living"}
          para={
            "RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          }
          imageLink={
            "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          where={"/categories"}
          straight={false}
        />
        <CarouselComp />
        <HomePageComponent
          heading={"Creative harmonious living"}
          para={
            "RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          }
          imageLink={
            "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          where={"/categories"}
          straight={true}
        />
      </div>
    </>
  );
};

export default ProductsWeAreProudOf;
