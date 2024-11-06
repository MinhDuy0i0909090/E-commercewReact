import React, {useState} from 'react'

const Login = () => {
  const [state, setState] = useState('Đăng ký')
  return (
    <section className="max-padd-container flexCenter flex-col pt-12 bg-primary">
      <div className='w-full max-w-[666px] h-[600px] bg-primary m-auto px-14 py-10 rounded-md'>
        <h3 className='h3'>{state}</h3>
        <div className='flex flex-col gap-4 mt-7'>
          {state === "Đăng ký" ? <input 
            name="username"
            value={FormData.username}
            type="text"
            placeholder="Họ và tên"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          /> : " "}
          <input
            name="email"
            value={FormData.email}
            type="gmail"
            placeholder="Gmail"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
          <input
            name="password"
            value={FormData.password}
            type="password"
            placeholder="Mật khẩu"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
        </div>
        <button
          onClick={() => {
            state === "Đăng nhập" ? Login() : signup();
          }}
          className="btn-dark rounded-xl my-5 !py-3"
        >
          Tiếp tục
        </button>

        {state === "Đăng ký" ? (
          <p className="text-tertiary font-bold">
            Bạn đã có tài khoản chưa?{" "}
            <span
              onClick={() => {
                setState("Đăng nhập");
              }}
              className="text-secondary underline cursor-pointer ml-1"
            >
              {" "}
              Đăng ký
            </span>
          </p>
        ) : (
          <p className="text-tertiary font-bold">
            Tạo tài khoản mới?
            <span
              onClick={() => {
                setState("Đăng ký");
              }}
              className="text-secondary underline cursor-pointer ml-1"
            >
              {" "}
              Nhấn tại đây
            </span>
          </p>
        )}
       {state==="Đăng nhập"?<div className='flexStart mt-6 gap-3'> <input type="checkbox"  /><p>Để tiếp tục, tôi đồng ý các điều khoản sử dụng và chính sách quyền riêng tư</p></div> :" " } 
      </div>
    </section>
  );
}

export default Login