import React from 'react'
import { MoveRight } from "lucide-react";
const ProductHd = (props) => {
  const {product} = props;
  return (
    <div className='flex items-center flex-wrap gap-x-3 medium-16 my-14 capitalize lg:ml-6'>
      Home <MoveRight /> Shop <MoveRight /> {product.category} <MoveRight /> {product.name}
    </div>
  );
}

export default ProductHd