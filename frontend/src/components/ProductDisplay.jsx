import React from "react";
import { useParams } from "react-router-dom";
import { Star, StarHalf } from "lucide-react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const ProductDisplay = (props) => {
  const { product } = props;
  const tagString = product.tag.join(" | ");
  const {addToCart} = useContext(ShopContext);

  return (
    <section className="flex flex-col gap-10 lg:flex-row xs:flexCenter ">
      <div className="gap-x-2 ">
        <div>
          <img
            src={product.image}
            
            className="rounded w-[410px] "
            alt=""
          />
        </div>
      </div>
      <div className="flex-col flex rounded xl:w-7/12 xl:flex-col xs:w-11/12 bg-white px-14 py-10 gap-4 ">
        <h3 className="h3 sm:line-camp-1">{product.name}</h3>
        <div className="flex items-end gap-x-2 medium-20">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
          <p>(220)</p>
        </div>
        <div className="">
          <div className="bold-28 sm:bold-32 ">
            {product.new_price}.000
            <span className="absolute w-5 h-5 rounded-full medium-14 bold-20 sm:bold-20 ">
              đ
            </span>
          </div>
        </div>
        <div className="flex md:flex-col sm:flex-col gap-3">
          <div>
            <h4>Chọn màu:</h4>
            <div className="flex items-end gap-x-5 medium-20">
              <div className="ring-1 ring-slate-900/5 h-7 w-7 flexCenter cursor-pointer  bg-primaryRed"></div>
              <div className="ring-1 ring-slate-900/5 h-7 w-7 flexCenter cursor-pointer  bg-primaryYellow"></div>
              <div className="ring-1 ring-slate-900/5 h-7 w-7 flexCenter cursor-pointer  bg-secondaryPeach"></div>
              <div className="ring-1 ring-slate-900/5 h-7 w-7 flexCenter cursor-pointer  bg-primaryBlue"></div>
              <div className="ring-1 ring-slate-900/5 h-7 w-7 flexCenter cursor-pointer  bg-secondaryGrey"></div>
            </div>
          </div>
          <div>
            <h4>Chọn kích cỡ:</h4>
            <div className="flex items-end gap-x-5 medium-20">
              <div className="text-lg h-7 w-7 flexCenter cursor-pointer font-medium hover:font-semibold hover:text-secondary ">
                XS
              </div>
              <div className="text-lg h-7 w-7 flexCenter cursor-pointer font-medium hover:font-semibold hover:text-secondary">
                S
              </div>
              <div className=" text-lg h-7 w-7 flexCenter cursor-pointer font-medium hover:font-semibold hover:text-secondary ">
                M
              </div>
              <div className=" text-lg h-7 w-7 flexCenter cursor-pointer font-medium hover:font-semibold hover:text-secondary ">
                L
              </div>
              <div className="text-lg h-7 w-7 flexCenter cursor-pointer font-medium hover:font-semibold hover:text-secondary ">
                XL
              </div>
            </div>
          </div>
          <div className="flex gap-5 mb-3 max-w-[550px]">
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="rounded-md btn-dark"
            >
              Giỏ hàng
            </button>
            <button className="btn-dark-outline rounded-md">Mua ngay</button>
          </div>
          <div>
            <p className="mb-2">
              <span className="medium-16 text-tertiary">Category:</span>{" "}
              {product.category} | {product.season} | {product.type}
            </p>
            <p>
              <span className="medium-16 text-tertiary">Tags:</span> {tagString}{" "}
              |
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
