import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import bannerkids from "../assets/bannerkids.png";
import { Link } from "react-router-dom";
import Item from "../components/Item";
const Category = (category, banner) => {
  const { all_products } = useContext(ShopContext);

  return (
    <section>
      <div>
        <div>
          <img
            src={bannerkids}
            alt="bannerimage"
            className="block mb-7 mx-auto rounded-3xl "
          />
        </div>
        <div className="max-padd-container bg-primary rounded-3xl !p-9 grid gap-6  xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {all_products.map((item) => {
            if (item.category == "kid") {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
