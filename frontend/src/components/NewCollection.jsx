import React from "react";
import LASTED from "../assets/latest";
import Item from "./Item";
const NewCollection = () => {
  return (
    <section className="max-padd-container bg-primary rounded-3xl !p-3">
      <div>
        <div>
          <h3 className="px-6 xl:py-12 md:py-12 xs:py-20 ">
            <span className="text-secondary text-5xl font-bold font-ace">
              SẢN PHẨM
            </span>
            <span className="font-ace text-3xl"> TREND</span>
          </h3>
          <div className="grid gap-6 p-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 ">
            {LASTED.map((item) => (
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

export default NewCollection;
