import React, { useState } from "react";

const ProductDescription = (props) => {
  const { product } = props;
  const [activeParaIndex, setActiveParaIndex] = useState(0);
  const paragraphs = [
    <section key="1" className="p-8">
      <div className="text-2xl font-bold mb-6 ">
        {product.name}
        <hr className="w-28 border-t-4 " />
      </div>
      <div>{product.description}</div>
    </section>,
    <section key="2" className="p-8">
      <div>
        <div className="text-2xl font-bold mb-6">
          Hướng dẫn sử dụng
          <hr className="w-28 border-t-4 " />
        </div>
        Giặt máy ở nhiệt độ thấp. Tránh sử dụng chất tẩy mạnh. Phơi khô tự
        nhiên. Tránh phơi dưới ánh nắng trực tiếp.
      </div>
    </section>,
    <div key="2" className="p-8 ">
      <div className="text-2xl font-bold mb-6">
        Bảng Kích Thước
        <hr className="w-28 border-t-4 " />
      </div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
              Size
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
              Ngực (cm)
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
              Eo (cm)
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
              Mông (cm)
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-200 font-semibold">
              Chiều Dài (cm)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-12 py-2 text-center">S</td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              84-88
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              68-72
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              90-94
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              85
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-12 py-2 text-center">M</td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              88-92
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              72-76
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              94-98
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              86
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-12 py-2 text-center">L</td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              92-96
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              76-80
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              98-102
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              87
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-12 py-2 text-center">
              XL
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              96-100
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              80-84
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              102-106
            </td>
            <td className="border border-gray-300 px-12 py-2 text-center">
              88
            </td>
          </tr>
        </tbody>
      </table>
    </div>,
  ];
  return (
    <div className="flex mt-3 gap-8 p-3 xl:flex-row  md:flex-row xs:ml-4  ">
      <div className="flex flex-col lg:ml-9 gap-3 mb-4">
        <button
          className="btn-white font-sans rounded !text-lg !py-[17px] w-[270px] text-left uppercase hover:bg-secondaryGrey hover:text-white hover:text-xl"
          onClick={() => setActiveParaIndex(0)}
        >
          MÔ TẢ SẢN PHẨM
        </button>
        <button
          className="btn-white font-sans rounded !text-lg !py-[17px] w-[270px] text-left uppercase hover:bg-secondaryGrey hover:text-white hover:text-xl"
          onClick={() => setActiveParaIndex(1)}
        >
          Hướng dẫn sản phẩm
        </button>
        <button
          className="btn-white font-sans rounded !text-lg !py-[17px] w-[270px] text-left uppercase hover:bg-secondaryGrey hover:text-white hover:text-xl"
          onClick={() => setActiveParaIndex(2)}
        >
          mô tả kích thước
        </button>
      </div>
      <div className="bg-white rounded  xs:w-[29rem] lg:w-[72%] ">
        <div className="p-4">
          <p>{paragraphs[activeParaIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
