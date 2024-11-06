import { MoveRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <section className="max-padd-container mb-16">
      <div className="px-24  bg-banneroffer text-white bg-center bg-cover w-full xs:py-24 xl:py-36 mt-16 rounded-3xl">
        <h3 className="h3 mb-6">SIÊU KHUYẾN MÃI MÙA HÈ GIẢM 50%</h3>
        <h4 className="medium-32 font-normal">
          THIÊN ĐƯỜNG <span className="text-secondary">LÀM ĐẸP GIÁ RẺ </span>{" "}
          CHO PHÁI ĐẸP
        </h4>
        <Link
          to={""}
          className="flex gap-x-2 pl-4 mt-6 rounded-full text-tertiary bg-white h-12 w-40 flexBetween group"
        >
          XEM THÊM{" "}
          <MoveRight className="text-white bg-secondary border border-solid p-3 flex items-center justify-center border rounded-full w-12 h-12 group-hover:-rotate-45 duration-500 transition-all" />
        </Link>
      </div>
    </section>
  );
}

export default Offer