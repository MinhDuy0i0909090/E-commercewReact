import React from "react";
import POPULAR from "../assets/popular.js";
import Item from "./Item";
const RelatedProducts = () => {
  
  return (
    <section className="max-padd-container bg-primary rounded-3xl !p-3">
      <div>
        <div>
          <h3 className="px-6 xl:py-5 lg:py-5 md:py-7 xs:py-7 ">
            <span className="font-sans text-3xl"> Sản phẩm tương tự</span>
            <hr className="mt-5"></hr>
          </h3>

          <div className="grid gap-6 p-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 ">
            {POPULAR.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
