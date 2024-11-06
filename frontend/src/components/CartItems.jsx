import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Trash2 } from "lucide-react";
const CartItems = () => {
  const { all_products, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  return (
    <section className="max-padd-container">
      <div className="pt-24 bg-primary rounded-3xl">
        <table className="table-fixed w-full  border-gray-300">
          <thead>
            <tr className="bg-black">
              <th className="p-1 y-1 text-white">Sản phẩm</th>
              <th className="p-1 y-1 text-white">Tên sản phẩm</th>
              <th className="p-1 y-1 text-white">Giá thành</th>
              <th className="p-1 y-1 text-white">Số lượng</th>
              <th className="p-1 y-1 text-white">Số tiền</th>
              <th className="p-1 y-1 text-white">Huỷ</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr key={e.id}>
                    <td className="px-24 py-2 text-center ">
                      <img
                        src={e.image}
                        alt="productImage"
                        height={43}
                        width={43}
                      />
                    </td>
                    <td className="px-10 py-4 text-center line-clamp-3">
                      <div>{e.name}</div>
                    </td>
                    <td className="px-10 py-2 text-center ">{e.new_price}</td>
                    <td className="px-10 py-2 text-center ">
                      {cartItems[e.id]}
                    </td>
                    <td className="px-10 py-2 text-center ">
                      {e.new_price * cartItems[e.id]}
                    </td>
                    <td className="xl:pl-28 xs:pl-12 text-center ">
                      <div className="bold-22 relative  cursor-pointer ">
                        <Trash2 onClick={() => removeFromCart(e.id)} />
                      </div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
        <div className="flex flex-col justify-between gap-y-14 my-16 p-8 md:flex-row rounded-md w-full max-w-[777px]">
          <div>
            <h4>Tóm tắt đơn hàng</h4>
          </div>
          <div>
            <div>
              <h4>Tổng phụ:</h4>
              <h4>{}</h4>
            </div>
            <hr />
            <div>
              <h4>Phí vận chuyển:</h4>
              <h4>Miễn phí</h4>
            </div>
            <hr />
            <div>
              <h4>Tổng:</h4>
              <h4>{}</h4>
            </div>
          </div>
          <div>
            <button>Đặt hàng</button>
          </div>
          <div>
            <h4>Chiết khấu của Shop</h4>
            <div>
              <input type="text" placeholder="Mã giảm giá" />
              <button>Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
