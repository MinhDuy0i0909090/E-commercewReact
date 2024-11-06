import React from "react";
import ctgBanner from "../assets/ctg-banner.jpg";
import men from "../assets/men.png";
import women from "../assets/women.png";
import kid from "../assets/kid.png";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const TopRated = () => {
  return (
    <section className="max-padd-container py-14 xl:py-24">
      <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <div>
          <div className="xl:flex ring-1 ring-slate-900/5 rounded-3xl overflow-hidden shadow-sm">
            <img src={ctgBanner} alt="" />
          </div>
        </div>
        <div>
          <div className="ring-1 ring-slate-900/5 rounded-3xl bg-secondaryBlue text-white">
            <img src={men} alt="" />
          </div>
          <div className="px-5">
            <h4 className="medium-18 mt-4">Top Rated Men Collection</h4>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              efficitur tellus non risus molestie, non vulputate elit elementum.
              Ut faucibus pulvinar neque at viverra
            </p>
            <Link to={"/mens"} className="bold-15 text-secondary rounded-full">
              View more{" "}
            </Link>
          </div>
        </div>
        <div>
          <div className="ring-1 ring-slate-900/5 rounded-3xl bg-secondary text-white">
            <img src={kid} alt="" />
          </div>
          <div className="px-5">
            <h4 className="medium-18 mt-4">Top Rated Men Collection</h4>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              efficitur tellus non risus molestie, non vulputate elit elementum.
              Ut faucibus pulvinar neque at viverra
            </p>
            <Link to={"/kids"} className="bold-15 text-secondary rounded-full">
              View more
            </Link>
          </div>
        </div>
        <div>
          <div className="ring-1 ring-slate-900/5 rounded-3xl bg-secondaryGreen text-white">
            <img src={women} alt="" />
          </div>
          <div className="px-5">
            <h4 className="medium-18 mt-4">Top Rated Men Collection</h4>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              efficitur tellus non risus molestie, non vulputate elit elementum.
              Ut faucibus pulvinar neque at viverra
            </p>
            <Link
              to={"/womens"}
              className="bold-15 text-secondary rounded-full"
            >
              View more{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
