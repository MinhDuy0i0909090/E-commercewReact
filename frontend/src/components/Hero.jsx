import React from "react";
import { Tag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section className="max-padd-container mx-5">
      <div className="max-padd-container bg-hero bg-center bg-no-repeat bg-cover h-screen w-full rounded-3xl">
        <div className="relative top-32 ml-10 xs:top-52">
          <h2 className="h2 capitalize max-w-[40rem]">
            Discovery Quality
            <span className="text-secondary ml-3">Products Seamless</span>{" "}
            Shopping
          </h2>
          <p className="text-gray-50 regular-16 my-10 max-w-[33rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            efficitur tellus non risus molestie, non vulputate elit elementum.
            Ut faucibus pulvinar neque at viverra. Proin in dui a arcu fermentum
            ultrices. Nunc sed enim vel ipsum fringilla sodales. Aenean lacinia
            nisi quis nunc pharetra laoreet. Curabitur pharetra laoreet libero,
            eget euismod turpis ultrices vitae. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Proin euismod
            nunc non purus fermentum, quis laoreet nibh sagittis. Vivamus sed
            neque odio. Quisque vitae ipsum viverra tortor semper ornare. Nulla
            imperdiet lacus felis. Aliquam pulvinar, diam gravida auctor
            pharetra, nisi purus congue metus, id aliquam magna leo at lorem.
            Aliquam ornare nulla ut tellus venenatis pretium. Pellentesque
            facilisis eu risus ac ultrices. Morbi vulputate orci at mauris
            iaculis, sed fringilla nulla imperdiet. Fusce non vehicula risus.
          </p>
          <div className="max-xs:flex-col flex gap-5">
            <Link to={"/"} className="btn-dark rounded-full flexCenter">
              MUA NGAY 
            </Link>
            <Link
              to={"/"}
              className="text-tertiary bg-white pl-6 rounded-full overflow-hidden flexCenter gap-x-8 medium-16 group "
            >
              ĐẶT TẠI ĐÂY
              <div className="text-xl bg-secondary border border-solid  flex items-center justify-center border rounded-full w-14 h-14 rotate-[20deg] group-hover:rotate-90 duration-500 transition-all">
                <Tag size={24} color="#ffffff" className="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
