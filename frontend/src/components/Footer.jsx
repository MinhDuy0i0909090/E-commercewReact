import React from "react";
import { Link } from "react-router-dom";
import footer from "../assets/footer.jpg";
import FOOTER_LINK from "../assets/footer_links.js";
import FOOTER_CONTACT_INFO from "../assets/footer_contact.js";
import SOCIALS from "../assets/socials.js";
const Footer = () => {
  const currentDateTime = new Date().getFullYear();

  return (
    <footer className="flexCenter pb-24 pt-16 bg-gray-200">
      <div className="max-padd-container w-full flex-col gap-14 p-4  ">
        <div className="flex flex-col mb-2 items-start justify-center gap-[10%] md:flex-row sx:grid grid-cols-2">
          <div className=" ">
            <Link to={"/"} className="mb-10 bold-20">
              <span className="text-secondary text-6xl font-extrabold">MT</span>store
            </Link>
            <div className="mb-8">
              <p className="mt-3">dasdnasfnfnsdbfaskfllasdadmdals</p>
              <img
                src={footer}
                alt="footerimage"
                className="rounded-md mt-6 shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINK.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to={"/"}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}</p>
                    <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link to={"/"} key={link}>
                      <img src={link} alt="" height={22} width={22} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <hr className="w-full"/>
        <div className="mt-4">
          <p className="text-center regular-14 text-gray-30 ">
            {" "}
            {currentDateTime} MTstore | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-2xl ">{title}</h4>
      <p>{children}</p>
    </div>
  );
};

export default Footer;
