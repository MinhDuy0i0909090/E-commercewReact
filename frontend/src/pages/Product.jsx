import React, { useContext } from "react";
import ProductHd from "../components/ProductHd";
import ProductDescription from "../components/ProductDescription";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }
  return (
    <section className="max-padd-container mb-12">
      <div className="max-padd-container bg-primary rounded-3xl py-24 ">
        <ProductHd product={product} />
        <div className="flex flex-col gap-y-5">
          <ProductDisplay product={product} />
          <ProductDescription product={product} />
          <RelatedProducts />
        </div>
      </div>
    </section>
  );
};

export default Product;
