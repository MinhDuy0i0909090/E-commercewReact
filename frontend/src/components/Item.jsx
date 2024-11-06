import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="overflow-hidden p-3 rounded-3xl bg-white ring-1 ring-slate-900/5">
      <div className="relative flexCenter overflow-hidden transition-all duration-100 rounded-3xl">
        <img
          src={image}
          alt="productImage"
          className="w-full block object-cover transition-all duration-1000"
        />
      </div>
      <div className="px-5 pt-3">
        <h4>{name}</h4>
        <p className="my-2">Lremdasdas dasdasdas</p>
        <div className="flexBetween">
          <div className="xl:flex gap-8">
            <div className="bold-16 ">
              <div className="text-secondary bold-16">
                {new_price}.000
                <span className="absolute w-5 h-5 rounded-full medium-14 ">
                  đ
                </span>
              </div>
            </div>
            <div className="bold-16">
              <div className="text-slate-900 bold-16 line-through">
                {old_price}.000
                <span className="absolute w-5 h-5 rounded-full medium-14 ">
                  đ
                </span>
              </div>
            </div>
          </div>
          <Link
            to={`/product/${id}`}
            onlClick={window.scrollTo(0, 0)}
            className="group"
          >
            <MoveRight className="bg-secondary text-white rounded-full ml-3 mb-2 h-12 w-12 p-3 group-hover:translate-x-4 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
